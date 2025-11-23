import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("login");

  const handlePress = (type: "login" | "cadastro") => {
    setActiveButton(type);
    setTimeout(() => {
      if (type === "login") router.push("/login");
      else router.push("/cadastro");
    }, 200);
  };

  return (
    <View style={styles.container}>

      {/* Imagem superior */}
      <Image
        source={require("../assets/images/topsplash.png")}
        style={styles.topImage}
        resizeMode="contain"
      />

      {/* Textos centrais */}
      <View style={styles.centerContent}>
        <Text style={styles.mainText}>
          O melhor app para sua cozinha.
        </Text>

        <Text style={styles.subText}>
          Organize seus produtos, acompanhe a{"\n"}
          validade e descubra receitas incríveis.
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.bottomContent}>
        <View style={styles.buttonWrapper}>

          {/* Login */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.loginButton,
              { marginRight: -20, zIndex: 2 },
              pressed && { backgroundColor: "#E0E0E0" },
            ]}
            onPress={() => handlePress("login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>

          {/* Cadastro */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.signupButton,
              { zIndex: 1 },
              pressed && { backgroundColor: "#666666" },
            ]}
            onPress={() => handlePress("cadastro")}
          >
            <Text style={styles.signupText}>Cadastro</Text>
          </Pressable>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },

  topImage: {
    width: 380,
    height: 380,
    marginTop: 0,
    marginBottom: -80,
  },

  centerContent: {
    alignItems: "center",
    width: "100%",
  },

  mainText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 10,
  },

  subText: {
    fontSize: 16,
    color: "#CCCCCC",
    marginTop: 5,
    lineHeight: 22,
    textAlign: "center",
  },

  bottomContent: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonWrapper: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: "#FFFFFF",
  },

  signupButton: {
    backgroundColor: "#888888",
  },

  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  signupText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
