import React from 'react'

const Today = ({data}) => {
  return (
    <div className="w-full p-4 md:flex">
      <div className="w-full mx-auto p-4 bg-white/90 md:flex items-center justify-between h-auto">
        {/* right weather icon section */}
        <div className="w-full">
          <div>
            <h2>CURRENT WEATHER</h2>
            <p className="font-bold">{data.city}</p>
          </div>
          <div className="flex items-center text-5xl justify-center">
            <img
              alt="weather"
              className="w-20"
              src={`icons/${data.weather[0].icon}.png`}
            />
            <h1>{Math.round(data.main.temp)}°c</h1>
          </div>
          <p className="text-2xl font-bold">{data.weather[0].description}</p>
        </div>
        {/* left details section */}
        <div className="w-full p-2 relative">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xl border-b-2 border-black">
              <p>Feels Like</p>
              <p>{Math.round(data.main.feels_like)}°c</p>
            </div>
            <div className="flex items-center justify-between text-xl border-b-2 border-black">
              <p>Wind</p>
              <p>{Math.round(data.wind.speed)}m/s</p>
            </div>
            <div className="flex items-center justify-between text-xl border-b-2 border-black">
              <p>Humidity</p>
              <p>{Math.round(data.main.humidity)}%</p>
            </div>
            <div className="flex items-center justify-between text-xl border-b-2 border-black">
              <p>Max temp</p>
              <p>{Math.round(data.main.temp_max)}°c</p>
            </div>
            <div className="flex items-center justify-between text-xl border-b-2 border-black">
              <p>Min temp</p>
              <p>{Math.round(data.main.temp_min)}°c</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src={`images/${data.weather[0].icon}.jpeg`}
          alt="weather"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Today
