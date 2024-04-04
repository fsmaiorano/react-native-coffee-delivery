import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Carousel } from "../../components/carousel";
import { Header } from "../../components/header";
import { Products } from "../../components/products";
import { Search } from "../../components/search";
import { THEME } from "../../styles/theme";

export function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ padding: 25, backgroundColor: THEME.COLORS.GREY_900 }}>
        <Header />
        <Search />
      </View>
      <Carousel />
      <View style={{ padding: 25, marginTop: 200 }}>
        <Products />
      </View>
    </ScrollView>
  );
}
