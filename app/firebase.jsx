// app/index.js
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { auth } from "../src/services/firebase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [userEmail, setUserEmail] = useState("");  // mostra quem entrou
  const [msg, setMsg] = useState("");              // mensagens simples

  const entrar = async () => {
    setMsg("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), senha);
      setUserEmail(cred.user?.email ?? "");
      setMsg("Login ok.");
    } catch (e) {
      setUserEmail("");
      setMsg("Erro ao entrar.");
    }
  };

  const sair = async () => {
    setMsg("");
    try {
      await signOut(auth);
      setUserEmail("");
      setMsg("Saiu da conta.");
    } catch {
      setMsg("Erro ao sair.");
    }
  };

  return (
    <View>
      <Text>Firebase Auth</Text>
      {msg ? <Text>{msg}</Text> : null}

      {userEmail ? (
        <View>
          <Text>Logado como: {userEmail}</Text>
          <Pressable onPress={sair}><Text>Sair</Text></Pressable>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <Pressable onPress={entrar}><Text>Entrar</Text></Pressable>
        </View>
      )}
    </View>
  );
}
