import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button } from "react-native";
import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";
import { THEME } from "../styles/theme";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen
        name="detail"
        component={Detail}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBlurEffect: "light",
          headerBackButtonMenuEnabled: true,
          customAnimationOnGesture: true,
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: THEME.COLORS.GREY_900,
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Navigator>
  );
}
