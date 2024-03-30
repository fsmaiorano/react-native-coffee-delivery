import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/theme";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.COLORS.GREY_800 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
