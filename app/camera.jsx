import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";


// 1) Instale antes: npx expo install expo-camera

export default function App() {
  // Permissão da câmera
  const [permission, requestPermission] = useCameraPermissions();

  // Referência para chamar takePictureAsync()
  const cameraRef = useRef(null);

  // Onde guardo a foto tirada (visível na UI)
  const [photoUri, setPhotoUri] = useState(null);

  // Enquanto verifica permissão
  if (!permission) {
    return <Text>Checando permissão da câmera...</Text>;
  }

  // Se ainda não foi concedida
  if (!permission.granted) {
    return (
      <View>
        <Text>Precisamos da sua permissão para usar a câmera.</Text>
        <Button title="Conceder permissão" onPress={requestPermission} />
      </View>
    );
  }

  // Tirar foto
  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) setPhotoUri(photo.uri);
  };

  // Se já tem foto, mostra a imagem
  if (photoUri) {
    return (
      <View style={cam.container}>
        <Image
        source={require("../assets/gif/camera.png")} 
        style={cam.logo}
        resizeMode="contain" 
        /> 
        
        <Image source={{ uri: photoUri }} style={{ width: 300, height: 300, borderRadius: 24 }} />
        <Pressable style={cam.btN} onPress={() => setPhotoUri(null)  }>
          <Text style={cam.text}>Tirar outra</Text>
        </Pressable>
      </View>
    );
  }

  // Senão, mostra a câmera + botão de captura
  return (
    <View style={cam.container}>
        <Image
        source={require("../assets/gif/camera.png")} 
        style={cam.logo}
        resizeMode="contain" 
        /> 
      <CameraView
        ref={cameraRef}
        style={{ width: 300, height: 300, borderRadius: 24 }} // tamanho mínimo pra aparecer
        facing="back"                       // câmera traseira
      />
      <Pressable onPress={takePhoto} style={cam.btN}>
        <Text style={cam.text}> Tirar foto </Text>
      </Pressable>

    </View>
  );
}

const cam = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181322",
  },
  btN: {
    width: 300,
    height: 40,
    margin: 10,
    backgroundColor: "#000000",
    borderRadius: 12,
    padding: 4
  },
  text: {
    textAlign: "center",
    color: "#664eeb",
    fontSize: 22,
    fontWeight: 700,
  },
  logo: {
    width: 150,
    height: 100
  }
})