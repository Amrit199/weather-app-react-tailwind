import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({data}) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="w-full p-5">
      <h1 className="font-bold text-3xl flex justify-center">Daily Forecast</h1>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className=" w-[60%] mx-auto flex items-center justify-between bg-slate-200 my-2 px-5 py-1 rounded-full">
                  <label className="text-xl">{forecastDays[idx]}</label>
                  <label className="text-xl">
                    {item.weather[0].description}
                  </label>
                  <label className="text-xl">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-12"
                    alt="weather"
                  />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="w-[60%] mx-auto my-3 p-3 bg-white/90 md:flex items-center justify-between rounded-lg">
                <div className="w-full p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xl border-b-2 border-black">
                      <p>Feels Like</p>
                      <p>{Math.round(item.main.feels_like)}°c</p>
                    </div>
                    <div className="flex items-center justify-between text-xl border-b-2 border-black">
                      <p>Wind</p>
                      <p>{Math.round(item.wind.speed)}m/s</p>
                    </div>
                    <div className="flex items-center justify-between text-xl border-b-2 border-black">
                      <p>Humidity</p>
                      <p>{Math.round(item.main.humidity)}%</p>
                    </div>
                    <div className="flex items-center justify-between text-xl border-b-2 border-black">
                      <p>Max temp</p>
                      <p>{Math.round(item.main.temp_max)}°c</p>
                    </div>
                    <div className="flex items-center justify-between text-xl border-b-2 border-black">
                      <p>Min temp</p>
                      <p>{Math.round(item.main.temp_min)}°c</p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
