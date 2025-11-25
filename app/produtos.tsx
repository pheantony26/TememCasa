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

export default function Produtos() {

  const categorias = ["Carnes", "Laticínios", "Hortifruti", "Bebidas", "Enlatados", "Temperos"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Carnes");

  const produtos = [
    { id: 1, nome: "Coxão Duro", quantidade: "2kg", validade: 5 },
    { id: 2, nome: "Patinho", quantidade: "1kg", validade: 10 },
    { id: 3, nome: "Acém", quantidade: "1,5kg", validade: 7 },
    { id: 4, nome: "Sobrecoxa", quantidade: "3kg", validade: 2 },
    { id: 5, nome: "Salsicha", quantidade: "500g", validade: 15 },
    { id: 6, nome: "Linguiça", quantidade: "1kg", validade: 12 },
    { id: 7, nome: "Picanha", quantidade: "1,2kg", validade: 8 },
  ];

  const fadeAnims = useRef(produtos.map(() => new Animated.Value(0))).current;

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
      <Text style={styles.Title}>Produtos</Text>

      {/* Botão adicionar ao lado do título */}
      <TouchableOpacity style={styles.botaoAdicionarTop}>
        <Text style={styles.botaoAdicionarTexto}>+</Text>
      </TouchableOpacity>

      {/* Barra de categorias (sem fundo) */}
      <View style={styles.categoriasSticky}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {categorias.map(cat => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategoriaSelecionada(cat)}
              style={styles.categoriaBotao}
            >
              <Text style={[
                styles.categoriaTexto,
                categoriaSelecionada === cat && styles.categoriaTextoAtiva
              ]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lista de produtos */}
      <ScrollView
        style={styles.listaContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 1 }} // espaço seguro extra
      >
        {produtos.map((prod, index) => (
          <Animated.View
            key={prod.id}
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
            <View>
              <Text style={styles.cardTitle}>{prod.nome}</Text>
              <Text style={styles.cardSub}>{prod.quantidade} • Validade: {prod.validade} dias</Text>
            </View>

            <View style={styles.cardRight}>
              {prod.validade <= 3 && (
                <View style={styles.alertCircle}>
                  <Text style={styles.alertText}>!</Text>
                </View>
              )}

              {/* Ícone de editar */}
              <TouchableOpacity
                onPress={() => console.log("Editar produto:", prod.id)}
                style={{ marginLeft: 10 }}
              >
                <Text style={styles.editarIcon}>✎</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        ))}
      </ScrollView>

      {/* Espaço seguro embaixo */}
      <View style={styles.bottomSpace} pointerEvents="none" />

      {/* Bottom navigation */}
      <BottomNav />
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

  botaoAdicionarTop: {
    position: "absolute",
    top: 75, // próximo da margem do título
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF9F0A",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  categoriasSticky: {
    width: "100%",
    paddingVertical: 5,
    marginBottom: 16,
  },

  categoriaBotao: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  categoriaTexto: {
    color: "#fff",
    fontSize: 16,
  },

  categoriaTextoAtiva: {
    color: "#FF9F0A",
    fontWeight: "bold",
  },

  listaContainer: {
    width: "90%",
    marginTop: 0,
  },

  cardItem: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  cardSub: {
    color: "#ccc",
    fontSize: 14,
  },

  cardRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  alertCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
  },

  alertText: {
    color: "#fff",
    fontWeight: "bold",
  },

  editarIcon: {
    color: "#FF9F0A",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12
  },

  bottomSpace: {
    height: 110,
    width: "100%",
  },

  botaoAdicionarTexto: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
  },
});
