import { Space } from '@mantine/core'
import Playground from "./Playground"
import TopBar from "./TopBar"



function LandingPage() {
    return (
        <div >
            <Space h={4}></Space>

            <TopBar></TopBar>

            <Playground></Playground>
        </div>
    )
}

export default LandingPage