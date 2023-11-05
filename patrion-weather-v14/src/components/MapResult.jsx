"use client";

import React from "react";
import localization from "../../public/languages/en-en.json"

export default function Result({ response }) {
    let sunriseText = "";
    let sunsetText = "";

    // Function to convert the raw sunrise time to HH:MM format
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

    // Function to convert the raw sunset time to HH:MM format
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
        <div className="px-8 pb-8">
            <h3 className="font-semibold text-cyan-600 text-center mb-6">{response.name}</h3>
            <div className="flex justify-around">
                <p className="mt-2 text-gray-900">{localization.result.tempature} {response.main.temp.toFixed(0)} {localization.unit.celsius}</p>
                <p className="mt-2 text-gray-900">{localization.result.wind} {response.wind.speed.toFixed(0)} {localization.unit.speed}</p>
                <p className="mt-2 text-gray-900">{localization.result.sunrise} {sunriseText}</p>
                <p className="mt-2 text-gray-900">{localization.result.sunset} {sunsetText}</p>
            </div>
        </div>
    )
}
