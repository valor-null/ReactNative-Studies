// Um exemplo de uma pagina inicial usando o componente acima

import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../src/components/Input";
import Teste from "../src/components/Teste";


export default function Home() {
    return (
            <SafeAreaView style={estilo.tela}>
            <View>
            <Teste nome="Eu me chamo Valéria, Prazer! :D"/>

            <Image
            source={require("../assets/gif/computer.png")} 
            style={estilo.logo} 
            resizeMode="contain" 
            accessibilityLabel="Garota mexendo no computador" 
            />

            <Input />
            </View>
            </SafeAreaView>
    );
}

// aqui eu criei uma const chamada estilo que tem tela dentro e chamei tela pro SafeAreaView 
const estilo = StyleSheet.create({
    tela: {
        flex: 1, 
        padding: 20,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#181322",
    },
    logo: {
        width: 400,
        height: 200
    },
});
