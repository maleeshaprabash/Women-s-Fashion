import BgBoxElement from "../Components/BgBoxElement"
import NavBar from "../Components/NavBar"
import Background from "./Background"
import Hero from "./Hero"
import MiddleContainer from "./MiddleContainer"

function Home() {
    return (
        <div>
            <Background />
            <NavBar />
            <BgBoxElement />
            <Hero />
            <MiddleContainer />
        </div>
    )
}

export default Home