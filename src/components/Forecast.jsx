import React from "react";
import ForecastItems from "./ForecastItems";

const Forecast = ({ data }) => {
  return (
    <div className="w-full h-full p-5">
      <h1 className="font-bold text-3xl flex justify-center">
        Weekly Forecast
      </h1>
      {data.list.slice(0, 7).map((item, idx) => (
        <ForecastItems item={item} idx={idx} />
      ))}
      {/* <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          // <AccordionItem key={idx}>
          //   <AccordionItemHeading>
          //     <AccordionItemButton>
          //       <div className=" w-full flex items-center justify-between bg-slate-50 my-2 px-5 py-1 rounded-full" onClick={() => setArrow(!arrow)}>
          //         <label className="text-xl">{forecastDays[idx]}</label>
          //         <img
          //           src={`icons/${item.weather[0].icon}.png`}
          //           className="w-12"
          //           alt="weather"
          //         />
          //         <label className="text-xl">
          //           {Math.round(item.main.temp_max)}°C /{" "}
          //           {Math.round(item.main.temp_min)}°C
          //         </label>
          //         <label className="text-xl">
          //           {item.weather[0].description}
          //         </label>
          //         {arrow ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
                    
          //       </div>
          //     </AccordionItemButton>
          //   </AccordionItemHeading>
          //   <AccordionItemPanel>
          //     <div className="w-[60%] mx-auto my-3 p-3 bg-white/90 md:flex items-center justify-between rounded-lg">
          //       <div className="w-full p-2">
          //         <div className="flex flex-col gap-2">
          //           <div className="flex items-center justify-between text-xl border-b-2 border-black">
          //             <p>Feels Like</p>
          //             <p>{Math.round(item.main.feels_like)}°c</p>
          //           </div>
          //           <div className="flex items-center justify-between text-xl border-b-2 border-black">
          //             <p>Wind</p>
          //             <p>{Math.round(item.wind.speed)}m/s</p>
          //           </div>
          //           <div className="flex items-center justify-between text-xl border-b-2 border-black">
          //             <p>Humidity</p>
          //             <p>{Math.round(item.main.humidity)}%</p>
          //           </div>
          //           <div className="flex items-center justify-between text-xl border-b-2 border-black">
          //             <p>Max temp</p>
          //             <p>{Math.round(item.main.temp_max)}°c</p>
          //           </div>
          //           <div className="flex items-center justify-between text-xl border-b-2 border-black">
          //             <p>Min temp</p>
          //             <p>{Math.round(item.main.temp_min)}°c</p>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </AccordionItemPanel>
          // </AccordionItem>
        ))}
      </Accordion> */}
    </div>
  );
};

export default Forecast;
