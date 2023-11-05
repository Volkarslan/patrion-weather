"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Next from "@/components/Next";
import Footer from "@/components/Footer";
import OpenWeather from "./context/OpenWeather";
import Application from "./context/Application";
import Tailwind from "./context/Tailwind";
import NextJS from "./context/NextJS";

export default function Home() {
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
        <>
            <Navigation />
            <main className="min-h-screen	">
                {/* <Application /> */}
                <OpenWeather />
                <NextJS />
                <Tailwind />
            </main>
            <Footer />
        </>
    );
}
