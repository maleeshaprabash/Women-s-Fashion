import image from "../assets/Image01.png"
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <div>
            <div className="flex">
                <img src={image} style={{
                    display: "flex",
                    position: "absolute",
                    height: "650px",
                    right: "203px",
                    top: "80px",
                    zIndex: "10"
                }} />
            </div>
            
            <div className="absolute top-55 md:text-7xl sm:text-5xl left-40 tracking-wider font-Julee">Make your Fashion</div>
            
            <div>
                <div className="absolute top-76 text-5xl left-40 tracking-wider font-Julee">Look More </div>
                <ReactTyped
                    strings={["Charming","Smart",]} 
                    typeSpeed={110}
                    backSpeed={100} loop className="absolute top-76 text-5xl left-100 tracking-wider font-Julee">
                </ReactTyped>
            </div>

            <div className="absolute top-100 text-3xl left-40 tracking-wider font-PortLligatSans">Discover endless styles that bring out your unique charm</div>

            <div className="flex gap-3 absolute font-PortLligatSans bottom-70 left-34 text-4xl">
                <p className="border-r-3 px-6">10K + Designs</p>
                <p>1M + Customers</p>
            </div>
            <div className="absolute flex left-40 bottom-42 bg-[#6E4826] h-10 w-45 justify-center items-center text-white font-PortLligatSans rounded-[10px] text-sm tracking-wider">Try Your Style →</div>
        </div>
    )
}

export default Hero