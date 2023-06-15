import { Flex, Paper } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import StageManager from './StageManager';
import DisplayManager from './DisplayManager';


function TopBar() {
  return (
    <Paper shadow="xl" radius="md" p="sm" withBorder>
      <Flex
        gap="lg"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="nowrap">

        <StageManager></StageManager>
        <DisplayManager></DisplayManager>

        <ActionIcon variant="default"><IconSettings size="1rem" />
        </ActionIcon>

      </Flex>
    </Paper >
  )
}

export default TopBar