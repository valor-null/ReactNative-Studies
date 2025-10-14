import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Home() {
return (
    <View style={h.container}>
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
    </View>
);
}

const h = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFCFCF"
    },
    link: {
        fontSize: 22,
        fontWeight: 800
    }
})
