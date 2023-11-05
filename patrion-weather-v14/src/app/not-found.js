"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import localization from "../../public/languages/en-en";

export default function NotFound() {
    return (
        <>
            <html class="h-full">
                <body class="h-full">
                    <Navigation />
                    <main className="relative isolate min-h-screen">
                        <img
                            src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                        />
                        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                            <p className="text-base font-semibold leading-8 text-white">
                                404
                            </p>
                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                {localization.missing.title}
                            </h1>
                            <p className="mt-4 text-base text-white/70 sm:mt-6">
                                {localization.missing.description}
                            </p>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="/"
                                    className="text-sm font-semibold leading-7 text-white"
                                >
                                    <span aria-hidden="true">&larr;</span>
                                    <span>{localization.missing.back}</span>
                                </a>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    );
}
