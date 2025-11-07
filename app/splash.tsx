// app/splash.tsx

// Importa o hook useRouter do expo-router para navegação entre telas
import { useRouter } from "expo-router";

// Importa hooks do React para efeitos colaterais e referências
import { useEffect, useRef } from "react";

// Importa componentes e API de animação do React Native
import { Animated, StyleSheet, View } from "react-native";

// Define o componente Splash
export default function Splash() {
  // Inicializa o router para controlar a navegação
  const router = useRouter();

  // Cria referências de animação usando useRef
  // fadeAnim: controla a opacidade da logo (0 = invisível, 1 = visível)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // scaleAnim: controla a escala da logo (0.8 = menor que o tamanho original)
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  // moveAnim: controla a posição vertical da logo (translateY)
  const moveAnim = useRef(new Animated.Value(20)).current;

  // useEffect: executa efeitos colaterais após o componente ser montado
  useEffect(() => {
    // Executa várias animações em paralelo
    Animated.parallel([
      // Anima a opacidade de 0 para 1 em 1.2 segundos
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true, // melhor desempenho
      }),

      // Anima a escala da logo de 0.8 para 1 com efeito de mola
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4, // controla a "rigidez" da mola
        useNativeDriver: true,
      }),

      // Anima a posição vertical da logo de 20 para 0 em 1.2 segundos
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start(); // inicia a animação

    // Configura um timer para navegar para a tela de login após 2.5 segundos
    const timer = setTimeout(() => {
      router.replace("/login"); // substitui a tela atual pela login
    }, 2500);

    // Limpa o timer se o componente for desmontado antes do tempo acabar
    return () => clearTimeout(timer);
  }, []); // [] significa que o efeito roda apenas uma vez após o mount

  // Renderiza a tela
  return (
    <View style={styles.container}>
      {/* Animated.Image permite animar propriedades da imagem */}
      <Animated.Image
        source={require("../assets/images/logo.png")} // caminho da logo
        style={[
          styles.logo, // estilo base da imagem
          {
            opacity: fadeAnim, // anima a opacidade
            transform: [
              { scale: scaleAnim }, // anima a escala
              { translateY: moveAnim }, // anima a posição vertical
            ],
          },
        ]}
        resizeMode="contain" // mantém proporção da imagem
      />
    </View>
  );
}

// Define os estilos do componente
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: "#fff", // fundo branco
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
  },

  // Estilo da logo
  logo: {
    width: 250, // largura da logo
    height: 250, // altura da logo
  },
});
