import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
    return (
        <>
            <div className=" w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1642267379398-c430d619019d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom -600px center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className=" w-full h-full bg-black/80 absolute top-0 left-0 -z-10 " >
                </div>
                <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center " >
                    No <span className="text-indigo-600" > pain</span>, No {" "} <span className="text-indigo-600" > gain</span>
                </h1>
                <p className="text-lg text-gray-300 font-medium mb-8 text-center " >
                    Desperte Sua Jornada Fitness Com Soluções Premium.
                </p>
                <PrimaryBtn className=" px-10 py-3 uppercase rounded-full " >Torne-se um membro</PrimaryBtn>
            </div>
        </>
    );
};

export default Banner;