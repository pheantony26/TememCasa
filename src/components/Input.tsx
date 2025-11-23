import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  borderColor?: string;
  maxLength?: number; // <- limite de caracteres
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  secureTextEntry = false,
  backgroundColor = "#2a2a2a",
  color = "#fff",
  placeholderColor,
  borderColor = "#575757ff",
  maxLength, // <- recebendo prop
}: InputProps) {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const resolvedPlaceholderColor =
    placeholderColor ?? (color === "#1a1a1a" ? "#888" : "rgba(255,255,255,0.7)");

  return (
    <View style={[styles.container, { borderColor }]}>
      <TextInput
        style={[styles.input, { backgroundColor, color }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={resolvedPlaceholderColor}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={!showPassword && secureTextEntry} 
        maxLength={maxLength} // <- aplicando limite
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    marginBottom: 20,
    borderWidth: 0.5,
    borderRadius: 25,
  },
  input: {
    width: "100%",
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#fff",
  },
  iconButton: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
});
