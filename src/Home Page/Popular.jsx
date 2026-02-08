import left from "../assets/image09.jpg"
import middle from "../assets/image10.png"
import right from "../assets/image11.jpg"

function Popular() {
    return (
        <>
        <div className="relative top-120 border-b-2 border-[#6E4826] w-100 left-46 p-2 text-[40px] font-bold font-Junge">Popular Dresses</div>
        <div className="flex relative h-180 w-full top-120 items-center justify-center">
            <div className="flex gap-20">
                {/*left*/}
                <div className="h-130 w-91 border rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC] ">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={left} className="object-cover"/>
                    </div>
                    <div className="px-5 py-2 font-Poppins tracking-wider font-semibold text-xl"> Belted trench coat </div>
                    <div className="flex px-6 py-2 font-Poppins tracking-wider font-semibold gap-36"> Price: $1000
                        <div className="flex gap-4">
                            <svg className="size-6 fill-[#6E4826] "><use xlinkHref="#heart" /></svg>
                            <svg className="size-6 fill-[#6E4826] "><use xlinkHref="#shoppingbag" /></svg>
                        </div>
                        
                    </div>
                </div> 

                {/*middle*/}
                <div className="relative h-130 w-91 border top-10 rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC]">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={middle} className="object-cover h-full"/>
                    </div>
                    <div className="px-5 py-2 font-Poppins tracking-wider font-semibold text-xl">  Deep V-neck flovy gown </div>
                    <div className="flex  px-6 py-2 font-Poppins tracking-wider font-semibold gap-36"> Price: $1500 
                        <div className="flex gap-4">
                            <svg className="size-6 fill-[#6E4826]"><use xlinkHref="#heart" /></svg>
                            <svg className="size-6 fill-[#6E4826]"><use xlinkHref="#shoppingbag" /></svg>
                        </div>
                    </div>
                </div>

                {/*right*/}
                <div className="h-130 w-91 border rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC]">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={right} className="object-cover"/>
                    </div>
                    <div className="px-5 py-2 font-Poppins tracking-wider font-semibold text-xl"> Floral applique gown </div>
                    <div className="flex px-6 py-2 font-Poppins tracking-wider font-semibold gap-36"> Price: $2000 
                        <div className="flex gap-4">
                            <svg className="size-6 fill-[#6E4826]"><use xlinkHref="#heart" /></svg>
                            <svg className="size-6 fill-[#6E4826]"><use xlinkHref="#shoppingbag" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popular

/*
    return (
        <div className="relative top-110 flex flex-col items-center w-full pb-20">
            <div className="mb-12 p-2 w-75 border-b-2 border-[#6E4826] font-Aclonica font-bold text-[30px] tracking-wider text-[#6E4826] text-center">
                <p>Popular Dress</p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 px-10 w-full">
                {dresses.map((dress) => (
                    <div key={dress.id} className="group relative h-115 w-71 bg-[#F5F1E8] rounded-[24px] border border-[#6E4826]/30 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer">
                        <div className="h-85 w-full p-2">
                            <div className="h-full w-full rounded-[20px] overflow-hidden">
                                <img
                                    src={dress.image}
                                    alt={dress.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="px-5 py-2">
                            <div className="font-Poppins font-semibold text-[#6E4826] tracking-wide mb-1 transition-colors duration-300 group-hover:text-red-700">
                                {dress.name}
                            </div>
                            <div className="font-Poppins font-medium text-[#6E4826]/80 text-sm">
                                Price: {dress.price}
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-5 flex gap-4">
                            <button className="transition-all duration-300 hover:scale-120 hover:text-red-600 outline-none">
                                <svg className="size-6 fill-current text-[#6E4826] group-hover:text-red-600 transition-colors">
                                    <use xlinkHref="#heart" />
                                </svg>
                            </button>
                            <button className="transition-all duration-300 hover:scale-120 hover:text-[#6E4826] outline-none">
                                <svg className="size-6 fill-current text-[#6E4826]">
                                    <use xlinkHref="#shoppingbag" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular */