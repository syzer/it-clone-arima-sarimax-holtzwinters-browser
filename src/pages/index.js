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
//
// var data = [1, 4, 5, 3, 1, 3, 4, 1, 2, 4, 5, 5];
// var predictionLength = 4;
// //
// var result = getAugumentedDataset(data, predictionLength);
// console.log(result); // DUDE, IT WORKS!

// const ts = Array(10)
//   .fill(0)
//   .map((_, i) => i + Math.random() / 5);
//

// var data = [1, 4, 5, 3, 1, 3, 4, 1, 2, 4, 5, 5];
// var predictionLength = 4;

const Myholtwinterschart = ({ values_timeseries }) => {
  // console.log(values_timeseries);
  const prediction = getAugumentedDataset(values_timeseries, 100);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Holt winters",
    },
    // xAxis: {
    //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    // },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "My Series",
        data: prediction.augumentedDataset,
      },
    ],
  };

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
    // xAxis: {
    //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    // },
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
      const arima = new ARIMA({ auto: true }).train(values_timeseries);
      const [pred, errors] = arima.predict(10);
      setOption({ ...options, series: { ...options.series, data: [...values_timeseries, ...pred] } });
    });
  }, []);
  // console.log(values_timeseries);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default function Home() {
  const values = [
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
  const values_timeseries = values.map((e) => e.value);

  // const [pred, setPred] = useState([]);
  // useEffect(() => {
  //   ARIMAPromise.then((ARIMA) => {
  //     const arima = new ARIMA({ p: 2, d: 1, q: 2, P: 0, D: 0, Q: 0, S: 0, verbose: false }).train(values_timeseries);
  //     const [pred, errors] = arima.predict(10);
  //     console.log("pred", pred);
  //     setPred(pred);
  //   });
  // }, []);

  return (
    <>
      <Myholtwinterschart values_timeseries={values_timeseries} />
      <Myarimachart values_timeseries={values_timeseries} />
    </>
  );
}
