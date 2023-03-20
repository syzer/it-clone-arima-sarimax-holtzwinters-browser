import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as holtWinters from "holtwinters";
import { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ARIMAPromise = require("arima/async");

const inter = Inter({ subsets: ["latin"] });

var getAugumentedDataset = holtWinters;

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
    const prediction = getAugumentedDataset(values_timeseries.slice(0, 400), 100);
    setOptions({
      ...options,
      series: [
        { data: [...values_timeseries], name: "actual" },
        { data: [...values_timeseries.slice(0, 400), ...prediction.augumentedDataset.slice(400, 500)], name: "predicted" },
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
      const arima = new ARIMA({ auto: true, optimizer: 7 }).train(values_timeseries.slice(0, 400));
      const [pred, errors] = arima.predict(100);
      setOption({
        ...options,
        series: [
          { data: [...values_timeseries], name: "actual" },
          { data: [...values_timeseries.slice(0, 400), ...pred], name: "predicted" },
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
  const values_1 = [
    {
      timestamp: "2021-10-28T08:30:00Z",
      value: 158.99699999999999,
    },
    {
      timestamp: "2021-10-28T08:35:00Z",
      value: 146.99599999999998,
    },
    {
      timestamp: "2021-10-28T08:40:00Z",
      value: 130.99499999999998,
    },
    {
      timestamp: "2021-10-28T08:45:00Z",
      value: 129.99399999999997,
    },
    {
      timestamp: "2021-10-28T08:50:00Z",
      value: 125.99299999999997,
    },
    {
      timestamp: "2021-10-28T08:55:00Z",
      value: 113.99199999999996,
    },
    {
      timestamp: "2021-10-28T09:00:00Z",
      value: 100.99099999999996,
    },
    {
      timestamp: "2021-10-28T09:05:00Z",
      value: 100.98999999999995,
    },
    {
      timestamp: "2021-10-28T09:10:00Z",
      value: 92.98899999999995,
    },
    {
      timestamp: "2021-10-28T09:15:00Z",
      value: 82.98799999999994,
    },
    {
      timestamp: "2021-10-28T09:20:00Z",
      value: 69.98699999999994,
    },
    {
      timestamp: "2021-10-28T09:25:00Z",
      value: 68.98599999999993,
    },
    {
      timestamp: "2021-10-28T09:30:00Z",
      value: 63.984999999999935,
    },
    {
      timestamp: "2021-10-28T09:35:00Z",
      value: 51.98399999999994,
    },
    {
      timestamp: "2021-10-28T09:40:00Z",
      value: 37.98299999999994,
    },
    {
      timestamp: "2021-10-28T09:45:00Z",
      value: 19.98199999999994,
    },
    {
      timestamp: "2021-10-28T09:50:00Z",
      value: 7.9809999999999395,
    },
    {
      timestamp: "2021-10-28T09:55:00Z",
      value: -11.020000000000062,
    },
    {
      timestamp: "2021-10-28T10:00:00Z",
      value: 199,
    },
    {
      timestamp: "2021-10-28T10:05:00Z",
      value: 186.999,
    },
    {
      timestamp: "2021-10-28T10:10:00Z",
      value: 170.998,
    },
    {
      timestamp: "2021-10-28T10:15:00Z",
      value: 166.99699999999999,
    },
    {
      timestamp: "2021-10-28T10:20:00Z",
      value: 149.99599999999998,
    },
    {
      timestamp: "2021-10-28T10:25:00Z",
      value: 140.99499999999998,
    },
    {
      timestamp: "2021-10-28T10:30:00Z",
      value: 128.99399999999997,
    },
    {
      timestamp: "2021-10-28T10:35:00Z",
      value: 110.99299999999997,
    },
    {
      timestamp: "2021-10-28T10:40:00Z",
      value: 95.99199999999996,
    },
    {
      timestamp: "2021-10-28T10:45:00Z",
      value: 93.99099999999996,
    },
    {
      timestamp: "2021-10-28T10:50:00Z",
      value: 76.98999999999995,
    },
    {
      timestamp: "2021-10-28T10:55:00Z",
      value: 62.988999999999955,
    },
    {
      timestamp: "2021-10-28T11:00:00Z",
      value: 58.98799999999996,
    },
    {
      timestamp: "2021-10-28T11:05:00Z",
      value: 55.98699999999996,
    },
    {
      timestamp: "2021-10-28T11:10:00Z",
      value: 36.98599999999996,
    },
    {
      timestamp: "2021-10-28T11:15:00Z",
      value: 35.984999999999964,
    },
    {
      timestamp: "2021-10-28T11:20:00Z",
      value: 33.983999999999966,
    },
    {
      timestamp: "2021-10-28T11:25:00Z",
      value: 21.98299999999997,
    },
    {
      timestamp: "2021-10-28T11:30:00Z",
      value: 12.98199999999997,
    },
    {
      timestamp: "2021-10-28T11:35:00Z",
      value: 112,
    },
    {
      timestamp: "2021-10-28T11:40:00Z",
      value: 107.999,
    },
    {
      timestamp: "2021-10-28T11:45:00Z",
      value: 106.99799999999999,
    },
    {
      timestamp: "2021-10-28T11:50:00Z",
      value: 105.99699999999999,
    },
    {
      timestamp: "2021-10-28T11:55:00Z",
      value: 100.99599999999998,
    },
    {
      timestamp: "2021-10-28T12:00:00Z",
      value: 84.99499999999998,
    },
    {
      timestamp: "2021-10-28T12:05:00Z",
      value: 80.99399999999997,
    },
    {
      timestamp: "2021-10-28T12:10:00Z",
      value: 74.99299999999997,
    },
    {
      timestamp: "2021-10-28T12:15:00Z",
      value: 71.99199999999996,
    },
    {
      timestamp: "2021-10-28T12:20:00Z",
      value: 61.990999999999964,
    },
    {
      timestamp: "2021-10-28T12:25:00Z",
      value: 46.98999999999997,
    },
    {
      timestamp: "2021-10-28T12:30:00Z",
      value: 29.988999999999965,
    },
    {
      timestamp: "2021-10-28T12:35:00Z",
      value: 17.987999999999964,
    },
    {
      timestamp: "2021-10-28T12:40:00Z",
      value: 10.986999999999963,
    },
    {
      timestamp: "2021-10-28T12:45:00Z",
      value: -0.01400000000003665,
    },
    {
      timestamp: "2021-10-28T12:50:00Z",
      value: -3.0150000000000365,
    },
    {
      timestamp: "2021-10-28T12:55:00Z",
      value: 165,
    },
    {
      timestamp: "2021-10-28T13:00:00Z",
      value: 164.999,
    },
    {
      timestamp: "2021-10-28T13:05:00Z",
      value: 153.998,
    },
    {
      timestamp: "2021-10-28T13:10:00Z",
      value: 140.99699999999999,
    },
    {
      timestamp: "2021-10-28T13:15:00Z",
      value: 133.99599999999998,
    },
    {
      timestamp: "2021-10-28T13:20:00Z",
      value: 120.99499999999998,
    },
    {
      timestamp: "2021-10-28T13:25:00Z",
      value: 114.99399999999997,
    },
    {
      timestamp: "2021-10-28T13:30:00Z",
      value: 108.99299999999997,
    },
    {
      timestamp: "2021-10-28T13:35:00Z",
      value: 94.99199999999996,
    },
    {
      timestamp: "2021-10-28T13:40:00Z",
      value: 88.99099999999996,
    },
    {
      timestamp: "2021-10-28T13:45:00Z",
      value: 84.98999999999995,
    },
    {
      timestamp: "2021-10-28T13:50:00Z",
      value: 73.98899999999995,
    },
    {
      timestamp: "2021-10-28T13:55:00Z",
      value: 58.98799999999995,
    },
    {
      timestamp: "2021-10-28T14:00:00Z",
      value: 51.98699999999995,
    },
    {
      timestamp: "2021-10-28T14:05:00Z",
      value: 36.985999999999954,
    },
    {
      timestamp: "2021-10-28T14:10:00Z",
      value: 33.98499999999996,
    },
    {
      timestamp: "2021-10-28T14:15:00Z",
      value: 31.983999999999956,
    },
    {
      timestamp: "2021-10-28T14:20:00Z",
      value: 12.982999999999954,
    },
    {
      timestamp: "2021-10-28T14:25:00Z",
      value: -0.01800000000004509,
    },
    {
      timestamp: "2021-10-28T14:30:00Z",
      value: -12.019000000000045,
    },
    {
      timestamp: "2021-10-28T14:35:00Z",
      value: -28.020000000000046,
    },
    {
      timestamp: "2021-10-28T14:40:00Z",
      value: -29.021000000000047,
    },
    {
      timestamp: "2021-10-28T14:45:00Z",
      value: 160,
    },
    {
      timestamp: "2021-10-28T14:50:00Z",
      value: 156.999,
    },
    {
      timestamp: "2021-10-28T14:55:00Z",
      value: 147.998,
    },
    {
      timestamp: "2021-10-28T15:00:00Z",
      value: 133.99699999999999,
    },
    {
      timestamp: "2021-10-28T15:05:00Z",
      value: 115.99599999999998,
    },
    {
      timestamp: "2021-10-28T15:10:00Z",
      value: 109.99499999999998,
    },
    {
      timestamp: "2021-10-28T15:15:00Z",
      value: 102.99399999999997,
    },
    {
      timestamp: "2021-10-28T15:20:00Z",
      value: 90.99299999999997,
    },
    {
      timestamp: "2021-10-28T15:25:00Z",
      value: 76.99199999999996,
    },
    {
      timestamp: "2021-10-28T15:30:00Z",
      value: 64.99099999999996,
    },
    {
      timestamp: "2021-10-28T15:35:00Z",
      value: 45.98999999999995,
    },
    {
      timestamp: "2021-10-28T15:40:00Z",
      value: 38.988999999999955,
    },
    {
      timestamp: "2021-10-28T15:45:00Z",
      value: 36.98799999999996,
    },
    {
      timestamp: "2021-10-28T15:50:00Z",
      value: 36.98699999999996,
    },
    {
      timestamp: "2021-10-28T15:55:00Z",
      value: 19.985999999999958,
    },
    {
      timestamp: "2021-10-28T16:00:00Z",
      value: 2.984999999999957,
    },
    {
      timestamp: "2021-10-28T16:05:00Z",
      value: 1.983999999999957,
    },
    {
      timestamp: "2021-10-28T16:10:00Z",
      value: -16.017000000000046,
    },
    {
      timestamp: "2021-10-28T16:15:00Z",
      value: -28.018000000000043,
    },
    {
      timestamp: "2021-10-28T16:20:00Z",
      value: -37.01900000000004,
    },
    {
      timestamp: "2021-10-28T16:25:00Z",
      value: -45.02000000000004,
    },
    {
      timestamp: "2021-10-28T16:30:00Z",
      value: -56.021000000000036,
    },
    {
      timestamp: "2021-10-28T16:35:00Z",
      value: 110,
    },
    {
      timestamp: "2021-10-28T16:40:00Z",
      value: 93.999,
    },
    {
      timestamp: "2021-10-28T16:45:00Z",
      value: 86.99799999999999,
    },
    {
      timestamp: "2021-10-28T16:50:00Z",
      value: 68.99699999999999,
    },
    {
      timestamp: "2021-10-28T16:55:00Z",
      value: 49.99599999999998,
    },
    {
      timestamp: "2021-10-28T17:00:00Z",
      value: 41.99499999999998,
    },
    {
      timestamp: "2021-10-28T17:05:00Z",
      value: 23.993999999999982,
    },
    {
      timestamp: "2021-10-28T17:10:00Z",
      value: 6.992999999999981,
    },
    {
      timestamp: "2021-10-28T17:15:00Z",
      value: -3.0080000000000187,
    },
    {
      timestamp: "2021-10-28T17:20:00Z",
      value: 197,
    },
    {
      timestamp: "2021-10-28T17:25:00Z",
      value: 191.999,
    },
    {
      timestamp: "2021-10-28T17:30:00Z",
      value: 178.998,
    },
    {
      timestamp: "2021-10-28T17:35:00Z",
      value: 162.99699999999999,
    },
    {
      timestamp: "2021-10-28T17:40:00Z",
      value: 155.99599999999998,
    },
    {
      timestamp: "2021-10-28T17:45:00Z",
      value: 148.99499999999998,
    },
    {
      timestamp: "2021-10-28T17:50:00Z",
      value: 136.99399999999997,
    },
    {
      timestamp: "2021-10-28T17:55:00Z",
      value: 128.99299999999997,
    },
    {
      timestamp: "2021-10-28T18:00:00Z",
      value: 118.99199999999996,
    },
    {
      timestamp: "2021-10-28T18:05:00Z",
      value: 118.99099999999996,
    },
    {
      timestamp: "2021-10-28T18:10:00Z",
      value: 116.98999999999995,
    },
    {
      timestamp: "2021-10-28T18:15:00Z",
      value: 97.98899999999995,
    },
    {
      timestamp: "2021-10-28T18:20:00Z",
      value: 83.98799999999994,
    },
    {
      timestamp: "2021-10-28T18:25:00Z",
      value: 72.98699999999994,
    },
    {
      timestamp: "2021-10-28T18:30:00Z",
      value: 62.98599999999994,
    },
    {
      timestamp: "2021-10-28T18:35:00Z",
      value: 44.98499999999994,
    },
    {
      timestamp: "2021-10-28T18:40:00Z",
      value: 42.983999999999945,
    },
    {
      timestamp: "2021-10-28T18:45:00Z",
      value: 25.982999999999944,
    },
    {
      timestamp: "2021-10-28T18:50:00Z",
      value: 18.981999999999942,
    },
    {
      timestamp: "2021-10-28T18:55:00Z",
      value: 99,
    },
    {
      timestamp: "2021-10-28T19:00:00Z",
      value: 87.999,
    },
    {
      timestamp: "2021-10-28T19:05:00Z",
      value: 74.99799999999999,
    },
    {
      timestamp: "2021-10-28T19:10:00Z",
      value: 70.99699999999999,
    },
    {
      timestamp: "2021-10-28T19:15:00Z",
      value: 60.99599999999999,
    },
    {
      timestamp: "2021-10-28T19:20:00Z",
      value: 56.99499999999999,
    },
    {
      timestamp: "2021-10-28T19:25:00Z",
      value: 49.99399999999999,
    },
    {
      timestamp: "2021-10-28T19:30:00Z",
      value: 43.992999999999995,
    },
    {
      timestamp: "2021-10-28T19:35:00Z",
      value: 38.992,
    },
    {
      timestamp: "2021-10-28T19:40:00Z",
      value: 21.990999999999996,
    },
    {
      timestamp: "2021-10-28T19:45:00Z",
      value: 18.989999999999995,
    },
    {
      timestamp: "2021-10-28T19:50:00Z",
      value: 1.9889999999999937,
    },
    {
      timestamp: "2021-10-28T19:55:00Z",
      value: -8.012000000000006,
    },
    {
      timestamp: "2021-10-28T20:00:00Z",
      value: -15.013000000000005,
    },
    {
      timestamp: "2021-10-28T20:05:00Z",
      value: -21.014000000000006,
    },
    {
      timestamp: "2021-10-28T20:10:00Z",
      value: 184,
    },
    {
      timestamp: "2021-10-28T20:15:00Z",
      value: 165.999,
    },
    {
      timestamp: "2021-10-28T20:20:00Z",
      value: 146.998,
    },
    {
      timestamp: "2021-10-28T20:25:00Z",
      value: 141.99699999999999,
    },
    {
      timestamp: "2021-10-28T20:30:00Z",
      value: 139.99599999999998,
    },
    {
      timestamp: "2021-10-28T20:35:00Z",
      value: 131.99499999999998,
    },
    {
      timestamp: "2021-10-28T20:40:00Z",
      value: 113.99399999999997,
    },
    {
      timestamp: "2021-10-28T20:45:00Z",
      value: 112.99299999999997,
    },
    {
      timestamp: "2021-10-28T20:50:00Z",
      value: 97.99199999999996,
    },
    {
      timestamp: "2021-10-28T20:55:00Z",
      value: 95.99099999999996,
    },
    {
      timestamp: "2021-10-28T21:00:00Z",
      value: 89.98999999999995,
    },
    {
      timestamp: "2021-10-28T21:05:00Z",
      value: 77.98899999999995,
    },
    {
      timestamp: "2021-10-28T21:10:00Z",
      value: 73.98799999999994,
    },
    {
      timestamp: "2021-10-28T21:15:00Z",
      value: 70.98699999999994,
    },
    {
      timestamp: "2021-10-28T21:20:00Z",
      value: 61.98599999999994,
    },
    {
      timestamp: "2021-10-28T21:25:00Z",
      value: 49.98499999999994,
    },
    {
      timestamp: "2021-10-28T21:30:00Z",
      value: 43.983999999999945,
    },
    {
      timestamp: "2021-10-28T21:35:00Z",
      value: 27.982999999999944,
    },
    {
      timestamp: "2021-10-28T21:40:00Z",
      value: 25.981999999999942,
    },
    {
      timestamp: "2021-10-28T21:45:00Z",
      value: 6.980999999999941,
    },
    {
      timestamp: "2021-10-28T21:50:00Z",
      value: 3.9799999999999414,
    },
    {
      timestamp: "2021-10-28T21:55:00Z",
      value: 141,
    },
    {
      timestamp: "2021-10-28T22:00:00Z",
      value: 131.999,
    },
    {
      timestamp: "2021-10-28T22:05:00Z",
      value: 123.99799999999999,
    },
    {
      timestamp: "2021-10-28T22:10:00Z",
      value: 117.99699999999999,
    },
    {
      timestamp: "2021-10-28T22:15:00Z",
      value: 107.99599999999998,
    },
    {
      timestamp: "2021-10-28T22:20:00Z",
      value: 104.99499999999998,
    },
    {
      timestamp: "2021-10-28T22:25:00Z",
      value: 101.99399999999997,
    },
    {
      timestamp: "2021-10-28T22:30:00Z",
      value: 84.99299999999997,
    },
    {
      timestamp: "2021-10-28T22:35:00Z",
      value: 67.99199999999996,
    },
    {
      timestamp: "2021-10-28T22:40:00Z",
      value: 51.99099999999996,
    },
    {
      timestamp: "2021-10-28T22:45:00Z",
      value: 46.98999999999996,
    },
    {
      timestamp: "2021-10-28T22:50:00Z",
      value: 44.98899999999996,
    },
    {
      timestamp: "2021-10-28T22:55:00Z",
      value: 43.987999999999964,
    },
    {
      timestamp: "2021-10-28T23:00:00Z",
      value: 33.986999999999966,
    },
    {
      timestamp: "2021-10-28T23:05:00Z",
      value: 14.985999999999965,
    },
    {
      timestamp: "2021-10-28T23:10:00Z",
      value: 5.984999999999966,
    },
    {
      timestamp: "2021-10-28T23:15:00Z",
      value: -12.016000000000036,
    },
    {
      timestamp: "2021-10-28T23:20:00Z",
      value: -17.017000000000035,
    },
    {
      timestamp: "2021-10-28T23:25:00Z",
      value: 133,
    },
    {
      timestamp: "2021-10-28T23:30:00Z",
      value: 114.999,
    },
    {
      timestamp: "2021-10-28T23:35:00Z",
      value: 96.99799999999999,
    },
    {
      timestamp: "2021-10-28T23:40:00Z",
      value: 86.99699999999999,
    },
    {
      timestamp: "2021-10-28T23:45:00Z",
      value: 77.99599999999998,
    },
    {
      timestamp: "2021-10-28T23:50:00Z",
      value: 63.99499999999998,
    },
    {
      timestamp: "2021-10-28T23:55:00Z",
      value: 62.993999999999986,
    },
    {
      timestamp: "2021-10-29T00:00:00Z",
      value: 55.99299999999999,
    },
    {
      timestamp: "2021-10-29T00:05:00Z",
      value: 52.99199999999999,
    },
    {
      timestamp: "2021-10-29T00:10:00Z",
      value: 49.99099999999999,
    },
    {
      timestamp: "2021-10-29T00:15:00Z",
      value: 35.989999999999995,
    },
    {
      timestamp: "2021-10-29T00:20:00Z",
      value: 19.988999999999994,
    },
    {
      timestamp: "2021-10-29T00:25:00Z",
      value: 5.987999999999994,
    },
    {
      timestamp: "2021-10-29T00:30:00Z",
      value: 0.9869999999999939,
    },
    {
      timestamp: "2021-10-29T00:35:00Z",
      value: -12.014000000000006,
    },
    {
      timestamp: "2021-10-29T00:40:00Z",
      value: 148,
    },
    {
      timestamp: "2021-10-29T00:45:00Z",
      value: 139.999,
    },
    {
      timestamp: "2021-10-29T00:50:00Z",
      value: 134.998,
    },
    {
      timestamp: "2021-10-29T00:55:00Z",
      value: 125.99699999999999,
    },
    {
      timestamp: "2021-10-29T01:00:00Z",
      value: 113.99599999999998,
    },
    {
      timestamp: "2021-10-29T01:05:00Z",
      value: 107.99499999999998,
    },
    {
      timestamp: "2021-10-29T01:10:00Z",
      value: 105.99399999999997,
    },
    {
      timestamp: "2021-10-29T01:15:00Z",
      value: 94.99299999999997,
    },
    {
      timestamp: "2021-10-29T01:20:00Z",
      value: 83.99199999999996,
    },
    {
      timestamp: "2021-10-29T01:25:00Z",
      value: 73.99099999999996,
    },
    {
      timestamp: "2021-10-29T01:30:00Z",
      value: 71.98999999999995,
    },
    {
      timestamp: "2021-10-29T01:35:00Z",
      value: 60.988999999999955,
    },
    {
      timestamp: "2021-10-29T01:40:00Z",
      value: 45.98799999999996,
    },
    {
      timestamp: "2021-10-29T01:45:00Z",
      value: 39.98699999999996,
    },
    {
      timestamp: "2021-10-29T01:50:00Z",
      value: 33.98599999999996,
    },
    {
      timestamp: "2021-10-29T01:55:00Z",
      value: 29.98499999999996,
    },
    {
      timestamp: "2021-10-29T02:00:00Z",
      value: 19.98399999999996,
    },
    {
      timestamp: "2021-10-29T02:05:00Z",
      value: 10.98299999999996,
    },
    {
      timestamp: "2021-10-29T02:10:00Z",
      value: 146,
    },
    {
      timestamp: "2021-10-29T02:15:00Z",
      value: 140.999,
    },
    {
      timestamp: "2021-10-29T02:20:00Z",
      value: 126.99799999999999,
    },
    {
      timestamp: "2021-10-29T02:25:00Z",
      value: 107.99699999999999,
    },
    {
      timestamp: "2021-10-29T02:30:00Z",
      value: 92.99599999999998,
    },
    {
      timestamp: "2021-10-29T02:35:00Z",
      value: 77.99499999999998,
    },
    {
      timestamp: "2021-10-29T02:40:00Z",
      value: 75.99399999999997,
    },
    {
      timestamp: "2021-10-29T02:45:00Z",
      value: 66.99299999999997,
    },
    {
      timestamp: "2021-10-29T02:50:00Z",
      value: 51.99199999999997,
    },
    {
      timestamp: "2021-10-29T02:55:00Z",
      value: 47.99099999999997,
    },
    {
      timestamp: "2021-10-29T03:00:00Z",
      value: 39.989999999999974,
    },
    {
      timestamp: "2021-10-29T03:05:00Z",
      value: 24.988999999999976,
    },
    {
      timestamp: "2021-10-29T03:10:00Z",
      value: 12.987999999999976,
    },
    {
      timestamp: "2021-10-29T03:15:00Z",
      value: -3.0130000000000248,
    },
    {
      timestamp: "2021-10-29T03:20:00Z",
      value: -14.014000000000024,
    },
    {
      timestamp: "2021-10-29T03:25:00Z",
      value: 189,
    },
    {
      timestamp: "2021-10-29T03:30:00Z",
      value: 176.999,
    },
    {
      timestamp: "2021-10-29T03:35:00Z",
      value: 173.998,
    },
    {
      timestamp: "2021-10-29T03:40:00Z",
      value: 163.99699999999999,
    },
    {
      timestamp: "2021-10-29T03:45:00Z",
      value: 163.99599999999998,
    },
    {
      timestamp: "2021-10-29T03:50:00Z",
      value: 158.99499999999998,
    },
    {
      timestamp: "2021-10-29T03:55:00Z",
      value: 158.99399999999997,
    },
    {
      timestamp: "2021-10-29T04:00:00Z",
      value: 152.99299999999997,
    },
    {
      timestamp: "2021-10-29T04:05:00Z",
      value: 145.99199999999996,
    },
    {
      timestamp: "2021-10-29T04:10:00Z",
      value: 141.99099999999996,
    },
    {
      timestamp: "2021-10-29T04:15:00Z",
      value: 137.98999999999995,
    },
    {
      timestamp: "2021-10-29T04:20:00Z",
      value: 135.98899999999995,
    },
    {
      timestamp: "2021-10-29T04:25:00Z",
      value: 130.98799999999994,
    },
    {
      timestamp: "2021-10-29T04:30:00Z",
      value: 123.98699999999994,
    },
    {
      timestamp: "2021-10-29T04:35:00Z",
      value: 111.98599999999993,
    },
    {
      timestamp: "2021-10-29T04:40:00Z",
      value: 98.98499999999993,
    },
    {
      timestamp: "2021-10-29T04:45:00Z",
      value: 85.98399999999992,
    },
    {
      timestamp: "2021-10-29T04:50:00Z",
      value: 79.98299999999992,
    },
    {
      timestamp: "2021-10-29T04:55:00Z",
      value: 74.98199999999991,
    },
    {
      timestamp: "2021-10-29T05:00:00Z",
      value: 61.980999999999916,
    },
    {
      timestamp: "2021-10-29T05:05:00Z",
      value: 58.97999999999992,
    },
    {
      timestamp: "2021-10-29T05:10:00Z",
      value: 45.97899999999992,
    },
    {
      timestamp: "2021-10-29T05:15:00Z",
      value: 29.97799999999992,
    },
    {
      timestamp: "2021-10-29T05:20:00Z",
      value: 14.97699999999992,
    },
    {
      timestamp: "2021-10-29T05:25:00Z",
      value: 7.97599999999992,
    },
    {
      timestamp: "2021-10-29T05:30:00Z",
      value: -4.025000000000079,
    },
    {
      timestamp: "2021-10-29T05:35:00Z",
      value: -20.02600000000008,
    },
    {
      timestamp: "2021-10-29T05:40:00Z",
      value: 131,
    },
    {
      timestamp: "2021-10-29T05:45:00Z",
      value: 121.999,
    },
    {
      timestamp: "2021-10-29T05:50:00Z",
      value: 116.99799999999999,
    },
    {
      timestamp: "2021-10-29T05:55:00Z",
      value: 115.99699999999999,
    },
    {
      timestamp: "2021-10-29T06:00:00Z",
      value: 115.99599999999998,
    },
    {
      timestamp: "2021-10-29T06:05:00Z",
      value: 96.99499999999998,
    },
    {
      timestamp: "2021-10-29T06:10:00Z",
      value: 92.99399999999997,
    },
    {
      timestamp: "2021-10-29T06:15:00Z",
      value: 78.99299999999997,
    },
    {
      timestamp: "2021-10-29T06:20:00Z",
      value: 62.99199999999996,
    },
    {
      timestamp: "2021-10-29T06:25:00Z",
      value: 49.990999999999964,
    },
    {
      timestamp: "2021-10-29T06:30:00Z",
      value: 30.989999999999963,
    },
    {
      timestamp: "2021-10-29T06:35:00Z",
      value: 17.98899999999996,
    },
    {
      timestamp: "2021-10-29T06:40:00Z",
      value: 8.987999999999962,
    },
    {
      timestamp: "2021-10-29T06:45:00Z",
      value: 142,
    },
    {
      timestamp: "2021-10-29T06:50:00Z",
      value: 136.999,
    },
    {
      timestamp: "2021-10-29T06:55:00Z",
      value: 134.998,
    },
    {
      timestamp: "2021-10-29T07:00:00Z",
      value: 121.99699999999999,
    },
    {
      timestamp: "2021-10-29T07:05:00Z",
      value: 102.99599999999998,
    },
    {
      timestamp: "2021-10-29T07:10:00Z",
      value: 98.99499999999998,
    },
    {
      timestamp: "2021-10-29T07:15:00Z",
      value: 94.99399999999997,
    },
    {
      timestamp: "2021-10-29T07:20:00Z",
      value: 77.99299999999997,
    },
    {
      timestamp: "2021-10-29T07:25:00Z",
      value: 64.99199999999996,
    },
    {
      timestamp: "2021-10-29T07:30:00Z",
      value: 56.990999999999964,
    },
    {
      timestamp: "2021-10-29T07:35:00Z",
      value: 46.98999999999997,
    },
    {
      timestamp: "2021-10-29T07:40:00Z",
      value: 42.98899999999997,
    },
    {
      timestamp: "2021-10-29T07:45:00Z",
      value: 31.98799999999997,
    },
    {
      timestamp: "2021-10-29T07:50:00Z",
      value: 16.986999999999973,
    },
    {
      timestamp: "2021-10-29T07:55:00Z",
      value: 11.985999999999972,
    },
    {
      timestamp: "2021-10-29T08:00:00Z",
      value: 11.984999999999973,
    },
    {
      timestamp: "2021-10-29T08:05:00Z",
      value: 0.9839999999999733,
    },
    {
      timestamp: "2021-10-29T08:10:00Z",
      value: -3.017000000000027,
    },
    {
      timestamp: "2021-10-29T08:15:00Z",
      value: -21.01800000000003,
    },
    {
      timestamp: "2021-10-29T08:20:00Z",
      value: -31.019000000000027,
    },
    {
      timestamp: "2021-10-29T08:25:00Z",
      value: 189,
    },
    {
      timestamp: "2021-10-29T08:30:00Z",
      value: 179.999,
    },
    {
      timestamp: "2021-10-29T08:35:00Z",
      value: 173.998,
    },
    {
      timestamp: "2021-10-29T08:40:00Z",
      value: 157.99699999999999,
    },
    {
      timestamp: "2021-10-29T08:45:00Z",
      value: 146.99599999999998,
    },
    {
      timestamp: "2021-10-29T08:50:00Z",
      value: 133.99499999999998,
    },
    {
      timestamp: "2021-10-29T08:55:00Z",
      value: 121.99399999999997,
    },
    {
      timestamp: "2021-10-29T09:00:00Z",
      value: 111.99299999999997,
    },
    {
      timestamp: "2021-10-29T09:05:00Z",
      value: 111.99199999999996,
    },
    {
      timestamp: "2021-10-29T09:10:00Z",
      value: 104.99099999999996,
    },
    {
      timestamp: "2021-10-29T09:15:00Z",
      value: 85.98999999999995,
    },
    {
      timestamp: "2021-10-29T09:20:00Z",
      value: 66.98899999999995,
    },
    {
      timestamp: "2021-10-29T09:25:00Z",
      value: 48.98799999999994,
    },
    {
      timestamp: "2021-10-29T09:30:00Z",
      value: 31.98699999999994,
    },
    {
      timestamp: "2021-10-29T09:35:00Z",
      value: 19.98599999999994,
    },
    {
      timestamp: "2021-10-29T09:40:00Z",
      value: 187,
    },
    {
      timestamp: "2021-10-29T09:45:00Z",
      value: 177.999,
    },
    {
      timestamp: "2021-10-29T09:50:00Z",
      value: 171.998,
    },
    {
      timestamp: "2021-10-29T09:55:00Z",
      value: 154.99699999999999,
    },
    {
      timestamp: "2021-10-29T10:00:00Z",
      value: 144.99599999999998,
    },
    {
      timestamp: "2021-10-29T10:05:00Z",
      value: 125.99499999999998,
    },
    {
      timestamp: "2021-10-29T10:10:00Z",
      value: 112.99399999999997,
    },
    {
      timestamp: "2021-10-29T10:15:00Z",
      value: 112.99299999999997,
    },
    {
      timestamp: "2021-10-29T10:20:00Z",
      value: 93.99199999999996,
    },
    {
      timestamp: "2021-10-29T10:25:00Z",
      value: 75.99099999999996,
    },
    {
      timestamp: "2021-10-29T10:30:00Z",
      value: 67.98999999999995,
    },
    {
      timestamp: "2021-10-29T10:35:00Z",
      value: 53.988999999999955,
    },
    {
      timestamp: "2021-10-29T10:40:00Z",
      value: 39.98799999999996,
    },
    {
      timestamp: "2021-10-29T10:45:00Z",
      value: 28.98699999999996,
    },
    {
      timestamp: "2021-10-29T10:50:00Z",
      value: 17.98599999999996,
    },
    {
      timestamp: "2021-10-29T10:55:00Z",
      value: 135,
    },
    {
      timestamp: "2021-10-29T11:00:00Z",
      value: 131.999,
    },
    {
      timestamp: "2021-10-29T11:05:00Z",
      value: 128.998,
    },
    {
      timestamp: "2021-10-29T11:10:00Z",
      value: 125.99699999999999,
    },
    {
      timestamp: "2021-10-29T11:15:00Z",
      value: 110.99599999999998,
    },
    {
      timestamp: "2021-10-29T11:20:00Z",
      value: 92.99499999999998,
    },
    {
      timestamp: "2021-10-29T11:25:00Z",
      value: 78.99399999999997,
    },
    {
      timestamp: "2021-10-29T11:30:00Z",
      value: 62.99299999999997,
    },
    {
      timestamp: "2021-10-29T11:35:00Z",
      value: 51.99199999999997,
    },
    {
      timestamp: "2021-10-29T11:40:00Z",
      value: 32.99099999999997,
    },
    {
      timestamp: "2021-10-29T11:45:00Z",
      value: 20.989999999999974,
    },
    {
      timestamp: "2021-10-29T11:50:00Z",
      value: 167,
    },
    {
      timestamp: "2021-10-29T11:55:00Z",
      value: 149.999,
    },
    {
      timestamp: "2021-10-29T12:00:00Z",
      value: 143.998,
    },
    {
      timestamp: "2021-10-29T12:05:00Z",
      value: 138.99699999999999,
    },
    {
      timestamp: "2021-10-29T12:10:00Z",
      value: 120.99599999999998,
    },
    {
      timestamp: "2021-10-29T12:15:00Z",
      value: 114.99499999999998,
    },
    {
      timestamp: "2021-10-29T12:20:00Z",
      value: 104.99399999999997,
    },
    {
      timestamp: "2021-10-29T12:25:00Z",
      value: 95.99299999999997,
    },
    {
      timestamp: "2021-10-29T12:30:00Z",
      value: 92.99199999999996,
    },
    {
      timestamp: "2021-10-29T12:35:00Z",
      value: 82.99099999999996,
    },
    {
      timestamp: "2021-10-29T12:40:00Z",
      value: 75.98999999999995,
    },
    {
      timestamp: "2021-10-29T12:45:00Z",
      value: 66.98899999999995,
    },
    {
      timestamp: "2021-10-29T12:50:00Z",
      value: 53.98799999999995,
    },
    {
      timestamp: "2021-10-29T12:55:00Z",
      value: 41.98699999999995,
    },
    {
      timestamp: "2021-10-29T13:00:00Z",
      value: 39.985999999999954,
    },
    {
      timestamp: "2021-10-29T13:05:00Z",
      value: 30.984999999999957,
    },
    {
      timestamp: "2021-10-29T13:10:00Z",
      value: 26.983999999999956,
    },
    {
      timestamp: "2021-10-29T13:15:00Z",
      value: 14.982999999999956,
    },
    {
      timestamp: "2021-10-29T13:20:00Z",
      value: 178,
    },
    {
      timestamp: "2021-10-29T13:25:00Z",
      value: 162.999,
    },
    {
      timestamp: "2021-10-29T13:30:00Z",
      value: 145.998,
    },
    {
      timestamp: "2021-10-29T13:35:00Z",
      value: 129.99699999999999,
    },
    {
      timestamp: "2021-10-29T13:40:00Z",
      value: 117.99599999999998,
    },
    {
      timestamp: "2021-10-29T13:45:00Z",
      value: 98.99499999999998,
    },
    {
      timestamp: "2021-10-29T13:50:00Z",
      value: 81.99399999999997,
    },
    {
      timestamp: "2021-10-29T13:55:00Z",
      value: 80.99299999999997,
    },
    {
      timestamp: "2021-10-29T14:00:00Z",
      value: 70.99199999999996,
    },
    {
      timestamp: "2021-10-29T14:05:00Z",
      value: 67.99099999999996,
    },
    {
      timestamp: "2021-10-29T14:10:00Z",
      value: 66.98999999999995,
    },
    {
      timestamp: "2021-10-29T14:15:00Z",
      value: 58.988999999999955,
    },
    {
      timestamp: "2021-10-29T14:20:00Z",
      value: 47.98799999999996,
    },
    {
      timestamp: "2021-10-29T14:25:00Z",
      value: 35.98699999999996,
    },
    {
      timestamp: "2021-10-29T14:30:00Z",
      value: 20.98599999999996,
    },
    {
      timestamp: "2021-10-29T14:35:00Z",
      value: 5.984999999999962,
    },
    {
      timestamp: "2021-10-29T14:40:00Z",
      value: 134,
    },
    {
      timestamp: "2021-10-29T14:45:00Z",
      value: 130.999,
    },
    {
      timestamp: "2021-10-29T14:50:00Z",
      value: 123.99799999999999,
    },
    {
      timestamp: "2021-10-29T14:55:00Z",
      value: 113.99699999999999,
    },
    {
      timestamp: "2021-10-29T15:00:00Z",
      value: 98.99599999999998,
    },
    {
      timestamp: "2021-10-29T15:05:00Z",
      value: 83.99499999999998,
    },
    {
      timestamp: "2021-10-29T15:10:00Z",
      value: 79.99399999999997,
    },
    {
      timestamp: "2021-10-29T15:15:00Z",
      value: 72.99299999999997,
    },
    {
      timestamp: "2021-10-29T15:20:00Z",
      value: 69.99199999999996,
    },
    {
      timestamp: "2021-10-29T15:25:00Z",
      value: 68.99099999999996,
    },
    {
      timestamp: "2021-10-29T15:30:00Z",
      value: 49.98999999999995,
    },
    {
      timestamp: "2021-10-29T15:35:00Z",
      value: 35.988999999999955,
    },
    {
      timestamp: "2021-10-29T15:40:00Z",
      value: 26.987999999999957,
    },
    {
      timestamp: "2021-10-29T15:45:00Z",
      value: 16.98699999999996,
    },
    {
      timestamp: "2021-10-29T15:50:00Z",
      value: 0.985999999999958,
    },
    {
      timestamp: "2021-10-29T15:55:00Z",
      value: -5.015000000000042,
    },
    {
      timestamp: "2021-10-29T16:00:00Z",
      value: -18.01600000000004,
    },
    {
      timestamp: "2021-10-29T16:05:00Z",
      value: -37.01700000000004,
    },
    {
      timestamp: "2021-10-29T16:10:00Z",
      value: -40.018000000000036,
    },
    {
      timestamp: "2021-10-29T16:15:00Z",
      value: -40.019000000000034,
    },
    {
      timestamp: "2021-10-29T16:20:00Z",
      value: 157,
    },
    {
      timestamp: "2021-10-29T16:25:00Z",
      value: 143.999,
    },
    {
      timestamp: "2021-10-29T16:30:00Z",
      value: 125.99799999999999,
    },
    {
      timestamp: "2021-10-29T16:35:00Z",
      value: 118.99699999999999,
    },
    {
      timestamp: "2021-10-29T16:40:00Z",
      value: 115.99599999999998,
    },
    {
      timestamp: "2021-10-29T16:45:00Z",
      value: 110.99499999999998,
    },
    {
      timestamp: "2021-10-29T16:50:00Z",
      value: 91.99399999999997,
    },
    {
      timestamp: "2021-10-29T16:55:00Z",
      value: 86.99299999999997,
    },
    {
      timestamp: "2021-10-29T17:00:00Z",
      value: 76.99199999999996,
    },
    {
      timestamp: "2021-10-29T17:05:00Z",
      value: 63.990999999999964,
    },
    {
      timestamp: "2021-10-29T17:10:00Z",
      value: 55.98999999999997,
    },
    {
      timestamp: "2021-10-29T17:15:00Z",
      value: 47.98899999999997,
    },
    {
      timestamp: "2021-10-29T17:20:00Z",
      value: 35.98799999999997,
    },
    {
      timestamp: "2021-10-29T17:25:00Z",
      value: 30.98699999999997,
    },
    {
      timestamp: "2021-10-29T17:30:00Z",
      value: 22.98599999999997,
    },
    {
      timestamp: "2021-10-29T17:35:00Z",
      value: 7.984999999999969,
    },
    {
      timestamp: "2021-10-29T17:40:00Z",
      value: -0.016000000000030212,
    },
    {
      timestamp: "2021-10-29T17:45:00Z",
      value: 139,
    },
    {
      timestamp: "2021-10-29T17:50:00Z",
      value: 120.999,
    },
    {
      timestamp: "2021-10-29T17:55:00Z",
      value: 116.99799999999999,
    },
    {
      timestamp: "2021-10-29T18:00:00Z",
      value: 103.99699999999999,
    },
    {
      timestamp: "2021-10-29T18:05:00Z",
      value: 92.99599999999998,
    },
    {
      timestamp: "2021-10-29T18:10:00Z",
      value: 74.99499999999998,
    },
    {
      timestamp: "2021-10-29T18:15:00Z",
      value: 64.99399999999997,
    },
    {
      timestamp: "2021-10-29T18:20:00Z",
      value: 52.992999999999974,
    },
    {
      timestamp: "2021-10-29T18:25:00Z",
      value: 51.991999999999976,
    },
    {
      timestamp: "2021-10-29T18:30:00Z",
      value: 44.99099999999998,
    },
    {
      timestamp: "2021-10-29T18:35:00Z",
      value: 31.98999999999998,
    },
    {
      timestamp: "2021-10-29T18:40:00Z",
      value: 13.98899999999998,
    },
    {
      timestamp: "2021-10-29T18:45:00Z",
      value: 10.98799999999998,
    },
    {
      timestamp: "2021-10-29T18:50:00Z",
      value: 4.98699999999998,
    },
    {
      timestamp: "2021-10-29T18:55:00Z",
      value: 111,
    },
    {
      timestamp: "2021-10-29T19:00:00Z",
      value: 100.999,
    },
    {
      timestamp: "2021-10-29T19:05:00Z",
      value: 96.99799999999999,
    },
    {
      timestamp: "2021-10-29T19:10:00Z",
      value: 86.99699999999999,
    },
    {
      timestamp: "2021-10-29T19:15:00Z",
      value: 76.99599999999998,
    },
    {
      timestamp: "2021-10-29T19:20:00Z",
      value: 73.99499999999998,
    },
    {
      timestamp: "2021-10-29T19:25:00Z",
      value: 65.99399999999997,
    },
    {
      timestamp: "2021-10-29T19:30:00Z",
      value: 47.99299999999997,
    },
    {
      timestamp: "2021-10-29T19:35:00Z",
      value: 40.99199999999997,
    },
    {
      timestamp: "2021-10-29T19:40:00Z",
      value: 25.99099999999997,
    },
    {
      timestamp: "2021-10-29T19:45:00Z",
      value: 6.98999999999997,
    },
    {
      timestamp: "2021-10-29T19:50:00Z",
      value: 2.9889999999999697,
    },
    {
      timestamp: "2021-10-29T19:55:00Z",
      value: -16.012000000000032,
    },
    {
      timestamp: "2021-10-29T20:00:00Z",
      value: 112,
    },
    {
      timestamp: "2021-10-29T20:05:00Z",
      value: 94.999,
    },
    {
      timestamp: "2021-10-29T20:10:00Z",
      value: 92.99799999999999,
    },
    {
      timestamp: "2021-10-29T20:15:00Z",
      value: 90.99699999999999,
    },
    {
      timestamp: "2021-10-29T20:20:00Z",
      value: 82.99599999999998,
    },
    {
      timestamp: "2021-10-29T20:25:00Z",
      value: 69.99499999999998,
    },
    {
      timestamp: "2021-10-29T20:30:00Z",
      value: 62.99399999999998,
    },
    {
      timestamp: "2021-10-29T20:35:00Z",
      value: 47.99299999999998,
    },
    {
      timestamp: "2021-10-29T20:40:00Z",
      value: 37.99199999999998,
    },
    {
      timestamp: "2021-10-29T20:45:00Z",
      value: 35.990999999999985,
    },
    {
      timestamp: "2021-10-29T20:50:00Z",
      value: 21.989999999999988,
    },
    {
      timestamp: "2021-10-29T20:55:00Z",
      value: 21.988999999999987,
    },
    {
      timestamp: "2021-10-29T21:00:00Z",
      value: 15.987999999999985,
    },
    {
      timestamp: "2021-10-29T21:05:00Z",
      value: 3.986999999999986,
    },
    {
      timestamp: "2021-10-29T21:10:00Z",
      value: -5.014000000000014,
    },
    {
      timestamp: "2021-10-29T21:15:00Z",
      value: 141,
    },
    {
      timestamp: "2021-10-29T21:20:00Z",
      value: 131.999,
    },
    {
      timestamp: "2021-10-29T21:25:00Z",
      value: 115.99799999999999,
    },
    {
      timestamp: "2021-10-29T21:30:00Z",
      value: 109.99699999999999,
    },
    {
      timestamp: "2021-10-29T21:35:00Z",
      value: 98.99599999999998,
    },
    {
      timestamp: "2021-10-29T21:40:00Z",
      value: 83.99499999999998,
    },
    {
      timestamp: "2021-10-29T21:45:00Z",
      value: 69.99399999999997,
    },
    {
      timestamp: "2021-10-29T21:50:00Z",
      value: 51.99299999999997,
    },
    {
      timestamp: "2021-10-29T21:55:00Z",
      value: 49.99199999999997,
    },
    {
      timestamp: "2021-10-29T22:00:00Z",
      value: 40.99099999999997,
    },
    {
      timestamp: "2021-10-29T22:05:00Z",
      value: 21.98999999999997,
    },
    {
      timestamp: "2021-10-29T22:10:00Z",
      value: 14.988999999999969,
    },
    {
      timestamp: "2021-10-29T22:15:00Z",
      value: 107,
    },
    {
      timestamp: "2021-10-29T22:20:00Z",
      value: 100.999,
    },
    {
      timestamp: "2021-10-29T22:25:00Z",
      value: 94.99799999999999,
    },
    {
      timestamp: "2021-10-29T22:30:00Z",
      value: 81.99699999999999,
    },
    {
      timestamp: "2021-10-29T22:35:00Z",
      value: 65.99599999999998,
    },
    {
      timestamp: "2021-10-29T22:40:00Z",
      value: 57.99499999999998,
    },
    {
      timestamp: "2021-10-29T22:45:00Z",
      value: 46.993999999999986,
    },
    {
      timestamp: "2021-10-29T22:50:00Z",
      value: 45.99299999999999,
    },
    {
      timestamp: "2021-10-29T22:55:00Z",
      value: 41.99199999999999,
    },
    {
      timestamp: "2021-10-29T23:00:00Z",
      value: 31.990999999999993,
    },
    {
      timestamp: "2021-10-29T23:05:00Z",
      value: 26.98999999999999,
    },
    {
      timestamp: "2021-10-29T23:10:00Z",
      value: 24.98899999999999,
    },
    {
      timestamp: "2021-10-29T23:15:00Z",
      value: 16.987999999999992,
    },
    {
      timestamp: "2021-10-29T23:20:00Z",
      value: 0.9869999999999912,
    },
    {
      timestamp: "2021-10-29T23:25:00Z",
      value: -1.0140000000000087,
    },
    {
      timestamp: "2021-10-29T23:30:00Z",
      value: 93,
    },
    {
      timestamp: "2021-10-29T23:35:00Z",
      value: 92.999,
    },
    {
      timestamp: "2021-10-29T23:40:00Z",
      value: 78.99799999999999,
    },
    {
      timestamp: "2021-10-29T23:45:00Z",
      value: 63.99699999999999,
    },
    {
      timestamp: "2021-10-29T23:50:00Z",
      value: 54.995999999999995,
    },
    {
      timestamp: "2021-10-29T23:55:00Z",
      value: 54.995,
    },
    {
      timestamp: "2021-10-30T00:00:00Z",
      value: 50.994,
    },
    {
      timestamp: "2021-10-30T00:05:00Z",
      value: 47.993,
    },
    {
      timestamp: "2021-10-30T00:10:00Z",
      value: 28.992,
    },
    {
      timestamp: "2021-10-30T00:15:00Z",
      value: 28.991,
    },
    {
      timestamp: "2021-10-30T00:20:00Z",
      value: 12.989999999999998,
    },
    {
      timestamp: "2021-10-30T00:25:00Z",
      value: 3.988999999999999,
    },
    {
      timestamp: "2021-10-30T00:30:00Z",
      value: -1.0120000000000013,
    },
    {
      timestamp: "2021-10-30T00:35:00Z",
      value: 167,
    },
    {
      timestamp: "2021-10-30T00:40:00Z",
      value: 163.999,
    },
    {
      timestamp: "2021-10-30T00:45:00Z",
      value: 156.998,
    },
    {
      timestamp: "2021-10-30T00:50:00Z",
      value: 148.99699999999999,
    },
    {
      timestamp: "2021-10-30T00:55:00Z",
      value: 129.99599999999998,
    },
    {
      timestamp: "2021-10-30T01:00:00Z",
      value: 126.99499999999998,
    },
    {
      timestamp: "2021-10-30T01:05:00Z",
      value: 123.99399999999997,
    },
    {
      timestamp: "2021-10-30T01:10:00Z",
      value: 117.99299999999997,
    },
    {
      timestamp: "2021-10-30T01:15:00Z",
      value: 109.99199999999996,
    },
    {
      timestamp: "2021-10-30T01:20:00Z",
      value: 92.99099999999996,
    },
    {
      timestamp: "2021-10-30T01:25:00Z",
      value: 73.98999999999995,
    },
    {
      timestamp: "2021-10-30T01:30:00Z",
      value: 55.98899999999995,
    },
    {
      timestamp: "2021-10-30T01:35:00Z",
      value: 47.98799999999995,
    },
    {
      timestamp: "2021-10-30T01:40:00Z",
      value: 40.98699999999995,
    },
    {
      timestamp: "2021-10-30T01:45:00Z",
      value: 40.985999999999954,
    },
    {
      timestamp: "2021-10-30T01:50:00Z",
      value: 28.984999999999957,
    },
    {
      timestamp: "2021-10-30T01:55:00Z",
      value: 25.983999999999956,
    },
    {
      timestamp: "2021-10-30T02:00:00Z",
      value: 13.982999999999956,
    },
    {
      timestamp: "2021-10-30T02:05:00Z",
      value: 0.9819999999999567,
    },
  ];

  const values_2 = [
    {
      timestamp: "2020-04-07T09:55:00Z",
      value: 98.999,
    },
    {
      timestamp: "2020-04-07T10:00:00Z",
      value: 91.99799999999999,
    },
    {
      timestamp: "2020-04-07T10:05:00Z",
      value: 90.99699999999999,
    },
    {
      timestamp: "2020-04-07T10:10:00Z",
      value: 73.99599999999998,
    },
    {
      timestamp: "2020-04-07T10:15:00Z",
      value: 71.99499999999998,
    },
    {
      timestamp: "2020-04-07T10:20:00Z",
      value: 62.99399999999998,
    },
    {
      timestamp: "2020-04-07T10:25:00Z",
      value: 62.99299999999998,
    },
    {
      timestamp: "2020-04-07T10:30:00Z",
      value: 59.99199999999998,
    },
    {
      timestamp: "2020-04-07T10:35:00Z",
      value: 48.990999999999985,
    },
    {
      timestamp: "2020-04-07T10:40:00Z",
      value: 41.98999999999999,
    },
    {
      timestamp: "2020-04-07T10:45:00Z",
      value: 23.988999999999987,
    },
    {
      timestamp: "2020-04-07T10:50:00Z",
      value: 21.987999999999985,
    },
    {
      timestamp: "2020-04-07T10:55:00Z",
      value: 17.986999999999984,
    },
    {
      timestamp: "2020-04-07T11:00:00Z",
      value: 0.9859999999999829,
    },
    {
      timestamp: "2020-04-07T11:05:00Z",
      value: -16.01500000000002,
    },
    {
      timestamp: "2020-04-07T11:10:00Z",
      value: 159,
    },
    {
      timestamp: "2020-04-07T11:15:00Z",
      value: 152.999,
    },
    {
      timestamp: "2020-04-07T11:20:00Z",
      value: 138.998,
    },
    {
      timestamp: "2020-04-07T11:25:00Z",
      value: 127.99699999999999,
    },
    {
      timestamp: "2020-04-07T11:30:00Z",
      value: 126.99599999999998,
    },
    {
      timestamp: "2020-04-07T11:35:00Z",
      value: 119.99499999999998,
    },
    {
      timestamp: "2020-04-07T11:40:00Z",
      value: 100.99399999999997,
    },
    {
      timestamp: "2020-04-07T11:45:00Z",
      value: 94.99299999999997,
    },
    {
      timestamp: "2020-04-07T11:50:00Z",
      value: 90.99199999999996,
    },
    {
      timestamp: "2020-04-07T11:55:00Z",
      value: 89.99099999999996,
    },
    {
      timestamp: "2020-04-07T12:00:00Z",
      value: 78.98999999999995,
    },
    {
      timestamp: "2020-04-07T12:05:00Z",
      value: 71.98899999999995,
    },
    {
      timestamp: "2020-04-07T12:10:00Z",
      value: 57.98799999999995,
    },
    {
      timestamp: "2020-04-07T12:15:00Z",
      value: 52.98699999999995,
    },
    {
      timestamp: "2020-04-07T12:20:00Z",
      value: 51.985999999999954,
    },
    {
      timestamp: "2020-04-07T12:25:00Z",
      value: 35.98499999999996,
    },
    {
      timestamp: "2020-04-07T12:30:00Z",
      value: 18.983999999999956,
    },
    {
      timestamp: "2020-04-07T12:35:00Z",
      value: 16.982999999999954,
    },
    {
      timestamp: "2020-04-07T12:40:00Z",
      value: 104,
    },
    {
      timestamp: "2020-04-07T12:45:00Z",
      value: 88.999,
    },
    {
      timestamp: "2020-04-07T12:50:00Z",
      value: 77.99799999999999,
    },
    {
      timestamp: "2020-04-07T12:55:00Z",
      value: 77.99699999999999,
    },
    {
      timestamp: "2020-04-07T13:00:00Z",
      value: 60.99599999999998,
    },
    {
      timestamp: "2020-04-07T13:05:00Z",
      value: 58.99499999999998,
    },
    {
      timestamp: "2020-04-07T13:10:00Z",
      value: 50.993999999999986,
    },
    {
      timestamp: "2020-04-07T13:15:00Z",
      value: 35.99299999999999,
    },
    {
      timestamp: "2020-04-07T13:20:00Z",
      value: 32.99199999999999,
    },
    {
      timestamp: "2020-04-07T13:25:00Z",
      value: 17.990999999999993,
    },
    {
      timestamp: "2020-04-07T13:30:00Z",
      value: 10.989999999999991,
    },
    {
      timestamp: "2020-04-07T13:35:00Z",
      value: 8.988999999999992,
    },
    {
      timestamp: "2020-04-07T13:40:00Z",
      value: -7.012000000000009,
    },
    {
      timestamp: "2020-04-07T13:45:00Z",
      value: -13.013000000000009,
    },
    {
      timestamp: "2020-04-07T13:50:00Z",
      value: -25.01400000000001,
    },
    {
      timestamp: "2020-04-07T13:55:00Z",
      value: -33.01500000000001,
    },
    {
      timestamp: "2020-04-07T14:00:00Z",
      value: -48.016000000000005,
    },
    {
      timestamp: "2020-04-07T14:05:00Z",
      value: -65.01700000000001,
    },
    {
      timestamp: "2020-04-07T14:10:00Z",
      value: -84.01800000000001,
    },
    {
      timestamp: "2020-04-07T14:15:00Z",
      value: 118,
    },
    {
      timestamp: "2020-04-07T14:20:00Z",
      value: 98.999,
    },
    {
      timestamp: "2020-04-07T14:25:00Z",
      value: 89.99799999999999,
    },
    {
      timestamp: "2020-04-07T14:30:00Z",
      value: 82.99699999999999,
    },
    {
      timestamp: "2020-04-07T14:35:00Z",
      value: 70.99599999999998,
    },
    {
      timestamp: "2020-04-07T14:40:00Z",
      value: 62.99499999999998,
    },
    {
      timestamp: "2020-04-07T14:45:00Z",
      value: 46.993999999999986,
    },
    {
      timestamp: "2020-04-07T14:50:00Z",
      value: 40.99299999999999,
    },
    {
      timestamp: "2020-04-07T14:55:00Z",
      value: 34.99199999999999,
    },
    {
      timestamp: "2020-04-07T15:00:00Z",
      value: 29.99099999999999,
    },
    {
      timestamp: "2020-04-07T15:05:00Z",
      value: 18.989999999999988,
    },
    {
      timestamp: "2020-04-07T15:10:00Z",
      value: -0.011000000000013443,
    },
    {
      timestamp: "2020-04-07T15:15:00Z",
      value: 168,
    },
    {
      timestamp: "2020-04-07T15:20:00Z",
      value: 167.999,
    },
    {
      timestamp: "2020-04-07T15:25:00Z",
      value: 157.998,
    },
    {
      timestamp: "2020-04-07T15:30:00Z",
      value: 144.99699999999999,
    },
    {
      timestamp: "2020-04-07T15:35:00Z",
      value: 136.99599999999998,
    },
    {
      timestamp: "2020-04-07T15:40:00Z",
      value: 127.99499999999998,
    },
    {
      timestamp: "2020-04-07T15:45:00Z",
      value: 123.99399999999997,
    },
    {
      timestamp: "2020-04-07T15:50:00Z",
      value: 118.99299999999997,
    },
    {
      timestamp: "2020-04-07T15:55:00Z",
      value: 106.99199999999996,
    },
    {
      timestamp: "2020-04-07T16:00:00Z",
      value: 95.99099999999996,
    },
    {
      timestamp: "2020-04-07T16:05:00Z",
      value: 94.98999999999995,
    },
    {
      timestamp: "2020-04-07T16:10:00Z",
      value: 75.98899999999995,
    },
    {
      timestamp: "2020-04-07T16:15:00Z",
      value: 60.98799999999995,
    },
    {
      timestamp: "2020-04-07T16:20:00Z",
      value: 59.98699999999995,
    },
    {
      timestamp: "2020-04-07T16:25:00Z",
      value: 47.985999999999954,
    },
    {
      timestamp: "2020-04-07T16:30:00Z",
      value: 28.984999999999953,
    },
    {
      timestamp: "2020-04-07T16:35:00Z",
      value: 13.983999999999954,
    },
    {
      timestamp: "2020-04-07T16:40:00Z",
      value: 0.9829999999999544,
    },
    {
      timestamp: "2020-04-07T16:45:00Z",
      value: -18.018000000000047,
    },
    {
      timestamp: "2020-04-07T16:50:00Z",
      value: 150,
    },
    {
      timestamp: "2020-04-07T16:55:00Z",
      value: 133.999,
    },
    {
      timestamp: "2020-04-07T17:00:00Z",
      value: 125.99799999999999,
    },
    {
      timestamp: "2020-04-07T17:05:00Z",
      value: 111.99699999999999,
    },
    {
      timestamp: "2020-04-07T17:10:00Z",
      value: 95.99599999999998,
    },
    {
      timestamp: "2020-04-07T17:15:00Z",
      value: 84.99499999999998,
    },
    {
      timestamp: "2020-04-07T17:20:00Z",
      value: 82.99399999999997,
    },
    {
      timestamp: "2020-04-07T17:25:00Z",
      value: 65.99299999999997,
    },
    {
      timestamp: "2020-04-07T17:30:00Z",
      value: 48.99199999999996,
    },
    {
      timestamp: "2020-04-07T17:35:00Z",
      value: 36.990999999999964,
    },
    {
      timestamp: "2020-04-07T17:40:00Z",
      value: 27.989999999999966,
    },
    {
      timestamp: "2020-04-07T17:45:00Z",
      value: 25.988999999999965,
    },
    {
      timestamp: "2020-04-07T17:50:00Z",
      value: 8.987999999999964,
    },
    {
      timestamp: "2020-04-07T17:55:00Z",
      value: -10.013000000000037,
    },
    {
      timestamp: "2020-04-07T18:00:00Z",
      value: 94,
    },
    {
      timestamp: "2020-04-07T18:05:00Z",
      value: 86.999,
    },
    {
      timestamp: "2020-04-07T18:10:00Z",
      value: 74.99799999999999,
    },
    {
      timestamp: "2020-04-07T18:15:00Z",
      value: 71.99699999999999,
    },
    {
      timestamp: "2020-04-07T18:20:00Z",
      value: 53.99599999999998,
    },
    {
      timestamp: "2020-04-07T18:25:00Z",
      value: 47.99499999999998,
    },
    {
      timestamp: "2020-04-07T18:30:00Z",
      value: 40.993999999999986,
    },
    {
      timestamp: "2020-04-07T18:35:00Z",
      value: 31.992999999999988,
    },
    {
      timestamp: "2020-04-07T18:40:00Z",
      value: 28.991999999999987,
    },
    {
      timestamp: "2020-04-07T18:45:00Z",
      value: 22.990999999999985,
    },
    {
      timestamp: "2020-04-07T18:50:00Z",
      value: 19.989999999999984,
    },
    {
      timestamp: "2020-04-07T18:55:00Z",
      value: 18.988999999999983,
    },
    {
      timestamp: "2020-04-07T19:00:00Z",
      value: 18.987999999999982,
    },
    {
      timestamp: "2020-04-07T19:05:00Z",
      value: 128,
    },
    {
      timestamp: "2020-04-07T19:10:00Z",
      value: 113.999,
    },
    {
      timestamp: "2020-04-07T19:15:00Z",
      value: 106.99799999999999,
    },
    {
      timestamp: "2020-04-07T19:20:00Z",
      value: 96.99699999999999,
    },
    {
      timestamp: "2020-04-07T19:25:00Z",
      value: 90.99599999999998,
    },
    {
      timestamp: "2020-04-07T19:30:00Z",
      value: 72.99499999999998,
    },
    {
      timestamp: "2020-04-07T19:35:00Z",
      value: 54.99399999999997,
    },
    {
      timestamp: "2020-04-07T19:40:00Z",
      value: 48.992999999999974,
    },
    {
      timestamp: "2020-04-07T19:45:00Z",
      value: 29.991999999999972,
    },
    {
      timestamp: "2020-04-07T19:50:00Z",
      value: 15.990999999999973,
    },
    {
      timestamp: "2020-04-07T19:55:00Z",
      value: -1.0100000000000282,
    },
    {
      timestamp: "2020-04-07T20:00:00Z",
      value: -3.011000000000028,
    },
    {
      timestamp: "2020-04-07T20:05:00Z",
      value: 189,
    },
    {
      timestamp: "2020-04-07T20:10:00Z",
      value: 174.999,
    },
    {
      timestamp: "2020-04-07T20:15:00Z",
      value: 166.998,
    },
    {
      timestamp: "2020-04-07T20:20:00Z",
      value: 156.99699999999999,
    },
    {
      timestamp: "2020-04-07T20:25:00Z",
      value: 143.99599999999998,
    },
    {
      timestamp: "2020-04-07T20:30:00Z",
      value: 128.99499999999998,
    },
    {
      timestamp: "2020-04-07T20:35:00Z",
      value: 111.99399999999997,
    },
    {
      timestamp: "2020-04-07T20:40:00Z",
      value: 101.99299999999997,
    },
    {
      timestamp: "2020-04-07T20:45:00Z",
      value: 92.99199999999996,
    },
    {
      timestamp: "2020-04-07T20:50:00Z",
      value: 85.99099999999996,
    },
    {
      timestamp: "2020-04-07T20:55:00Z",
      value: 74.98999999999995,
    },
    {
      timestamp: "2020-04-07T21:00:00Z",
      value: 57.98899999999995,
    },
    {
      timestamp: "2020-04-07T21:05:00Z",
      value: 57.98799999999995,
    },
    {
      timestamp: "2020-04-07T21:10:00Z",
      value: 42.98699999999995,
    },
    {
      timestamp: "2020-04-07T21:15:00Z",
      value: 42.985999999999954,
    },
    {
      timestamp: "2020-04-07T21:20:00Z",
      value: 33.98499999999996,
    },
    {
      timestamp: "2020-04-07T21:25:00Z",
      value: 31.983999999999956,
    },
    {
      timestamp: "2020-04-07T21:30:00Z",
      value: 31.982999999999954,
    },
    {
      timestamp: "2020-04-07T21:35:00Z",
      value: 25.981999999999953,
    },
    {
      timestamp: "2020-04-07T21:40:00Z",
      value: 16.980999999999952,
    },
    {
      timestamp: "2020-04-07T21:45:00Z",
      value: 14.979999999999952,
    },
    {
      timestamp: "2020-04-07T21:50:00Z",
      value: 109,
    },
    {
      timestamp: "2020-04-07T21:55:00Z",
      value: 91.999,
    },
    {
      timestamp: "2020-04-07T22:00:00Z",
      value: 82.99799999999999,
    },
    {
      timestamp: "2020-04-07T22:05:00Z",
      value: 74.99699999999999,
    },
    {
      timestamp: "2020-04-07T22:10:00Z",
      value: 56.99599999999998,
    },
    {
      timestamp: "2020-04-07T22:15:00Z",
      value: 45.99499999999998,
    },
    {
      timestamp: "2020-04-07T22:20:00Z",
      value: 40.993999999999986,
    },
    {
      timestamp: "2020-04-07T22:25:00Z",
      value: 32.99299999999999,
    },
    {
      timestamp: "2020-04-07T22:30:00Z",
      value: 20.99199999999999,
    },
    {
      timestamp: "2020-04-07T22:35:00Z",
      value: 113,
    },
    {
      timestamp: "2020-04-07T22:40:00Z",
      value: 94.999,
    },
    {
      timestamp: "2020-04-07T22:45:00Z",
      value: 82.99799999999999,
    },
    {
      timestamp: "2020-04-07T22:50:00Z",
      value: 81.99699999999999,
    },
    {
      timestamp: "2020-04-07T22:55:00Z",
      value: 66.99599999999998,
    },
    {
      timestamp: "2020-04-07T23:00:00Z",
      value: 51.99499999999998,
    },
    {
      timestamp: "2020-04-07T23:05:00Z",
      value: 41.993999999999986,
    },
    {
      timestamp: "2020-04-07T23:10:00Z",
      value: 41.99299999999999,
    },
    {
      timestamp: "2020-04-07T23:15:00Z",
      value: 28.99199999999999,
    },
    {
      timestamp: "2020-04-07T23:20:00Z",
      value: 23.99099999999999,
    },
    {
      timestamp: "2020-04-07T23:25:00Z",
      value: 21.989999999999988,
    },
    {
      timestamp: "2020-04-07T23:30:00Z",
      value: 21.988999999999987,
    },
    {
      timestamp: "2020-04-07T23:35:00Z",
      value: 9.987999999999987,
    },
    {
      timestamp: "2020-04-07T23:40:00Z",
      value: 3.9869999999999868,
    },
    {
      timestamp: "2020-04-07T23:45:00Z",
      value: -11.014000000000014,
    },
    {
      timestamp: "2020-04-07T23:50:00Z",
      value: -25.015000000000015,
    },
    {
      timestamp: "2020-04-07T23:55:00Z",
      value: -27.016000000000016,
    },
    {
      timestamp: "2020-04-08T00:00:00Z",
      value: 138,
    },
    {
      timestamp: "2020-04-08T00:05:00Z",
      value: 124.999,
    },
    {
      timestamp: "2020-04-08T00:10:00Z",
      value: 109.99799999999999,
    },
    {
      timestamp: "2020-04-08T00:15:00Z",
      value: 99.99699999999999,
    },
    {
      timestamp: "2020-04-08T00:20:00Z",
      value: 99.99599999999998,
    },
    {
      timestamp: "2020-04-08T00:25:00Z",
      value: 90.99499999999998,
    },
    {
      timestamp: "2020-04-08T00:30:00Z",
      value: 80.99399999999997,
    },
    {
      timestamp: "2020-04-08T00:35:00Z",
      value: 65.99299999999997,
    },
    {
      timestamp: "2020-04-08T00:40:00Z",
      value: 63.99199999999997,
    },
    {
      timestamp: "2020-04-08T00:45:00Z",
      value: 45.99099999999997,
    },
    {
      timestamp: "2020-04-08T00:50:00Z",
      value: 38.989999999999974,
    },
    {
      timestamp: "2020-04-08T00:55:00Z",
      value: 38.988999999999976,
    },
    {
      timestamp: "2020-04-08T01:00:00Z",
      value: 19.987999999999975,
    },
    {
      timestamp: "2020-04-08T01:05:00Z",
      value: 11.986999999999975,
    },
    {
      timestamp: "2020-04-08T01:10:00Z",
      value: 3.985999999999976,
    },
    {
      timestamp: "2020-04-08T01:15:00Z",
      value: 179,
    },
    {
      timestamp: "2020-04-08T01:20:00Z",
      value: 178.999,
    },
    {
      timestamp: "2020-04-08T01:25:00Z",
      value: 175.998,
    },
    {
      timestamp: "2020-04-08T01:30:00Z",
      value: 158.99699999999999,
    },
    {
      timestamp: "2020-04-08T01:35:00Z",
      value: 142.99599999999998,
    },
    {
      timestamp: "2020-04-08T01:40:00Z",
      value: 130.99499999999998,
    },
    {
      timestamp: "2020-04-08T01:45:00Z",
      value: 130.99399999999997,
    },
    {
      timestamp: "2020-04-08T01:50:00Z",
      value: 122.99299999999997,
    },
    {
      timestamp: "2020-04-08T01:55:00Z",
      value: 109.99199999999996,
    },
    {
      timestamp: "2020-04-08T02:00:00Z",
      value: 98.99099999999996,
    },
    {
      timestamp: "2020-04-08T02:05:00Z",
      value: 81.98999999999995,
    },
    {
      timestamp: "2020-04-08T02:10:00Z",
      value: 78.98899999999995,
    },
    {
      timestamp: "2020-04-08T02:15:00Z",
      value: 72.98799999999994,
    },
    {
      timestamp: "2020-04-08T02:20:00Z",
      value: 56.98699999999994,
    },
    {
      timestamp: "2020-04-08T02:25:00Z",
      value: 45.98599999999994,
    },
    {
      timestamp: "2020-04-08T02:30:00Z",
      value: 41.98499999999994,
    },
    {
      timestamp: "2020-04-08T02:35:00Z",
      value: 40.983999999999945,
    },
    {
      timestamp: "2020-04-08T02:40:00Z",
      value: 26.982999999999947,
    },
    {
      timestamp: "2020-04-08T02:45:00Z",
      value: 13.981999999999948,
    },
    {
      timestamp: "2020-04-08T02:50:00Z",
      value: 0.9809999999999484,
    },
    {
      timestamp: "2020-04-08T02:55:00Z",
      value: -13.020000000000051,
    },
    {
      timestamp: "2020-04-08T03:00:00Z",
      value: -26.02100000000005,
    },
    {
      timestamp: "2020-04-08T03:05:00Z",
      value: -38.02200000000005,
    },
    {
      timestamp: "2020-04-08T03:10:00Z",
      value: 103,
    },
    {
      timestamp: "2020-04-08T03:15:00Z",
      value: 84.999,
    },
    {
      timestamp: "2020-04-08T03:20:00Z",
      value: 73.99799999999999,
    },
    {
      timestamp: "2020-04-08T03:25:00Z",
      value: 60.99699999999999,
    },
    {
      timestamp: "2020-04-08T03:30:00Z",
      value: 47.995999999999995,
    },
    {
      timestamp: "2020-04-08T03:35:00Z",
      value: 43.995,
    },
    {
      timestamp: "2020-04-08T03:40:00Z",
      value: 29.994,
    },
    {
      timestamp: "2020-04-08T03:45:00Z",
      value: 14.993,
    },
    {
      timestamp: "2020-04-08T03:50:00Z",
      value: 2.992000000000001,
    },
    {
      timestamp: "2020-04-08T03:55:00Z",
      value: 187,
    },
    {
      timestamp: "2020-04-08T04:00:00Z",
      value: 186.999,
    },
    {
      timestamp: "2020-04-08T04:05:00Z",
      value: 168.998,
    },
    {
      timestamp: "2020-04-08T04:10:00Z",
      value: 150.99699999999999,
    },
    {
      timestamp: "2020-04-08T04:15:00Z",
      value: 138.99599999999998,
    },
    {
      timestamp: "2020-04-08T04:20:00Z",
      value: 122.99499999999998,
    },
    {
      timestamp: "2020-04-08T04:25:00Z",
      value: 111.99399999999997,
    },
    {
      timestamp: "2020-04-08T04:30:00Z",
      value: 93.99299999999997,
    },
    {
      timestamp: "2020-04-08T04:35:00Z",
      value: 74.99199999999996,
    },
    {
      timestamp: "2020-04-08T04:40:00Z",
      value: 55.99099999999996,
    },
    {
      timestamp: "2020-04-08T04:45:00Z",
      value: 46.98999999999996,
    },
    {
      timestamp: "2020-04-08T04:50:00Z",
      value: 44.98899999999996,
    },
    {
      timestamp: "2020-04-08T04:55:00Z",
      value: 41.987999999999964,
    },
    {
      timestamp: "2020-04-08T05:00:00Z",
      value: 30.986999999999966,
    },
    {
      timestamp: "2020-04-08T05:05:00Z",
      value: 24.985999999999965,
    },
    {
      timestamp: "2020-04-08T05:10:00Z",
      value: 5.984999999999964,
    },
    {
      timestamp: "2020-04-08T05:15:00Z",
      value: -3.0160000000000355,
    },
    {
      timestamp: "2020-04-08T05:20:00Z",
      value: 113,
    },
    {
      timestamp: "2020-04-08T05:25:00Z",
      value: 111.999,
    },
    {
      timestamp: "2020-04-08T05:30:00Z",
      value: 97.99799999999999,
    },
    {
      timestamp: "2020-04-08T05:35:00Z",
      value: 85.99699999999999,
    },
    {
      timestamp: "2020-04-08T05:40:00Z",
      value: 69.99599999999998,
    },
    {
      timestamp: "2020-04-08T05:45:00Z",
      value: 67.99499999999998,
    },
    {
      timestamp: "2020-04-08T05:50:00Z",
      value: 63.99399999999998,
    },
    {
      timestamp: "2020-04-08T05:55:00Z",
      value: 58.99299999999998,
    },
    {
      timestamp: "2020-04-08T06:00:00Z",
      value: 52.99199999999998,
    },
    {
      timestamp: "2020-04-08T06:05:00Z",
      value: 36.990999999999985,
    },
    {
      timestamp: "2020-04-08T06:10:00Z",
      value: 29.989999999999984,
    },
    {
      timestamp: "2020-04-08T06:15:00Z",
      value: 23.988999999999983,
    },
    {
      timestamp: "2020-04-08T06:20:00Z",
      value: 14.987999999999984,
    },
    {
      timestamp: "2020-04-08T06:25:00Z",
      value: 13.986999999999984,
    },
    {
      timestamp: "2020-04-08T06:30:00Z",
      value: 145,
    },
    {
      timestamp: "2020-04-08T06:35:00Z",
      value: 125.999,
    },
    {
      timestamp: "2020-04-08T06:40:00Z",
      value: 117.99799999999999,
    },
    {
      timestamp: "2020-04-08T06:45:00Z",
      value: 99.99699999999999,
    },
    {
      timestamp: "2020-04-08T06:50:00Z",
      value: 89.99599999999998,
    },
    {
      timestamp: "2020-04-08T06:55:00Z",
      value: 70.99499999999998,
    },
    {
      timestamp: "2020-04-08T07:00:00Z",
      value: 56.99399999999998,
    },
    {
      timestamp: "2020-04-08T07:05:00Z",
      value: 47.99299999999998,
    },
    {
      timestamp: "2020-04-08T07:10:00Z",
      value: 38.99199999999998,
    },
    {
      timestamp: "2020-04-08T07:15:00Z",
      value: 20.990999999999982,
    },
    {
      timestamp: "2020-04-08T07:20:00Z",
      value: 11.989999999999982,
    },
    {
      timestamp: "2020-04-08T07:25:00Z",
      value: 137,
    },
    {
      timestamp: "2020-04-08T07:30:00Z",
      value: 135.999,
    },
    {
      timestamp: "2020-04-08T07:35:00Z",
      value: 118.99799999999999,
    },
    {
      timestamp: "2020-04-08T07:40:00Z",
      value: 116.99699999999999,
    },
    {
      timestamp: "2020-04-08T07:45:00Z",
      value: 105.99599999999998,
    },
    {
      timestamp: "2020-04-08T07:50:00Z",
      value: 104.99499999999998,
    },
    {
      timestamp: "2020-04-08T07:55:00Z",
      value: 94.99399999999997,
    },
    {
      timestamp: "2020-04-08T08:00:00Z",
      value: 94.99299999999997,
    },
    {
      timestamp: "2020-04-08T08:05:00Z",
      value: 84.99199999999996,
    },
    {
      timestamp: "2020-04-08T08:10:00Z",
      value: 65.99099999999996,
    },
    {
      timestamp: "2020-04-08T08:15:00Z",
      value: 53.98999999999996,
    },
    {
      timestamp: "2020-04-08T08:20:00Z",
      value: 34.98899999999996,
    },
    {
      timestamp: "2020-04-08T08:25:00Z",
      value: 30.98799999999996,
    },
    {
      timestamp: "2020-04-08T08:30:00Z",
      value: 17.98699999999996,
    },
    {
      timestamp: "2020-04-08T08:35:00Z",
      value: 9.98599999999996,
    },
    {
      timestamp: "2020-04-08T08:40:00Z",
      value: -6.015000000000041,
    },
    {
      timestamp: "2020-04-08T08:45:00Z",
      value: -25.01600000000004,
    },
    {
      timestamp: "2020-04-08T08:50:00Z",
      value: 122,
    },
    {
      timestamp: "2020-04-08T08:55:00Z",
      value: 106.999,
    },
    {
      timestamp: "2020-04-08T09:00:00Z",
      value: 104.99799999999999,
    },
    {
      timestamp: "2020-04-08T09:05:00Z",
      value: 93.99699999999999,
    },
    {
      timestamp: "2020-04-08T09:10:00Z",
      value: 80.99599999999998,
    },
    {
      timestamp: "2020-04-08T09:15:00Z",
      value: 74.99499999999998,
    },
    {
      timestamp: "2020-04-08T09:20:00Z",
      value: 55.99399999999997,
    },
    {
      timestamp: "2020-04-08T09:25:00Z",
      value: 38.99299999999997,
    },
    {
      timestamp: "2020-04-08T09:30:00Z",
      value: 34.99199999999997,
    },
    {
      timestamp: "2020-04-08T09:35:00Z",
      value: 33.99099999999997,
    },
    {
      timestamp: "2020-04-08T09:40:00Z",
      value: 19.989999999999974,
    },
    {
      timestamp: "2020-04-08T09:45:00Z",
      value: 16.988999999999972,
    },
    {
      timestamp: "2020-04-08T09:50:00Z",
      value: 188,
    },
    {
      timestamp: "2020-04-08T09:55:00Z",
      value: 179.999,
    },
    {
      timestamp: "2020-04-08T10:00:00Z",
      value: 177.998,
    },
    {
      timestamp: "2020-04-08T10:05:00Z",
      value: 166.99699999999999,
    },
    {
      timestamp: "2020-04-08T10:10:00Z",
      value: 164.99599999999998,
    },
    {
      timestamp: "2020-04-08T10:15:00Z",
      value: 155.99499999999998,
    },
    {
      timestamp: "2020-04-08T10:20:00Z",
      value: 142.99399999999997,
    },
    {
      timestamp: "2020-04-08T10:25:00Z",
      value: 136.99299999999997,
    },
    {
      timestamp: "2020-04-08T10:30:00Z",
      value: 136.99199999999996,
    },
    {
      timestamp: "2020-04-08T10:35:00Z",
      value: 128.99099999999996,
    },
    {
      timestamp: "2020-04-08T10:40:00Z",
      value: 112.98999999999995,
    },
    {
      timestamp: "2020-04-08T10:45:00Z",
      value: 111.98899999999995,
    },
    {
      timestamp: "2020-04-08T10:50:00Z",
      value: 98.98799999999994,
    },
    {
      timestamp: "2020-04-08T10:55:00Z",
      value: 84.98699999999994,
    },
    {
      timestamp: "2020-04-08T11:00:00Z",
      value: 67.98599999999993,
    },
    {
      timestamp: "2020-04-08T11:05:00Z",
      value: 48.98499999999993,
    },
    {
      timestamp: "2020-04-08T11:10:00Z",
      value: 38.98399999999993,
    },
    {
      timestamp: "2020-04-08T11:15:00Z",
      value: 23.982999999999933,
    },
    {
      timestamp: "2020-04-08T11:20:00Z",
      value: 11.981999999999934,
    },
    {
      timestamp: "2020-04-08T11:25:00Z",
      value: -3.019000000000066,
    },
    {
      timestamp: "2020-04-08T11:30:00Z",
      value: -16.020000000000067,
    },
    {
      timestamp: "2020-04-08T11:35:00Z",
      value: 90,
    },
    {
      timestamp: "2020-04-08T11:40:00Z",
      value: 86.999,
    },
    {
      timestamp: "2020-04-08T11:45:00Z",
      value: 81.99799999999999,
    },
    {
      timestamp: "2020-04-08T11:50:00Z",
      value: 68.99699999999999,
    },
    {
      timestamp: "2020-04-08T11:55:00Z",
      value: 55.99599999999999,
    },
    {
      timestamp: "2020-04-08T12:00:00Z",
      value: 43.99499999999999,
    },
    {
      timestamp: "2020-04-08T12:05:00Z",
      value: 41.99399999999999,
    },
    {
      timestamp: "2020-04-08T12:10:00Z",
      value: 25.99299999999999,
    },
    {
      timestamp: "2020-04-08T12:15:00Z",
      value: 10.991999999999992,
    },
    {
      timestamp: "2020-04-08T12:20:00Z",
      value: 1.9909999999999926,
    },
    {
      timestamp: "2020-04-08T12:25:00Z",
      value: 130,
    },
    {
      timestamp: "2020-04-08T12:30:00Z",
      value: 114.999,
    },
    {
      timestamp: "2020-04-08T12:35:00Z",
      value: 113.99799999999999,
    },
    {
      timestamp: "2020-04-08T12:40:00Z",
      value: 94.99699999999999,
    },
    {
      timestamp: "2020-04-08T12:45:00Z",
      value: 80.99599999999998,
    },
    {
      timestamp: "2020-04-08T12:50:00Z",
      value: 80.99499999999998,
    },
    {
      timestamp: "2020-04-08T12:55:00Z",
      value: 77.99399999999997,
    },
    {
      timestamp: "2020-04-08T13:00:00Z",
      value: 59.99299999999997,
    },
    {
      timestamp: "2020-04-08T13:05:00Z",
      value: 45.99199999999997,
    },
    {
      timestamp: "2020-04-08T13:10:00Z",
      value: 38.99099999999997,
    },
    {
      timestamp: "2020-04-08T13:15:00Z",
      value: 31.98999999999997,
    },
    {
      timestamp: "2020-04-08T13:20:00Z",
      value: 16.98899999999997,
    },
    {
      timestamp: "2020-04-08T13:25:00Z",
      value: 2.9879999999999693,
    },
    {
      timestamp: "2020-04-08T13:30:00Z",
      value: -13.013000000000032,
    },
    {
      timestamp: "2020-04-08T13:35:00Z",
      value: 193,
    },
    {
      timestamp: "2020-04-08T13:40:00Z",
      value: 174.999,
    },
    {
      timestamp: "2020-04-08T13:45:00Z",
      value: 174.998,
    },
    {
      timestamp: "2020-04-08T13:50:00Z",
      value: 163.99699999999999,
    },
    {
      timestamp: "2020-04-08T13:55:00Z",
      value: 144.99599999999998,
    },
    {
      timestamp: "2020-04-08T14:00:00Z",
      value: 128.99499999999998,
    },
    {
      timestamp: "2020-04-08T14:05:00Z",
      value: 125.99399999999997,
    },
    {
      timestamp: "2020-04-08T14:10:00Z",
      value: 110.99299999999997,
    },
    {
      timestamp: "2020-04-08T14:15:00Z",
      value: 97.99199999999996,
    },
    {
      timestamp: "2020-04-08T14:20:00Z",
      value: 89.99099999999996,
    },
    {
      timestamp: "2020-04-08T14:25:00Z",
      value: 76.98999999999995,
    },
    {
      timestamp: "2020-04-08T14:30:00Z",
      value: 69.98899999999995,
    },
    {
      timestamp: "2020-04-08T14:35:00Z",
      value: 51.98799999999994,
    },
    {
      timestamp: "2020-04-08T14:40:00Z",
      value: 34.98699999999994,
    },
    {
      timestamp: "2020-04-08T14:45:00Z",
      value: 21.98599999999994,
    },
    {
      timestamp: "2020-04-08T14:50:00Z",
      value: 4.984999999999939,
    },
    {
      timestamp: "2020-04-08T14:55:00Z",
      value: -4.01600000000006,
    },
    {
      timestamp: "2020-04-08T15:00:00Z",
      value: -9.01700000000006,
    },
    {
      timestamp: "2020-04-08T15:05:00Z",
      value: -16.01800000000006,
    },
    {
      timestamp: "2020-04-08T15:10:00Z",
      value: -26.019000000000062,
    },
    {
      timestamp: "2020-04-08T15:15:00Z",
      value: -37.02000000000006,
    },
    {
      timestamp: "2020-04-08T15:20:00Z",
      value: -41.02100000000006,
    },
    {
      timestamp: "2020-04-08T15:25:00Z",
      value: 199,
    },
    {
      timestamp: "2020-04-08T15:30:00Z",
      value: 197.999,
    },
    {
      timestamp: "2020-04-08T15:35:00Z",
      value: 195.998,
    },
    {
      timestamp: "2020-04-08T15:40:00Z",
      value: 185.99699999999999,
    },
    {
      timestamp: "2020-04-08T15:45:00Z",
      value: 176.99599999999998,
    },
    {
      timestamp: "2020-04-08T15:50:00Z",
      value: 176.99499999999998,
    },
    {
      timestamp: "2020-04-08T15:55:00Z",
      value: 167.99399999999997,
    },
    {
      timestamp: "2020-04-08T16:00:00Z",
      value: 148.99299999999997,
    },
    {
      timestamp: "2020-04-08T16:05:00Z",
      value: 140.99199999999996,
    },
    {
      timestamp: "2020-04-08T16:10:00Z",
      value: 121.99099999999996,
    },
    {
      timestamp: "2020-04-08T16:15:00Z",
      value: 106.98999999999995,
    },
    {
      timestamp: "2020-04-08T16:20:00Z",
      value: 93.98899999999995,
    },
    {
      timestamp: "2020-04-08T16:25:00Z",
      value: 79.98799999999994,
    },
    {
      timestamp: "2020-04-08T16:30:00Z",
      value: 64.98699999999994,
    },
    {
      timestamp: "2020-04-08T16:35:00Z",
      value: 49.98599999999994,
    },
    {
      timestamp: "2020-04-08T16:40:00Z",
      value: 36.98499999999994,
    },
    {
      timestamp: "2020-04-08T16:45:00Z",
      value: 23.983999999999945,
    },
    {
      timestamp: "2020-04-08T16:50:00Z",
      value: 11.982999999999945,
    },
    {
      timestamp: "2020-04-08T16:55:00Z",
      value: 0.981999999999946,
    },
    {
      timestamp: "2020-04-08T17:00:00Z",
      value: 198,
    },
    {
      timestamp: "2020-04-08T17:05:00Z",
      value: 182.999,
    },
    {
      timestamp: "2020-04-08T17:10:00Z",
      value: 175.998,
    },
    {
      timestamp: "2020-04-08T17:15:00Z",
      value: 157.99699999999999,
    },
    {
      timestamp: "2020-04-08T17:20:00Z",
      value: 143.99599999999998,
    },
    {
      timestamp: "2020-04-08T17:25:00Z",
      value: 124.99499999999998,
    },
    {
      timestamp: "2020-04-08T17:30:00Z",
      value: 118.99399999999997,
    },
    {
      timestamp: "2020-04-08T17:35:00Z",
      value: 101.99299999999997,
    },
    {
      timestamp: "2020-04-08T17:40:00Z",
      value: 97.99199999999996,
    },
    {
      timestamp: "2020-04-08T17:45:00Z",
      value: 93.99099999999996,
    },
    {
      timestamp: "2020-04-08T17:50:00Z",
      value: 84.98999999999995,
    },
    {
      timestamp: "2020-04-08T17:55:00Z",
      value: 70.98899999999995,
    },
    {
      timestamp: "2020-04-08T18:00:00Z",
      value: 52.98799999999994,
    },
    {
      timestamp: "2020-04-08T18:05:00Z",
      value: 37.986999999999945,
    },
    {
      timestamp: "2020-04-08T18:10:00Z",
      value: 31.985999999999944,
    },
    {
      timestamp: "2020-04-08T18:15:00Z",
      value: 28.984999999999943,
    },
    {
      timestamp: "2020-04-08T18:20:00Z",
      value: 24.98399999999994,
    },
    {
      timestamp: "2020-04-08T18:25:00Z",
      value: 7.98299999999994,
    },
    {
      timestamp: "2020-04-08T18:30:00Z",
      value: 183,
    },
    {
      timestamp: "2020-04-08T18:35:00Z",
      value: 165.999,
    },
    {
      timestamp: "2020-04-08T18:40:00Z",
      value: 159.998,
    },
    {
      timestamp: "2020-04-08T18:45:00Z",
      value: 153.99699999999999,
    },
    {
      timestamp: "2020-04-08T18:50:00Z",
      value: 144.99599999999998,
    },
    {
      timestamp: "2020-04-08T18:55:00Z",
      value: 126.99499999999998,
    },
    {
      timestamp: "2020-04-08T19:00:00Z",
      value: 123.99399999999997,
    },
    {
      timestamp: "2020-04-08T19:05:00Z",
      value: 111.99299999999997,
    },
    {
      timestamp: "2020-04-08T19:10:00Z",
      value: 100.99199999999996,
    },
    {
      timestamp: "2020-04-08T19:15:00Z",
      value: 81.99099999999996,
    },
    {
      timestamp: "2020-04-08T19:20:00Z",
      value: 73.98999999999995,
    },
    {
      timestamp: "2020-04-08T19:25:00Z",
      value: 57.98899999999995,
    },
    {
      timestamp: "2020-04-08T19:30:00Z",
      value: 49.98799999999995,
    },
    {
      timestamp: "2020-04-08T19:35:00Z",
      value: 49.98699999999995,
    },
    {
      timestamp: "2020-04-08T19:40:00Z",
      value: 48.985999999999954,
    },
    {
      timestamp: "2020-04-08T19:45:00Z",
      value: 46.98499999999996,
    },
    {
      timestamp: "2020-04-08T19:50:00Z",
      value: 31.98399999999996,
    },
    {
      timestamp: "2020-04-08T19:55:00Z",
      value: 95,
    },
    {
      timestamp: "2020-04-08T20:00:00Z",
      value: 85.999,
    },
    {
      timestamp: "2020-04-08T20:05:00Z",
      value: 79.99799999999999,
    },
    {
      timestamp: "2020-04-08T20:10:00Z",
      value: 66.99699999999999,
    },
    {
      timestamp: "2020-04-08T20:15:00Z",
      value: 60.99599999999999,
    },
    {
      timestamp: "2020-04-08T20:20:00Z",
      value: 43.99499999999999,
    },
    {
      timestamp: "2020-04-08T20:25:00Z",
      value: 37.99399999999999,
    },
    {
      timestamp: "2020-04-08T20:30:00Z",
      value: 27.992999999999995,
    },
    {
      timestamp: "2020-04-08T20:35:00Z",
      value: 16.991999999999997,
    },
    {
      timestamp: "2020-04-08T20:40:00Z",
      value: 1.9909999999999979,
    },
    {
      timestamp: "2020-04-08T20:45:00Z",
      value: -8.010000000000002,
    },
    {
      timestamp: "2020-04-08T20:50:00Z",
      value: -22.011000000000003,
    },
    {
      timestamp: "2020-04-08T20:55:00Z",
      value: 165,
    },
    {
      timestamp: "2020-04-08T21:00:00Z",
      value: 149.999,
    },
    {
      timestamp: "2020-04-08T21:05:00Z",
      value: 135.998,
    },
    {
      timestamp: "2020-04-08T21:10:00Z",
      value: 135.99699999999999,
    },
    {
      timestamp: "2020-04-08T21:15:00Z",
      value: 131.99599999999998,
    },
    {
      timestamp: "2020-04-08T21:20:00Z",
      value: 117.99499999999998,
    },
    {
      timestamp: "2020-04-08T21:25:00Z",
      value: 102.99399999999997,
    },
    {
      timestamp: "2020-04-08T21:30:00Z",
      value: 100.99299999999997,
    },
    {
      timestamp: "2020-04-08T21:35:00Z",
      value: 90.99199999999996,
    },
    {
      timestamp: "2020-04-08T21:40:00Z",
      value: 79.99099999999996,
    },
    {
      timestamp: "2020-04-08T21:45:00Z",
      value: 69.98999999999995,
    },
    {
      timestamp: "2020-04-08T21:50:00Z",
      value: 51.98899999999995,
    },
    {
      timestamp: "2020-04-08T21:55:00Z",
      value: 43.98799999999995,
    },
    {
      timestamp: "2020-04-08T22:00:00Z",
      value: 34.98699999999995,
    },
    {
      timestamp: "2020-04-08T22:05:00Z",
      value: 29.98599999999995,
    },
    {
      timestamp: "2020-04-08T22:10:00Z",
      value: 26.98499999999995,
    },
    {
      timestamp: "2020-04-08T22:15:00Z",
      value: 18.983999999999952,
    },
    {
      timestamp: "2020-04-08T22:20:00Z",
      value: 10.982999999999953,
    },
    {
      timestamp: "2020-04-08T22:25:00Z",
      value: 90,
    },
    {
      timestamp: "2020-04-08T22:30:00Z",
      value: 89.999,
    },
    {
      timestamp: "2020-04-08T22:35:00Z",
      value: 75.99799999999999,
    },
    {
      timestamp: "2020-04-08T22:40:00Z",
      value: 60.99699999999999,
    },
    {
      timestamp: "2020-04-08T22:45:00Z",
      value: 59.995999999999995,
    },
    {
      timestamp: "2020-04-08T22:50:00Z",
      value: 40.99499999999999,
    },
    {
      timestamp: "2020-04-08T22:55:00Z",
      value: 21.99399999999999,
    },
    {
      timestamp: "2020-04-08T23:00:00Z",
      value: 15.992999999999988,
    },
    {
      timestamp: "2020-04-08T23:05:00Z",
      value: 8.991999999999987,
    },
    {
      timestamp: "2020-04-08T23:10:00Z",
      value: 121,
    },
    {
      timestamp: "2020-04-08T23:15:00Z",
      value: 116.999,
    },
    {
      timestamp: "2020-04-08T23:20:00Z",
      value: 102.99799999999999,
    },
    {
      timestamp: "2020-04-08T23:25:00Z",
      value: 90.99699999999999,
    },
    {
      timestamp: "2020-04-08T23:30:00Z",
      value: 73.99599999999998,
    },
    {
      timestamp: "2020-04-08T23:35:00Z",
      value: 64.99499999999998,
    },
    {
      timestamp: "2020-04-08T23:40:00Z",
      value: 64.99399999999997,
    },
    {
      timestamp: "2020-04-08T23:45:00Z",
      value: 62.992999999999974,
    },
    {
      timestamp: "2020-04-08T23:50:00Z",
      value: 44.991999999999976,
    },
    {
      timestamp: "2020-04-08T23:55:00Z",
      value: 40.99099999999998,
    },
    {
      timestamp: "2020-04-09T00:00:00Z",
      value: 28.98999999999998,
    },
    {
      timestamp: "2020-04-09T00:05:00Z",
      value: 162,
    },
    {
      timestamp: "2020-04-09T00:10:00Z",
      value: 151.999,
    },
    {
      timestamp: "2020-04-09T00:15:00Z",
      value: 141.998,
    },
    {
      timestamp: "2020-04-09T00:20:00Z",
      value: 123.99699999999999,
    },
    {
      timestamp: "2020-04-09T00:25:00Z",
      value: 123.99599999999998,
    },
    {
      timestamp: "2020-04-09T00:30:00Z",
      value: 109.99499999999998,
    },
    {
      timestamp: "2020-04-09T00:35:00Z",
      value: 103.99399999999997,
    },
    {
      timestamp: "2020-04-09T00:40:00Z",
      value: 103.99299999999997,
    },
    {
      timestamp: "2020-04-09T00:45:00Z",
      value: 97.99199999999996,
    },
    {
      timestamp: "2020-04-09T00:50:00Z",
      value: 94.99099999999996,
    },
    {
      timestamp: "2020-04-09T00:55:00Z",
      value: 89.98999999999995,
    },
    {
      timestamp: "2020-04-09T01:00:00Z",
      value: 73.98899999999995,
    },
    {
      timestamp: "2020-04-09T01:05:00Z",
      value: 73.98799999999994,
    },
    {
      timestamp: "2020-04-09T01:10:00Z",
      value: 55.98699999999994,
    },
    {
      timestamp: "2020-04-09T01:15:00Z",
      value: 45.98599999999994,
    },
    {
      timestamp: "2020-04-09T01:20:00Z",
      value: 41.98499999999994,
    },
    {
      timestamp: "2020-04-09T01:25:00Z",
      value: 40.983999999999945,
    },
    {
      timestamp: "2020-04-09T01:30:00Z",
      value: 34.98299999999995,
    },
    {
      timestamp: "2020-04-09T01:35:00Z",
      value: 19.98199999999995,
    },
    {
      timestamp: "2020-04-09T01:40:00Z",
      value: 8.98099999999995,
    },
    {
      timestamp: "2020-04-09T01:45:00Z",
      value: -1.0200000000000493,
    },
    {
      timestamp: "2020-04-09T01:50:00Z",
      value: -7.02100000000005,
    },
    {
      timestamp: "2020-04-09T01:55:00Z",
      value: -17.022000000000048,
    },
    {
      timestamp: "2020-04-09T02:00:00Z",
      value: 122,
    },
    {
      timestamp: "2020-04-09T02:05:00Z",
      value: 115.999,
    },
    {
      timestamp: "2020-04-09T02:10:00Z",
      value: 97.99799999999999,
    },
    {
      timestamp: "2020-04-09T02:15:00Z",
      value: 96.99699999999999,
    },
    {
      timestamp: "2020-04-09T02:20:00Z",
      value: 82.99599999999998,
    },
    {
      timestamp: "2020-04-09T02:25:00Z",
      value: 78.99499999999998,
    },
    {
      timestamp: "2020-04-09T02:30:00Z",
      value: 61.99399999999997,
    },
    {
      timestamp: "2020-04-09T02:35:00Z",
      value: 47.992999999999974,
    },
    {
      timestamp: "2020-04-09T02:40:00Z",
      value: 43.991999999999976,
    },
    {
      timestamp: "2020-04-09T02:45:00Z",
      value: 40.99099999999998,
    },
    {
      timestamp: "2020-04-09T02:50:00Z",
      value: 25.98999999999998,
    },
    {
      timestamp: "2020-04-09T02:55:00Z",
      value: 192,
    },
    {
      timestamp: "2020-04-09T03:00:00Z",
      value: 188.999,
    },
    {
      timestamp: "2020-04-09T03:05:00Z",
      value: 175.998,
    },
    {
      timestamp: "2020-04-09T03:10:00Z",
      value: 172.99699999999999,
    },
    {
      timestamp: "2020-04-09T03:15:00Z",
      value: 154.99599999999998,
    },
    {
      timestamp: "2020-04-09T03:20:00Z",
      value: 153.99499999999998,
    },
    {
      timestamp: "2020-04-09T03:25:00Z",
      value: 143.99399999999997,
    },
    {
      timestamp: "2020-04-09T03:30:00Z",
      value: 124.99299999999997,
    },
  ];

  const values_3 = [
    {
      timestamp: "2023-03-08T11:25:32.396Z",
      value: 0.01709153,
    },
    {
      timestamp: "2023-03-08T11:25:55.977Z",
      value: 0.017089784,
    },
    {
      timestamp: "2023-03-08T11:26:08.758Z",
      value: 0.017086307,
    },
    {
      timestamp: "2023-03-08T11:26:21.905Z",
      value: 0.017074652,
    },
    {
      timestamp: "2023-03-08T11:26:32.307Z",
      value: 0.017055482,
    },
    {
      timestamp: "2023-03-08T11:26:56.083Z",
      value: 0.01703713,
    },
    {
      timestamp: "2023-03-08T11:27:08.169Z",
      value: 0.017055972,
    },
    {
      timestamp: "2023-03-08T11:27:20.297Z",
      value: 0.017045457,
    },
    {
      timestamp: "2023-03-08T11:27:32.82Z",
      value: 0.017030971,
    },
    {
      timestamp: "2023-03-08T11:27:55.915Z",
      value: 0.017034376,
    },
    {
      timestamp: "2023-03-08T11:28:07.981Z",
      value: 0.016975472,
    },
    {
      timestamp: "2023-03-08T11:28:20.342Z",
      value: 0.016983153,
    },
    {
      timestamp: "2023-03-08T11:28:33.488Z",
      value: 0.017031573,
    },
    {
      timestamp: "2023-03-08T11:28:57.688Z",
      value: 0.017042384,
    },
    {
      timestamp: "2023-03-08T11:29:10.452Z",
      value: 0.017024105,
    },
    {
      timestamp: "2023-03-08T11:29:23.067Z",
      value: 0.017036267,
    },
    {
      timestamp: "2023-03-08T11:29:32.556Z",
      value: 0.016998377,
    },
    {
      timestamp: "2023-03-08T11:29:44.643Z",
      value: 0.0170342,
    },
    {
      timestamp: "2023-03-08T11:30:08.78Z",
      value: 0.01697452,
    },
    {
      timestamp: "2023-03-08T11:30:20.901Z",
      value: 0.016987132,
    },
    {
      timestamp: "2023-03-08T11:30:31.886Z",
      value: 0.016998477,
    },
    {
      timestamp: "2023-03-08T11:30:58.679Z",
      value: 0.017025312,
    },
    {
      timestamp: "2023-03-08T11:31:09.069Z",
      value: 0.016993118,
    },
    {
      timestamp: "2023-03-08T11:31:19.865Z",
      value: 0.01699132,
    },
    {
      timestamp: "2023-03-08T11:31:34.373Z",
      value: 0.016996007,
    },
    {
      timestamp: "2023-03-08T11:31:56.899Z",
      value: 0.017014917,
    },
    {
      timestamp: "2023-03-08T11:32:11.55Z",
      value: 0.016972464,
    },
    {
      timestamp: "2023-03-08T11:32:20.655Z",
      value: 0.01699124,
    },
    {
      timestamp: "2023-03-08T11:32:32.261Z",
      value: 0.017004488,
    },
    {
      timestamp: "2023-03-08T11:32:44.801Z",
      value: 0.016985962,
    },
    {
      timestamp: "2023-03-08T11:33:07.991Z",
      value: 0.016994314,
    },
    {
      timestamp: "2023-03-08T11:33:20.758Z",
      value: 0.017015396,
    },
    {
      timestamp: "2023-03-08T11:33:43.926Z",
      value: 0.017028391,
    },
    {
      timestamp: "2023-03-08T11:33:57.079Z",
      value: 0.017007044,
    },
    {
      timestamp: "2023-03-08T11:34:08.547Z",
      value: 0.016971214,
    },
    {
      timestamp: "2023-03-08T11:34:20.858Z",
      value: 0.016978167,
    },
    {
      timestamp: "2023-03-08T11:34:32.313Z",
      value: 0.016971797,
    },
    {
      timestamp: "2023-03-08T11:34:55.863Z",
      value: 0.016964069,
    },
    {
      timestamp: "2023-03-08T11:35:09.053Z",
      value: 0.016979175,
    },
    {
      timestamp: "2023-03-08T11:35:20.046Z",
      value: 0.016992658,
    },
    {
      timestamp: "2023-03-08T11:35:32.116Z",
      value: 0.016991982,
    },
    {
      timestamp: "2023-03-08T11:35:57.714Z",
      value: 0.017005216,
    },
    {
      timestamp: "2023-03-08T11:36:11.261Z",
      value: 0.01697165,
    },
    {
      timestamp: "2023-03-08T11:36:25.949Z",
      value: 0.01696954,
    },
    {
      timestamp: "2023-03-08T11:36:32.659Z",
      value: 0.016972225,
    },
    {
      timestamp: "2023-03-08T11:36:56.452Z",
      value: 0.016946955,
    },
    {
      timestamp: "2023-03-08T11:37:08.978Z",
      value: 0.01700005,
    },
    {
      timestamp: "2023-03-08T11:37:23.051Z",
      value: 0.016989687,
    },
    {
      timestamp: "2023-03-08T11:37:32.514Z",
      value: 0.01696843,
    },
    {
      timestamp: "2023-03-08T11:37:56.942Z",
      value: 0.01699465,
    },
    {
      timestamp: "2023-03-08T11:38:11.847Z",
      value: 0.016981812,
    },
    {
      timestamp: "2023-03-08T11:38:20.533Z",
      value: 0.017001595,
    },
    {
      timestamp: "2023-03-08T11:38:32.656Z",
      value: 0.017007418,
    },
    {
      timestamp: "2023-03-08T11:38:56.863Z",
      value: 0.016987456,
    },
    {
      timestamp: "2023-03-08T11:39:08.965Z",
      value: 0.016979862,
    },
    {
      timestamp: "2023-03-08T11:39:19.975Z",
      value: 0.016952902,
    },
    {
      timestamp: "2023-03-08T11:39:34.222Z",
      value: 0.01695372,
    },
    {
      timestamp: "2023-03-08T11:39:56.748Z",
      value: 0.016969096,
    },
    {
      timestamp: "2023-03-08T11:40:08.434Z",
      value: 0.016949922,
    },
    {
      timestamp: "2023-03-08T11:40:21.635Z",
      value: 0.016938485,
    },
    {
      timestamp: "2023-03-08T11:40:32.03Z",
      value: 0.016933668,
    },
    {
      timestamp: "2023-03-08T11:40:56.879Z",
      value: 0.016915094,
    },
    {
      timestamp: "2023-03-08T11:41:08.925Z",
      value: 0.016900958,
    },
    {
      timestamp: "2023-03-08T11:41:19.705Z",
      value: 0.016917346,
    },
    {
      timestamp: "2023-03-08T11:41:43.919Z",
      value: 0.016915867,
    },
    {
      timestamp: "2023-03-08T11:42:10.037Z",
      value: 0.016916266,
    },
    {
      timestamp: "2023-03-08T11:42:19.778Z",
      value: 0.016930839,
    },
    {
      timestamp: "2023-03-08T11:42:31.835Z",
      value: 0.016932594,
    },
    {
      timestamp: "2023-03-08T11:42:58.478Z",
      value: 0.0169478,
    },
    {
      timestamp: "2023-03-08T11:43:11.225Z",
      value: 0.016927984,
    },
    {
      timestamp: "2023-03-08T11:43:20.975Z",
      value: 0.016952196,
    },
    {
      timestamp: "2023-03-08T11:43:33.722Z",
      value: 0.016942583,
    },
    {
      timestamp: "2023-03-08T11:43:56.606Z",
      value: 0.016923383,
    },
    {
      timestamp: "2023-03-08T11:44:08.089Z",
      value: 0.01693587,
    },
    {
      timestamp: "2023-03-08T11:44:20.82Z",
      value: 0.0169298,
    },
    {
      timestamp: "2023-03-08T11:44:31.8Z",
      value: 0.016949851,
    },
    {
      timestamp: "2023-03-08T11:44:56.661Z",
      value: 0.016890947,
    },
    {
      timestamp: "2023-03-08T11:45:08.3Z",
      value: 0.016920902,
    },
    {
      timestamp: "2023-03-08T11:45:22.848Z",
      value: 0.016890524,
    },
    {
      timestamp: "2023-03-08T11:45:34.978Z",
      value: 0.01687682,
    },
    {
      timestamp: "2023-03-08T11:45:57.414Z",
      value: 0.016895495,
    },
    {
      timestamp: "2023-03-08T11:46:09.534Z",
      value: 0.016878255,
    },
    {
      timestamp: "2023-03-08T11:46:22.057Z",
      value: 0.016913554,
    },
    {
      timestamp: "2023-03-08T11:46:37.626Z",
      value: 0.01690864,
    },
    {
      timestamp: "2023-03-08T11:46:56.646Z",
      value: 0.016858656,
    },
    {
      timestamp: "2023-03-08T11:47:08.928Z",
      value: 0.01688592,
    },
    {
      timestamp: "2023-03-08T11:47:19.745Z",
      value: 0.0169141,
    },
    {
      timestamp: "2023-03-08T11:47:32.014Z",
      value: 0.016908498,
    },
    {
      timestamp: "2023-03-08T11:47:56.654Z",
      value: 0.016919455,
    },
    {
      timestamp: "2023-03-08T11:48:10.082Z",
      value: 0.016878549,
    },
    {
      timestamp: "2023-03-08T11:48:20.451Z",
      value: 0.016897809,
    },
    {
      timestamp: "2023-03-08T11:48:31.929Z",
      value: 0.016909087,
    },
    {
      timestamp: "2023-03-08T11:48:56.385Z",
      value: 0.016908078,
    },
    {
      timestamp: "2023-03-08T11:49:08.859Z",
      value: 0.016899174,
    },
    {
      timestamp: "2023-03-08T11:49:19.846Z",
      value: 0.016872775,
    },
    {
      timestamp: "2023-03-08T11:49:32.043Z",
      value: 0.016885823,
    },
    {
      timestamp: "2023-03-08T11:49:57.241Z",
      value: 0.016885677,
    },
    {
      timestamp: "2023-03-08T11:50:09.411Z",
      value: 0.016925246,
    },
    {
      timestamp: "2023-03-08T11:50:20.34Z",
      value: 0.016883511,
    },
    {
      timestamp: "2023-03-08T11:50:33.074Z",
      value: 0.016884273,
    },
    {
      timestamp: "2023-03-08T11:50:56.685Z",
      value: 0.016874237,
    },
    {
      timestamp: "2023-03-08T11:51:08.129Z",
      value: 0.01686516,
    },
    {
      timestamp: "2023-03-08T11:51:20.235Z",
      value: 0.01689026,
    },
    {
      timestamp: "2023-03-08T11:51:32.432Z",
      value: 0.016913304,
    },
    {
      timestamp: "2023-03-08T11:51:56.151Z",
      value: 0.016845867,
    },
    {
      timestamp: "2023-03-08T11:52:08.264Z",
      value: 0.016855894,
    },
    {
      timestamp: "2023-03-08T11:52:21.461Z",
      value: 0.016832551,
    },
    {
      timestamp: "2023-03-08T11:52:31.87Z",
      value: 0.016830696,
    },
    {
      timestamp: "2023-03-08T11:52:56.139Z",
      value: 0.016836364,
    },
    {
      timestamp: "2023-03-08T11:53:08.212Z",
      value: 0.016816208,
    },
    {
      timestamp: "2023-03-08T11:53:20.919Z",
      value: 0.01683827,
    },
    {
      timestamp: "2023-03-08T11:53:34.731Z",
      value: 0.016872574,
    },
    {
      timestamp: "2023-03-08T11:53:56.153Z",
      value: 0.016904274,
    },
    {
      timestamp: "2023-03-08T11:54:08.878Z",
      value: 0.016879342,
    },
    {
      timestamp: "2023-03-08T11:54:19.643Z",
      value: 0.01690677,
    },
    {
      timestamp: "2023-03-08T11:54:43.866Z",
      value: 0.016908538,
    },
    {
      timestamp: "2023-03-08T11:54:56.557Z",
      value: 0.016878916,
    },
    {
      timestamp: "2023-03-08T11:55:08.271Z",
      value: 0.016868021,
    },
    {
      timestamp: "2023-03-08T11:55:20.764Z",
      value: 0.016884731,
    },
    {
      timestamp: "2023-03-08T11:55:32.444Z",
      value: 0.016876658,
    },
    {
      timestamp: "2023-03-08T11:55:57.231Z",
      value: 0.01688553,
    },
    {
      timestamp: "2023-03-08T11:56:08.296Z",
      value: 0.01689726,
    },
    {
      timestamp: "2023-03-08T11:56:20.843Z",
      value: 0.016886046,
    },
    {
      timestamp: "2023-03-08T11:56:32.294Z",
      value: 0.016913809,
    },
    {
      timestamp: "2023-03-08T11:56:57.695Z",
      value: 0.01688175,
    },
    {
      timestamp: "2023-03-08T11:57:08.735Z",
      value: 0.016880024,
    },
    {
      timestamp: "2023-03-08T11:57:22.1Z",
      value: 0.016828481,
    },
    {
      timestamp: "2023-03-08T11:57:32.366Z",
      value: 0.01689708,
    },
    {
      timestamp: "2023-03-08T11:57:56.814Z",
      value: 0.016876547,
    },
    {
      timestamp: "2023-03-08T11:58:08.751Z",
      value: 0.016853575,
    },
    {
      timestamp: "2023-03-08T11:58:20.781Z",
      value: 0.016852261,
    },
    {
      timestamp: "2023-03-08T11:58:34.073Z",
      value: 0.016912935,
    },
    {
      timestamp: "2023-03-08T11:58:57.043Z",
      value: 0.016857427,
    },
    {
      timestamp: "2023-03-08T11:59:09.879Z",
      value: 0.016858397,
    },
    {
      timestamp: "2023-03-08T11:59:20.809Z",
      value: 0.016889926,
    },
    {
      timestamp: "2023-03-08T11:59:34.041Z",
      value: 0.016863499,
    },
    {
      timestamp: "2023-03-08T11:59:57.067Z",
      value: 0.016882846,
    },
    {
      timestamp: "2023-03-08T12:00:09.409Z",
      value: 0.016870122,
    },
    {
      timestamp: "2023-03-08T12:00:22.924Z",
      value: 0.016858159,
    },
    {
      timestamp: "2023-03-08T12:00:32.368Z",
      value: 0.016856616,
    },
    {
      timestamp: "2023-03-08T12:00:57.297Z",
      value: 0.016873583,
    },
    {
      timestamp: "2023-03-08T12:01:09.168Z",
      value: 0.016833838,
    },
    {
      timestamp: "2023-03-08T12:01:20.708Z",
      value: 0.016876107,
    },
    {
      timestamp: "2023-03-08T12:01:32.103Z",
      value: 0.01686493,
    },
    {
      timestamp: "2023-03-08T12:01:56.991Z",
      value: 0.01687556,
    },
    {
      timestamp: "2023-03-08T12:02:08.487Z",
      value: 0.016857393,
    },
    {
      timestamp: "2023-03-08T12:02:19.941Z",
      value: 0.016878374,
    },
    {
      timestamp: "2023-03-08T12:02:34.462Z",
      value: 0.016849553,
    },
    {
      timestamp: "2023-03-08T12:02:55.817Z",
      value: 0.016879292,
    },
    {
      timestamp: "2023-03-08T12:03:07.997Z",
      value: 0.016872419,
    },
    {
      timestamp: "2023-03-08T12:03:21.087Z",
      value: 0.016824506,
    },
    {
      timestamp: "2023-03-08T12:03:33.356Z",
      value: 0.016821353,
    },
    {
      timestamp: "2023-03-08T12:03:56.487Z",
      value: 0.016850106,
    },
    {
      timestamp: "2023-03-08T12:04:09.166Z",
      value: 0.01686872,
    },
    {
      timestamp: "2023-03-08T12:04:21.323Z",
      value: 0.0168612,
    },
    {
      timestamp: "2023-03-08T12:04:32.825Z",
      value: 0.016841907,
    },
    {
      timestamp: "2023-03-08T12:04:56.602Z",
      value: 0.016803296,
    },
    {
      timestamp: "2023-03-08T12:05:20.779Z",
      value: 0.016815087,
    },
    {
      timestamp: "2023-03-08T12:05:33.58Z",
      value: 0.016842846,
    },
    {
      timestamp: "2023-03-08T12:05:44.577Z",
      value: 0.016818345,
    },
    {
      timestamp: "2023-03-08T12:06:09.873Z",
      value: 0.016846472,
    },
    {
      timestamp: "2023-03-08T12:06:21.072Z",
      value: 0.016822191,
    },
    {
      timestamp: "2023-03-08T12:06:31.939Z",
      value: 0.016826939,
    },
    {
      timestamp: "2023-03-08T12:06:56.115Z",
      value: 0.016841419,
    },
    {
      timestamp: "2023-03-08T12:07:12.629Z",
      value: 0.016847996,
    },
    {
      timestamp: "2023-03-08T12:07:21.316Z",
      value: 0.016893035,
    },
    {
      timestamp: "2023-03-08T12:07:32.133Z",
      value: 0.01684723,
    },
    {
      timestamp: "2023-03-08T12:07:44.276Z",
      value: 0.016827961,
    },
    {
      timestamp: "2023-03-08T12:08:08.728Z",
      value: 0.016820706,
    },
    {
      timestamp: "2023-03-08T12:08:21.422Z",
      value: 0.016799841,
    },
    {
      timestamp: "2023-03-08T12:08:32.092Z",
      value: 0.016826294,
    },
    {
      timestamp: "2023-03-08T12:08:56.771Z",
      value: 0.016827988,
    },
    {
      timestamp: "2023-03-08T12:09:07.669Z",
      value: 0.016812045,
    },
    {
      timestamp: "2023-03-08T12:09:21.197Z",
      value: 0.016815528,
    },
    {
      timestamp: "2023-03-08T12:09:33.414Z",
      value: 0.01681482,
    },
    {
      timestamp: "2023-03-08T12:09:56.761Z",
      value: 0.016825115,
    },
    {
      timestamp: "2023-03-08T12:10:09.26Z",
      value: 0.016806412,
    },
    {
      timestamp: "2023-03-08T12:10:20.251Z",
      value: 0.016779443,
    },
    {
      timestamp: "2023-03-08T12:10:33.128Z",
      value: 0.016819797,
    },
    {
      timestamp: "2023-03-08T12:10:57.037Z",
      value: 0.01680792,
    },
    {
      timestamp: "2023-03-08T12:11:08.506Z",
      value: 0.016850421,
    },
    {
      timestamp: "2023-03-08T12:11:20.007Z",
      value: 0.016837567,
    },
    {
      timestamp: "2023-03-08T12:11:33.123Z",
      value: 0.01683886,
    },
    {
      timestamp: "2023-03-08T12:11:56.251Z",
      value: 0.016832065,
    },
    {
      timestamp: "2023-03-08T12:12:07.901Z",
      value: 0.016808026,
    },
    {
      timestamp: "2023-03-08T12:12:20.231Z",
      value: 0.0168143,
    },
    {
      timestamp: "2023-03-08T12:12:32.592Z",
      value: 0.016819246,
    },
    {
      timestamp: "2023-03-08T12:12:44.182Z",
      value: 0.016795527,
    },
    {
      timestamp: "2023-03-08T12:13:10.481Z",
      value: 0.016798893,
    },
    {
      timestamp: "2023-03-08T12:13:25.22Z",
      value: 0.016817745,
    },
    {
      timestamp: "2023-03-08T12:13:35.455Z",
      value: 0.016785987,
    },
    {
      timestamp: "2023-03-08T12:13:56.899Z",
      value: 0.016777733,
    },
    {
      timestamp: "2023-03-08T12:14:09.626Z",
      value: 0.016798928,
    },
    {
      timestamp: "2023-03-08T12:14:22.566Z",
      value: 0.016829237,
    },
    {
      timestamp: "2023-03-08T12:14:32.333Z",
      value: 0.016778685,
    },
    {
      timestamp: "2023-03-08T12:14:56.534Z",
      value: 0.01677185,
    },
    {
      timestamp: "2023-03-08T12:15:10.408Z",
      value: 0.016816063,
    },
    {
      timestamp: "2023-03-08T12:15:24.853Z",
      value: 0.016786326,
    },
    {
      timestamp: "2023-03-08T12:15:33.208Z",
      value: 0.016773565,
    },
    {
      timestamp: "2023-03-08T12:15:55.968Z",
      value: 0.0167577,
    },
    {
      timestamp: "2023-03-08T12:16:08.054Z",
      value: 0.016797869,
    },
    {
      timestamp: "2023-03-08T12:16:21.912Z",
      value: 0.016779022,
    },
    {
      timestamp: "2023-03-08T12:16:34.162Z",
      value: 0.016801316,
    },
    {
      timestamp: "2023-03-08T12:16:56.632Z",
      value: 0.016758053,
    },
    {
      timestamp: "2023-03-08T12:17:08.58Z",
      value: 0.016777981,
    },
    {
      timestamp: "2023-03-08T12:17:20.862Z",
      value: 0.016790057,
    },
    {
      timestamp: "2023-03-08T12:17:34.238Z",
      value: 0.016748626,
    },
    {
      timestamp: "2023-03-08T12:17:56.116Z",
      value: 0.016772937,
    },
    {
      timestamp: "2023-03-08T12:18:11.156Z",
      value: 0.016835306,
    },
    {
      timestamp: "2023-03-08T12:18:21.023Z",
      value: 0.016812736,
    },
    {
      timestamp: "2023-03-08T12:18:32.53Z",
      value: 0.016799077,
    },
    {
      timestamp: "2023-03-08T12:18:56.74Z",
      value: 0.016800009,
    },
    {
      timestamp: "2023-03-08T12:19:08.866Z",
      value: 0.016807152,
    },
    {
      timestamp: "2023-03-08T12:19:20.737Z",
      value: 0.016791133,
    },
    {
      timestamp: "2023-03-08T12:19:31.781Z",
      value: 0.016773526,
    },
    {
      timestamp: "2023-03-08T12:19:55.965Z",
      value: 0.01679042,
    },
    {
      timestamp: "2023-03-08T12:20:09.208Z",
      value: 0.016773362,
    },
    {
      timestamp: "2023-03-08T12:20:20.816Z",
      value: 0.016788285,
    },
    {
      timestamp: "2023-03-08T12:20:34.343Z",
      value: 0.016755866,
    },
    {
      timestamp: "2023-03-08T12:20:56.863Z",
      value: 0.016783686,
    },
    {
      timestamp: "2023-03-08T12:21:08.659Z",
      value: 0.016804263,
    },
    {
      timestamp: "2023-03-08T12:21:21.638Z",
      value: 0.016773194,
    },
    {
      timestamp: "2023-03-08T12:21:31.81Z",
      value: 0.016773334,
    },
    {
      timestamp: "2023-03-08T12:21:56.293Z",
      value: 0.016799849,
    },
    {
      timestamp: "2023-03-08T12:22:07.636Z",
      value: 0.016772963,
    },
    {
      timestamp: "2023-03-08T12:22:19.787Z",
      value: 0.016777435,
    },
    {
      timestamp: "2023-03-08T12:22:32.676Z",
      value: 0.016780356,
    },
    {
      timestamp: "2023-03-08T12:22:56.248Z",
      value: 0.016754972,
    },
    {
      timestamp: "2023-03-08T12:23:08.837Z",
      value: 0.016772324,
    },
    {
      timestamp: "2023-03-08T12:23:21.557Z",
      value: 0.016769383,
    },
    {
      timestamp: "2023-03-08T12:23:33.665Z",
      value: 0.016761268,
    },
    {
      timestamp: "2023-03-08T12:23:56.383Z",
      value: 0.01674477,
    },
    {
      timestamp: "2023-03-08T12:24:07.845Z",
      value: 0.01677281,
    },
    {
      timestamp: "2023-03-08T12:24:20.044Z",
      value: 0.016769249,
    },
    {
      timestamp: "2023-03-08T12:24:33.774Z",
      value: 0.01675942,
    },
    {
      timestamp: "2023-03-08T12:24:56.883Z",
      value: 0.016740793,
    },
    {
      timestamp: "2023-03-08T12:25:07.965Z",
      value: 0.016752992,
    },
    {
      timestamp: "2023-03-08T12:25:19.967Z",
      value: 0.01671782,
    },
    {
      timestamp: "2023-03-08T12:25:33.437Z",
      value: 0.016759045,
    },
    {
      timestamp: "2023-03-08T12:25:55.927Z",
      value: 0.016753191,
    },
    {
      timestamp: "2023-03-08T12:26:08.123Z",
      value: 0.016778847,
    },
    {
      timestamp: "2023-03-08T12:26:23.11Z",
      value: 0.01677023,
    },
    {
      timestamp: "2023-03-08T12:26:33.896Z",
      value: 0.016769115,
    },
    {
      timestamp: "2023-03-08T12:26:56.23Z",
      value: 0.016754203,
    },
    {
      timestamp: "2023-03-08T12:27:10.929Z",
      value: 0.01673477,
    },
    {
      timestamp: "2023-03-08T12:27:21.278Z",
      value: 0.016726103,
    },
    {
      timestamp: "2023-03-08T12:27:33.891Z",
      value: 0.016722536,
    },
    {
      timestamp: "2023-03-08T12:27:56.375Z",
      value: 0.016741129,
    },
    {
      timestamp: "2023-03-08T12:28:09.161Z",
      value: 0.016724605,
    },
    {
      timestamp: "2023-03-08T12:28:22.302Z",
      value: 0.016726887,
    },
    {
      timestamp: "2023-03-08T12:28:35.343Z",
      value: 0.016723841,
    },
    {
      timestamp: "2023-03-08T12:28:57.199Z",
      value: 0.01674801,
    },
    {
      timestamp: "2023-03-08T12:29:09.202Z",
      value: 0.016742647,
    },
    {
      timestamp: "2023-03-08T12:29:20.794Z",
      value: 0.016734803,
    },
    {
      timestamp: "2023-03-08T12:29:33.057Z",
      value: 0.016778983,
    },
    {
      timestamp: "2023-03-08T12:29:57.069Z",
      value: 0.016778177,
    },
    {
      timestamp: "2023-03-08T12:30:07.723Z",
      value: 0.01676715,
    },
    {
      timestamp: "2023-03-08T12:30:21.786Z",
      value: 0.016732052,
    },
    {
      timestamp: "2023-03-08T12:30:33.195Z",
      value: 0.016747268,
    },
    {
      timestamp: "2023-03-08T12:30:45.977Z",
      value: 0.016738396,
    },
    {
      timestamp: "2023-03-08T12:31:08.444Z",
      value: 0.016716888,
    },
    {
      timestamp: "2023-03-08T12:31:20.549Z",
      value: 0.016706388,
    },
    {
      timestamp: "2023-03-08T12:31:32.715Z",
      value: 0.0167191,
    },
    {
      timestamp: "2023-03-08T12:31:58.56Z",
      value: 0.01672971,
    },
    {
      timestamp: "2023-03-08T12:32:07.633Z",
      value: 0.016730575,
    },
    {
      timestamp: "2023-03-08T12:32:19.735Z",
      value: 0.01671882,
    },
    {
      timestamp: "2023-03-08T12:32:31.869Z",
      value: 0.016752759,
    },
    {
      timestamp: "2023-03-08T12:32:56.062Z",
      value: 0.01674938,
    },
    {
      timestamp: "2023-03-08T12:33:08.098Z",
      value: 0.016773833,
    },
    {
      timestamp: "2023-03-08T12:33:21.067Z",
      value: 0.016793214,
    },
    {
      timestamp: "2023-03-08T12:33:43.952Z",
      value: 0.016762123,
    },
    {
      timestamp: "2023-03-08T12:33:56.369Z",
      value: 0.01672776,
    },
    {
      timestamp: "2023-03-08T12:34:07.757Z",
      value: 0.01672771,
    },
    {
      timestamp: "2023-03-08T12:34:20.442Z",
      value: 0.01675283,
    },
    {
      timestamp: "2023-03-08T12:34:32.583Z",
      value: 0.016739843,
    },
    {
      timestamp: "2023-03-08T12:34:56.112Z",
      value: 0.016741566,
    },
    {
      timestamp: "2023-03-08T12:35:10.155Z",
      value: 0.016741687,
    },
    {
      timestamp: "2023-03-08T12:35:19.886Z",
      value: 0.01672357,
    },
    {
      timestamp: "2023-03-08T12:35:33.08Z",
      value: 0.016737256,
    },
    {
      timestamp: "2023-03-08T12:35:56.248Z",
      value: 0.016731165,
    },
    {
      timestamp: "2023-03-08T12:36:07.883Z",
      value: 0.01674628,
    },
    {
      timestamp: "2023-03-08T12:36:21.057Z",
      value: 0.016731406,
    },
    {
      timestamp: "2023-03-08T12:36:32.123Z",
      value: 0.01671525,
    },
    {
      timestamp: "2023-03-08T12:36:56.888Z",
      value: 0.016741738,
    },
    {
      timestamp: "2023-03-08T12:37:11.187Z",
      value: 0.016736154,
    },
    {
      timestamp: "2023-03-08T12:37:20.426Z",
      value: 0.016716044,
    },
    {
      timestamp: "2023-03-08T12:37:32.616Z",
      value: 0.016714396,
    },
    {
      timestamp: "2023-03-08T12:37:58.481Z",
      value: 0.016738003,
    },
    {
      timestamp: "2023-03-08T12:38:08.842Z",
      value: 0.016714275,
    },
    {
      timestamp: "2023-03-08T12:38:20.567Z",
      value: 0.016713325,
    },
    {
      timestamp: "2023-03-08T12:38:34.195Z",
      value: 0.016725142,
    },
    {
      timestamp: "2023-03-08T12:38:56.202Z",
      value: 0.016710611,
    },
    {
      timestamp: "2023-03-08T12:39:10.046Z",
      value: 0.016732978,
    },
    {
      timestamp: "2023-03-08T12:39:21.478Z",
      value: 0.016713114,
    },
    {
      timestamp: "2023-03-08T12:39:32.112Z",
      value: 0.016734805,
    },
    {
      timestamp: "2023-03-08T12:39:56.056Z",
      value: 0.016743755,
    },
    {
      timestamp: "2023-03-08T12:40:08.82Z",
      value: 0.016715284,
    },
    {
      timestamp: "2023-03-08T12:40:20.23Z",
      value: 0.016703656,
    },
    {
      timestamp: "2023-03-08T12:40:32.379Z",
      value: 0.016733568,
    },
    {
      timestamp: "2023-03-08T12:40:56.71Z",
      value: 0.016734263,
    },
    {
      timestamp: "2023-03-08T12:41:08.543Z",
      value: 0.016731987,
    },
    {
      timestamp: "2023-03-08T12:41:20.906Z",
      value: 0.016730526,
    },
    {
      timestamp: "2023-03-08T12:41:32.728Z",
      value: 0.016737036,
    },
    {
      timestamp: "2023-03-08T12:41:55.84Z",
      value: 0.01673507,
    },
    {
      timestamp: "2023-03-08T12:42:07.945Z",
      value: 0.016735738,
    },
    {
      timestamp: "2023-03-08T12:42:20.768Z",
      value: 0.016736437,
    },
    {
      timestamp: "2023-03-08T12:42:32.859Z",
      value: 0.016761433,
    },
    {
      timestamp: "2023-03-08T12:42:56.655Z",
      value: 0.0167595,
    },
    {
      timestamp: "2023-03-08T12:43:08.599Z",
      value: 0.016727416,
    },
    {
      timestamp: "2023-03-08T12:43:20.888Z",
      value: 0.016724154,
    },
    {
      timestamp: "2023-03-08T12:43:43.968Z",
      value: 0.016765209,
    },
    {
      timestamp: "2023-03-08T12:43:57.146Z",
      value: 0.016767288,
    },
    {
      timestamp: "2023-03-08T12:44:10.468Z",
      value: 0.01673608,
    },
    {
      timestamp: "2023-03-08T12:44:20.299Z",
      value: 0.016692791,
    },
    {
      timestamp: "2023-03-08T12:44:33.531Z",
      value: 0.016731413,
    },
    {
      timestamp: "2023-03-08T12:44:57.688Z",
      value: 0.01672245,
    },
    {
      timestamp: "2023-03-08T12:45:08.741Z",
      value: 0.01672839,
    },
    {
      timestamp: "2023-03-08T12:45:23.863Z",
      value: 0.016721359,
    },
    {
      timestamp: "2023-03-08T12:45:31.898Z",
      value: 0.016727211,
    },
    {
      timestamp: "2023-03-08T12:45:56.115Z",
      value: 0.016673554,
    },
    {
      timestamp: "2023-03-08T12:46:09.251Z",
      value: 0.016703067,
    },
    {
      timestamp: "2023-03-08T12:46:21.376Z",
      value: 0.016669463,
    },
    {
      timestamp: "2023-03-08T12:46:34.766Z",
      value: 0.0167017,
    },
    {
      timestamp: "2023-03-08T12:46:57.079Z",
      value: 0.016741166,
    },
    {
      timestamp: "2023-03-08T12:47:07.968Z",
      value: 0.016722571,
    },
    {
      timestamp: "2023-03-08T12:47:21.215Z",
      value: 0.016686931,
    },
    {
      timestamp: "2023-03-08T12:47:43.891Z",
      value: 0.016661394,
    },
    {
      timestamp: "2023-03-08T12:47:55.984Z",
      value: 0.016706435,
    },
    {
      timestamp: "2023-03-08T12:48:08.518Z",
      value: 0.016647397,
    },
    {
      timestamp: "2023-03-08T12:48:20.129Z",
      value: 0.016655255,
    },
    {
      timestamp: "2023-03-08T12:48:32.271Z",
      value: 0.016665472,
    },
    {
      timestamp: "2023-03-08T12:48:56.472Z",
      value: 0.016656103,
    },
    {
      timestamp: "2023-03-08T12:49:08.577Z",
      value: 0.016662363,
    },
    {
      timestamp: "2023-03-08T12:49:19.994Z",
      value: 0.016645994,
    },
    {
      timestamp: "2023-03-08T12:49:32.925Z",
      value: 0.01667496,
    },
    {
      timestamp: "2023-03-08T12:49:56.511Z",
      value: 0.016680863,
    },
    {
      timestamp: "2023-03-08T12:50:08.191Z",
      value: 0.016624903,
    },
    {
      timestamp: "2023-03-08T12:50:20.445Z",
      value: 0.01665896,
    },
    {
      timestamp: "2023-03-08T12:50:33.527Z",
      value: 0.016700374,
    },
    {
      timestamp: "2023-03-08T12:50:57.892Z",
      value: 0.016666993,
    },
    {
      timestamp: "2023-03-08T12:51:10.389Z",
      value: 0.01664752,
    },
    {
      timestamp: "2023-03-08T12:51:23.529Z",
      value: 0.016677838,
    },
    {
      timestamp: "2023-03-08T12:51:34.228Z",
      value: 0.016658777,
    },
    {
      timestamp: "2023-03-08T12:51:55.98Z",
      value: 0.016664715,
    },
    {
      timestamp: "2023-03-08T12:52:08.057Z",
      value: 0.016669711,
    },
    {
      timestamp: "2023-03-08T12:52:21.241Z",
      value: 0.016650433,
    },
    {
      timestamp: "2023-03-08T12:52:34.142Z",
      value: 0.016655186,
    },
    {
      timestamp: "2023-03-08T12:52:58.843Z",
      value: 0.016676351,
    },
    {
      timestamp: "2023-03-08T12:53:10.51Z",
      value: 0.016652921,
    },
    {
      timestamp: "2023-03-08T12:53:22.054Z",
      value: 0.01664878,
    },
    {
      timestamp: "2023-03-08T12:53:32.403Z",
      value: 0.016628662,
    },
    {
      timestamp: "2023-03-08T12:53:57.873Z",
      value: 0.016658576,
    },
    {
      timestamp: "2023-03-08T12:54:08.153Z",
      value: 0.016651632,
    },
    {
      timestamp: "2023-03-08T12:54:20.284Z",
      value: 0.01664672,
    },
    {
      timestamp: "2023-03-08T12:54:43.883Z",
      value: 0.016648274,
    },
    {
      timestamp: "2023-03-08T12:54:55.95Z",
      value: 0.016628627,
    },
    {
      timestamp: "2023-03-08T12:55:10.935Z",
      value: 0.016666519,
    },
    {
      timestamp: "2023-03-08T12:55:20.85Z",
      value: 0.0166884,
    },
    {
      timestamp: "2023-03-08T12:55:33.442Z",
      value: 0.01668825,
    },
    {
      timestamp: "2023-03-08T12:55:57.132Z",
      value: 0.016660394,
    },
    {
      timestamp: "2023-03-08T12:56:11.654Z",
      value: 0.01664231,
    },
    {
      timestamp: "2023-03-08T12:56:20.268Z",
      value: 0.016656771,
    },
    {
      timestamp: "2023-03-08T12:56:43.876Z",
      value: 0.016644843,
    },
    {
      timestamp: "2023-03-08T12:56:55.898Z",
      value: 0.016616914,
    },
    {
      timestamp: "2023-03-08T12:57:09.945Z",
      value: 0.016635872,
    },
    {
      timestamp: "2023-03-08T12:57:20.162Z",
      value: 0.016620668,
    },
    {
      timestamp: "2023-03-08T12:57:34.208Z",
      value: 0.016635835,
    },
    {
      timestamp: "2023-03-08T12:57:56.685Z",
      value: 0.01662759,
    },
    {
      timestamp: "2023-03-08T12:58:08.501Z",
      value: 0.016621234,
    },
    {
      timestamp: "2023-03-08T12:58:20.181Z",
      value: 0.016629333,
    },
    {
      timestamp: "2023-03-08T12:58:36.179Z",
      value: 0.016631903,
    },
    {
      timestamp: "2023-03-08T12:58:56.516Z",
      value: 0.016638128,
    },
    {
      timestamp: "2023-03-08T12:59:07.997Z",
      value: 0.016588753,
    },
    {
      timestamp: "2023-03-08T12:59:20.097Z",
      value: 0.01659352,
    },
    {
      timestamp: "2023-03-08T12:59:32.223Z",
      value: 0.016612252,
    },
    {
      timestamp: "2023-03-08T12:59:56.886Z",
      value: 0.016581686,
    },
    {
      timestamp: "2023-03-08T13:00:08.544Z",
      value: 0.016583312,
    },
    {
      timestamp: "2023-03-08T13:00:23.518Z",
      value: 0.016584571,
    },
    {
      timestamp: "2023-03-08T13:00:32.725Z",
      value: 0.016618315,
    },
    {
      timestamp: "2023-03-08T13:00:56.29Z",
      value: 0.016620532,
    },
    {
      timestamp: "2023-03-08T13:01:08.437Z",
      value: 0.016606394,
    },
    {
      timestamp: "2023-03-08T13:01:20.174Z",
      value: 0.016605048,
    },
    {
      timestamp: "2023-03-08T13:01:32.695Z",
      value: 0.016582575,
    },
    {
      timestamp: "2023-03-08T13:01:56.863Z",
      value: 0.016585777,
    },
    {
      timestamp: "2023-03-08T13:02:12.583Z",
      value: 0.016591411,
    },
    {
      timestamp: "2023-03-08T13:02:21.027Z",
      value: 0.016621707,
    },
    {
      timestamp: "2023-03-08T13:02:32.235Z",
      value: 0.016567035,
    },
    {
      timestamp: "2023-03-08T13:02:56.22Z",
      value: 0.016537035,
    },
    {
      timestamp: "2023-03-08T13:03:07.879Z",
      value: 0.016554743,
    },
    {
      timestamp: "2023-03-08T13:03:19.985Z",
      value: 0.016511219,
    },
    {
      timestamp: "2023-03-08T13:03:43.689Z",
      value: 0.016516218,
    },
    {
      timestamp: "2023-03-08T13:03:55.819Z",
      value: 0.016502023,
    },
    {
      timestamp: "2023-03-08T13:04:26.33Z",
      value: 0.016533958,
    },
    {
      timestamp: "2023-03-08T13:04:32.452Z",
      value: 0.016492885,
    },
    {
      timestamp: "2023-03-08T13:04:45.35Z",
      value: 0.016541384,
    },
    {
      timestamp: "2023-03-08T13:05:20.004Z",
      value: 0.016484179,
    },
    {
      timestamp: "2023-03-08T13:05:43.768Z",
      value: 0.01652084,
    },
    {
      timestamp: "2023-03-08T13:05:56.918Z",
      value: 0.016517961,
    },
    {
      timestamp: "2023-03-08T13:06:07.947Z",
      value: 0.016508281,
    },
    {
      timestamp: "2023-03-08T13:06:21.383Z",
      value: 0.016492775,
    },
    {
      timestamp: "2023-03-08T13:06:33.251Z",
      value: 0.016496968,
    },
    {
      timestamp: "2023-03-08T13:06:55.942Z",
      value: 0.016513862,
    },
    {
      timestamp: "2023-03-08T13:07:09.778Z",
      value: 0.016494695,
    },
    {
      timestamp: "2023-03-08T13:07:21.876Z",
      value: 0.016504927,
    },
    {
      timestamp: "2023-03-08T13:07:32.905Z",
      value: 0.01652184,
    },
    {
      timestamp: "2023-03-08T13:07:55.843Z",
      value: 0.016522454,
    },
    {
      timestamp: "2023-03-08T13:08:08.962Z",
      value: 0.0165437,
    },
    {
      timestamp: "2023-03-08T13:08:21.087Z",
      value: 0.016500253,
    },
    {
      timestamp: "2023-03-08T13:08:32.827Z",
      value: 0.016514104,
    },
    {
      timestamp: "2023-03-08T13:08:55.868Z",
      value: 0.016505765,
    },
    {
      timestamp: "2023-03-08T13:09:07.997Z",
      value: 0.016507046,
    },
    {
      timestamp: "2023-03-08T13:09:20.128Z",
      value: 0.01650908,
    },
    {
      timestamp: "2023-03-08T13:09:33.908Z",
      value: 0.016544513,
    },
    {
      timestamp: "2023-03-08T13:09:57.393Z",
      value: 0.016523931,
    },
    {
      timestamp: "2023-03-08T13:10:09.083Z",
      value: 0.016516238,
    },
    {
      timestamp: "2023-03-08T13:10:20.1Z",
      value: 0.016489567,
    },
    {
      timestamp: "2023-03-08T13:10:31.97Z",
      value: 0.016505891,
    },
    {
      timestamp: "2023-03-08T13:10:56.442Z",
      value: 0.016508328,
    },
    {
      timestamp: "2023-03-08T13:11:08.547Z",
      value: 0.0164962,
    },
    {
      timestamp: "2023-03-08T13:11:21.054Z",
      value: 0.01650608,
    },
    {
      timestamp: "2023-03-08T13:11:32.669Z",
      value: 0.016488437,
    },
    {
      timestamp: "2023-03-08T13:11:56.438Z",
      value: 0.01652843,
    },
    {
      timestamp: "2023-03-08T13:12:08.533Z",
      value: 0.016523708,
    },
    {
      timestamp: "2023-03-08T13:12:26.448Z",
      value: 0.016491497,
    },
    {
      timestamp: "2023-03-08T13:12:34.412Z",
      value: 0.016509827,
    },
    {
      timestamp: "2023-03-08T13:12:56.898Z",
      value: 0.016506972,
    },
    {
      timestamp: "2023-03-08T13:13:09.004Z",
      value: 0.016494768,
    },
    {
      timestamp: "2023-03-08T13:13:20.066Z",
      value: 0.016545393,
    },
    {
      timestamp: "2023-03-08T13:13:33.261Z",
      value: 0.016522566,
    },
    {
      timestamp: "2023-03-08T13:13:56.735Z",
      value: 0.016505446,
    },
    {
      timestamp: "2023-03-08T13:14:09.064Z",
      value: 0.016521437,
    },
    {
      timestamp: "2023-03-08T13:14:19.862Z",
      value: 0.016525673,
    },
    {
      timestamp: "2023-03-08T13:14:31.975Z",
      value: 0.016571011,
    },
    {
      timestamp: "2023-03-08T13:14:56.125Z",
      value: 0.016545378,
    },
    {
      timestamp: "2023-03-08T13:15:09.534Z",
      value: 0.016532855,
    },
    {
      timestamp: "2023-03-08T13:15:19.931Z",
      value: 0.01655181,
    },
    {
      timestamp: "2023-03-08T13:15:33.112Z",
      value: 0.016576195,
    },
    {
      timestamp: "2023-03-08T13:15:58.603Z",
      value: 0.01654327,
    },
    {
      timestamp: "2023-03-08T13:16:10.062Z",
      value: 0.016528085,
    },
    {
      timestamp: "2023-03-08T13:16:21.507Z",
      value: 0.016551781,
    },
    {
      timestamp: "2023-03-08T13:16:32.145Z",
      value: 0.016566161,
    },
    {
      timestamp: "2023-03-08T13:16:45.317Z",
      value: 0.016509589,
    },
    {
      timestamp: "2023-03-08T13:17:10.141Z",
      value: 0.016551176,
    },
    {
      timestamp: "2023-03-08T13:17:20.99Z",
      value: 0.016559329,
    },
    {
      timestamp: "2023-03-08T13:17:33.24Z",
      value: 0.016538233,
    },
    {
      timestamp: "2023-03-08T13:17:57.813Z",
      value: 0.01652344,
    },
    {
      timestamp: "2023-03-08T13:18:11.039Z",
      value: 0.016560398,
    },
    {
      timestamp: "2023-03-08T13:18:19.698Z",
      value: 0.016560135,
    },
    {
      timestamp: "2023-03-08T13:18:33.537Z",
      value: 0.016551888,
    },
    {
      timestamp: "2023-03-08T13:18:44.598Z",
      value: 0.016548933,
    },
    {
      timestamp: "2023-03-08T13:19:08.07Z",
      value: 0.016551582,
    },
    {
      timestamp: "2023-03-08T13:19:20.188Z",
      value: 0.016573029,
    },
    {
      timestamp: "2023-03-08T13:19:31.872Z",
      value: 0.016607627,
    },
    {
      timestamp: "2023-03-08T13:19:56.106Z",
      value: 0.016568836,
    },
    {
      timestamp: "2023-03-08T13:20:08.885Z",
      value: 0.016544478,
    },
    {
      timestamp: "2023-03-08T13:20:19.626Z",
      value: 0.016557213,
    },
    {
      timestamp: "2023-03-08T13:20:33.028Z",
      value: 0.01655811,
    },
    {
      timestamp: "2023-03-08T13:20:45.177Z",
      value: 0.01659023,
    },
    {
      timestamp: "2023-03-08T13:21:11.141Z",
      value: 0.016566677,
    },
    {
      timestamp: "2023-03-08T13:21:21.504Z",
      value: 0.016607651,
    },
    {
      timestamp: "2023-03-08T13:21:32.422Z",
      value: 0.016579175,
    },
    {
      timestamp: "2023-03-08T13:21:56.919Z",
      value: 0.016570764,
    },
    {
      timestamp: "2023-03-08T13:22:09.001Z",
      value: 0.016547672,
    },
    {
      timestamp: "2023-03-08T13:22:22.172Z",
      value: 0.01659759,
    },
    {
      timestamp: "2023-03-08T13:22:43.984Z",
      value: 0.01658132,
    },
    {
      timestamp: "2023-03-08T13:22:56.898Z",
      value: 0.016592244,
    },
    {
      timestamp: "2023-03-08T13:23:10.092Z",
      value: 0.016557632,
    },
    {
      timestamp: "2023-03-08T13:23:20.882Z",
      value: 0.016557774,
    },
    {
      timestamp: "2023-03-08T13:23:33.175Z",
      value: 0.016554244,
    },
    {
      timestamp: "2023-03-08T13:23:56.075Z",
      value: 0.016570557,
    },
    {
      timestamp: "2023-03-08T13:24:19.642Z",
      value: 0.016555982,
    },
    {
      timestamp: "2023-03-08T13:24:31.776Z",
      value: 0.016569065,
    },
    {
      timestamp: "2023-03-08T13:24:56.629Z",
      value: 0.01655128,
    },
    {
      timestamp: "2023-03-08T13:25:09.465Z",
      value: 0.016590195,
    },
    {
      timestamp: "2023-03-08T13:25:20.177Z",
      value: 0.01656705,
    },
    {
      timestamp: "2023-03-08T13:25:32.327Z",
      value: 0.016563678,
    },
    {
      timestamp: "2023-03-08T13:25:56.008Z",
      value: 0.01658382,
    },
    {
      timestamp: "2023-03-08T13:26:09.199Z",
      value: 0.016541295,
    },
    {
      timestamp: "2023-03-08T13:26:21.335Z",
      value: 0.016580096,
    },
    {
      timestamp: "2023-03-08T13:26:32.306Z",
      value: 0.01658301,
    },
    {
      timestamp: "2023-03-08T13:26:56.5Z",
      value: 0.016564177,
    },
    {
      timestamp: "2023-03-08T13:27:09.863Z",
      value: 0.016592361,
    },
    {
      timestamp: "2023-03-08T13:27:20.669Z",
      value: 0.016588107,
    },
    {
      timestamp: "2023-03-08T13:27:32.845Z",
      value: 0.01657654,
    },
    {
      timestamp: "2023-03-08T13:27:56.573Z",
      value: 0.016534653,
    },
    {
      timestamp: "2023-03-08T13:28:09.276Z",
      value: 0.016526796,
    },
    {
      timestamp: "2023-03-08T13:28:20.737Z",
      value: 0.016552955,
    },
    {
      timestamp: "2023-03-08T13:28:43.641Z",
      value: 0.016545026,
    },
    {
      timestamp: "2023-03-08T13:28:57.12Z",
      value: 0.016511062,
    },
    {
      timestamp: "2023-03-08T13:29:09.271Z",
      value: 0.016544443,
    },
    {
      timestamp: "2023-03-08T13:29:23.425Z",
      value: 0.016578455,
    },
    {
      timestamp: "2023-03-08T13:29:34.448Z",
      value: 0.016556738,
    },
    {
      timestamp: "2023-03-08T13:29:56.995Z",
      value: 0.016594997,
    },
    {
      timestamp: "2023-03-08T13:30:07.945Z",
      value: 0.016566299,
    },
    {
      timestamp: "2023-03-08T13:30:20.455Z",
      value: 0.016553983,
    },
    {
      timestamp: "2023-03-08T13:30:32.181Z",
      value: 0.016576294,
    },
    {
      timestamp: "2023-03-08T13:30:44.271Z",
      value: 0.016591784,
    },
    {
      timestamp: "2023-03-08T13:31:11.471Z",
      value: 0.016547134,
    },
    {
      timestamp: "2023-03-08T13:31:21.822Z",
      value: 0.016561713,
    },
    {
      timestamp: "2023-03-08T13:31:32.641Z",
      value: 0.016566535,
    },
  ];

  const values_4 = [
    {
      timestamp: "2020-03-24T14:00:00Z",
      value: 99.95,
    },
    {
      timestamp: "2020-03-24T15:00:00Z",
      value: 98.9,
    },
    {
      timestamp: "2020-03-24T16:00:00Z",
      value: 98.85000000000001,
    },
    {
      timestamp: "2020-03-24T17:00:00Z",
      value: 98.80000000000001,
    },
    {
      timestamp: "2020-03-24T18:00:00Z",
      value: 97.75000000000001,
    },
    {
      timestamp: "2020-03-24T19:00:00Z",
      value: 97.70000000000002,
    },
    {
      timestamp: "2020-03-24T20:00:00Z",
      value: 97.65000000000002,
    },
    {
      timestamp: "2020-03-24T21:00:00Z",
      value: 97.60000000000002,
    },
    {
      timestamp: "2020-03-24T22:00:00Z",
      value: 96.55000000000003,
    },
    {
      timestamp: "2020-03-24T23:00:00Z",
      value: 95.50000000000003,
    },
    {
      timestamp: "2020-03-25T00:00:00Z",
      value: 94.45000000000003,
    },
    {
      timestamp: "2020-03-25T01:00:00Z",
      value: 94.40000000000003,
    },
    {
      timestamp: "2020-03-25T02:00:00Z",
      value: 94.35000000000004,
    },
    {
      timestamp: "2020-03-25T03:00:00Z",
      value: 93.30000000000004,
    },
    {
      timestamp: "2020-03-25T04:00:00Z",
      value: 93.25000000000004,
    },
    {
      timestamp: "2020-03-25T05:00:00Z",
      value: 92.20000000000005,
    },
    {
      timestamp: "2020-03-25T06:00:00Z",
      value: 92.15000000000005,
    },
    {
      timestamp: "2020-03-25T07:00:00Z",
      value: 91.10000000000005,
    },
    {
      timestamp: "2020-03-25T08:00:00Z",
      value: 90.05000000000005,
    },
    {
      timestamp: "2020-03-25T09:00:00Z",
      value: 90.00000000000006,
    },
    {
      timestamp: "2020-03-25T10:00:00Z",
      value: 89.95000000000006,
    },
    {
      timestamp: "2020-03-25T11:00:00Z",
      value: 88.90000000000006,
    },
    {
      timestamp: "2020-03-25T12:00:00Z",
      value: 88.85000000000007,
    },
    {
      timestamp: "2020-03-25T13:00:00Z",
      value: 88.80000000000007,
    },
    {
      timestamp: "2020-03-25T14:00:00Z",
      value: 88.75000000000007,
    },
    {
      timestamp: "2020-03-25T15:00:00Z",
      value: 88.70000000000007,
    },
    {
      timestamp: "2020-03-25T16:00:00Z",
      value: 87.65000000000008,
    },
    {
      timestamp: "2020-03-25T17:00:00Z",
      value: 87.60000000000008,
    },
    {
      timestamp: "2020-03-25T18:00:00Z",
      value: 87.55000000000008,
    },
    {
      timestamp: "2020-03-25T19:00:00Z",
      value: 86.50000000000009,
    },
    {
      timestamp: "2020-03-25T20:00:00Z",
      value: 86.45000000000009,
    },
    {
      timestamp: "2020-03-25T21:00:00Z",
      value: 85.40000000000009,
    },
    {
      timestamp: "2020-03-25T22:00:00Z",
      value: 85.3500000000001,
    },
    {
      timestamp: "2020-03-25T23:00:00Z",
      value: 85.3000000000001,
    },
    {
      timestamp: "2020-03-26T00:00:00Z",
      value: 85.2500000000001,
    },
    {
      timestamp: "2020-03-26T01:00:00Z",
      value: 84.2000000000001,
    },
    {
      timestamp: "2020-03-26T02:00:00Z",
      value: 84.1500000000001,
    },
    {
      timestamp: "2020-03-26T03:00:00Z",
      value: 84.10000000000011,
    },
    {
      timestamp: "2020-03-26T04:00:00Z",
      value: 83.05000000000011,
    },
    {
      timestamp: "2020-03-26T05:00:00Z",
      value: 83.00000000000011,
    },
    {
      timestamp: "2020-03-26T06:00:00Z",
      value: 82.95000000000012,
    },
    {
      timestamp: "2020-03-26T07:00:00Z",
      value: 81.90000000000012,
    },
    {
      timestamp: "2020-03-26T08:00:00Z",
      value: 80.85000000000012,
    },
    {
      timestamp: "2020-03-26T09:00:00Z",
      value: 80.80000000000013,
    },
    {
      timestamp: "2020-03-26T10:00:00Z",
      value: 79.75000000000013,
    },
    {
      timestamp: "2020-03-26T11:00:00Z",
      value: 78.70000000000013,
    },
    {
      timestamp: "2020-03-26T12:00:00Z",
      value: 77.65000000000013,
    },
    {
      timestamp: "2020-03-26T13:00:00Z",
      value: 77.60000000000014,
    },
    {
      timestamp: "2020-03-26T14:00:00Z",
      value: 76.55000000000014,
    },
    {
      timestamp: "2020-03-26T15:00:00Z",
      value: 75.50000000000014,
    },
    {
      timestamp: "2020-03-26T16:00:00Z",
      value: 74.45000000000014,
    },
    {
      timestamp: "2020-03-26T17:00:00Z",
      value: 73.40000000000015,
    },
    {
      timestamp: "2020-03-26T18:00:00Z",
      value: 72.35000000000015,
    },
    {
      timestamp: "2020-03-26T19:00:00Z",
      value: 72.30000000000015,
    },
    {
      timestamp: "2020-03-26T20:00:00Z",
      value: 72.25000000000016,
    },
    {
      timestamp: "2020-03-26T21:00:00Z",
      value: 71.20000000000016,
    },
    {
      timestamp: "2020-03-26T22:00:00Z",
      value: 70.15000000000016,
    },
    {
      timestamp: "2020-03-26T23:00:00Z",
      value: 70.10000000000016,
    },
    {
      timestamp: "2020-03-27T00:00:00Z",
      value: 69.05000000000017,
    },
    {
      timestamp: "2020-03-27T01:00:00Z",
      value: 69.00000000000017,
    },
    {
      timestamp: "2020-03-27T02:00:00Z",
      value: 67.95000000000017,
    },
    {
      timestamp: "2020-03-27T03:00:00Z",
      value: 66.90000000000018,
    },
    {
      timestamp: "2020-03-27T04:00:00Z",
      value: 66.85000000000018,
    },
    {
      timestamp: "2020-03-27T05:00:00Z",
      value: 66.80000000000018,
    },
    {
      timestamp: "2020-03-27T06:00:00Z",
      value: 66.75000000000018,
    },
    {
      timestamp: "2020-03-27T07:00:00Z",
      value: 66.70000000000019,
    },
    {
      timestamp: "2020-03-27T08:00:00Z",
      value: 66.65000000000019,
    },
    {
      timestamp: "2020-03-27T09:00:00Z",
      value: 65.6000000000002,
    },
    {
      timestamp: "2020-03-27T10:00:00Z",
      value: 64.5500000000002,
    },
    {
      timestamp: "2020-03-27T11:00:00Z",
      value: 64.5000000000002,
    },
    {
      timestamp: "2020-03-27T12:00:00Z",
      value: 64.4500000000002,
    },
    {
      timestamp: "2020-03-27T13:00:00Z",
      value: 63.400000000000205,
    },
    {
      timestamp: "2020-03-27T14:00:00Z",
      value: 63.35000000000021,
    },
    {
      timestamp: "2020-03-27T15:00:00Z",
      value: 63.30000000000021,
    },
    {
      timestamp: "2020-03-27T16:00:00Z",
      value: 63.25000000000021,
    },
    {
      timestamp: "2020-03-27T17:00:00Z",
      value: 62.200000000000216,
    },
    {
      timestamp: "2020-03-27T18:00:00Z",
      value: 61.15000000000022,
    },
    {
      timestamp: "2020-03-27T19:00:00Z",
      value: 61.10000000000022,
    },
    {
      timestamp: "2020-03-27T20:00:00Z",
      value: 60.050000000000225,
    },
    {
      timestamp: "2020-03-27T21:00:00Z",
      value: 59.00000000000023,
    },
    {
      timestamp: "2020-03-27T22:00:00Z",
      value: 58.95000000000023,
    },
    {
      timestamp: "2020-03-27T23:00:00Z",
      value: 57.90000000000023,
    },
    {
      timestamp: "2020-03-28T00:00:00Z",
      value: 57.850000000000236,
    },
    {
      timestamp: "2020-03-28T01:00:00Z",
      value: 56.80000000000024,
    },
    {
      timestamp: "2020-03-28T02:00:00Z",
      value: 55.75000000000024,
    },
    {
      timestamp: "2020-03-28T03:00:00Z",
      value: 55.700000000000244,
    },
    {
      timestamp: "2020-03-28T04:00:00Z",
      value: 55.65000000000025,
    },
    {
      timestamp: "2020-03-28T05:00:00Z",
      value: 55.60000000000025,
    },
    {
      timestamp: "2020-03-28T06:00:00Z",
      value: 54.55000000000025,
    },
    {
      timestamp: "2020-03-28T07:00:00Z",
      value: 54.500000000000256,
    },
    {
      timestamp: "2020-03-28T08:00:00Z",
      value: 53.45000000000026,
    },
    {
      timestamp: "2020-03-28T09:00:00Z",
      value: 52.40000000000026,
    },
    {
      timestamp: "2020-03-28T10:00:00Z",
      value: 52.350000000000264,
    },
    {
      timestamp: "2020-03-28T11:00:00Z",
      value: 51.30000000000027,
    },
    {
      timestamp: "2020-03-28T12:00:00Z",
      value: 50.25000000000027,
    },
    {
      timestamp: "2020-03-28T13:00:00Z",
      value: 49.20000000000027,
    },
    {
      timestamp: "2020-03-28T14:00:00Z",
      value: 48.150000000000276,
    },
    {
      timestamp: "2020-03-28T15:00:00Z",
      value: 48.10000000000028,
    },
    {
      timestamp: "2020-03-28T16:00:00Z",
      value: 48.05000000000028,
    },
    {
      timestamp: "2020-03-28T17:00:00Z",
      value: 47.000000000000284,
    },
    {
      timestamp: "2020-03-28T18:00:00Z",
      value: 46.95000000000029,
    },
    {
      timestamp: "2020-03-28T19:00:00Z",
      value: 46.90000000000029,
    },
    {
      timestamp: "2020-03-28T20:00:00Z",
      value: 46.85000000000029,
    },
    {
      timestamp: "2020-03-28T21:00:00Z",
      value: 46.800000000000296,
    },
    {
      timestamp: "2020-03-28T22:00:00Z",
      value: 45.7500000000003,
    },
    {
      timestamp: "2020-03-28T23:00:00Z",
      value: 44.7000000000003,
    },
    {
      timestamp: "2020-03-29T00:00:00Z",
      value: 43.650000000000304,
    },
    {
      timestamp: "2020-03-29T01:00:00Z",
      value: 43.60000000000031,
    },
    {
      timestamp: "2020-03-29T02:00:00Z",
      value: 43.55000000000031,
    },
    {
      timestamp: "2020-03-29T03:00:00Z",
      value: 43.50000000000031,
    },
    {
      timestamp: "2020-03-29T04:00:00Z",
      value: 43.450000000000315,
    },
    {
      timestamp: "2020-03-29T05:00:00Z",
      value: 43.40000000000032,
    },
    {
      timestamp: "2020-03-29T06:00:00Z",
      value: 42.35000000000032,
    },
    {
      timestamp: "2020-03-29T07:00:00Z",
      value: 41.300000000000324,
    },
    {
      timestamp: "2020-03-29T08:00:00Z",
      value: 40.25000000000033,
    },
    {
      timestamp: "2020-03-29T09:00:00Z",
      value: 40.20000000000033,
    },
    {
      timestamp: "2020-03-29T10:00:00Z",
      value: 39.15000000000033,
    },
    {
      timestamp: "2020-03-29T11:00:00Z",
      value: 39.100000000000335,
    },
    {
      timestamp: "2020-03-29T12:00:00Z",
      value: 39.05000000000034,
    },
    {
      timestamp: "2020-03-29T13:00:00Z",
      value: 38.00000000000034,
    },
    {
      timestamp: "2020-03-29T14:00:00Z",
      value: 36.950000000000344,
    },
    {
      timestamp: "2020-03-29T15:00:00Z",
      value: 36.90000000000035,
    },
    {
      timestamp: "2020-03-29T16:00:00Z",
      value: 36.85000000000035,
    },
    {
      timestamp: "2020-03-29T17:00:00Z",
      value: 36.80000000000035,
    },
    {
      timestamp: "2020-03-29T18:00:00Z",
      value: 36.750000000000355,
    },
    {
      timestamp: "2020-03-29T19:00:00Z",
      value: 35.70000000000036,
    },
    {
      timestamp: "2020-03-29T20:00:00Z",
      value: 35.65000000000036,
    },
    {
      timestamp: "2020-03-29T21:00:00Z",
      value: 35.600000000000364,
    },
    {
      timestamp: "2020-03-29T22:00:00Z",
      value: 35.55000000000037,
    },
    {
      timestamp: "2020-03-29T23:00:00Z",
      value: 35.50000000000037,
    },
    {
      timestamp: "2020-03-30T00:00:00Z",
      value: 34.45000000000037,
    },
    {
      timestamp: "2020-03-30T01:00:00Z",
      value: 33.400000000000375,
    },
    {
      timestamp: "2020-03-30T02:00:00Z",
      value: 33.35000000000038,
    },
    {
      timestamp: "2020-03-30T03:00:00Z",
      value: 32.30000000000038,
    },
    {
      timestamp: "2020-03-30T04:00:00Z",
      value: 31.25000000000038,
    },
    {
      timestamp: "2020-03-30T05:00:00Z",
      value: 31.20000000000038,
    },
    {
      timestamp: "2020-03-30T06:00:00Z",
      value: 30.15000000000038,
    },
    {
      timestamp: "2020-03-30T07:00:00Z",
      value: 29.100000000000378,
    },
    {
      timestamp: "2020-03-30T08:00:00Z",
      value: 28.050000000000377,
    },
    {
      timestamp: "2020-03-30T09:00:00Z",
      value: 28.000000000000377,
    },
    {
      timestamp: "2020-03-30T10:00:00Z",
      value: 26.950000000000376,
    },
    {
      timestamp: "2020-03-30T11:00:00Z",
      value: 25.900000000000375,
    },
    {
      timestamp: "2020-03-30T12:00:00Z",
      value: 25.850000000000374,
    },
    {
      timestamp: "2020-03-30T13:00:00Z",
      value: 25.800000000000374,
    },
    {
      timestamp: "2020-03-30T14:00:00Z",
      value: 25.750000000000373,
    },
    {
      timestamp: "2020-03-30T15:00:00Z",
      value: 25.700000000000372,
    },
    {
      timestamp: "2020-03-30T16:00:00Z",
      value: 24.65000000000037,
    },
    {
      timestamp: "2020-03-30T17:00:00Z",
      value: 23.60000000000037,
    },
    {
      timestamp: "2020-03-30T18:00:00Z",
      value: 23.55000000000037,
    },
    {
      timestamp: "2020-03-30T19:00:00Z",
      value: 22.50000000000037,
    },
    {
      timestamp: "2020-03-30T20:00:00Z",
      value: 21.45000000000037,
    },
    {
      timestamp: "2020-03-30T21:00:00Z",
      value: 20.400000000000368,
    },
    {
      timestamp: "2020-03-30T22:00:00Z",
      value: 20.350000000000367,
    },
    {
      timestamp: "2020-03-30T23:00:00Z",
      value: 20.300000000000367,
    },
    {
      timestamp: "2020-03-31T00:00:00Z",
      value: 19.250000000000366,
    },
    {
      timestamp: "2020-03-31T01:00:00Z",
      value: 19.200000000000365,
    },
    {
      timestamp: "2020-03-31T02:00:00Z",
      value: 18.150000000000365,
    },
    {
      timestamp: "2020-03-31T03:00:00Z",
      value: 18.100000000000364,
    },
    {
      timestamp: "2020-03-31T04:00:00Z",
      value: 18.050000000000363,
    },
    {
      timestamp: "2020-03-31T05:00:00Z",
      value: 18.000000000000362,
    },
    {
      timestamp: "2020-03-31T06:00:00Z",
      value: 16.95000000000036,
    },
    {
      timestamp: "2020-03-31T07:00:00Z",
      value: 16.90000000000036,
    },
    {
      timestamp: "2020-03-31T08:00:00Z",
      value: 15.85000000000036,
    },
    {
      timestamp: "2020-03-31T09:00:00Z",
      value: 14.80000000000036,
    },
    {
      timestamp: "2020-03-31T10:00:00Z",
      value: 13.750000000000359,
    },
    {
      timestamp: "2020-03-31T11:00:00Z",
      value: 12.700000000000358,
    },
    {
      timestamp: "2020-03-31T12:00:00Z",
      value: 12.650000000000357,
    },
    {
      timestamp: "2020-03-31T13:00:00Z",
      value: 11.600000000000357,
    },
    {
      timestamp: "2020-03-31T14:00:00Z",
      value: 11.550000000000356,
    },
    {
      timestamp: "2020-03-31T15:00:00Z",
      value: 10.500000000000355,
    },
    {
      timestamp: "2020-03-31T16:00:00Z",
      value: 10.450000000000355,
    },
    {
      timestamp: "2020-03-31T17:00:00Z",
      value: 10.400000000000354,
    },
    {
      timestamp: "2020-03-31T18:00:00Z",
      value: 10.350000000000353,
    },
    {
      timestamp: "2020-03-31T19:00:00Z",
      value: 10.300000000000352,
    },
    {
      timestamp: "2020-03-31T20:00:00Z",
      value: 10.250000000000352,
    },
    {
      timestamp: "2020-03-31T21:00:00Z",
      value: 9.200000000000351,
    },
    {
      timestamp: "2020-03-31T22:00:00Z",
      value: 8.15000000000035,
    },
    {
      timestamp: "2020-03-31T23:00:00Z",
      value: 8.10000000000035,
    },
    {
      timestamp: "2020-04-01T00:00:00Z",
      value: 7.05000000000035,
    },
    {
      timestamp: "2020-04-01T01:00:00Z",
      value: 6.00000000000035,
    },
    {
      timestamp: "2020-04-01T02:00:00Z",
      value: 5.95000000000035,
    },
    {
      timestamp: "2020-04-01T03:00:00Z",
      value: 4.90000000000035,
    },
    {
      timestamp: "2020-04-01T04:00:00Z",
      value: 3.8500000000003505,
    },
    {
      timestamp: "2020-04-01T05:00:00Z",
      value: 2.8000000000003507,
    },
    {
      timestamp: "2020-04-01T06:00:00Z",
      value: 1.7500000000003506,
    },
    {
      timestamp: "2020-04-01T07:00:00Z",
      value: 1.7000000000003506,
    },
    {
      timestamp: "2020-04-01T08:00:00Z",
      value: 1.6500000000003505,
    },
    {
      timestamp: "2020-04-01T09:00:00Z",
      value: 0.6000000000003505,
    },
    {
      timestamp: "2020-04-01T10:00:00Z",
      value: 0.5500000000003504,
    },
    {
      timestamp: "2020-04-01T11:00:00Z",
      value: 98,
    },
    {
      timestamp: "2020-04-01T12:00:00Z",
      value: 97.95,
    },
    {
      timestamp: "2020-04-01T13:00:00Z",
      value: 97.9,
    },
    {
      timestamp: "2020-04-01T14:00:00Z",
      value: 97.85000000000001,
    },
    {
      timestamp: "2020-04-01T15:00:00Z",
      value: 96.80000000000001,
    },
    {
      timestamp: "2020-04-01T16:00:00Z",
      value: 96.75000000000001,
    },
    {
      timestamp: "2020-04-01T17:00:00Z",
      value: 95.70000000000002,
    },
    {
      timestamp: "2020-04-01T18:00:00Z",
      value: 94.65000000000002,
    },
    {
      timestamp: "2020-04-01T19:00:00Z",
      value: 94.60000000000002,
    },
    {
      timestamp: "2020-04-01T20:00:00Z",
      value: 93.55000000000003,
    },
    {
      timestamp: "2020-04-01T21:00:00Z",
      value: 92.50000000000003,
    },
    {
      timestamp: "2020-04-01T22:00:00Z",
      value: 92.45000000000003,
    },
    {
      timestamp: "2020-04-01T23:00:00Z",
      value: 91.40000000000003,
    },
    {
      timestamp: "2020-04-02T00:00:00Z",
      value: 91.35000000000004,
    },
    {
      timestamp: "2020-04-02T01:00:00Z",
      value: 91.30000000000004,
    },
    {
      timestamp: "2020-04-02T02:00:00Z",
      value: 90.25000000000004,
    },
    {
      timestamp: "2020-04-02T03:00:00Z",
      value: 90.20000000000005,
    },
    {
      timestamp: "2020-04-02T04:00:00Z",
      value: 90.15000000000005,
    },
    {
      timestamp: "2020-04-02T05:00:00Z",
      value: 90.10000000000005,
    },
    {
      timestamp: "2020-04-02T06:00:00Z",
      value: 89.05000000000005,
    },
    {
      timestamp: "2020-04-02T07:00:00Z",
      value: 88.00000000000006,
    },
    {
      timestamp: "2020-04-02T08:00:00Z",
      value: 86.95000000000006,
    },
    {
      timestamp: "2020-04-02T09:00:00Z",
      value: 85.90000000000006,
    },
    {
      timestamp: "2020-04-02T10:00:00Z",
      value: 85.85000000000007,
    },
    {
      timestamp: "2020-04-02T11:00:00Z",
      value: 85.80000000000007,
    },
    {
      timestamp: "2020-04-02T12:00:00Z",
      value: 84.75000000000007,
    },
    {
      timestamp: "2020-04-02T13:00:00Z",
      value: 84.70000000000007,
    },
    {
      timestamp: "2020-04-02T14:00:00Z",
      value: 83.65000000000008,
    },
    {
      timestamp: "2020-04-02T15:00:00Z",
      value: 83.60000000000008,
    },
    {
      timestamp: "2020-04-02T16:00:00Z",
      value: 82.55000000000008,
    },
    {
      timestamp: "2020-04-02T17:00:00Z",
      value: 81.50000000000009,
    },
    {
      timestamp: "2020-04-02T18:00:00Z",
      value: 80.45000000000009,
    },
    {
      timestamp: "2020-04-02T19:00:00Z",
      value: 79.40000000000009,
    },
    {
      timestamp: "2020-04-02T20:00:00Z",
      value: 78.3500000000001,
    },
    {
      timestamp: "2020-04-02T21:00:00Z",
      value: 77.3000000000001,
    },
    {
      timestamp: "2020-04-02T22:00:00Z",
      value: 77.2500000000001,
    },
    {
      timestamp: "2020-04-02T23:00:00Z",
      value: 77.2000000000001,
    },
    {
      timestamp: "2020-04-03T00:00:00Z",
      value: 77.1500000000001,
    },
    {
      timestamp: "2020-04-03T01:00:00Z",
      value: 76.10000000000011,
    },
    {
      timestamp: "2020-04-03T02:00:00Z",
      value: 76.05000000000011,
    },
    {
      timestamp: "2020-04-03T03:00:00Z",
      value: 76.00000000000011,
    },
    {
      timestamp: "2020-04-03T04:00:00Z",
      value: 75.95000000000012,
    },
    {
      timestamp: "2020-04-03T05:00:00Z",
      value: 75.90000000000012,
    },
    {
      timestamp: "2020-04-03T06:00:00Z",
      value: 74.85000000000012,
    },
    {
      timestamp: "2020-04-03T07:00:00Z",
      value: 74.80000000000013,
    },
    {
      timestamp: "2020-04-03T08:00:00Z",
      value: 73.75000000000013,
    },
    {
      timestamp: "2020-04-03T09:00:00Z",
      value: 73.70000000000013,
    },
    {
      timestamp: "2020-04-03T10:00:00Z",
      value: 73.65000000000013,
    },
    {
      timestamp: "2020-04-03T11:00:00Z",
      value: 72.60000000000014,
    },
    {
      timestamp: "2020-04-03T12:00:00Z",
      value: 71.55000000000014,
    },
    {
      timestamp: "2020-04-03T13:00:00Z",
      value: 71.50000000000014,
    },
    {
      timestamp: "2020-04-03T14:00:00Z",
      value: 71.45000000000014,
    },
    {
      timestamp: "2020-04-03T15:00:00Z",
      value: 71.40000000000015,
    },
    {
      timestamp: "2020-04-03T16:00:00Z",
      value: 70.35000000000015,
    },
    {
      timestamp: "2020-04-03T17:00:00Z",
      value: 69.30000000000015,
    },
    {
      timestamp: "2020-04-03T18:00:00Z",
      value: 68.25000000000016,
    },
    {
      timestamp: "2020-04-03T19:00:00Z",
      value: 68.20000000000016,
    },
    {
      timestamp: "2020-04-03T20:00:00Z",
      value: 68.15000000000016,
    },
    {
      timestamp: "2020-04-03T21:00:00Z",
      value: 68.10000000000016,
    },
    {
      timestamp: "2020-04-03T22:00:00Z",
      value: 68.05000000000017,
    },
    {
      timestamp: "2020-04-03T23:00:00Z",
      value: 67.00000000000017,
    },
    {
      timestamp: "2020-04-04T00:00:00Z",
      value: 66.95000000000017,
    },
    {
      timestamp: "2020-04-04T01:00:00Z",
      value: 66.90000000000018,
    },
    {
      timestamp: "2020-04-04T02:00:00Z",
      value: 66.85000000000018,
    },
    {
      timestamp: "2020-04-04T03:00:00Z",
      value: 65.80000000000018,
    },
    {
      timestamp: "2020-04-04T04:00:00Z",
      value: 64.75000000000018,
    },
    {
      timestamp: "2020-04-04T05:00:00Z",
      value: 63.70000000000019,
    },
    {
      timestamp: "2020-04-04T06:00:00Z",
      value: 63.65000000000019,
    },
    {
      timestamp: "2020-04-04T07:00:00Z",
      value: 62.60000000000019,
    },
    {
      timestamp: "2020-04-04T08:00:00Z",
      value: 61.550000000000196,
    },
    {
      timestamp: "2020-04-04T09:00:00Z",
      value: 61.5000000000002,
    },
    {
      timestamp: "2020-04-04T10:00:00Z",
      value: 61.4500000000002,
    },
    {
      timestamp: "2020-04-04T11:00:00Z",
      value: 60.400000000000205,
    },
    {
      timestamp: "2020-04-04T12:00:00Z",
      value: 59.35000000000021,
    },
    {
      timestamp: "2020-04-04T13:00:00Z",
      value: 58.30000000000021,
    },
    {
      timestamp: "2020-04-04T14:00:00Z",
      value: 57.25000000000021,
    },
    {
      timestamp: "2020-04-04T15:00:00Z",
      value: 57.200000000000216,
    },
    {
      timestamp: "2020-04-04T16:00:00Z",
      value: 57.15000000000022,
    },
    {
      timestamp: "2020-04-04T17:00:00Z",
      value: 56.10000000000022,
    },
    {
      timestamp: "2020-04-04T18:00:00Z",
      value: 55.050000000000225,
    },
    {
      timestamp: "2020-04-04T19:00:00Z",
      value: 55.00000000000023,
    },
    {
      timestamp: "2020-04-04T20:00:00Z",
      value: 54.95000000000023,
    },
    {
      timestamp: "2020-04-04T21:00:00Z",
      value: 54.90000000000023,
    },
    {
      timestamp: "2020-04-04T22:00:00Z",
      value: 53.850000000000236,
    },
    {
      timestamp: "2020-04-04T23:00:00Z",
      value: 52.80000000000024,
    },
    {
      timestamp: "2020-04-05T00:00:00Z",
      value: 51.75000000000024,
    },
    {
      timestamp: "2020-04-05T01:00:00Z",
      value: 51.700000000000244,
    },
    {
      timestamp: "2020-04-05T02:00:00Z",
      value: 51.65000000000025,
    },
    {
      timestamp: "2020-04-05T03:00:00Z",
      value: 51.60000000000025,
    },
    {
      timestamp: "2020-04-05T04:00:00Z",
      value: 51.55000000000025,
    },
    {
      timestamp: "2020-04-05T05:00:00Z",
      value: 51.500000000000256,
    },
    {
      timestamp: "2020-04-05T06:00:00Z",
      value: 51.45000000000026,
    },
    {
      timestamp: "2020-04-05T07:00:00Z",
      value: 50.40000000000026,
    },
    {
      timestamp: "2020-04-05T08:00:00Z",
      value: 50.350000000000264,
    },
    {
      timestamp: "2020-04-05T09:00:00Z",
      value: 49.30000000000027,
    },
    {
      timestamp: "2020-04-05T10:00:00Z",
      value: 48.25000000000027,
    },
    {
      timestamp: "2020-04-05T11:00:00Z",
      value: 48.20000000000027,
    },
    {
      timestamp: "2020-04-05T12:00:00Z",
      value: 48.150000000000276,
    },
    {
      timestamp: "2020-04-05T13:00:00Z",
      value: 48.10000000000028,
    },
    {
      timestamp: "2020-04-05T14:00:00Z",
      value: 48.05000000000028,
    },
    {
      timestamp: "2020-04-05T15:00:00Z",
      value: 47.000000000000284,
    },
    {
      timestamp: "2020-04-05T16:00:00Z",
      value: 46.95000000000029,
    },
    {
      timestamp: "2020-04-05T17:00:00Z",
      value: 46.90000000000029,
    },
    {
      timestamp: "2020-04-05T18:00:00Z",
      value: 45.85000000000029,
    },
    {
      timestamp: "2020-04-05T19:00:00Z",
      value: 45.800000000000296,
    },
    {
      timestamp: "2020-04-05T20:00:00Z",
      value: 44.7500000000003,
    },
    {
      timestamp: "2020-04-05T21:00:00Z",
      value: 44.7000000000003,
    },
    {
      timestamp: "2020-04-05T22:00:00Z",
      value: 44.650000000000304,
    },
    {
      timestamp: "2020-04-05T23:00:00Z",
      value: 44.60000000000031,
    },
    {
      timestamp: "2020-04-06T00:00:00Z",
      value: 43.55000000000031,
    },
    {
      timestamp: "2020-04-06T01:00:00Z",
      value: 43.50000000000031,
    },
    {
      timestamp: "2020-04-06T02:00:00Z",
      value: 42.450000000000315,
    },
    {
      timestamp: "2020-04-06T03:00:00Z",
      value: 42.40000000000032,
    },
    {
      timestamp: "2020-04-06T04:00:00Z",
      value: 41.35000000000032,
    },
    {
      timestamp: "2020-04-06T05:00:00Z",
      value: 41.300000000000324,
    },
    {
      timestamp: "2020-04-06T06:00:00Z",
      value: 40.25000000000033,
    },
    {
      timestamp: "2020-04-06T07:00:00Z",
      value: 40.20000000000033,
    },
    {
      timestamp: "2020-04-06T08:00:00Z",
      value: 39.15000000000033,
    },
    {
      timestamp: "2020-04-06T09:00:00Z",
      value: 38.100000000000335,
    },
    {
      timestamp: "2020-04-06T10:00:00Z",
      value: 37.05000000000034,
    },
    {
      timestamp: "2020-04-06T11:00:00Z",
      value: 36.00000000000034,
    },
    {
      timestamp: "2020-04-06T12:00:00Z",
      value: 34.950000000000344,
    },
    {
      timestamp: "2020-04-06T13:00:00Z",
      value: 34.90000000000035,
    },
    {
      timestamp: "2020-04-06T14:00:00Z",
      value: 33.85000000000035,
    },
    {
      timestamp: "2020-04-06T15:00:00Z",
      value: 32.80000000000035,
    },
    {
      timestamp: "2020-04-06T16:00:00Z",
      value: 31.75000000000035,
    },
    {
      timestamp: "2020-04-06T17:00:00Z",
      value: 30.70000000000035,
    },
    {
      timestamp: "2020-04-06T18:00:00Z",
      value: 30.65000000000035,
    },
    {
      timestamp: "2020-04-06T19:00:00Z",
      value: 29.60000000000035,
    },
    {
      timestamp: "2020-04-06T20:00:00Z",
      value: 28.55000000000035,
    },
    {
      timestamp: "2020-04-06T21:00:00Z",
      value: 27.500000000000348,
    },
    {
      timestamp: "2020-04-06T22:00:00Z",
      value: 26.450000000000347,
    },
    {
      timestamp: "2020-04-06T23:00:00Z",
      value: 25.400000000000347,
    },
    {
      timestamp: "2020-04-07T00:00:00Z",
      value: 25.350000000000346,
    },
    {
      timestamp: "2020-04-07T01:00:00Z",
      value: 24.300000000000345,
    },
    {
      timestamp: "2020-04-07T02:00:00Z",
      value: 23.250000000000345,
    },
    {
      timestamp: "2020-04-07T03:00:00Z",
      value: 23.200000000000344,
    },
    {
      timestamp: "2020-04-07T04:00:00Z",
      value: 22.150000000000343,
    },
    {
      timestamp: "2020-04-07T05:00:00Z",
      value: 21.100000000000342,
    },
    {
      timestamp: "2020-04-07T06:00:00Z",
      value: 21.05000000000034,
    },
    {
      timestamp: "2020-04-07T07:00:00Z",
      value: 20.00000000000034,
    },
    {
      timestamp: "2020-04-07T08:00:00Z",
      value: 18.95000000000034,
    },
    {
      timestamp: "2020-04-07T09:00:00Z",
      value: 18.90000000000034,
    },
    {
      timestamp: "2020-04-07T10:00:00Z",
      value: 17.85000000000034,
    },
    {
      timestamp: "2020-04-07T11:00:00Z",
      value: 16.800000000000338,
    },
    {
      timestamp: "2020-04-07T12:00:00Z",
      value: 16.750000000000338,
    },
    {
      timestamp: "2020-04-07T13:00:00Z",
      value: 15.700000000000337,
    },
    {
      timestamp: "2020-04-07T14:00:00Z",
      value: 14.650000000000336,
    },
    {
      timestamp: "2020-04-07T15:00:00Z",
      value: 14.600000000000335,
    },
    {
      timestamp: "2020-04-07T16:00:00Z",
      value: 14.550000000000335,
    },
    {
      timestamp: "2020-04-07T17:00:00Z",
      value: 14.500000000000334,
    },
    {
      timestamp: "2020-04-07T18:00:00Z",
      value: 14.450000000000333,
    },
    {
      timestamp: "2020-04-07T19:00:00Z",
      value: 13.400000000000333,
    },
    {
      timestamp: "2020-04-07T20:00:00Z",
      value: 13.350000000000332,
    },
    {
      timestamp: "2020-04-07T21:00:00Z",
      value: 12.300000000000331,
    },
    {
      timestamp: "2020-04-07T22:00:00Z",
      value: 11.25000000000033,
    },
    {
      timestamp: "2020-04-07T23:00:00Z",
      value: 11.20000000000033,
    },
    {
      timestamp: "2020-04-08T00:00:00Z",
      value: 11.150000000000329,
    },
    {
      timestamp: "2020-04-08T01:00:00Z",
      value: 10.100000000000328,
    },
    {
      timestamp: "2020-04-08T02:00:00Z",
      value: 9.050000000000328,
    },
    {
      timestamp: "2020-04-08T03:00:00Z",
      value: 8.000000000000327,
    },
    {
      timestamp: "2020-04-08T04:00:00Z",
      value: 7.950000000000327,
    },
    {
      timestamp: "2020-04-08T05:00:00Z",
      value: 6.900000000000327,
    },
    {
      timestamp: "2020-04-08T06:00:00Z",
      value: 6.850000000000327,
    },
    {
      timestamp: "2020-04-08T07:00:00Z",
      value: 5.800000000000328,
    },
    {
      timestamp: "2020-04-08T08:00:00Z",
      value: 5.750000000000328,
    },
    {
      timestamp: "2020-04-08T09:00:00Z",
      value: 5.700000000000328,
    },
    {
      timestamp: "2020-04-08T10:00:00Z",
      value: 4.650000000000328,
    },
    {
      timestamp: "2020-04-08T11:00:00Z",
      value: 4.600000000000328,
    },
    {
      timestamp: "2020-04-08T12:00:00Z",
      value: 3.5500000000003284,
    },
    {
      timestamp: "2020-04-08T13:00:00Z",
      value: 2.5000000000003286,
    },
    {
      timestamp: "2020-04-08T14:00:00Z",
      value: 1.4500000000003286,
    },
    {
      timestamp: "2020-04-08T15:00:00Z",
      value: 0.40000000000032854,
    },
    {
      timestamp: "2020-04-08T16:00:00Z",
      value: 0.35000000000032855,
    },
    {
      timestamp: "2020-04-08T17:00:00Z",
      value: 100,
    },
    {
      timestamp: "2020-04-08T18:00:00Z",
      value: 98.95,
    },
    {
      timestamp: "2020-04-08T19:00:00Z",
      value: 98.9,
    },
    {
      timestamp: "2020-04-08T20:00:00Z",
      value: 97.85000000000001,
    },
    {
      timestamp: "2020-04-08T21:00:00Z",
      value: 97.80000000000001,
    },
    {
      timestamp: "2020-04-08T22:00:00Z",
      value: 96.75000000000001,
    },
    {
      timestamp: "2020-04-08T23:00:00Z",
      value: 96.70000000000002,
    },
    {
      timestamp: "2020-04-09T00:00:00Z",
      value: 95.65000000000002,
    },
    {
      timestamp: "2020-04-09T01:00:00Z",
      value: 94.60000000000002,
    },
    {
      timestamp: "2020-04-09T02:00:00Z",
      value: 94.55000000000003,
    },
    {
      timestamp: "2020-04-09T03:00:00Z",
      value: 93.50000000000003,
    },
    {
      timestamp: "2020-04-09T04:00:00Z",
      value: 93.45000000000003,
    },
    {
      timestamp: "2020-04-09T05:00:00Z",
      value: 92.40000000000003,
    },
    {
      timestamp: "2020-04-09T06:00:00Z",
      value: 91.35000000000004,
    },
    {
      timestamp: "2020-04-09T07:00:00Z",
      value: 91.30000000000004,
    },
    {
      timestamp: "2020-04-09T08:00:00Z",
      value: 90.25000000000004,
    },
    {
      timestamp: "2020-04-09T09:00:00Z",
      value: 89.20000000000005,
    },
    {
      timestamp: "2020-04-09T10:00:00Z",
      value: 89.15000000000005,
    },
    {
      timestamp: "2020-04-09T11:00:00Z",
      value: 89.10000000000005,
    },
    {
      timestamp: "2020-04-09T12:00:00Z",
      value: 88.05000000000005,
    },
    {
      timestamp: "2020-04-09T13:00:00Z",
      value: 87.00000000000006,
    },
    {
      timestamp: "2020-04-09T14:00:00Z",
      value: 86.95000000000006,
    },
    {
      timestamp: "2020-04-09T15:00:00Z",
      value: 86.90000000000006,
    },
    {
      timestamp: "2020-04-09T16:00:00Z",
      value: 85.85000000000007,
    },
    {
      timestamp: "2020-04-09T17:00:00Z",
      value: 85.80000000000007,
    },
    {
      timestamp: "2020-04-09T18:00:00Z",
      value: 84.75000000000007,
    },
    {
      timestamp: "2020-04-09T19:00:00Z",
      value: 83.70000000000007,
    },
    {
      timestamp: "2020-04-09T20:00:00Z",
      value: 82.65000000000008,
    },
    {
      timestamp: "2020-04-09T21:00:00Z",
      value: 82.60000000000008,
    },
    {
      timestamp: "2020-04-09T22:00:00Z",
      value: 81.55000000000008,
    },
    {
      timestamp: "2020-04-09T23:00:00Z",
      value: 81.50000000000009,
    },
    {
      timestamp: "2020-04-10T00:00:00Z",
      value: 81.45000000000009,
    },
    {
      timestamp: "2020-04-10T01:00:00Z",
      value: 81.40000000000009,
    },
    {
      timestamp: "2020-04-10T02:00:00Z",
      value: 81.3500000000001,
    },
    {
      timestamp: "2020-04-10T03:00:00Z",
      value: 80.3000000000001,
    },
    {
      timestamp: "2020-04-10T04:00:00Z",
      value: 79.2500000000001,
    },
    {
      timestamp: "2020-04-10T05:00:00Z",
      value: 79.2000000000001,
    },
    {
      timestamp: "2020-04-10T06:00:00Z",
      value: 78.1500000000001,
    },
    {
      timestamp: "2020-04-10T07:00:00Z",
      value: 78.10000000000011,
    },
    {
      timestamp: "2020-04-10T08:00:00Z",
      value: 77.05000000000011,
    },
    {
      timestamp: "2020-04-10T09:00:00Z",
      value: 77.00000000000011,
    },
    {
      timestamp: "2020-04-10T10:00:00Z",
      value: 76.95000000000012,
    },
    {
      timestamp: "2020-04-10T11:00:00Z",
      value: 76.90000000000012,
    },
    {
      timestamp: "2020-04-10T12:00:00Z",
      value: 76.85000000000012,
    },
    {
      timestamp: "2020-04-10T13:00:00Z",
      value: 76.80000000000013,
    },
    {
      timestamp: "2020-04-10T14:00:00Z",
      value: 75.75000000000013,
    },
    {
      timestamp: "2020-04-10T15:00:00Z",
      value: 74.70000000000013,
    },
    {
      timestamp: "2020-04-10T16:00:00Z",
      value: 73.65000000000013,
    },
    {
      timestamp: "2020-04-10T17:00:00Z",
      value: 72.60000000000014,
    },
    {
      timestamp: "2020-04-10T18:00:00Z",
      value: 72.55000000000014,
    },
    {
      timestamp: "2020-04-10T19:00:00Z",
      value: 71.50000000000014,
    },
    {
      timestamp: "2020-04-10T20:00:00Z",
      value: 71.45000000000014,
    },
    {
      timestamp: "2020-04-10T21:00:00Z",
      value: 70.40000000000015,
    },
    {
      timestamp: "2020-04-10T22:00:00Z",
      value: 69.35000000000015,
    },
    {
      timestamp: "2020-04-10T23:00:00Z",
      value: 68.30000000000015,
    },
    {
      timestamp: "2020-04-11T00:00:00Z",
      value: 68.25000000000016,
    },
    {
      timestamp: "2020-04-11T01:00:00Z",
      value: 68.20000000000016,
    },
    {
      timestamp: "2020-04-11T02:00:00Z",
      value: 68.15000000000016,
    },
    {
      timestamp: "2020-04-11T03:00:00Z",
      value: 67.10000000000016,
    },
    {
      timestamp: "2020-04-11T04:00:00Z",
      value: 66.05000000000017,
    },
    {
      timestamp: "2020-04-11T05:00:00Z",
      value: 66.00000000000017,
    },
    {
      timestamp: "2020-04-11T06:00:00Z",
      value: 65.95000000000017,
    },
    {
      timestamp: "2020-04-11T07:00:00Z",
      value: 64.90000000000018,
    },
    {
      timestamp: "2020-04-11T08:00:00Z",
      value: 63.85000000000018,
    },
    {
      timestamp: "2020-04-11T09:00:00Z",
      value: 63.80000000000018,
    },
    {
      timestamp: "2020-04-11T10:00:00Z",
      value: 63.750000000000185,
    },
    {
      timestamp: "2020-04-11T11:00:00Z",
      value: 62.70000000000019,
    },
    {
      timestamp: "2020-04-11T12:00:00Z",
      value: 61.65000000000019,
    },
    {
      timestamp: "2020-04-11T13:00:00Z",
      value: 61.60000000000019,
    },
    {
      timestamp: "2020-04-11T14:00:00Z",
      value: 61.550000000000196,
    },
    {
      timestamp: "2020-04-11T15:00:00Z",
      value: 61.5000000000002,
    },
    {
      timestamp: "2020-04-11T16:00:00Z",
      value: 60.4500000000002,
    },
    {
      timestamp: "2020-04-11T17:00:00Z",
      value: 60.400000000000205,
    },
    {
      timestamp: "2020-04-11T18:00:00Z",
      value: 60.35000000000021,
    },
    {
      timestamp: "2020-04-11T19:00:00Z",
      value: 60.30000000000021,
    },
    {
      timestamp: "2020-04-11T20:00:00Z",
      value: 60.25000000000021,
    },
    {
      timestamp: "2020-04-11T21:00:00Z",
      value: 60.200000000000216,
    },
    {
      timestamp: "2020-04-11T22:00:00Z",
      value: 60.15000000000022,
    },
    {
      timestamp: "2020-04-11T23:00:00Z",
      value: 60.10000000000022,
    },
    {
      timestamp: "2020-04-12T00:00:00Z",
      value: 59.050000000000225,
    },
    {
      timestamp: "2020-04-12T01:00:00Z",
      value: 58.00000000000023,
    },
    {
      timestamp: "2020-04-12T02:00:00Z",
      value: 57.95000000000023,
    },
    {
      timestamp: "2020-04-12T03:00:00Z",
      value: 57.90000000000023,
    },
    {
      timestamp: "2020-04-12T04:00:00Z",
      value: 56.850000000000236,
    },
    {
      timestamp: "2020-04-12T05:00:00Z",
      value: 56.80000000000024,
    },
    {
      timestamp: "2020-04-12T06:00:00Z",
      value: 56.75000000000024,
    },
    {
      timestamp: "2020-04-12T07:00:00Z",
      value: 56.700000000000244,
    },
    {
      timestamp: "2020-04-12T08:00:00Z",
      value: 55.65000000000025,
    },
    {
      timestamp: "2020-04-12T09:00:00Z",
      value: 55.60000000000025,
    },
    {
      timestamp: "2020-04-12T10:00:00Z",
      value: 55.55000000000025,
    },
    {
      timestamp: "2020-04-12T11:00:00Z",
      value: 55.500000000000256,
    },
    {
      timestamp: "2020-04-12T12:00:00Z",
      value: 54.45000000000026,
    },
    {
      timestamp: "2020-04-12T13:00:00Z",
      value: 54.40000000000026,
    },
    {
      timestamp: "2020-04-12T14:00:00Z",
      value: 54.350000000000264,
    },
    {
      timestamp: "2020-04-12T15:00:00Z",
      value: 54.30000000000027,
    },
    {
      timestamp: "2020-04-12T16:00:00Z",
      value: 54.25000000000027,
    },
    {
      timestamp: "2020-04-12T17:00:00Z",
      value: 53.20000000000027,
    },
    {
      timestamp: "2020-04-12T18:00:00Z",
      value: 53.150000000000276,
    },
    {
      timestamp: "2020-04-12T19:00:00Z",
      value: 52.10000000000028,
    },
    {
      timestamp: "2020-04-12T20:00:00Z",
      value: 52.05000000000028,
    },
    {
      timestamp: "2020-04-12T21:00:00Z",
      value: 52.000000000000284,
    },
    {
      timestamp: "2020-04-12T22:00:00Z",
      value: 50.95000000000029,
    },
    {
      timestamp: "2020-04-12T23:00:00Z",
      value: 49.90000000000029,
    },
    {
      timestamp: "2020-04-13T00:00:00Z",
      value: 49.85000000000029,
    },
    {
      timestamp: "2020-04-13T01:00:00Z",
      value: 48.800000000000296,
    },
    {
      timestamp: "2020-04-13T02:00:00Z",
      value: 47.7500000000003,
    },
    {
      timestamp: "2020-04-13T03:00:00Z",
      value: 46.7000000000003,
    },
    {
      timestamp: "2020-04-13T04:00:00Z",
      value: 46.650000000000304,
    },
    {
      timestamp: "2020-04-13T05:00:00Z",
      value: 46.60000000000031,
    },
    {
      timestamp: "2020-04-13T06:00:00Z",
      value: 46.55000000000031,
    },
    {
      timestamp: "2020-04-13T07:00:00Z",
      value: 46.50000000000031,
    },
    {
      timestamp: "2020-04-13T08:00:00Z",
      value: 45.450000000000315,
    },
    {
      timestamp: "2020-04-13T09:00:00Z",
      value: 45.40000000000032,
    },
    {
      timestamp: "2020-04-13T10:00:00Z",
      value: 45.35000000000032,
    },
    {
      timestamp: "2020-04-13T11:00:00Z",
      value: 45.300000000000324,
    },
    {
      timestamp: "2020-04-13T12:00:00Z",
      value: 45.25000000000033,
    },
    {
      timestamp: "2020-04-13T13:00:00Z",
      value: 45.20000000000033,
    },
    {
      timestamp: "2020-04-13T14:00:00Z",
      value: 45.15000000000033,
    },
    {
      timestamp: "2020-04-13T15:00:00Z",
      value: 45.100000000000335,
    },
    {
      timestamp: "2020-04-13T16:00:00Z",
      value: 44.05000000000034,
    },
    {
      timestamp: "2020-04-13T17:00:00Z",
      value: 43.00000000000034,
    },
    {
      timestamp: "2020-04-13T18:00:00Z",
      value: 42.950000000000344,
    },
    {
      timestamp: "2020-04-13T19:00:00Z",
      value: 41.90000000000035,
    },
    {
      timestamp: "2020-04-13T20:00:00Z",
      value: 41.85000000000035,
    },
    {
      timestamp: "2020-04-13T21:00:00Z",
      value: 41.80000000000035,
    },
    {
      timestamp: "2020-04-13T22:00:00Z",
      value: 41.750000000000355,
    },
    {
      timestamp: "2020-04-13T23:00:00Z",
      value: 40.70000000000036,
    },
    {
      timestamp: "2020-04-14T00:00:00Z",
      value: 40.65000000000036,
    },
    {
      timestamp: "2020-04-14T01:00:00Z",
      value: 40.600000000000364,
    },
    {
      timestamp: "2020-04-14T02:00:00Z",
      value: 39.55000000000037,
    },
    {
      timestamp: "2020-04-14T03:00:00Z",
      value: 38.50000000000037,
    },
    {
      timestamp: "2020-04-14T04:00:00Z",
      value: 37.45000000000037,
    },
    {
      timestamp: "2020-04-14T05:00:00Z",
      value: 36.400000000000375,
    },
    {
      timestamp: "2020-04-14T06:00:00Z",
      value: 36.35000000000038,
    },
    {
      timestamp: "2020-04-14T07:00:00Z",
      value: 35.30000000000038,
    },
    {
      timestamp: "2020-04-14T08:00:00Z",
      value: 34.250000000000384,
    },
    {
      timestamp: "2020-04-14T09:00:00Z",
      value: 33.20000000000039,
    },
  ];

  // const values_5 = [
  //   {
  //     timestamp: "2021-09-10T02:34:00Z",
  //     value: 44,
  //   },
  //   {
  //     timestamp: "2021-09-10T03:34:00Z",
  //     value: 45,
  //   },
  //   {
  //     timestamp: "2021-09-10T04:34:00Z",
  //     value: 46,
  //   },
  //   {
  //     timestamp: "2021-09-10T05:34:00Z",
  //     value: 47,
  //   },
  //   {
  //     timestamp: "2021-09-10T06:34:00Z",
  //     value: 48,
  //   },
  //   {
  //     timestamp: "2028-09-09T22:34:00Z",
  //     value: 40,
  //   },
  //   {
  //     timestamp: "2028-09-09T23:34:00Z",
  //     value: 41,
  //   },
  //   {
  //     timestamp: "2028-09-10T00:34:00Z",
  //     value: 42,
  //   },
  //   {
  //     timestamp: "2028-09-10T01:34:00Z",
  //     value: 43,
  //   },
  // ];

  const values_1_timeseries = values_1.map((e) => e.value);
  const values_2_timeseries = values_2.map((e) => e.value);
  const values_3_timeseries = values_3.map((e) => e.value);
  const values_4_timeseries = values_4.map((e) => e.value);
  // const values_5_timeseries = values_5.map((e) => e.value);

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
