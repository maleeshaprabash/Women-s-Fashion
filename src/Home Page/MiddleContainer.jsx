import Circle from "./Circle"

function MiddleContainer () {

    const images = [
        {
            image: "src/assets/Image02.png"
        },
        {
            image: "src/assets/Image03.jpg"
        },
        {
            image: "src/assets/Image04.jpg"
        },
        {
            image: "src/assets/Image05.png"
        },
        {
            image: "src/assets/Image06.jpeg"
        },
        {
            image: "src/assets/Image07.jpg"
        },
        {
            image: "src/assets/Image08.png"
        }
    ]
    return(
        
        <div className="flex relative top-70 justify-between px-40 items-center h-60">
            {images.map((item, index) => (
                <Circle 
                key={index}
                image={item.image}/>
            ))}
        </div>
    )
}

export default MiddleContainer