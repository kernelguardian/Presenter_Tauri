import { Flex, Card, Divider } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import StageManager from './StageManager';
import DisplayManager from './DisplayManager';


function TopBar() {
  return (

    <Flex
      gap="lg"
      justify="flex-start"
      align="center"
      direction="row"
      wrap="nowrap"

    >

    
      <StageManager></StageManager>


      <DisplayManager></DisplayManager>
      <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>

    </Flex>
  )
}

export default TopBar