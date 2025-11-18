import { StyleSheet, Text, View } from "react-native";
import BottomNav from "../src/components/BottomNav";

export default function Produtos() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Produtos</Text>

      {/* Barra de navegação inferior */}
      <BottomNav />
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
  },
  Title: {
    color: "#fff",
    marginTop: 80,
    fontSize: 30,
  },
});
