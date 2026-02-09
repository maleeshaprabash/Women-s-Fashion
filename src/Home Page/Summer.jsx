import img1 from "../assets/image12.jpg"
import img2 from "../assets/image13.jpg"
import img3 from "../assets/image14.jpg"
import img4 from "../assets/image15.jpg"

function Summer () {
    return(
        <>
        <div className="relative top-150 border-b-2 border-[#6E4826] w-110 left-46 p-2 text-[40px] font-bold font-Junge">
            Summer Collection
        </div>
        <div className=" flex relative h-200 w-full top-170 px-16">
            <div className="relative h-130 w-90 border border-[#6E4826] left-20 rounded-2xl top-16 overflow-hidden shadow-2xl shadow-[#6E4826]/50">
                <img src={img1} className="object-cover h-full "/>
            </div>

            <div className="absolute left-150 top-16 text-[28px] font-Poppins text-[#6E4826] w-110 tracking-wide">Make your look and comfort on something Weather.</div>

            <div className="relative h-130 w-90 border border-[#6E4826] top-40 left-120 rounded-2xl overflow-hidden shadow-md shadow-[#6E4826]/50">
                <img src={img2} className="object-cover h-full"/>
            </div>

            <div className="relative h-80 w-46.25 border border-[#6E4826] top-110 rounded-2xl left-10 overflow-hidden shadow-md shadow-[#6E4826]/50">
                <img src={img3} className="object-cover h-full"/>
            </div>

            <div className="relative h-60 w-46.25 border border-[#6E4826] left-56 top-16 rounded-2xl overflow-hidden ">
                <img src={img4} className="object-cover h-full w-full"/>
            </div>


            <div className="absolute bottom-24 w-160 left-40 text-[18px] text-[#6E4826] font-Poppins tracking-wide">
                Explore the latest trends in clothing fashion, blending style,
                comfort, and creativity. From timeless classics to
                cutting-edge designs, discover how fashion defines 
                self-expression and elevates personal style.
            </div>
            <div className="flex absolute h-10 w-50 bottom-10 right-60 border border-[#6E4826] rounded-xl items-center justify-center">
                <p className="text-[#6E4826]">Explore →</p></div>

        </div>
        </>
    )
}

export default Summer