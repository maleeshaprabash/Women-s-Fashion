import image from "../assets/Image01.png"

function Hero() {
    return (
        <div className="flex">
            <img src={image} style={{
                display: "flex",
                position: "absolute",
                height: "650px",
                right: "220px",
                top: "80px",
                zIndex: "10",
            }} />
        </div>
    )
}

export default Hero