import React from "react";
import spinner from "../../public/svgs/spinner.gif"
import Image from "next/image";

export default function Loading({ size }) {
    size = size || "100%";

    return (
        <div className="mx-auto gridgrid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div className="flex justify-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                <div className="text-center">
                    <Image src={spinner} alt="loading" className={`max-w-[${size}] m-auto block`} />
                </div>
            </div>
        </div>

    )
}

