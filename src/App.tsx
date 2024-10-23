import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const getWeatherData = () => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=22bdbfd5a9e04ed4aeeb1fdc53d95d4d`,
    })
      .then((response) => {
        setData(response.data);
      })
      .then(() => {
        getWeatherForcast();
      })

      .catch((error) => {});
  };

  const getWeatherForcast = () => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?&lat=-6.2146&lon=106.8451&appid=22bdbfd5a9e04ed4aeeb1fdc53d95d4d`,
    })
      .then((response) => {
        setForecast(response.data);
      })
      .catch((error) => {});
  };

  function unixToDate(unixTimestamp: any) {
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div
      className="bg-[#100E1D] flex flex-col lg:flex-row h-screen"
      onLoad={() => {
        getWeatherData();
      }}
    >
      <SideBar
        icon={data?.weather[0].icon}
        num={Math.round(data?.main.temp - 273.15)}
        desc={data?.weather[0].main}
        loc={data?.name}
      />
      <MainContent
        windspeed={data?.wind.speed}
        humidity={data?.main.humidity}
        visibility={data?.visibility / 1000}
        airPressure={data?.main.pressure}
        forecast={forecast?.list.filter(
          (item: any) =>
            item.dt_txt.includes("09:00:00") &&
            !item.dt_txt.includes(unixToDate(data?.dt))
        )}
      />
    </div>
  );
};

export default App;
