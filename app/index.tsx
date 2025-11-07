// app/index.tsx
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/splash");
    }, 100); // 100ms garante que o Root Layout já montou
    return () => clearTimeout(timer);
  }, []);

  return null; // nada é renderizado
}
