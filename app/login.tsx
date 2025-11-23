import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../src/components/Button";
import Input from "../src/components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  const handleForgotPassword = () => {
    router.push("/recuperar-senha");
  };

  const handleGoBack = () => {
    router.replace("/splash"); // volta para splash sem permitir swipe-back
  };

  return (
    <View style={styles.container}>

      {/* Ícone de voltar */}
      <TouchableOpacity style={styles.backIcon} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Container do formulário */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Hey,{'\n'}bem vindo{'\n'}de volta!</Text>

        {/* Inputs */}
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={true} // ativa o olho para mostrar/esconder a senha
        />

        {/* Esqueceu a senha */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Botões */}
        <Button
          title="Entrar"
          type="entrar"
          onPress={handleLogin}
        />
        <Text style={styles.primeiroAcesso}>ou continue com</Text>
        <Button
          title="Google"
          type="google"
          onPress={() => router.push("/cadastro")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  backIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 70,
    left: 20,
    zIndex: 10,
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 30,
  },
  title: {
    fontSize: 45,
    marginBottom: 60,
    textAlign: "left",
    color: "#fff",
    marginTop: 100,
    fontWeight: "bold",
  },
  forgotPassword: {
    fontSize: 16,
    textAlign: "right",
    paddingRight: 10,
    color: "#fff",
    marginBottom: 40,
    textDecorationLine: "underline",
  },
  primeiroAcesso: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#fff",
    marginBottom: 20,
  },
});
