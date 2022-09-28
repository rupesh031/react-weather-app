import { useState } from "react";
import "./App.css";
import "./assets/cardstyle.css";
import Search from "./assets/search";
import CardComp from "./assets/card";
import { weather_url, api_weather } from "./assets/weather";
import Forecast from "./assets/forecast";

function App() {
  const [currData, setcurr] = useState(null);
  const [forecastData, setfor] = useState(null);
  const on_Change = (data) => {
    const [lat, lon] = data.value.split(" ");
    console.log(api_weather);
    const currWeather = fetch(
      `${weather_url}weather?lat=${lat}&lon=${lon}&appid=${api_weather}`
    );
    const forecast = fetch(
      `${weather_url}forecast?lat=${lat}&lon=${lon}&appid=${api_weather}`
    );
    Promise.all([currWeather, forecast]).then(async (respone) => {
      const response_curr = await respone[0].json();
      const response_forecast = await respone[1].json();
      setcurr({ code: data.label, ...response_curr });
      setfor({ code: data.label, ...response_forecast });
    });
    console.log(currData);
    console.log(forecastData);
  };
  return (
    <div className="main background">
      <div>
        <Search getResult={on_Change} />{" "}
      </div>
      <div>
        {" "}
        <CardComp data={currData} />
      </div>
      <Forecast data={forecastData} />
    </div>
  );
}

export default App;
