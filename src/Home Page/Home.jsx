import BgBoxElement from "../Components/BgBoxElement"
import NavBar from "../Components/NavBar"
import Background from "./Background"
import Hero from "./Hero"

function Home() {
    return (
        <div>
            <Background />
            <NavBar />
            <BgBoxElement />
            <Hero />
        </div>
    )
}

export default Home