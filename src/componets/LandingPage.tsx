import Playground from "./Playground"
import StageController from "./StageController"
import TopBar from "./TopBar"


function LandingPage() {
    return (
        <div >
            <TopBar></TopBar>
            <StageController></StageController>
            <Playground></Playground>
        </div>
    )
}

export default LandingPage