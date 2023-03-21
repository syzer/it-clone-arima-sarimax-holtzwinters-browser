import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as holtWinters from "holtwinters";
import { useEffect, useState } from "react";

import * as d3 from "d3";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { values_1, values_2, values_3, values_4 } from "@/pages/data";
import { ahead, cutoff, till } from "@/components/constant";

const ARIMAPromise = require("arima/async");

const inter = Inter({ subsets: ["latin"] });

const Myholtwinterschart = ({ values_timeseries, name }) => {
  const values = values_timeseries.map((e) => e.value);
  const [options, setOptions] = useState({
    chart: {
      type: "line",
    },
    title: {
      text: `Holt winters${name}`,
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "My Series",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const parseTime = (timestamp) => {
      if (timestamp.slice(-1) === "Z") {
        return d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(timestamp) || d3.timeParse("%Y-%m-%dT%H:%M:%SZ")(timestamp);
      } else {
        return null;
      }
    };

    const timestamps = values_timeseries.map((d) => parseTime(d.timestamp));

    const sortedData = values_timeseries.slice().sort((a, b) => parseTime(a.timestamp) - parseTime(b.timestamp));
    const timeDiff = timestamps[timestamps.length - 1] - timestamps[0];
    const numIntervals = values_timeseries.length;
    // const interval = timeDiff / numIntervals;
    // const evenlySpacedTimestamps = d3.range(numIntervals).map((i) => new Date(timestamps[0].getTime() + i * interval));

    const startTime = timestamps[0].getTime();
    const endTime = timestamps[timestamps.length - 1].getTime();
    const interval = (endTime - startTime) / (numIntervals - 1);

    const evenlySpacedTimestamps = d3.range(numIntervals).map((i) => new Date(startTime + i * interval));

    const evenlySpacedData = evenlySpacedTimestamps.map((timestamp) => {
      const closestIdx = d3.bisectLeft(timestamps, timestamp);
      if (closestIdx === 0) {
        return { value: sortedData[0].value, timestamp: timestamp.toISOString() };
      }
      if (closestIdx === timestamps.length) {
        return { value: sortedData[timestamps.length - 1].value, timestamp: timestamp.toISOString() };
      }

      const before = sortedData[closestIdx - 1];
      const after = sortedData[closestIdx];

      const t = (timestamp.getTime() - parseTime(before.timestamp).getTime()) / (parseTime(after.timestamp).getTime() - parseTime(before.timestamp).getTime());

      const value = before.value + t * (after.value - before.value);
      return { value, timestamp: timestamp.toISOString() };
    });
    const prediction = holtWinters(values.slice(0, cutoff), ahead);

    const evenlySpacedValues = evenlySpacedData.map((e) => e.value);
    setOptions({
      ...options,
      series: [
        { data: [...values], name: "actual" },
        { data: [...values.slice(0, cutoff), ...prediction.augumentedDataset.slice(cutoff, till)], name: "predicted" },
        { data: [...evenlySpacedValues], name: "evenly spaced", color: "green" },
      ],
    });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const Myarimachart = ({ values_timeseries, name }) => {
  const option = {
    chart: {
      type: "line",
    },
    title: {
      text: `ARIMA${name}`,
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "My Series",
        data: [],
      },
    ],
  };

  const [options, setOption] = useState(option);

  useEffect(() => {
    const values = values_timeseries.map((e) => e.value);

    // ARIMAPromise.then((ARIMA) => {
    //   const arima = new ARIMA({ auto: true, optimizer: 1 }).train(values.slice(0, cutoff));
    //   const [pred, errors] = arima.predict(ahead);
    //   setOption({
    //     ...options,
    //     series: [
    //       { data: [...values.slice(0, cutoff), ...pred], name: "predicted", color: "black" },
    //       { data: [...values], name: "actual", color: "red" },
    //       // { data: [...evenlySpacedData], name: "evenly spaced", color: "green" },
    //     ],
    //   });
    // });
  }, []);

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
