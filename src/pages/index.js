import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as holtWinters from "holtwinters";
import { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { values_1_timeseries, values_2_timeseries, values_3_timeseries, values_4_timeseries } from '@/pages/data'
import { ahead, cutoff, till } from '@/components/constant'

const ARIMAPromise = require("arima/async");

const inter = Inter({ subsets: ["latin"] });


const Myholtwinterschart = ({ values_timeseries }) => {
  const [options, setOptions] = useState({
    chart: {
      type: "line",
    },
    title: {
      text: "Holt winters",
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
    const prediction = holtWinters(values_timeseries.slice(0, cutoff), ahead);
    setOptions({
      ...options,
      series: [
        { data: [...values_timeseries], name: "actual" },
        { data: [...values_timeseries.slice(0, cutoff), ...prediction.augumentedDataset.slice(cutoff, till)], name: "predicted" },
      ],
    });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const Myarimachart = ({ values_timeseries }) => {
  const option = {
    chart: {
      type: "line",
    },
    title: {
      text: "ARIMA",
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
    ARIMAPromise.then((ARIMA) => {
      // const arima = new ARIMA({ p: 30, i: 1, q: 2, verbose: false }).train(values_timeseries);
      const arima = new ARIMA({ auto: true, optimizer: 1 }).train(values_timeseries.slice(0, cutoff));
      const [pred, errors] = arima.predict(ahead);
      setOption({
        ...options,
        series: [
          { data: [...values_timeseries], name: "actual" },
          { data: [...values_timeseries.slice(0, cutoff), ...pred], name: "predicted" },
        ],
      });
    });
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
      <Myholtwinterschart values_timeseries={values_1_timeseries} />
      <Myarimachart values_timeseries={values_1_timeseries} />
      <Myholtwinterschart values_timeseries={values_2_timeseries} />
      <Myarimachart values_timeseries={values_2_timeseries} />
      <Myholtwinterschart values_timeseries={values_3_timeseries} />
      <Myarimachart values_timeseries={values_3_timeseries} />
      <Myholtwinterschart values_timeseries={values_4_timeseries} />
      <Myarimachart values_timeseries={values_4_timeseries} />
      {/* <Myholtwinterschart values_timeseries={values_5_timeseries} />
      <Myarimachart values_timeseries={values_5_timeseries} /> */}
    </>
  );
}
