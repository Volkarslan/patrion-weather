import React from "react"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import appLogo from "../../public/assets/Arslan-Weather-App-Logo.png"
import localization from "../../public/languages/en-en"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-white shadow sticky top-0 z-10	">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        width={64}
                                        height={64}
                                        className="h-8 w-auto"
                                        src={appLogo.src}
                                        alt="Arslan Weather Services"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <Link
                                        href="#application-desktop"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        {localization.navigation.application}
                                    </Link>
                                    <Link
                                        href="#openweather"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        {localization.navigation.weather}
                                    </Link>
                                    <Link
                                        href="#nextjs"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        {localization.navigation.nextjs}
                                    </Link>
                                    <Link
                                        href="#tailwind"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        {localization.navigation.tailwind}
                                    </Link>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                    <span className="absolute -inset-0.5" />
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            <Disclosure.Button
                                as="a"
                                href="#application-mobile"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                {localization.navigation.application}
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#openweather"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                {localization.navigation.weather}
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#nextjs"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                {localization.navigation.nextjs}
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#tailwind"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                {localization.navigation.tailwind}
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
