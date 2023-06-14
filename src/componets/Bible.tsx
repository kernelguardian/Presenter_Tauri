import { Chip } from '@mantine/core';
import { Group, Grid, Skeleton, Container, Button, Space, Flex, ScrollArea, Table } from '@mantine/core';


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

    return (
        <Container>

            {/* Bible Version Picker */}
            <Grid grow >
                <p>Bible</p>
                <Space w="xl"></Space>
                <Flex


                    gap="sm"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Chip.Group multiple>
                        <Group position="center" mt="md">
                            <Chip value="1">AMP</Chip>
                            <Chip value="2">BSI</Chip>
                            <Chip value="3">NKJV</Chip>
                        </Group>
                    </Chip.Group>
                </Flex>
            </Grid>
            <Space h={16}></Space>

            {/* Book Selector */}
            <Chip.Group>
                <Group spacing={"xs"} position='left'>
                    <Chip color="orange" variant="filled" radius="xs" value="1">Genesis</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="2">Exodus</Chip>
                    <Chip color="orange" variant="filled" radius="xs" value="5">Psalms</Chip>


                </Group>
            </Chip.Group>

            <Space h="xs" />


            {/* Selector Scroller */}
            <Grid columns={24} mt={6}>
                {/* Book Number Selector */}
                <Grid.Col span={2}>

                    <Flex
                        mih={50}

                        justify="center"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                    >
                        <Chip.Group>
                            <Group spacing={"xs"} position='left'>
                                <Chip color="orange" variant="filled" radius="xs" value="1">1</Chip>
                                <Chip color="orange" variant="filled" radius="xs" value="2">2</Chip>
                                <Chip color="orange" variant="filled" radius="xs" value="3">3</Chip>
                                <Chip color="orange" variant="filled" radius="xs" value="4">5</Chip>
                            </Group>
                        </Chip.Group>

                    </Flex>
                </Grid.Col>

                {/* Verse Selector */}
                <Grid.Col span={2}>
                    <ScrollArea h={800}>
                        <Flex
                            mih={50}

                            justify="center"
                            align="flex-start"
                            direction="column"
                            wrap="wrap"
                        >
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

                        </Flex>
                    </ScrollArea>
                </Grid.Col>


                {/* Table */}
                <Grid.Col span={20}>

                    <ScrollArea >
                        <Table striped highlightOnHover>
                            {/* <thead>{ths}</thead> */}
                            <tbody>{rows}</tbody>

                        </Table>
                    </ScrollArea>
                </Grid.Col>

            </Grid>


        </Container >
    )
}

export default Bible