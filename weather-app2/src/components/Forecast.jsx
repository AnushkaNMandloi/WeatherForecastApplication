import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'

function Forecast() {
    return (
        <div>

            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase">
                    Hourly Forecast
                </p>
            </div>
            <hr className="my-2" />

<div className="flex flex-row items-center justify-between text-white">


            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
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
                    05:00 PM
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    21°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    06:00 PM
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    20°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    07:00 PM
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    19°
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    08:00 PM
                </p>

                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-12 my-1"
                />

                <p className="font-medium">
                    18°
                </p>
            </div>
            </div>

        </div>
    );
}

export default Forecast