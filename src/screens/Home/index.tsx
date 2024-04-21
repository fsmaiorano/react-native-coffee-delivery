import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { Carousel } from "../../components/carousel";
import { Header } from "../../components/header";
import { Products } from "../../components/products";
import { Search } from "../../components/search";
import { Tags } from "../../components/tags";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView nestedScrollEnabled>
      <View style={{ padding: 25, backgroundColor: THEME.COLORS.GREY_900 }}>
        <Header />
        <Search />
      </View>
      <Carousel />
      <View style={{ padding: 25, marginTop: 200 }}>
        <Text style={styles.title}>Nossos cafés</Text>
      </View>
      <Tags />
      <View style={{ padding: 25 }}>
        <Products />
      </View>
    </ScrollView>
  );
}
