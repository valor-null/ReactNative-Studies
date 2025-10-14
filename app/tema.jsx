import { Text, useColorScheme, View } from "react-native";

export default function Home() {
    const scheme = useColorScheme();        // "light" ou "dark"
    const isDark = scheme === "dark";

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: isDark ? "#000000" : "#fff" }}>
        <Text style={{ color: isDark ? "#fff" : "#000" }}>
            Tema atual: {isDark ? "Escuro" : "Claro"}
        </Text>
        <Text style={{ color: isDark ? "#aaa" : "#333" }}>
            (Este exemplo só lê o tema do sistema.)
        </Text>
        </View>
    );
    }
