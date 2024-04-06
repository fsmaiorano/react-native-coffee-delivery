import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";

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
      <Screen name="detail" component={Detail} options={{}} />
    </Navigator>
  );
}
