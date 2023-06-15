import { Paper, Grid } from '@mantine/core';

import Bible from './Bible'
import Song from './Song'

function Playground() {
    return (
        <Grid columns={24} mb={12} >
            <Grid.Col span={14}>
                <Paper shadow="xl" radius="md" p="sm" my={4} withBorder>
                    <Bible></Bible>
                </Paper>
            </Grid.Col>
            <Grid.Col span={10}>
                <Song></Song>
            </Grid.Col>

        </Grid>



    )
}

export default Playground