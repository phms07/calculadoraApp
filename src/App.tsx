import React  from "react";
import { SafeAreaView, Image, StatusBar, useColorScheme } from "react-native";
// import { ThemeProvider } from "styled-components";

import Calculator from "./pages/Calculator/Calculator";
// import themes from "./theme";

export default function App() {
  // const deviceTheme = useColorScheme();
  // console.log(deviceTheme);

  // const theme = themes[deviceTheme] || themes.dark;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Calculator/>
    </SafeAreaView>
  );
};