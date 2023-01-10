import React from 'react'

const Today = ({data}) => {
  console.log(data)

    return (
    <div className="w-full h-full px-3 pt-16"> 
      <div className="w-full mx-auto text-black p-4 bg-white/90 md:flex items-center justify-between h-auto rounded-t-xl">
        {/* right weather icon section */}
        <div className="w-full">
          <div>
            <h2 className='font-bold text-2xl'>CURRENT WEATHER</h2>
            {data.name && <p className="font-bold text-xl">{data.name}</p>}
            {/* <p className="font-bold">{data.city}</p> */}
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
        <img
          src={`images/${data.weather[0].icon}.jpeg`}
          alt="weather"
          className="w-full object-cover h-48 lg:h-60 rounded-b-xl"
        />
    </div>
  )
}

export default Today
