import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";

// Instale antes: npm i axios

export default function App() {
  const [dados, setDados] = useState([]);     // lista vinda da API
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const carregar = async () => {
    try {
      setCarregando(true);
      setErro("");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setDados(res.data); // <- a resposta vem em res.data
    } catch (e) {
      const msg = e?.response?.status
        ? `Erro ${e.response.status}`
        : "Falha de rede";
      setErro(msg);
    } finally {
      setCarregando(false);
    }
  };

  // Busca ao montar o componente (roda 1x)
  useEffect(() => {
    carregar();
  }, []);

  return (
    <View>
      <Button title="Recarregar" onPress={carregar} />

      {carregando && <ActivityIndicator />}
      {erro ? <Text>{erro}</Text> : null}

      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.id}. {item.title}</Text>}
        ListEmptyComponent={!carregando && !erro ? <Text>Sem dados.</Text> : null}
        refreshing={carregando}   // p/ "puxar para atualizar"
        onRefresh={carregar}
      />
    </View>
  );
}
