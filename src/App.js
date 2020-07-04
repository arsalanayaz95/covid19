import React from "react";
import styles from "./App.module.css";

import Cards from "./Components/Cards/Cards";
import Country from "./Components/CountryPicker/CountryPicker";
import Chart from "./Components/Charts/Chart";

import image from "./images/image.png";

import { fetchData } from "./Api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="COVID19" className={styles.image} />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
