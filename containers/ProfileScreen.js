import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  // Hello la team Vulpi
  const { params } = useRoute();
  return (
    <View>
      <Text>user id : {params.userId}</Text>

      <Text>Deuxième texte - test conflit</Text>
    </View>
  );
}

// StyleSheet
