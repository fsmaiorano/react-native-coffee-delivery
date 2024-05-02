import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity } from "react-native";
import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";
import { THEME } from "../styles/theme";
import { ShoppingCart } from "phosphor-react-native";

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
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: THEME.COLORS.GREY_900,
          },
          headerRight: () => (
            <TouchableOpacity style={[{}]}>
              <ShoppingCart
                weight="fill"
                size={32}
                color={THEME.COLORS.YELLOW_700}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}
