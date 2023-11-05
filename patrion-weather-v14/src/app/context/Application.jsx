"use client";

import React, { useState, useEffect } from "react";
import localization from "../../../public/languages/en-en.json"
import Image from "next/image";

export default function Application() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${process.env.WEATHER_SECRET_API_KEY}`;

    const fetchWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
            });
        setCity("");
    };

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="absolute w-full h-full top-0 left-0 bg-sky-500/25">
                <Image
                    src="https://images.unsplash.com/photo-1416163347366-de4602bbb003?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="search-background-image"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    layout="fill"
                />
            </div>

            <div className="relative text-center mx-auto max-w-7xl px-6 lg:px-8 bg-gray-900/50 rounded-xl p-6">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{localization.application.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {localization.application.description}
                    </p>
                </div>
                <div className="mx-auto mt-16 gridgrid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                        <div className="text-base leading-7">
                            <h3 className="font-semibold text-white">ABC</h3>
                            <p className="mt-2 text-gray-300">DDD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
