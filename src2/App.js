import React from "react";
import styles from "./App.module.css";
import { fetchData } from "./Api";

import Cards from "./Components/Cards/Cards";
import Country from "./Components/CountryPicker/CountryPicker";
import Chart from "./Components/Charts/Chart";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>{this.state.confirmed}</h1>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
