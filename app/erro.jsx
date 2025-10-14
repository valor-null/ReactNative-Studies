import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);     // dados de sucesso
  const [loading, setLoading] = useState(false); // estado de carregando
  const [error, setError] = useState("");   // mensagem de erro (ou "")

  async function carregar() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      if (!res.ok) throw new Error("HTTP " + res.status); // erro de servidor
      const json = await res.json();
      setData(json); // sucesso
    } catch (e) {
      setData([]);
      setError(e.message === "Failed to fetch" ? "Falha de rede" : String(e.message));
    } finally {
      setLoading(false); // sempre volta a false
    }
  }

  useEffect(() => { carregar(); }, []);

  return (
    <View style={{ padding: 16 }}>
      <Button title="Recarregar" onPress={carregar} disabled={loading} />

      {loading && <ActivityIndicator />}              {/* LOADING */}
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}  {/* ERRO */}
      {!loading && !error && data.length === 0 && <Text>Sem dados.</Text>} {/* VAZIO */}

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.id}. {item.title}</Text>}
      />
    </View>
  );
}
