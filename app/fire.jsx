import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { db } from "../src/services/firebase";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);

  // LISTAR em tempo real
  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItens(rows);
    });
    return unsub;
  }, []);

  // CRIAR
  const adicionar = async () => {
    const t = texto.trim();
    if (!t) return;
    await addDoc(collection(db, "todos"), {
      title: t,
      createdAt: serverTimestamp(), // ordena no servidor
    });
    setTexto("");
  };

  // EXCLUIR
  const remover = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title || "(sem título)"}</Text>
      <Pressable onPress={() => remover(item.id)}>
        <Text>Excluir</Text>
      </Pressable>
    </View>
  );

  return (
    <View>
      <Text>Firestore (mínimo)</Text>

      <TextInput
        placeholder="Novo todo..."
        value={texto}
        onChangeText={setTexto}
      />

      <Pressable onPress={adicionar}>
        <Text>Adicionar</Text>
      </Pressable>

      <FlatList
        data={itens}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Sem itens.</Text>}
      />
    </View>
  );
}
