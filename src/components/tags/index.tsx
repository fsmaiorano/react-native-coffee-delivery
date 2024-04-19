import {FlatList, Text, TouchableOpacity} from "react-native";

import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/AppContext";
import {styles} from "./styles";

export function Tags() {
    const {coffees, applyFilter, handleTagSelection, selectedTag} =
        useContext(AppContext);
    const [tags, setTags] = useState<string[]>([]);

    const getAllTags = () => {
        const tags = [...new Set(coffees.flatMap((coffee) => coffee.tags))];
        tags.unshift("TODOS");
        setTags(tags);
    };

    const onTagPress = (index: number, tag: string) => {
        const selectedTag = tags[index];
        handleTagSelection(tag);
        if (selectedTag === "TODOS") {
            if (applyFilter) {
                applyFilter([]);
            }
            return;
        }

        if (applyFilter) {
            applyFilter([selectedTag]);
        }
    };

    useEffect(() => {
        getAllTags();
    }, []);

    return (
        <FlatList
            horizontal
            data={tags}
            contentContainerStyle={{paddingVertical: 16, paddingHorizontal: 25}}
            snapToAlignment="center"
            decelerationRate="fast"
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        ...styles.coffeeTag,
                        borderWidth:
                            item === selectedTag
                                ? styles.coffeeSelectedTag.borderWidth
                                : styles.coffeeTag.borderWidth,
                    }}
                    onPress={() => onTagPress(index, item)}
                >
                    <Text style={styles.coffeeTagText}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
