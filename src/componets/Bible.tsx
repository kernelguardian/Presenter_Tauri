import { Group, Grid, Text, Input, Paper, Space, Flex, ScrollArea, Table, Chip, Divider } from '@mantine/core';
import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';

function Bible() {

	const elements = [
		{ position: 1, mass: "അവൻ, ആറ്റരികത്തു നട്ടിരിക്കുന്നതും തക്കകാലത്തു ഫലം കായ്ക്കുന്നതും ഇലവാടാത്തതുമായ വൃക്ഷംപോലെ ഇരിക്കും; അവൻ ചെയ്യുന്നതൊക്കെയും സാധിക്കും.", symbol: 'same verse in another version/language', name: 'A verse' },
		{ position: 2, mass: "some other verse with long content അവൻ, ആറ്റരികത്തു നട്ടിരിക്കുന്നതും തക്കകാലത്തു ഫലം കായ്ക്കുന്നതും ഇലവാടാത്തതുമായ വൃക്ഷംപോലെ ഇരിക്കും; അവൻ ചെയ്യുന്നതൊക്കെയും സാധിക്കും. huh", symbol: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh', name: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh' },
		{ position: 1, mass: "same verse in another version/language 3", symbol: 'same verse in another version/language', name: 'A verse' },
		{ position: 2, mass: "some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh", symbol: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh', name: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh' }, { position: 1, mass: "same verse in another version/language 3", symbol: 'same verse in another version/language', name: 'A verse' },
		{ position: 2, mass: "some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh", symbol: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh', name: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh' }, { position: 1, mass: "same verse in another version/language 3", symbol: 'same verse in another version/language', name: 'A verse' },
		{ position: 2, mass: "some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh", symbol: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh', name: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh' }, { position: 1, mass: "same verse in another version/language 3", symbol: 'same verse in another version/language', name: 'A verse' },
		{ position: 2, mass: "some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh", symbol: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh', name: 'some other verse with long content ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- huh' },
		{ position: 3, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
		{ position: 4, mass: 137.33, symbol: 'Ba', name: 'Barium' },
		{ position: 5, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.position}</td>
			<td>{element.name}</td>
			<td>{element.symbol}</td>
			<td>{element.mass}</td>
		</tr>
	));
	const count = 66;
		

	return (
		<>
			{/* Bible TopBar */}
			<Grid columns={24}>
				<Grid.Col span={4}>
					<Text
						variant="gradient"
						gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
						sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
						ta="left"
						fz="xl"
						fw={700}
						pl={12}
					>
						Bible
					</Text>

				</Grid.Col>

				<Grid.Col span={12}>
					<Chip.Group multiple>
						<Group position="center" >
							<Chip value="amp">AMP</Chip>
							<Chip value="bsi">BSI</Chip>
							<Chip value="nkjv">NKJV</Chip>
						</Group>
					</Chip.Group>
				</Grid.Col>

				<Grid.Col span={8}>
					<Input
						icon={<IconSearch />}
						placeholder="Quick Search"
					/>

				</Grid.Col>
			</Grid>
			<Divider my="sm" variant="dotted" />
			{/* Book Selector */}
			<ScrollArea h={180}>
				<Chip.Group>
					<Group spacing={"xs"} position='left' >

						{(() => {
							const arr = [];
							for (let i = 0; i < count; i++) {
								arr.push(
									<Chip color="orange" variant="filled" radius="xs" value={i.toString()}>Bo{i} </Chip>
								);
							}
							return arr;
						})()}



					</Group>
				</Chip.Group>

			</ScrollArea>

			<Space h={4} />
			{/* Verse  */}
			<Grid columns={24} mt={2}>
				
				{/* Book Number Selector */}
				<Grid.Col span={2} pl={4}>
					<Paper withBorder shadow="xs" radius="md" p="sm">
					<ScrollArea mah={1000} mih={500} h={600}>
						<Chip.Group>
							<Group spacing={"xs"} position='left' >

								{(() => {
									const arr = [];
									for (let i = 0; i < 40; i++) {
										arr.push(
											<Chip color="orange" variant="filled" radius="sm" value={i.toString()} >{i} </Chip>
										);
									}
									return arr;
								})()}

							</Group>
						</Chip.Group>
					</ScrollArea>
					</Paper>
				</Grid.Col>


				{/* Verse Selector */}
				<Grid.Col span={2} pl={4}>
					<Paper withBorder shadow="xs" radius="md" p="sm">
					<ScrollArea mah={1000} mih={500} h={600}>
					<Chip.Group>
						<Group spacing={"xs"} position='left'>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
							<Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>

						</Group>
					</Chip.Group>
					</ScrollArea>
					</Paper>
				</Grid.Col>


				{/* Table */}
				<Grid.Col span={20}>

					<ScrollArea mah={1000} mih={500} h={600}>
						<Table striped highlightOnHover withBorder={true}
						>
							{/* <thead>{ths}</thead> */}
							<tbody>{rows}</tbody>

						</Table>
					</ScrollArea>
				</Grid.Col>

			</Grid >


		</ >
	)
}

export default Bible