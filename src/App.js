import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      temperature: "",
      weather: null,
    };
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
    });

    var getWeather = (latitude, longitude) => {
      const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      fetch(api)
        .then(response => response.json())
        .then(data => { 
          this.setState({ 
            locationName: data.name,
            temperature: data.main.temp,
            weatherDescription: data.weather[0].description,
          })

          alert('lol');
          console.log(this.state);
        })
    };


  
  };

  render() {

    const { locationName, temperature, weatherDescription } = this.state;
    let temperatureC = temperature - 273.15;
    let temperatureF = ((temperature - 273.15) * 9) / 5 + 32;

    return (
      <div className="container-fluid text-white my-auto">
      <div className="container mx-auto my-4 py-4">
        <div className="row justify-content-center text-center">
          <h1 className="col-12 display-4 my-2 py-3 text-success">
            Awesome Weather App
          </h1>              
              <h2 className="col-12">{locationName}</h2>
              <h3 className="col-12 text-danger">
                {temperature && `${temperatureC} °C / ${temperatureF} °F`}
              </h3>
              <h3 className="col-12">{weatherDescription}</h3>
        </div>
      </div>
    </div>
    );
  }//end of render


  



}

export default App;
