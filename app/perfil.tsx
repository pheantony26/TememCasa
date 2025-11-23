// app/perfil.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/splash"); // volta para splash e limpa histórico
  };

  const handleVoltar = () => {
    router.replace("/home") // volta para a home
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.iconeVoltar} onPress={handleVoltar}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Ícone de perfil no topo */}
      <View style={styles.profileHeader}>
        <Ionicons name="person-circle-outline" size={100} color="#fff" />
        <Text style={styles.userName}>Phellipe Antony</Text>
      </View>

      {/* Informações do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações pessoais</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Senha:</Text>
          <Text style={styles.infoValue}>***********</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Política de privacidade:</Text>
          <Text style={styles.infoValue}>></Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Alterar e-mail:</Text>
          <Text style={styles.infoValue}>></Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Alterar senha</Text>
          <Text style={styles.infoValue}>></Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Exluir cadastro</Text>
          <Text style={styles.infoValue}>></Text>
        </View>
      </View>

      <Text style={styles.textSair}> Deseja sair do aplicativo?</Text>

      {/* Botão de sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.textVersion}>TC Client 1.15.0</Text>

    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 60
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  infoContainer: {
    backgroundColor: "#2c2c2c",
    borderRadius: 20,
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#CCCCCC",
  },
  infoValue: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 15,
    backgroundColor: "#FF9F0A",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    width: "70%",
    alignSelf: 'center'
  },
  logoutText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
    iconeVoltar: {
      position: "absolute",
      top: Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 50,
      left: 30,
      zIndex: 10,
      marginTop: 20
    },
    textSair: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    textVersion:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 150
    }
});
