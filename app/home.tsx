import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image"; // << AGORA usando expo-image
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logoHome from "../assets/images/logoHome.png";
import BottomNav from "../src/components/BottomNav";

export default function Home() {
  const router = useRouter();

  const handlePerfil = () => {
    router.push("/perfil"); 
  };

  // Animations para os 3 cards
  const fadeAnims = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]).current;

  useEffect(() => {
    Animated.stagger(100,
      fadeAnims.map(anim =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        })
      )
    ).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Botão de perfil */}
      <TouchableOpacity style={styles.perfilIcon} onPress={handlePerfil}>
        <Ionicons name="person-circle-outline" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Logo */}
      <Image 
        source={logoHome}
        style={styles.logo}
        contentFit="contain"
        transition={300}          
        cachePolicy="memory-disk" 
      />

      {/* Informações */}
      <View style={styles.informacoesContainer}>
        <Text style={styles.textinfo}>Informações</Text>

        {["Produtos cadastrados", "Próximos da validade", "Receitas possíveis"].map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.infoButton,
              {
                opacity: fadeAnims[index],
                transform: [{
                  translateY: fadeAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                }],
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3,
              }
            ]}
          >
            <View style={styles.infoButtonContent}>
              <Text style={styles.infoButtonText}>{item}</Text>
              <Text style={styles.infoButtonNumber}>{index === 0 ? 12 : index === 1 ? 5 : 8}</Text>
            </View>
          </Animated.View>
        ))}
      </View>

      {/* Próximos passos */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },

  perfilIcon: {
    position: "absolute",
    top: 65,
    right: 30,
    zIndex: 10,
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 65,
    marginBottom: 30
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
    position: "absolute",
    bottom: -47.5,
    alignSelf: "center",
    width: "100%",
    zIndex: 10,
  },

  cadastrarButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
