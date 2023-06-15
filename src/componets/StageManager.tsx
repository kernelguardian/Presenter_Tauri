import { Tabs, Card, Divider, SegmentedControl, Paper } from '@mantine/core'

function StageManager() {
    return (
        <SegmentedControl
            radius="xl"
            transitionDuration={300}
            transitionTimingFunction="linear"
            color="blue"

            data={[
                { label: 'Stage 1', value: 's1' },
                { label: 'Stage 2', value: 's2' },
                { label: 'Stage 3', value: 's3' },
                { label: 'Stage4', value: 's4' },
            ]}
        />

    )
}

export default StageManager