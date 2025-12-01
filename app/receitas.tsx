import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import BottomNav from "../src/components/BottomNav";

export default function Receitas() {
  const produtos = [
    "Coxão Duro",
    "Patinho",
    "Acém",
    "Sobrecoxa",
    "Linguiça",
    "Salsicha",
    "Picanha"
  ];

  const receitas = [
    { id: 1, nome: "Picadinho de Coxão Duro", ingredientes: ["Coxão Duro", "Cebola", "Alho", "Molho de Tomate", "Sal", "Pimenta"] },
    { id: 2, nome: "Hambúrguer de Patinho", ingredientes: ["Patinho", "Sal", "Pimenta", "Pão de Hambúrguer"] },
    { id: 3, nome: "Sobrecoxa Assada", ingredientes: ["Sobrecoxa", "Alho", "Limão", "Ervas"] },
    { id: 4, nome: "Linguiça Grelhada com Legumes", ingredientes: ["Linguiça", "Cebola", "Tomate", "Pimentão"] }
  ].filter(rec => rec.ingredientes.some(i => produtos.includes(i)));

  const fadeAnims = useRef(receitas.map(() => new Animated.Value(0))).current;
  const [expandida, setExpandida] = useState<number | null>(null);

  useEffect(() => {
    Animated.stagger(100,
      fadeAnims.map(anim => Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }))
    ).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <Text style={styles.Title}>Receitas</Text>

      {/* ScrollView das receitas */}
      <ScrollView
        style={styles.listaContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }} // espaço seguro para bottom nav
      >
        {receitas.map((rec, index) => {
          const isOpen = expandida === rec.id;

          return (
            <Animated.View
              key={rec.id}
              style={[
                styles.cardItem,
                {
                  opacity: fadeAnims[index],
                  transform: [{
                    translateY: fadeAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0]
                    })
                  }]
                }
              ]}
            >
              <View style={styles.cardContent}>
                <View style={styles.numeroContainer}>
                  <Text style={styles.numero}>{index + 1}</Text>
                </View>

                <View style={styles.infoContainer}>
                  <Text style={styles.cardTitle} numberOfLines={2}>
  {rec.nome}
</Text>

                  <TouchableOpacity onPress={() => setExpandida(isOpen ? null : rec.id)}>
                    <Text style={styles.expandirTexto}>
                      {isOpen ? "Ocultar ingredientes ▲" : "Ver ingredientes ▼"}
                    </Text>
                  </TouchableOpacity>

                  {isOpen && (
                    <View style={styles.ingredientesBox}>
                      {rec.ingredientes.map((ing, idx) => (
                        <Text key={idx} style={styles.ingredienteItem}>• {ing}</Text>
                      ))}

                      <TouchableOpacity
                        style={styles.abrirBtn}
                        onPress={() => router.push(`/receitas/${rec.id}`)}
                      >
                        <Text style={styles.abrirTexto}>Abrir Receita ➜</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </Animated.View>
          );
        })}
      </ScrollView>

      {/* Bottom navigation em View separada */}
      <View style={styles.bottomNavWrapper}>
        <BottomNav />
      </View>

    </View>
  );
}

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
    marginBottom: 30,
    fontWeight: "bold",
  },

  listaContainer: {
    width: "90%",
    marginTop: 0,
  },

  cardItem: {
  backgroundColor: "#2c2c2c",
  padding: 16,
  borderRadius: 20,
  marginBottom: 15,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
  minHeight: 110, // altura mínima do card (ajuste conforme necessário)
},


  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  numeroContainer: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  numero: {
    color: "#FF9F0A",
    fontSize: 28,
    fontWeight: "bold",
  },

  infoContainer: {
    flex: 1,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 6,
  },

  expandirTexto: {
    color: "#FF9F0A",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },

  ingredientesBox: {
  backgroundColor: "#3a3a3a",
  marginTop: 8,
  padding: 16,
  borderRadius: 18,
  alignSelf: "center",       // centraliza horizontalmente
  width: "90%",              // largura do quadrado (ajuste conforme necessário)
},


  ingredienteItem: {
    color: "#ddd",
    fontSize: 15,
    marginBottom: 6,
    lineHeight: 22,
  },

  abrirBtn: {
    marginTop: 12,
    backgroundColor: "#FF9F0A",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  abrirTexto: {
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 15,
  },

  bottomNavWrapper: {
    width: "100%",
    height: 110, // mesma altura do BottomNav
  },
});
