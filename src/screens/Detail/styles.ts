import {StyleSheet} from "react-native";
import {THEME} from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flex: 2,
        backgroundColor: THEME.COLORS.GREY_900,
    },
    footer: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE,
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    tag: {
        justifyContent: "center",
        alignItems: "center",
        width: 115,
        height: 30,
        borderRadius: 50,
        marginTop: 12,
        marginLeft: 12,
        borderWidth: 1,
        borderColor: THEME.COLORS.GREY_800,
        backgroundColor: THEME.COLORS.GREY_800,
    },
    tagText: {
        fontSize: 14,
        fontWeight: "bold",
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONTS.ROBOTO_BOLD,
    },
});

//
// coffeeTag: {
//     width: 85,
//         height: 30,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         backgroundColor: THEME.COLORS.PURPLE_300,
//         marginRight: 8,
//         borderWidth: 0,
//         borderColor: THEME.COLORS.PURPLE_700,
// },
// coffeeSelectedTag: {
//     borderWidth: 1,
// },
// coffeeTagText: {
//     fontSize: 10,
//         fontWeight: "bold",
//         color: THEME.COLORS.PURPLE_700,
//         fontFamily: THEME.FONTS.ROBOTO_BOLD,
// },