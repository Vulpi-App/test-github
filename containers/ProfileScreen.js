import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";

import LinearGradient from "react-native-linear-gradient";

export default function ProfileScreen() {
  // Hello la team Vulpi
  const { params } = useRoute();
  return (
    <View>
      <Text>user id : {params.userId}</Text>

      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </LinearGradient>

      <Text>Deuxième texte - test conflit</Text>
    </View>
  );
}

// StyleSheet
