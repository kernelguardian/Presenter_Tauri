import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import LoginFlow from "./componets/LoginFlow";
import LandingPage from "./componets/LandingPage";

function App() {

  const [accountState, setaccountState] = useState("active")



  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   // setGreetMsg(await invoke("greet", { name }));
  // }

  if (accountState === "active") {
    return <LandingPage></LandingPage>
  }
  else if (accountState === "inactive") {
    return <LoginFlow></LoginFlow>
  }
}

export default App;
