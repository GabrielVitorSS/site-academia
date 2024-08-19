import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const About = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse ">
                <div className=" lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg ">
                    <img src="https://images.unsplash.com/photo-1704223523449-ca3925f89dcc?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About image"
                        className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover  " />
                </div>
                <div className=" lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center " >
                    <h6 className=" text-lg font-medium text-white flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3 " >
                        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                        Sobre Nós
                    </h6>
                    <h1 className="  lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0 " >
                        Força sem Esforço, Ganhos no Tempo Certo: Construindo Corpos Melhores, Mais Rápido.
                    </h1>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-8 " > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita eaque aliquam provident eius, ratione blanditiis illo cum deleniti culpa distinctio voluptas iure, nam assumenda. Ipsa temporibus iusto rem neque? Expedita? </p>
                    <SecondaryBtn className=" lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center " >Torne-se um membro</SecondaryBtn>
                </div>
            </div>
        </>
    );
};

export default About;
