import React from "react";
import { CheckSquare, Dumbbell } from "lucide-react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const PricingPlan = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-8 ">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Preço dos Planos
                </h6>
                <div className=" w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap " >
                    {/* Plano Basico */}
                    <div className=" lg:w-[30%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black rounded-lg border-[6px] border-gray-600 hover:border-indigo-600 hover:bg-gray-600 ease-out duration-700 cursor-pointer">
                        <h2 className=" lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5 ">
                            Plano Básico
                        </h2>
                        <h1 className=" lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide " >
                            R$165.00
                            <span className=" lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal " >/ mês</span>
                        </h1>
                        <hr className="border-gray-600/40 my-7" />
                        <div className="w-full h-auto space-y-2 mb-8">
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Tenha acesso a todas as classes da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acesso ilimitado de yoga
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acessos aos armários
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">Escolher Plano</PrimaryBtn>
                    </div>
                    {/* Plano Premium */}
                    <div className=" lg:w-[34%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-indigo-600/ rounded-lg border-[6px] border-indigo-600 ease-out duration-700 cursor-pointer relative">
                        <div className=" absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2 px-5 rounded-full text-base font-medium text-white ">
                            Recomendado
                        </div>
                        <h2 className=" lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-6 ">
                            Plano Premium
                        </h2>
                        <h1 className=" lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide " >
                            R$200.00
                            <span className=" lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal " >/ mês</span>
                        </h1>
                        <hr className="border-gray-600/40 my-7" />
                        <div className="w-full h-auto space-y-2 mb-8">
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Tenha acesso a todas as classes da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acesso ilimitado de yoga
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acessos aos armários
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acesso semanal a piscina
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Camisa gratuita da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    20% de desconto em todos os produtos da academia
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">Escolher Plano</PrimaryBtn>
                    </div>
                    {/* Plano VIP */}
                    <div className=" lg:w-[30%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black rounded-lg border-[6px] border-gray-600 hover:border-indigo-600 hover:bg-gray-600 ease-out duration-700 cursor-pointer">
                        <h2 className=" lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5 ">
                            Plano VIP
                        </h2>
                        <h1 className=" lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide " >
                            R$365.00
                            <span className=" lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal " >/ mês</span>
                        </h1>
                        <hr className="border-gray-600/40 my-7" />
                        <div className="w-full h-auto space-y-2 mb-8">
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Tenha acesso a todas as classes da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acesso ilimitado de yoga
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acessos aos armários
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Acesso a piscina 6 dias na semana
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Camisa gratuita da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    30% de desconto em todos os produtos da academia
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-start gap-x-2">
                                <CheckSquare className="w-4 h-4 text-indigo-600" />
                                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                                    Personal Trainer 3 vezes por semana
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase ">Escolher Plano</PrimaryBtn>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PricingPlan;