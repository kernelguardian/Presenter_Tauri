import { Flex, Grid } from '@mantine/core';

import Bible from './Bible'
import Song from './Song'

function Playground() {
    return (
        <Grid columns={24}>
            <Grid.Col span={12}>
                <Bible></Bible>
            </Grid.Col>
            <Grid.Col span={12}>
                <Song></Song>
            </Grid.Col>

        </Grid>



    )
}

export default Playground