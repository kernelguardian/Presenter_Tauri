import { useState } from "react";
import { rem, em } from '@mantine/core';
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import LoginFlow from "./componets/LoginFlow";
import LandingPage from "./componets/LandingPage";
import { MantineProvider, Text } from '@mantine/core';
import GreetingPage from "./componets/GreetingPage";
import { Container } from '@mantine/core';



function App() {

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   // setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <GreetingPage></GreetingPage>
    </MantineProvider>

  )

}

export default App;
