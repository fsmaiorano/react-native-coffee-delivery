import {useContext, useEffect, useState} from 'react';
import {MagnifyingGlass} from "phosphor-react-native";
import {Text, TextInput, View} from "react-native";
import {THEME} from "../../styles/theme";
import {styles} from "./styles";
import {AppContext} from "../../context/AppContext";

export function Search() {
    const {coffees, applySearchFilter} = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            const filteredCoffees = coffees.filter(coffee =>
                coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            applySearchFilter(filteredCoffees);
        }, 500);

        setTimeoutId(newTimeoutId as any);

        return () => {
            clearTimeout(newTimeoutId);
        };
    }, [searchTerm]);

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
                        onChangeText={text => setSearchTerm(text)}
                    />
                </View>
            </View>
        </>
    );
}