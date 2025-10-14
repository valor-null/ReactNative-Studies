// app/index.js
import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);

  // CREATE
  const adicionar = () => {
    const t = texto.trim();
    if (!t) return;
    const novo = { id: Date.now().toString(), title: t, done: false };
    setItens((arr) => [novo, ...arr]);
    setTexto("");
  };

  // UPDATE
  const alternarDone = (id) => {
    setItens((arr) =>
      arr.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  };

  // DELETE
  const remover = (id) => {
    setItens((arr) => arr.filter((it) => it.id !== id));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.done ? "[x] " : "[ ] "}{item.title}</Text>

      <Pressable onPress={() => alternarDone(item.id)}>
        <Text>{item.done ? "Desmarcar" : "Marcar feito"}</Text>
      </Pressable>

      <Pressable onPress={() => remover(item.id)}>
        <Text>Excluir</Text>
      </Pressable>
    </View>
  );

  return (
    <View>
      <Text>CRUD local (JS)</Text>

      <TextInput
        placeholder="Novo item..."
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
