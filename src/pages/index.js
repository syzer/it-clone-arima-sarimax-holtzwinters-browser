import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as holtWinters from "holtwinters";
import { use, useEffect, useState } from "react";

import * as d3 from "d3";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { values_1, values_2, values_3, values_4 } from "@/pages/data";
import { ahead, cutoff, till } from "@/components/constant";

const ARIMAPromise = require("arima/async");

const inter = Inter({ subsets: ["latin"] });

const parseTime = (timestamp) => {
  if (timestamp.slice(-1) === "Z") {
    return d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(timestamp) || d3.timeParse("%Y-%m-%dT%H:%M:%SZ")(timestamp);
  } else {
    return null;
  }
};

function createEvenlySpacedTimeseries(timeseries) {
  const timestamps = timeseries.map((d) => parseTime(d.timestamp));

  const numIntervals = timeseries.length;

  const startTime = timestamps[0].getTime();
  const endTime = timestamps[timestamps.length - 1].getTime();
  const interval = (endTime - startTime) / (numIntervals - 1);

  const evenlySpacedTimestamps = d3.range(numIntervals).map((i) => new Date(startTime + i * interval));

  const evenlySpacedValues = evenlySpacedTimestamps.map((timestamp) => {
    const closestIdx = d3.bisectLeft(timestamps, timestamp);
    if (closestIdx === 0) {
      return timeseries[0].value;
    }
    if (closestIdx === timestamps.length) {
      return timeseries[timestamps.length - 1].value;
    }

    const before = timeseries[closestIdx - 1];
    const after = timeseries[closestIdx];

    const t = (timestamp.getTime() - parseTime(before.timestamp).getTime()) / (parseTime(after.timestamp).getTime() - parseTime(before.timestamp).getTime());

    const value = before.value + t * (after.value - before.value);
    return value;
  });

  return [evenlySpacedTimestamps.map((timestamp, index) => [timestamp.getTime(), evenlySpacedValues[index]]), interval];
}

const Myholtwinterschart = ({ values_timeseries, name }) => {
  const rawValues = values_timeseries.map((e) => e.value);
  const rawTimestamps = values_timeseries.map((e) => e.timestamp);
  const rawData = rawTimestamps.map((timestamp, index) => [parseTime(timestamp).getTime(), rawValues[index]]);

  const [options, setOptions] = useState({
    chart: {
      type: "line",
    },
    title: {
      text: `Holt winters ${name}`,
    },
    series: [
      {
        name: "My Series",
        data: [],
      },
    ],
  });

  const [predictedData, setPredictedData] = useState([]);

  const [evenlySpacedData, setEvenlySpacedData] = useState([]);

  useEffect(() => {
    if (values_timeseries.length > 1) {
      const [evenlySpacedTimeseries, intervalLength] = createEvenlySpacedTimeseries(values_timeseries.slice(0, cutoff));

      setEvenlySpacedData([evenlySpacedTimeseries, intervalLength]);
    }
  }, []);

  useEffect(() => {
    if (evenlySpacedData.length === 0) {
      return;
    }
    const pred = holtWinters(
      evenlySpacedData[0].map((e) => e[1]),
      ahead
    );

    const futureTimestamps = d3.range(ahead).map((d, i) => evenlySpacedData[0][evenlySpacedData[0].length - 1][0] + evenlySpacedData[1] + i * evenlySpacedData[1]);

    const predic = futureTimestamps.map((timestamp, index) => [timestamp, pred.augumentedDataset.slice(cutoff)[index]]);

    setPredictedData(predic);
  }, [evenlySpacedData]);

  useEffect(() => {
    if (evenlySpacedData.length === 0) {
      return;
    }

    setOptions({
      ...options,
      xAxis: {
        type: "datetime",
        title: {
          text: "Time",
        },
      },
      yAxis: {
        title: {
          text: "Value",
        },
      },
      series: [
        { data: [...rawData], name: "Raw data", color: "green" },
        {
          data: [...evenlySpacedData[0]],
          name: "Evenly spaced Data",
          color: "pink",
        },
        {
          data: [...predictedData],
          name: "prediction",
          color: "red",
        },
      ],
    });
  }, [predictedData, evenlySpacedData]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const Myarimachart = ({ values_timeseries, name }) => {
  const rawValues = values_timeseries.map((e) => e.value);
  const rawTimestamps = values_timeseries.map((e) => e.timestamp);
  const rawData = rawTimestamps.map((timestamp, index) => [parseTime(timestamp).getTime(), rawValues[index]]);

  const [options, setOptions] = useState({
    chart: {
      type: "line",
    },
    title: {
      text: `Arima ${name}`,
    },
    series: [
      {
        name: "My Series",
        data: [],
      },
    ],
  });

  const [predictedData, setPredictedData] = useState([]);

  const [evenlySpacedData, setEvenlySpacedData] = useState([]);

  useEffect(() => {
    if (values_timeseries.length > 1) {
      const [evenlySpacedTimeseries, intervalLength] = createEvenlySpacedTimeseries(values_timeseries.slice(0, cutoff));
      setEvenlySpacedData([evenlySpacedTimeseries, intervalLength]);
    }
  }, []);

  useEffect(() => {
    if (evenlySpacedData.length === 0) {
      return;
    }
    ARIMAPromise.then((ARIMA) => {
      const evenlySpacedValues = evenlySpacedData[0].slice(0, cutoff).map((e) => e[1]);

      const arima = new ARIMA({ auto: true, optimizer: 1, verbose: false }).train(evenlySpacedValues);
      const [pred, errors] = arima.predict(ahead);

      // get average time between timestamps x and then create an array of timestamps starting from
      // last timestamp + x until last timestamp + x * num timestamps

      const futureTimestamps = d3.range(ahead).map((d, i) => evenlySpacedData[0][evenlySpacedData[0].length - 1][0] + evenlySpacedData[1] + i * evenlySpacedData[1]);

      const predic = futureTimestamps.map((timestamp, index) => [timestamp, pred[index]]);

      setPredictedData(predic);
    });
  }, [evenlySpacedData]);

  useEffect(() => {
    if (evenlySpacedData.length === 0) {
      return;
    }

    setOptions({
      ...options,
      xAxis: {
        type: "datetime",
        title: {
          text: "Time",
        },
      },
      yAxis: {
        title: {
          text: "Value",
        },
      },
      series: [
        { data: [...rawData], name: "Raw data", color: "green" },
        {
          data: [...evenlySpacedData[0]],
          name: "Evenly spaced Data",
          color: "pink",
        },
        {
          data: [...predictedData],
          name: "prediction",
          color: "red",
        },
      ],
    });
  }, [predictedData, evenlySpacedData]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Myholtwinterschart values_timeseries={values_1} name="one" />
      <Myarimachart values_timeseries={values_1} name="one" />
      <Myholtwinterschart values_timeseries={values_2} name="two" />
      <Myarimachart values_timeseries={values_2} name="two" />
      <Myholtwinterschart values_timeseries={values_3} name="three" />
      <Myarimachart values_timeseries={values_3} name="three" />
      <Myholtwinterschart values_timeseries={values_4} name="four" />
      <Myarimachart values_timeseries={values_4} name="four" />
      {/* <Myholtwinterschart values_timeseries={values_5_timeseries} />
      <Myarimachart values_timeseries={values_5_timeseries} /> */}
    </>
  );
}
