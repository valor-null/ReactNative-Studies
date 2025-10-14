
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function App(){
    // lista inicial
    const [frutas, setFrutas] = useState([
        "Maça",
        "Banana",
        "Laranja",
        "Uva",
        "Manga",
    ]);

      // demonstração de "puxar p/ atualizar"
        const [refreshing, setRefreshing] = useState(false);
        const onRefresh = () => {
    setRefreshing(true);
    // exemplo simples: inverte a lista (simula atualização)
    setTimeout(() => {
        setFrutas((arr) => [...arr].reverse());
        setRefreshing(false);
    }, 800);
};

  // como desenhar cada item
    const renderItem = ({ item }) => <Text>- {item}</Text>;

return (
    <View style={f.container}>
        <Text>Minhas frutas:</Text>

        <FlatList
        data={frutas}                         // a fonte de dados
        renderItem={renderItem}               // como desenhar cada linha
        keyExtractor={(item) => item}         // chave única (aqui uso o próprio texto)
        ListEmptyComponent={<Text>Sem itens.</Text>}
        refreshing={refreshing}               // mostra o estado de "atualizando"
        onRefresh={onRefresh}                 // puxa de cima para atualizar
        />

        <Button
        title="Limpar lista"
        onPress={() => setFrutas([])}         // zera a lista para ver o Empty
        />
    </View>
    );
}

const f = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 100,
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: "#FFCFCF"
    }
})
