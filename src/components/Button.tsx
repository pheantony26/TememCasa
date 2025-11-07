import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  type?: "entrar" | "cadastrar"; // tipo do botão
  onPress: () => void;
}

export default function Button({ title, type = "entrar", onPress }: ButtonProps) {
  const isEntrar = type === "entrar";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isEntrar ? styles.entrarButton : styles.cadastrarButton
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isEntrar ? styles.entrarText : styles.cadastrarText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  entrarButton: {
    backgroundColor: "#fff",
  },
  cadastrarButton: {
    backgroundColor: "#FF9800",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  entrarText: {
    color: "#4CAF50",
  },
  cadastrarText: {
    color: "#fff",
  },
});
