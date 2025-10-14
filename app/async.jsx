import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  // Carrega 1x quando a tela abre
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem("count"); // vem como string ou null
        if (saved != null) {
          const n = parseInt(saved, 10);
          if (!Number.isNaN(n)) {
            setCount(n);
            setMsg("Valor carregado do storage.");
          }
        } else {
          setMsg("Nenhum valor salvo.");
        }
      } catch {
        setMsg("Erro ao carregar.");
      }
    })();
  }, []);

  // Salvar
  const salvar = async () => {
    try {
      await AsyncStorage.setItem("count", String(count));
      setMsg("Salvo!");
    } catch {
      setMsg("Erro ao salvar.");
    }
  };

  // Remover
  const limpar = async () => {
    try {
      await AsyncStorage.removeItem("count");
      setMsg("Removido do storage.");
    } catch {
      setMsg("Erro ao remover.");
    }
  };

  return (
    <View style={e.container}>
      <Text style={e.text}>Contagem: {count}</Text>
      <Text style={e.text}>{msg}</Text>

      <Pressable style={e.btn} onPress={() => setCount((c) => c + 1)}>
        <Text style={e.text}>+1</Text>
      </Pressable>

      <Pressable style={e.btn2} onPress={salvar}>
        <Text style={e.text}>Salvar no AsyncStorage</Text>
      </Pressable>

      <Pressable style={e.btn3} onPress={limpar}>
        <Text style={e.text}>Remover do AsyncStorage</Text>
      </Pressable>
    </View>
  );
}

const e = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "ocean"
    },
    btn : {
        backgroundColor: "green",
        padding: 10,
        margin: 10
    },
    btn2: {
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
        color: "white"
    },
    btn3: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        color: "white"
    },
    text: {
        fontSize: 35
    }
})
