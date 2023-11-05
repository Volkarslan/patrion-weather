"use client";

import React from "react";
import localization from "../../public/languages/en-en.json"

export default function Result({ response }) {
    let sunriseText = "";
    let sunsetText = "";

    const sunriseConvert = () => {
        const sunriseRaw = response.sys.sunrise;
        const sunriseDate = new Date(sunriseRaw * 1000);
        const sunriseHour = sunriseDate.getHours();
        const sunriseMinute = sunriseDate.getMinutes();

        if (sunriseHour < 10) {
            sunriseText += "0"
        }

        sunriseText += sunriseHour + " : ";

        if (sunriseMinute < 10) {
            sunriseText += "0"
        }

        sunriseText += sunriseMinute
    }

    const sunsetConvert = () => {
        const sunsetRaw = response.sys.sunset;
        const sunsetDate = new Date(sunsetRaw * 1000);
        const sunsetHour = sunsetDate.getHours();
        const sunsetMinute = sunsetDate.getMinutes();

        if (sunsetHour < 10) {
            sunsetText += "0"
        }

        sunsetText += sunsetHour + " : ";

        if (sunsetMinute < 10) {
            sunsetText += "0"
        }

        sunsetText += sunsetMinute
    }

    sunriseConvert();
    sunsetConvert();

    return (
        <div className="mx-auto mt-16 gridgrid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div className="flex justify-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                <div className="text-base leading-7">
                    <h3 className="font-semibold text-white">{localization.result.province} {response.name}</h3>
                    <p className="mt-2 text-gray-300">{localization.result.tempature} {response.main.temp.toFixed(0)} {localization.unit.celsius}</p>
                    <p className="mt-2 text-gray-300">{localization.result.wind} {response.wind.speed.toFixed(0)} {localization.unit.speed}</p>
                    <p className="mt-2 text-gray-300">{localization.result.sunrise} {sunriseText}</p>
                    <p className="mt-2 text-gray-300">{localization.result.sunset} {sunsetText}</p>
                </div>
            </div>
        </div>
    )
}
