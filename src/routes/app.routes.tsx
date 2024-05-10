import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity } from "react-native";
import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";
import { THEME } from "../styles/theme";
import { ShoppingCart } from "phosphor-react-native";
import { Checkout } from "../screens/Checkout";
import { useNavigation } from "@react-navigation/native";
import { Delivery } from "../screens/Delivery";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="delivery" component={Delivery} />
      <Screen
        name="checkout"
        component={Checkout}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          customAnimationOnGesture: false,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: true,
          headerTintColor: "#000",
          headerBlurEffect: "light",
          headerTitle: "Carrinho",
          headerStyle: {
            backgroundColor: THEME.COLORS.GREY_100,
          },
        }}
      />
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
            <TouchableOpacity
              style={[{}]}
              onPress={() => navigation.navigate("checkout")}
            >
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
