import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (e) {
    console.log(e);
  }
};

export const fetchTodaysData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountriesName = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};
