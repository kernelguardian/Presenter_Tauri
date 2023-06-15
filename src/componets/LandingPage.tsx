import { Stack, Space, Paper, Text, em } from '@mantine/core'
import Playground from "./Playground"
import TopBar from "./TopBar"



function LandingPage() {
	return (
		<Stack>
			<Paper>
				<TopBar></TopBar>
			</Paper>
			<Paper>
				<Playground></Playground>
			</Paper>
			<Paper withBorder radius={'md'} p={'md'}  mb={8}>
				<Text align='justify'>Some content here</Text>
			</Paper>
		</Stack>
	)
}

export default LandingPage