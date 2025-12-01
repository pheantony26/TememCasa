import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomNav from "../../src/components/BottomNav";

export default function DetalheReceita() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // --- Simulação de dados de receitas (você pode buscar real depois) ---
  const receitas = [
    {
      id: 1,
      nome: "Picadinho de Coxão Duro",
      descricao: "Um delicioso picadinho, super macio e saboroso.",
      ingredientes: ["Coxão Duro", "Cebola", "Alho", "Molho de Tomate", "Sal", "Pimenta"],
      modoPreparo: [
        "Corte a carne em cubos.",
        "Refogue a cebola e o alho.",
        "Adicione a carne e sele.",
        "Acrescente molho de tomate e temperos.",
        "Cozinhe por 40 minutos até amaciar."
      ],
    },
    {
      id: 2,
      nome: "Hambúrguer de Patinho",
      descricao: "Hambúrguer caseiro suculento de patinho.",
      ingredientes: ["Patinho", "Sal", "Pimenta", "Pão de Hambúrguer"],
      modoPreparo: [
        "Modele os hambúrgueres com a carne moída.",
        "Tempere com sal e pimenta.",
        "Grelhe em fogo médio até o ponto desejado.",
        "Monte no pão com acompanhamentos."
      ],
    },
    {
      id: 3,
      nome: "Sobrecoxa Assada",
      descricao: "Sobrecoxa assada com temperos simples e saborosos.",
      ingredientes: ["Sobrecoxa", "Alho", "Limão", "Ervas"],
      modoPreparo: [
        "Tempere as sobrecoxas com alho, limão e ervas.",
        "Asse em forno pré-aquecido a 200°C por 35 minutos.",
        "Sirva quente."
      ],
    },
    {
      id: 4,
      nome: "Linguiça Grelhada com Legumes",
      descricao: "Linguiça grelhada acompanhada de legumes.",
      ingredientes: ["Linguiça", "Cebola", "Tomate", "Pimentão"],
      modoPreparo: [
        "Grelhe a linguiça até dourar.",
        "Refogue os legumes com temperos a gosto.",
        "Sirva junto."
      ],
    }
  ];

  const receita = receitas.find(r => r.id === Number(id));

  if (!receita) {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Receita não encontrada</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.voltar}>◀ Voltar</Text>
        </TouchableOpacity>
        <BottomNav />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.voltar}>◀ Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.Title}>{receita.nome}</Text>
      </View>

      {/* Conteúdo */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Descrição */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Descrição</Text>
          <Text style={styles.descricao}>{receita.descricao}</Text>
        </View>

        {/* Ingredientes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ingredientes</Text>
          {receita.ingredientes.map((ing, idx) => (
            <Text key={idx} style={styles.ingredienteItem}>• {ing}</Text>
          ))}
        </View>

        {/* Modo de preparo */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Modo de Preparo</Text>
          {receita.modoPreparo.map((passo, idx) => (
            <Text key={idx} style={styles.ingredienteItem}>{idx + 1}. {passo}</Text>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: 60,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  voltar: {
    color: "#FF9F0A",
    fontSize: 16,
    marginRight: 15,
  },
  Title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    flexShrink: 1,
  },
  scroll: {
    width: "90%",
  },
  card: {
    backgroundColor: "#2c2c2c",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
  },
  ingredienteItem: {
    color: "#ddd",
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
});
