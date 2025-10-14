// Um exemplo de uma pagina inicial usando o componente acima

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../src/components/Input";
import Teste from "../src/components/Teste";


export default function Home() {
    return (
            <SafeAreaView style={estilo.tela}>
            <>
            <Teste nome="Clara" />
            <Input />
            </>
            </SafeAreaView>
    );
}

// aqui eu criei uma const chamada estilo que tem tela dentro e chamei tela pro SafeAreaView 
const estilo = StyleSheet.create({
    tela: {
        flex: 1, 
        padding: 100,
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: "#FFCFCF"
    }
});
