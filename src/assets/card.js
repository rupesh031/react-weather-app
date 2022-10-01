import React from "react";
import { Card } from "react-bootstrap";

const convert = (kelvin) => {
  return kelvin - 273;
};
const CardComp = ({ data }) => {
  console.log("present");
  console.log(data);
  if (data != null) {
    console.log(`./img/${data.weather[0].icon}.svg`);
    return (
      <Card>
        <div className="container">
          <div id="card" className="weather">
            <div className="details">
              <div className="temp">
                {Math.round(convert(data.main.temp))}
                <span>&deg;</span>
              </div>
              <div className="right">
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                >
                  {data.code}
                </div>
              </div>
            </div>
            <img
              className="icon"
              alt="image1"
              src={`./img/${data.weather[0].icon}.svg`}
            />
            <div
              style={{
                fontWeight: 600,
                marginTop: "4px",
                fontSize: "15px",
              }}
            >
              {data.weather[0].description}
            </div>
            <div className="infos">
              <div className="row">
                <div className="element">Humidity : {data.main.humidity}% </div>

                <div className="element2">
                  Visibility : {data.visibility / 1000} km
                </div>
              </div>
              <div className="row">
                <div className="element">
                  Feels Like :{Math.round(convert(data.main.feels_like))}
                  <span>&deg;</span>
                </div>
                <div className="element2">
                  Wind Speed :{data.wind.speed} Km/h
                </div>
              </div>
              <div className="row">
                <div className="element">
                  Pressure :{Math.round(data.main.pressure)}
                  <span> hpa</span>
                </div>
                <div className="element2">
                  Sea Level:{data.main.sea_level} Km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
};

export default CardComp;
