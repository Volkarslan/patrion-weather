import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import localization from "../../../public/languages/en-en.json"

const features = [
    {
        name: localization.openweather.title_first,
        description: localization.openweather.description_first,
        icon: CloudArrowUpIcon,
    },
    {
        name: localization.openweather.title_second,
        description: localization.openweather.description_second,
        icon: LockClosedIcon,
    },
    {
        name: localization.openweather.title_third,
        description: localization.openweather.description_third,
        icon: ArrowPathIcon,
    },
    {
        name: localization.openweather.title_fourth,
        description: localization.openweather.description_fourth,
        icon: FingerPrintIcon,
    },
]

export default function OpenWeather() {
    return (
        <div className="bg-white py-24 sm:py-32" id="openweather">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-600">{localization.openweather.banner}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {localization.openweather.title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {localization.openweather.description}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
