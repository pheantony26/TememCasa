import { Image } from "expo-image"; // << AGORA usando expo-image
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logoHome from "../assets/images/logoHome.png";
import BottomNav from "../src/components/BottomNav";

export default function Home() {
  return (
    <View style={styles.container}>

      {/* Imagem no topo (carrega suave e sem delay) */}
      <Image 
        source={logoHome}
        style={styles.logo}
        contentFit="contain"
        transition={300}          // fade-in suave
        cachePolicy="memory-disk" // evita piscar em navegacao
      />

      <View style={styles.informacoesContainer}>
        <Text style={styles.textinfo}>Informações</Text>

        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoButtonContent}>
            <Text style={styles.infoButtonText}>Produtos cadastrados</Text>
            <Text style={styles.infoButtonNumber}>12</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoButtonContent}>
            <Text style={styles.infoButtonText}>Próximos da validade</Text>
            <Text style={styles.infoButtonNumber}>5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoButtonContent}>
            <Text style={styles.infoButtonText}>Receitas possíveis</Text>
            <Text style={styles.infoButtonNumber}>8</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.proximosContainer}>
        <Text style={styles.proximosTitle}>Olá!</Text>

        <Text style={styles.proximosDescricao}>
          Que bom que você está organizando sua dispensa! Cadastre um novo produto para seguirmos com os próximos passos!
        </Text>

        <TouchableOpacity style={styles.cadastrarButton}>
          <Text style={styles.cadastrarButtonText}>Cadastrar novo produto</Text>
        </TouchableOpacity>
      </View>

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
  },

  // Ajustado para não ter delay
  logo: {
    width: 300,    // menor -> carrega instantâneo
    height: 300,
    alignSelf: "center",
    marginTop: -10,
  },

  informacoesContainer: {
    width: "87%",
    alignSelf: "center",
    alignItems: "center",
  },

  textinfo: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginTop: -10,
    fontWeight: "bold",
    marginLeft: 5,
  },

  infoButton: {
    width: "100%",
    backgroundColor: "#2c2c2c",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 6,
  },

  infoButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  infoButtonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoButtonNumber: {
    color: "#FF9F0A",
    fontSize: 16,
    fontWeight: "bold",
  },

  proximosContainer: {
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
  },

  proximosTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },

  proximosDescricao: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30,
  },

  cadastrarButton: {
    backgroundColor: "#FF9F0A",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  cadastrarButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
