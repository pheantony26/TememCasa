import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Button from "../src/components/Button";

export default function ValidaEmail() {
  const router = useRouter();
  const inputsRef = useRef<TextInput[]>([]);

  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(0); // inicia com 0
  const [canResend, setCanResend] = useState(false);

  // Contador regressivo
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
  console.log("Reenviar código...");
  setCode(["", "", "", "", ""]); // limpa os campos
  inputsRef.current[0]?.focus(); // opcional: foca no primeiro input
  setTimer(120); // 2 minutos
  setCanResend(false);
  // aqui chamaria a função que envia o código de fato
};


  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) inputsRef.current[index + 1]?.focus();
    if (!value && index > 0) inputsRef.current[index - 1]?.focus();
  };

  const handleConfirm = () => {
    const finalCode = code.join("");
    console.log("Código digitado:", finalCode);
    router.push("/home");
  };

  const handleGoBack = () => {
    router.replace("/cadastro");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Valide seu e-mail</Text>
        <Text style={styles.subtitle}>
          Digite o código de 5 dígitos enviado{'\n'}para seu e-mail
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputsRef.current[index] = ref!)}
              value={digit}
              onChangeText={(value) => handleChange(index, value)}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              placeholder="-"
              placeholderTextColor="#888"
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          {canResend ? (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>
          ) : timer > 0 ? (
            <Text style={styles.resendText}>Reenviar em {timer}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Confirmar" type="entrar" onPress={handleConfirm} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  backIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 70,
    left: 20,
    zIndex: 10,
  },
  content: {
    alignItems: "center",
    width: "100%",
    marginTop: 180
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  codeInput: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 12,
    fontSize: 26,
    color: "#fff",
    marginHorizontal: 5,
  },
  resendContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  resendText: {
    fontSize: 16,
    color: "#FF9F0A",
  },
  buttonContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
