import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setdailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths", "Recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(255,0,0,0.5)",
              "rgba(0,255,0,0.5)",
            ],
            data: [
              data.confirmed.value,
              data.deaths.value,
              data.recovered.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Currrent State in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
