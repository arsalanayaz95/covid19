import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchTodaysData } from "../../Api";
import styles from "./Chart.module.css";

const Chart = () => {
  let [daily, setDaily] = useState([]);

  useEffect(() => {
    const dailyData = async () => {
      setDaily(await fetchTodaysData());
    };
    dailyData();
  }, [daily]);

  const lineChart = daily.length ? (
    <Line
      data={{
        labels: daily.map(({ date }) => date),
        datasets: [
          {
            data: daily.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: daily.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
