import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { THEME } from "./src/styles/theme";

import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { useFonts } from "expo-font";
import { AppContextProvider } from "./src/context/AppContext";
import { CartContextProvider } from "./src/context/CartContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={THEME.COLORS.GREY_900}
          translucent
        />
        <AppContextProvider>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </AppContextProvider>
      </GestureHandlerRootView>
    );
  }
}
