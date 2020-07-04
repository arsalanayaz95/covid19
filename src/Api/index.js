import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeableURL);
    return {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };
  } catch (e) {
    console.log(e);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modData;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};
