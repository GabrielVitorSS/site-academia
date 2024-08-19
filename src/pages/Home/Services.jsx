import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";


const Services = () => {
    const servicesData = [
        {
            id: 1,
            serviceImg: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: Dumbbell,
            title: "Fitness",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
        {
            id: 2,
            serviceImg: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: Dumbbell,
            title: "Yoga",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
        {
            id: 3,
            serviceImg: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: Dumbbell,
            title: "Academia",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
        {
            id: 4,
            serviceImg: "https://plus.unsplash.com/premium_photo-1664297698526-0f131fcefb6b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Aerobico",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
        {
            id: 5,
            serviceImg: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Boxe",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
        {
            id: 6,
            serviceImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Zumba",
            desc: "Prepare-se para queimar gordura de verdade com nossos produtos de alta qualidade.",
            link: "#services",
        },
    ];

    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6 ">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Serviços
                </h6>
                <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10  " >

                    {/* Exibir atraves do loop */}

                    {servicesData.map((data) => (
                        <div
                            key={data.id}
                            className=" lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 "
                            style={{
                                backgroundImage: `url(${data.serviceImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }} >
                            <div className=" w-full h-full bg-black/80 absolute top-0 left-0 -z-10 " >
                            </div>
                            <div className=" w-full h-full flex items-center justify-center flex-col text-white p-4 z-50 ">
                                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                                    <Dumbbell className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4" >
                                    {data.title}
                                </h1>
                                <p className="text-base text-gray-400 font-normal text-center mb-4" >
                                    {data.desc}
                                </p>
                                <TertiaryLink link={data.link} >Leia Mais <MoveRight className="w-4 h-4" /> </TertiaryLink>
                            </div>
                        </div>
                    ))}
                </div>
                <SecondaryLink link=" /services" className="lg:w-[30%] md:w-[50%] sm:w-[75%] w-[85%] justify-center  " >Veja Todos Os Serviços
                    <MoveRight className="w-4 h-4" />
                </SecondaryLink>
            </div>
        </>
    );
};

export default Services;