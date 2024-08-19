import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";

const Trainers = () => {
    const trainersData = [
        {
            id: 1,
            trainerImg: "https://overallteam.com.br/wp-content/uploads/2023/03/rub1.png",
            name: "Coach Rubens Gomes",
            role: "Body Building Coach",
        },
        {
            id: 2,
            trainerImg: "https://s2-ge.glbimg.com/ilzLWcrj0KeopHbha6wiSM2fEA4=/0x0:1080x1346/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/9/X2s5rcQTmDBgbFYyagJg/snapinsta.app-405528061-1318666505418838-4226966609241336375-n-1080.jpg",
            name: "Dr. CBUM",
            role: "Gym Trainer",
        },
        {
            id: 3,
            trainerImg: "https://s2.glbimg.com/dI-CrT18oCdJNnKFU-XNpw8L-QU=/e.glbimg.com/og/ed/f/original/2022/06/15/288099202_1308020843060069_6339000761946922571_n_1.jpg",
            name: "Arnold Schwarzenegger",
            role: "Prof. fitness coach",
        },
        {
            id: 4,
            trainerImg: "https://wallpapercave.com/wp/wp4014135.png",
            name: "Mike Tyson",
            role: "Prof. wrestling coach",
        },
    ];

    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6 ">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Treinadores Especializados
                </h6>
                <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10  " >

                    {/* Exibir atraves do loop */}
                    {trainersData.map((data) => (
                        <div
                            key={data.id}
                            className=" lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] auto-rounded-xl overflow-hidden relative " >
                            <img src={data.trainerImg} className="w-full h-full object-cover" />
                            <div className=" w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-1 px-2 flex items-center justify-center flex-col " >
                                <h1 className=" text-xl text-white font-semibold " >
                                    {data.name}
                                </h1>
                                <p className=" text-sm text-gray-300 " >
                                    {data.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <SecondaryLink link=" /trainers" className="lg:w-[30%] md:w-[50%] sm:w-[75%] w-[85%] justify-center  " >Veja Todos Os Treinadores
                    <MoveRight className="w-4 h-4" />
                </SecondaryLink>
            </div>
        </>
    );
};

export default Trainers;