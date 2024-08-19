import React from "react";
import { Dumbbell } from "lucide-react";

const PricingPlan = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6 ">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Planos
                </h6>
                <div className=" w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap " >
                    <div className=" lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black rounded-lg border-6 border-gray-600 hover:border-indigo-600 hover:bg-gray-600 ease-out duration-700 ">
                        <h2 className=" lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5 ">
                            Plano Básico
                        </h2>
                        <h1 className=" lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide " >
                            $165.00 
                            <span className=" lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal " >/ mês</span>

                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPlan;