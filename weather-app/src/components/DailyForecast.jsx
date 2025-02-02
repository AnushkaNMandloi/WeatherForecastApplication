import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'

function DailyForecast({ title }) {
    console.log("title", title);
    return (
        <div>

            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase">
                    Daily Forecast
                </p>
            </div>
            <hr className="my-2" />

<div className="flex flex-row items-center justify-between text-white">


            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    Today
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    22°
                </p>
            </div>


            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    Saturday
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    16°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    Sunday
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    12°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    Monday
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    9°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    Tuesday
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    8°
                </p>
            </div>
            </div>

        </div>
    );
}

export default DailyForecast