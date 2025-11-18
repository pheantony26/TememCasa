import { StyleSheet, TextInput } from "react-native";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  backgroundColor?: string;    // cor de fundo
  color?: string;              // cor do texto
  placeholderColor?: string;   // cor do placeholder
  borderColor?: string;        // cor da borda
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  secureTextEntry = false,
  backgroundColor = "#1a1a1a",
  color = "#fff",
  placeholderColor,
  borderColor = "#fff",      // branco padrão
}: InputProps) {
  return (
    <TextInput
      style={[styles.input, { backgroundColor, color, borderColor }]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor ?? (color === "#fff" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.4)")}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 55,
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 20,
  },
});
