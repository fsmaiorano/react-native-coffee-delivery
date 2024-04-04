import { Text } from "react-native";
import { styles } from "./styles";

import { useEffect, useState } from "react";
import coffees from "../../data/coffees.json";

export function Products() {
  const [tags, setTags] = useState<string[]>([]);

  const getAllTags = () => {
    const tags = [...new Set(coffees.flatMap((coffee) => coffee.tags))];
    setTags(tags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <>
      <Text style={styles.title}>Nossos cafés</Text>
      {tags.map((tag, index) => (
        <Text key={index} style={styles.tag}>
          {tag}
        </Text>
      ))}
    </>
  );
}
