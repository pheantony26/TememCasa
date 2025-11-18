// components/BottomNav.tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  // Função para verificar se a rota está ativa
  const isActive = (route: string) => pathname === route;

  return (
    <View style={styles.floatingNav}>
      {/* HOME */}
      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/home")}>
        <MaterialCommunityIcons
          name="home"
          size={30}
          color={isActive("/home") ? "#FF9F0A" : "#B3B3B3"}
        />
        <Text style={[styles.navText, { color: isActive("/home") ? "#FF9F0A" : "#B3B3B3" }]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* PRODUTOS */}
      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/produtos")}>
        <MaterialCommunityIcons
          name="tag-multiple"
          size={30}
          color={isActive("/produtos") ? "#FF9F0A" : "#B3B3B3"}
        />
        <Text style={[styles.navText, { color: isActive("/produtos") ? "#FF9F0A" : "#B3B3B3" }]}>
          Produtos
        </Text>
      </TouchableOpacity>

      {/* RECEITAS */}
      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/receitas")}>
        <MaterialCommunityIcons
          name="cookie"
          size={30}
          color={isActive("/receitas") ? "#FF9F0A" : "#B3B3B3"}
        />
        <Text style={[styles.navText, { color: isActive("/receitas") ? "#FF9F0A" : "#B3B3B3" }]}>
          Receitas
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  floatingNav: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#343438ff",
    height: 70,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 15,
    marginTop: 4,
    color: "#B3B3B3",
  },
});