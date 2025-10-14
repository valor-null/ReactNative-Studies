import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0);
  const [msgMount, setMsgMount] = useState(""); // mensagem quando a tela abre
  const [msgCount, setMsgCount] = useState(""); // mensagem quando count muda

  // Roda 1x ao abrir a tela
  useEffect(() => {
    setMsgMount("A tela abriu!");
  }, []);

  // Roda toda vez que 'count' mudar
  useEffect(() => {
    setMsgCount(`count mudou para: ${count}`);
  }, [count]);

  return (
    <View style={e.container}>
      <Text style={e.text}>{msgMount}</Text>
      <Text style={e.text}>{msgCount}</Text>

      <Text style={e.text}>Contagem: {count}</Text>

      <Pressable style={e.btn} onPress={() => setCount(c => c + 1)}>
        <Text style={e.text} >+1</Text>
      </Pressable>

      <Pressable style={e.btn2} onPress={() => setCount(0)}>
        <Text style={e.text}>Zerar</Text>
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
        backgroundColor: "rosybrown",
        padding: 10,
        margin: 10
    },
    btn2: {
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        color: "white"
    },
    text: {
        fontSize: 35
    }
})


