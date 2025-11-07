import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../src/components/Button";
import Input from "../src/components/Input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  const router = useRouter();

  // 🔍 Função para validar a senha
  const validatePassword = (text: string) => {
    setPassword(text);

    // ✅ Regex aceita letras, números e caracteres especiais, com mínimo de 8
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(text);

    if (text.length > 0 && !isValid) {
      setShowPasswordInfo(true);
    } else {
      setShowPasswordInfo(false);
    }
  };

  const handleConfirm = () => {
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textCadastro}>Cadastro</Text>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          autoCapitalize="words"
          backgroundColor="#fff"
          borderColor="#ccc"
          placeholderColor="#ccc"
          color="#000000ff"
        />

        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          backgroundColor="#fff"
          borderColor="#ccc"
          placeholderColor="#ccc"
          color="#000000ff"
        />

        <Input
          value={password}
          onChangeText={validatePassword}
          placeholder="Senha"
          secureTextEntry
          backgroundColor="#fff"
          borderColor="#ccc"
          placeholderColor="#ccc"
          color="#000000ff"
        />

        {/* 🔔 Só aparece quando a senha for inválida */}
        {showPasswordInfo && (
          <Text style={styles.passwordInfo}>
            A senha deve conter pelo menos 8 caracteres, incluindo letras e números.
          </Text>
        )}

        <View style={{ marginTop: 70 }}>
          <Button
            title="Confirmar"
            type="cadastrar"
            onPress={handleConfirm}
          />
        </View>

        {/* Link para voltar ao login */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginLink}>Já possui cadastro? Login</Text>
        </TouchableOpacity>
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
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  formContainer: {
    flex: 2,
    padding: 20,
    justifyContent: "flex-start",
  },
  logo: {
    width: 200,
    height: 150,
  },
  loginLink: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
    color: "#4CAF50",
    textDecorationLine: "underline",
  },
  textCadastro: {
    fontSize: 24,
    justifyContent: "flex-start",
    textAlign: "center",
    fontWeight: "bold",
  },
  passwordInfo: {
    fontSize: 14,
    color: "#df0a0a",
    marginBottom: 15,
    marginTop: -10,
  },
});
