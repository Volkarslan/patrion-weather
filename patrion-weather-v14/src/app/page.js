"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OpenWeather from "./context/OpenWeather";
import Application from "./context/Application";
import Tailwind from "./context/Tailwind";
import NextJS from "./context/NextJS";
import TurkeyMap from "./context/TurkeyMap";

export default function Home() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                <Application />
                <TurkeyMap />
                <OpenWeather />
                <NextJS />
                <Tailwind />
            </main>

            <Footer />
        </>
    );
}
