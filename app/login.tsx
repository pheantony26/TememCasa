import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    router.push("/recuperar-senha"); // futura tela de recuperação
  };

  return (
    <View style={styles.container}>
      {/* Parte da logo */}
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Container verde com o formulário */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Login</Text>
        
        {/* Input de e-mail */}
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Input de senha */}
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={true}
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

        <Text style={styles.primeiroAcesso}>Primeiro acesso?</Text>

        <Button
          title="Cadastre-se"
          type="cadastrar"
          onPress={() => router.push("/cadastro")}
        />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "#4CAF50",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    justifyContent: "flex-start",
  },
  logo: {
    width: 250,
    height: 150,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
  forgotPassword: {
    fontSize: 16,
    textAlign: "right",
    paddingRight: 10,
    color: "#fff",
    marginBottom: 20,
    textDecorationLine: "underline", // deixa parecendo um link
  },
  primeiroAcesso: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 70,
    color: "#fff",
    marginBottom: 20,
  },
});
