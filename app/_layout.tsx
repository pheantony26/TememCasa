// app/_layout.tsx
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",          // animação suave
          animationDuration: 100,     // velocidade
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
