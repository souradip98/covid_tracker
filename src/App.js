import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from"./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import fetchData from "./api/index"
import style from "./App.module.css";
import corona from './images/image.png';
class App extends Component {

  state={
    data: {},
    country:""
  }

  async componentDidMount() {
    const fetchedData= await fetchData();
    this.setState({
      data:fetchedData
    });
  }
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    console.log(fetchedData);
    this.setState({
      data:fetchedData,
      country:country
    });
  }
  render() {
    return (
      <div className="container">
        <img className="image" src={corona} alt="COVID-19"/>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
