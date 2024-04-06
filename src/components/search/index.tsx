import { MagnifyingGlass } from "phosphor-react-native";
import { Text, TextInput, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Search() {
  return (
    <>
      <Text style={styles.title}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <MagnifyingGlass 
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
    </>
  );
}
