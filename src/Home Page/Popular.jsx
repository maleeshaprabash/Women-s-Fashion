import left from "../assets/image09.jpg"
import middle from "../assets/image10.png"
import right from "../assets/image11.jpg"

function Popular() {
    return (
        <>
        <div className="relative top-120 border-b-2 border-[#6E4826] w-100 left-46 p-2 text-[40px] font-bold font-Junge">
            Popular Dresses
        </div>

        <div className="flex relative h-180 w-full top-120 items-center justify-center">
            <div className="flex gap-20">
                {/*left*/}
                <div className="h-130 w-91 border rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC] hover:scale-105 duration-200">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={left} className="h-full w-full object-cover hover:scale-105 duration-200"/>
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
                <div className="relative h-130 w-91 border top-10 rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC] hover:scale-105 duration-200">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={middle} className="object-cover h-full w-full hover:scale-105 duration-200"/>
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
                <div className="h-130 w-91 border rounded-2xl border-[#6E4826] drop-shadow-md drop-shadow-[#6E4826] bg-[#F0EADC] hover:scale-105 duration-200">
                    <div className="h-100 w-auto m-2 rounded-2xl overflow-hidden">
                        <img src={right} className=" h-full w-full object-cover hover:scale-105 duration-200"/>
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