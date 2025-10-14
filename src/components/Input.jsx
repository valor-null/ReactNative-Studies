// usamos const para guardar coisas que não serão reatribuídas durante a execução da função
// Cria um ESTADO chamado "valor" (começa vazio) e a função "setValor" para atualizar esse estado.
// Sempre que "setValor" for chamado, a tela re-renderiza mostrando o novo texto.

 // estados controlados dos inputs
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [nome, setNome] = useState("");

    const apertarbotao = () => {   // Exibe um alerta nativo do sistema.
         // 1º argumento: título da caixa de diálogo.
        // 2º argumento: mensagem.
        // `fruta || "(vazio)"` -> se `fruta` for string vazia (ou falsy),
        // mostra o texto "(vazio)". Caso contrário, mostra o conteúdo de `fruta`.
        Alert.alert("Prazer" , nome || "(vazio)");
    }

return (
    <View style={s.container}>
    <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={s.input}
    />

    <Pressable style={s.btn} onPress={apertarbotao}> 
    <Text style={s.btnText}>Me envie seu nome</Text>
    </Pressable>
    </View>
);
}

const s = StyleSheet.create({
    container: {
    flex: 1,                   // ocupa a tela toda
    justifyContent: "flex-start",  // centraliza verticalmente
    alignItems: "center",      // centraliza horizontalmente
},
    input: {
    width: 220,
    borderWidth: 1,
    borderColor: "#7082b4",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#7082b4",
    padding: 40
},
    btn: {
        width: 220,
        backgroundColor: "#0a0418",
        borderRadius: 8,
        borderColor: "#000000",
        borderWidth: 2,
        margin: 15
    },
    btnText: { 
    color: "#fff", 
    fontWeight: "800",
    textAlign: "center",
    padding: 10,
    height: 40
    },
});
