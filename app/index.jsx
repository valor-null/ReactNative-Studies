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
