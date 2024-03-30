import { useNavigation } from "@react-navigation/native";
import { SealWarning } from "phosphor-react-native";
import { Text, TextInput, View } from "react-native";
import { Header } from "../../components/header";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View style={{padding: 20, backgroundColor:THEME.COLORS.GREY_900}}>
        <Header />
        <Text style={styles.text}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>
        <View style={styles.container}>
          
          <View style={styles.searchSection}>
            <SealWarning
              style={styles.searchIcon}
              size={32}
              color={THEME.COLORS.GREY_300}
            />
            <TextInput
              style={styles.input}
              placeholder="Pesquisar"
              cursorColor={THEME.COLORS.GREY_500}
              placeholderTextColor={THEME.COLORS.GREY_300}
              selectionColor={THEME.COLORS.GREY_500}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
      </View>
    </>
  );
}
