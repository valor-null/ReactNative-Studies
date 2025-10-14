// usamos const para guardar coisas que não serão reatribuídas durante a execução da função
// Cria um ESTADO chamado "valor" (começa vazio) e a função "setValor" para atualizar esse estado.
// Sempre que "setValor" for chamado, a tela re-renderiza mostrando o novo texto.

 // estados controlados dos inputs
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [fruta, setFruta] = useState("");

    const apertarbotao = () => {   // Exibe um alerta nativo do sistema.
         // 1º argumento: título da caixa de diálogo.
        // 2º argumento: mensagem.
        // `fruta || "(vazio)"` -> se `fruta` for string vazia (ou falsy),
        // mostra o texto "(vazio)". Caso contrário, mostra o conteúdo de `fruta`.
        Alert.alert("Fruta enviada", fruta || "(vazio)");
    }

return (
    <View style={s.container}>

    <TextInput
        placeholder="Digite uma fruta"
        value={fruta}
        onChangeText={setFruta}
        style={s.input}
    />

    <Pressable style={s.btn} onPress={apertarbotao}> 
    <Text style={s.btnText}>Envie a fruta</Text>
    </Pressable>


    </View>
);
}

const s = StyleSheet.create({
    container: {
    flex: 1,                   // ocupa a tela toda
    justifyContent: "center",  // centraliza verticalmente
    alignItems: "center",      // centraliza horizontalmente
    padding: 16,
},
    input: {
    width: 220,
    borderWidth: 1,
    borderColor: "#616161",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
},
    btn: {
        width: 220,
        backgroundColor: "#9370DB",
        borderRadius: 18,
        borderColor: "#170a2c",
        borderWidth: 1
    },
    btnText: { 
    color: "#fff", 
    fontWeight: "800",
    textAlign: "center",
    padding: 10,
    height: 40
    },
});
