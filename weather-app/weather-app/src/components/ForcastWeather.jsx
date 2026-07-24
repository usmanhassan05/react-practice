import React from "react";

const ForcastWeather = ({ data }) => {
  if (!data) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="bg-violet-400 px-5 py-2 rounded">
          Search for a city to see the weather.
        </h2>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="flex justify-center items-center">
      <div className="forcast w-[35vw] h-[70vh] rounded-2xl flex flex-col justify-center items-center gap-6 overflow-hidden">
        <div className="flex gap-4 justify-center items-center" >
        <a
         className="text-3xl font-bold "
         target="_blank"
          href="https://tinyurl.com/bdfczf2p"
        >
          {data.name} 
        </a>
        <span>{data.sys.country}</span>
        </div>
        <h2>Temperature {data.main.temp}</h2>
        <h2>Feels Like {data.main.feels_like}</h2>
        <h2>Humidity {data.main.humidity}</h2>
        <h2>Wind speed {data.wind.speed}</h2>
        <h2>{data.weather[0].main}</h2>
        <h2 className='capitalize' >{data.weather[0].description}</h2>
      </div>
    </div>
  );
};

export default ForcastWeather;
