import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* --- Topo da tela --- */}
      <View style={styles.topContainer}>
        <Text style={styles.textNome}>Olá, Phellipe!</Text>

        {/* Barra de busca */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* --- Parte inferior da tela --- */}
      <View style={styles.bottomContainer}>
        
        {/* Minhas informações */}
        <Text style={styles.textInfo}>Minhas informações</Text>
        <View style={styles.viewInfo}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="cart" size={25} color="#000" style={styles.icon} />
            <Text style={styles.textQuantidadeProdutos}>12 Produtos</Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons name="alert" size={25} color="#FF9800" style={styles.icon} />
            <Text style={styles.textVencimento}>2 próximos do vencimento</Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons name="food-variant" size={25} color="#000" style={styles.icon} />
            <Text style={styles.textReceitas}>4 possíveis receitas</Text>
          </View>
        </View>

        {/* Categorias */}
        <Text style={styles.textCategories}>Categorias</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonWithText}>
            <TouchableOpacity style={styles.roundButton}>
              <MaterialCommunityIcons name="food-apple" size={50} color="#FF7043" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Frutas</Text>
          </View>

          <View style={styles.buttonWithText}>
            <TouchableOpacity style={styles.roundButton}>
              <MaterialCommunityIcons name="carrot" size={50} color="#4DB6AC" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Legumes</Text>
          </View>

          <View style={styles.buttonWithText}>
            <TouchableOpacity style={styles.roundButton}>
              <MaterialCommunityIcons name="food-steak" size={50} color="#FF8A65" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Carne</Text>
          </View>

          <View style={styles.buttonWithText}>
            <TouchableOpacity style={styles.roundButton}>
              <MaterialCommunityIcons name="cheese" size={50} color="#FFD54F" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Laticínios</Text>
          </View>
        </View>

        {/* Itens próximos ao vencimento */}
        <Text style={styles.textProxVencimento}>Itens próximos ao vencimento</Text>
        <View style={styles.expiringItemsRow}>
          <View style={styles.expiringItem}>
            <MaterialCommunityIcons name="food-apple" size={30} color="#FF7043" style={{ marginBottom: 5 }} />
            <Text style={styles.itemName}>Maçã</Text>
            <Text style={styles.itemDays}>1 dia</Text>
          </View>

          <View style={styles.expiringItem}>
            <MaterialCommunityIcons name="cheese" size={30} color="#FFD54F" style={{ marginBottom: 5 }} />
            <Text style={styles.itemName}>Leite</Text>
            <Text style={styles.itemDays}>2 dias</Text>
          </View>

          <View style={styles.expiringItem}>
            <MaterialCommunityIcons name="food-steak" size={30} color="#FF8A65" style={{ marginBottom: 5 }} />
            <Text style={styles.itemName}>Carne</Text>
            <Text style={styles.itemDays}>3 dias</Text>
          </View>
        </View>
      </View>

      {/* --- Barra de navegação inferior --- */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <MaterialCommunityIcons name="cart" size={35} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCenterButton}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <MaterialCommunityIcons name="food-variant" size={35} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topContainer: {
    backgroundColor: "#4CAF50",
    flex: 0.5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    justifyContent: "flex-start",
  },
  bottomContainer: { flex: 2, backgroundColor: "#fff", padding: 20 },
  textNome: { fontSize: 22, marginTop: 40, fontWeight: "bold", color: "#fff" },
  textInfo: { fontSize: 20, fontWeight: "bold", marginTop: 5, marginBottom: 5 },
  textCategories: { fontSize: 20, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
  textProxVencimento: { fontSize: 20, fontWeight: "bold", marginTop: 20, marginBottom: 5 },

  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 25, marginTop: 25, paddingHorizontal: 15, height: 45 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#000" },

  viewInfo: {
    borderWidth: 0.5,
    borderColor: "#999",
    borderRadius: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  icon: { marginRight: 15 },
  textQuantidadeProdutos: { fontSize: 18 },
  textVencimento: { fontSize: 18 },
  textReceitas: { fontSize: 18 },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonWithText: { alignItems: "center" },
  roundButton: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#999",
    marginBottom: 5,
  },
  buttonText: { fontSize: 14, color: "#000", textAlign: "center" },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#999",
    paddingHorizontal: 20,
  },
  navButton: { justifyContent: "center", alignItems: "center", width: 50, height: 50 },
  navCenterButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  plusIcon: { color: "#fff", fontSize: 36, fontWeight: "bold" },

  expiringItemsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 15 },
  expiringItem: {
    backgroundColor: "#FFF3E0",
    width: "30%",
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 5,
  },
  itemName: { fontSize: 16, fontWeight: "bold", marginBottom: 3, textAlign: "center", color: "#000" },
  itemDays: { fontSize: 14, textAlign: "center", color: "#FF5722" },
});
