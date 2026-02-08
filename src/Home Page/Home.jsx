import BgBoxElement from "../Components/BgBoxElement"
import NavBar from "../Components/NavBar"
import Background from "./Background"
import Hero from "./Hero"
import MiddleContainer from "./MiddleContainer"
import Popular from "./Popular"

function Home() {
    return (
        <div>
            <Background />
            <NavBar />
            <BgBoxElement />
            <Hero />
            <MiddleContainer />
            <Popular />
        </div>
    )
}

export default Home