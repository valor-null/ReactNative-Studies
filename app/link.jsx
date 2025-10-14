import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const abrirSite = () => {
    Linking.openURL("https://http.cat/status/404"); // abre no navegador
  };

  return (
    <View style={cat.container}> 
        <Pressable onPress={abrirSite}> 
        <Text style={cat.tex}> Abrir site </Text>
        </Pressable>
    </View>

  );
}

const cat = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tex:{
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        width: 250,
        borderRadius: 18,
        height: 35
    }
});