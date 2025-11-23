// app/index.tsx
import { Asset } from "expo-asset";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Não deixa o splash sumir sozinho
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // 🔥 Precarrega a imagem do topo do Splash
        await Asset.fromModule(
          require("../assets/images/topsplash.png")
        ).downloadAsync();
      } catch (e) {
        console.log("Erro ao carregar imagem:", e);
      } finally {
        // Libera o splash da tela
        await SplashScreen.hideAsync();

        // Agora vai para a tela Splash real
        router.replace("/splash");
      }
    }

    prepare();
  }, []);

  return null; // Não renderiza nada aqui
}
