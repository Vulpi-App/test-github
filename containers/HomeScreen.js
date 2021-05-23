import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const test = "Hello test";
  return (
    <View>
      <Text>Ajout d'un texte !</Text>
      <Text>Ca fait faire des erreurs !</Text>

      <Text>Ajout d'un second texte !</Text>

      <Text>Welcome home!</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
    </View>
  );
}
