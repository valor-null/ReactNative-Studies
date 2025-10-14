// Eu nomei esse componente como Teste.tsx
// Um exemplo de um componente
import { StyleSheet, Text, View } from "react-native"; // Aqui eu importei View e Text
// View seria a "Div" usada no HTML puro 
// qualquer texto na tela precisa estar dentro de um Text
// import para usar o stylesheat

// Cria um componente que recebe uma prop chamada "nome"
function SeuNome ({ nome, style }) {
	return <Text style={texto.prop}> Olá, {nome}! </Text>;
}

// Componente Teste (export default) RECEBE a prop "nome" do pai
// e repassa para o filho SeuNome
export default function Teste({nome}) {
  return (
    <View style={texto.container}> 
    <Text style={texto.title}> Qual o seu nome?</Text>
    <SeuNome nome={nome} style={texto.prop} /> 
    </View>
  );
}

const texto = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 200
  },
  title:{
    fontSize: 22,
    fontWeight: 800,
    color: "white",
  },
  prop:{
    fontSize: 20,
    fontWeight: 400,
    color: "white",
  }
});