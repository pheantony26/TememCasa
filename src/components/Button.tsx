import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  type?: "entrar" | "google"; // tipo do botão
  onPress: () => void;
}

export default function Button({ title, type = "entrar", onPress }: ButtonProps) {
  const isEntrar = type === "entrar";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isEntrar ? styles.entrarButton : styles.googleButton
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {type === "google" && (
          <AntDesign name="google" size={20} color="#fff" style={{ marginRight: 10 }} />
        )}

        <Text
          style={[
            styles.buttonText,
            isEntrar ? styles.entrarText : styles.googleText
          ]}
        >
          {title}
        </Text>
      </View>
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
    backgroundColor: "#FF9F0A",
  },
  googleButton: {
    backgroundColor: "#1a1a1a",
    borderWidth: 0.5,
    borderColor: "#a1a1a1",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  entrarText: {
    color: "#1a1a1a",
  },
  googleText: {
    color: "#fff",
  },
});
