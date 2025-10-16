
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App(){
    // lista inicial
    const [frutas, setFrutas] = useState([
        "Maça",
        "Banana",
        "Laranja",
        "Uva",
        "Manga",
        "Lichia",
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
    const renderItem = ({ item }) => <Text style={f.h2}>- {item}</Text>;

return (
    <View style={f.container}>

        <Image
        source={require("../assets/gif/strawberry.png")} // local aonde ta a imagem
        style={f.logo}
        resizeMode="contain" // “encaixe a imagem inteira dentro do retângulo sem cortar mantando a proporção 
        accessibilityLabel="Garota mexendo no computador" // texto de acessibilidade
        />

        <Text style={f.h1}>Lista de Frutas (FlatList) </Text>

        <FlatList
        style={f.lista}
        data={frutas}                         // a fonte de dados
        renderItem={renderItem}               // como desenhar cada linha
        keyExtractor={(item) => item}         // chave única (aqui uso o próprio texto)
        ListEmptyComponent={<Text style={f.h2} >Sem itens.</Text>}
        refreshing={refreshing}               // mostra o estado de "atualizando"
        onRefresh={onRefresh}                 // puxa de cima para atualizar
        />

        <Pressable style={f.btn} onPress={() => setFrutas([])}> 
            <Text style={f.text}> Limpar lista </Text> 
        </Pressable>

    </View>
    );
}

const f = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 120,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#181322",
    },
     btn: {
        borderRadius: 10,
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 2,
    },
    text: {
        color: "#db3264",
        textAlign: "center",
        padding: 20,
        fontWeight: 700,
        fontSize: 15
    },
    h1: {
        color: "#ff268b",
        fontSize: 25,
        width: 290,
        fontWeight: 700,
    },
    lista: {
        fontSize: 25,
        padding: 20,
        width: 300,
        margin: 10,
    },
    h2: {
        textAlign: "left",
        fontSize: 30,
        color: "#ff22cf",
    }, 
    logo: {
        width: 200,
        height: 200
    }
})
