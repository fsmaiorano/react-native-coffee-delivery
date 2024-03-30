import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={THEME.COLORS.GREY_900}
        translucent
      />
      <Routes />
    </GestureHandlerRootView>
  );
}
