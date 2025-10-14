import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
return (
    
    <View style={h.container}>
    <Image
    source={require("../assets/gif/home.gif")} // local aonde ta a imagem
    style={h.logo} 
    resizeMode="contain" // “encaixe a imagem inteira dentro do retângulo sem cortar mantando a proporção 
    accessibilityLabel="Garota mexendo no computador" // texto de acessibilidade
    />

    <Text style={h.text}>Aonde você quer ir?</Text>

    <View style={h.linksRow}>
    <Link style={h.link} href="/home">Home</Link>
    <Link style={h.link} href="/camera">Camera</Link>
    <Link style={h.link} href="/flast">Flast</Link>
    <Link style={h.link} href="/axio">Axios</Link>
    <Link style={h.link} href="/erro">error</Link>
    <Link style={h.link} href="/link">Liking</Link>
    <Link style={h.link} href="/effect">Effect</Link>
    <Link style={h.link} href="/async">AsyncStorage</Link>
    <Link style={h.link} href="/crud">Crud(Local)</Link>
    <Link style={h.link} href="/tema">Tema Claro/Escuro</Link>
    <Link style={h.link} href="/lang">i18n (PT/EN)</Link>
    <Link style={h.link} href="/firebase">Firebase Auth</Link>
    <Link style={h.link} href="/fire">FireStore</Link>
    </View>
    </View>
);
}

const h = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#181322",
    },
    link: {
        fontSize: 22,
        fontWeight: 600,
        color: "#664eeb",
        marginRight: 12,      
        marginBottom: 8, 
        padding: 10,
        height: 50,
        borderRadius: 18,
        border: "white",
        backgroundColor: "#000000",
        borderWidth: 1,
        borderColor: "#000000",
    },
    linksRow: {
    flexDirection: "row", 
    flexWrap: "wrap",     
    justifyContent: "center",
    width: "100%",
    },
    logo: {
        width: 300,
        height: 350
    },
    text: {
        marginBottom: 10,
        padding: 10,
        fontSize: 22,
        fontWeight: 800,
        color: "#da7bff",
    }
})
