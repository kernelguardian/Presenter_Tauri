import { Chip, Group } from '@mantine/core'

function DisplayManager() {
    return (
        <Chip.Group multiple >
            <Group position="center" >

                <Chip defaultChecked color="green" variant="filled" size="sm"
                    radius="sm" value="d1">Display 1</Chip>

                <Chip defaultChecked color="green" variant="filled" size="sm"
                    radius="sm" value="d2">Display 2</Chip>

                <Chip defaultChecked color="green" variant="filled" size="sm"
                    radius="sm" value="d3">Display 3</Chip>

            </Group>
        </Chip.Group >
    )
}

export default DisplayManager