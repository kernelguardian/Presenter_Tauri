import { useState } from "react";
import LandingPage from "./LandingPage";
import LoginFlow from "./LoginFlow";
import { Container } from '@mantine/core';




function GreetingPage() {
    const [accountState, setaccountState] = useState(true)

    return <Container fluid pt={4}  >
        {accountState ? <LandingPage /> : <LoginFlow />}
    </Container>


}

export default GreetingPage