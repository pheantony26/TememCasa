// app/_layout.tsx
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}
      >
        {/* Index: apenas redireciona, swipe desabilitado */}
        <Stack.Screen
          name="index"
          options={{ gestureEnabled: false }}
        />

        {/* Splash: swipe desabilitado */}
        <Stack.Screen
          name="splash"
          options={{ gestureEnabled: false }}
        />

        {/* Login: swipe desabilitado, volta apenas pela seta */}
        <Stack.Screen
          name="login"
          options={{ gestureEnabled: false }}
        />

        {/* Home: swipe desabilitado, só navega pelo BottomNav */}
        <Stack.Screen
          name="home"
          options={{ gestureEnabled: false }}
        />

        {/* Produtos: swipe desabilitado, só navega pelo BottomNav */}
        <Stack.Screen
          name="produtos"
          options={{ gestureEnabled: false }}
        />

        {/* Receitas: swipe desabilitado, só navega pelo BottomNav */}
        <Stack.Screen
          name="receitas"
          options={{ gestureEnabled: false }}
        />

        {/* Perfil: swipe desabilitado, volta apenas pelo botão de sair */}
        <Stack.Screen
          name="perfil"
          options={{ gestureEnabled: false }}
        />

        {/* Futuras telas podem habilitar swipe se quiser */}
        {/* <Stack.Screen name="outraTela" options={{ gestureEnabled: true }} /> */}
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
