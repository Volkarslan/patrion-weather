"use client";

import React, { useState, useEffect } from "react";
import localization from "../../../public/languages/en-en.json"
import Image from "next/image";
import Result from "@/components/Result";
import Loading from "@/components/Loading";

export default function Application() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

    const fetchWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);

                if (data.cod == 400) {
                    setWeather("");
                } else {
                    setWeather(data);
                }
            });
        ;
    };

    const trackSearch = (e) => {
        e.preventDefault();
        setCity(e.target.value)
    }

    const clearSearch = (e) => {
        e.preventDefault();
        setWeather("");
    }

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-12 py-24 sm:py-32" id="application">
            <div className="absolute w-full h-full top-0 left-0 bg-sky-500/25">
                <Image
                    src="https://images.unsplash.com/photo-1416163347366-de4602bbb003?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="search-background-image"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    layout="fill"
                />
            </div>

            <div className="relative text-center mx-auto max-w-7xl px-6 lg:px-8 bg-gray-900/50 rounded-xl p-6 min-h-[40rem]">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{localization.application.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {localization.application.description}
                    </p>
                </div>

                <div>
                    <form className="mt-5 sm:flex sm:items-center justify-center">
                        <div className="w-full sm:max-w-xs">
                            <label htmlFor="city" className="sr-only">
                                {localization.search.label}
                            </label>

                            <input
                                type="text"
                                name="city"
                                id="city"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-2"
                                placeholder={localization.search.placeholder}
                                onChange={trackSearch}
                            />
                        </div>

                        <button
                            onClick={fetchWeather}
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                            {localization.search.action}
                        </button>

                        <button
                            onClick={clearSearch}
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                            {localization.search.clear}
                        </button>
                    </form>
                </div>

                <div>
                    {loading &&
                        <Loading />
                    }

                    {(weather.main && !loading) &&
                        <Result response={weather} />
                    }
                </div>
            </div>
        </div>
    )
}
