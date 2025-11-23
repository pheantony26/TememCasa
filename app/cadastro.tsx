// cadastro.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Button from "../src/components/Button";
import Input from "../src/components/Input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);
  const [showEmailInfo, setShowEmailInfo] = useState(false);

  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  // valida senha
  const validatePassword = (text: string) => {
    setPassword(text);
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(text);
    setShowPasswordInfo(text.length > 0 && !isValid);
  };

  // valida email
  const validateEmail = (text: string) => {
    setEmail(text);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setShowEmailInfo(text.length > 0 && !isValid);
  };

  const handleConfirm = () => {
    console.log({ name, email, password });
    router.push("/validaEmail");
  };

  const handleGoBack = () => {
    router.replace("/splash");
  };

  // Scroll automático quando aparecer aviso de senha ou e-mail
  useEffect(() => {
    if ((showPasswordInfo || showEmailInfo) && scrollRef.current) {
      scrollRef.current.scrollTo({ y: 150, animated: true }); // ajusta o quanto sobe
    }
  }, [showPasswordInfo, showEmailInfo]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#1a1a1a" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        ref={scrollRef}
      >
        {/* Ícone de voltar */}
        <TouchableOpacity style={styles.backIcon} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Texto do topo */}
        <Text style={styles.title}>Cadastre-se,{'\n'}é rápido e{'\n'}fácil!</Text>

        {/* Formulário */}
        <View style={styles.formContainer}>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Nome"
            autoCapitalize="words"
            maxLength={50} // limite de caracteres
          />
          <Input
            value={email}
            onChangeText={validateEmail}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={50} // limite de caracteres
          />
          {showEmailInfo && (
            <Text style={styles.emailInfo}>
              Por favor, digite um e-mail válido.
            </Text>
          )}

          <Input
            value={password}
            onChangeText={validatePassword}
            placeholder="Senha"
            secureTextEntry
            maxLength={20} // limite de caracteres
          />
          {showPasswordInfo && (
            <Text style={styles.passwordInfo}>
              A senha deve conter pelo menos 8 caracteres, incluindo letras e números.
            </Text>
          )}

          {/* Botão de confirmar */}
          <View style={{ marginTop: 40 }}>
            <Button
              title="Confirmar"
              type="entrar"
              onPress={handleConfirm}
            />
          </View>

          {/* Link para login */}
          <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text style={styles.loginLink}>Já possui cadastro? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  backIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 70,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 130,
    marginBottom: 60,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  emailInfo: {
    fontSize: 14,
    color: "#df0a0a",
    marginBottom: 15,
    marginTop: -10,
  },
  passwordInfo: {
    fontSize: 14,
    color: "#df0a0a",
    marginBottom: 15,
    marginTop: -10,
  },
  loginLink: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#FF9F0A",
    textDecorationLine: "underline",
  },
});
