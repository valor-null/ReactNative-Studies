import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);          // dados
  const [loading, setLoading] = useState(false); // carregando
  const [error, setError] = useState("");        // mensagem de erro

  async function carregar() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      setData(json);
    } catch (err) {
      const msg =
        err && typeof err.message === "string" ? err.message : "Erro desconhecido";
      setError(msg);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={e.erro}>
      <Button
        title={loading ? "Carregando..." : "Recarregar"}
        onPress={carregar}
        disabled={loading}
      />

      {loading ? <ActivityIndicator /> : null}

      {error ? (
        <View>
          <Text>{error}</Text>
          <Button title="Tentar de novo" onPress={carregar} />
        </View>
      ) : null}

      {!loading && !error && data.length === 0 ? (
        <Text>Sem dados.</Text>
      ) : null}

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.id}. {item.title}</Text>}
      />
    </View>
  );
}

const e = StyleSheet.create({
    erro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "ocean",
        padding: 10,
        paddingTop: 250
    }
})
