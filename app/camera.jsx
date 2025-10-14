import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Button, Image, Text, View } from "react-native";

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
      <View>
        <Image source={{ uri: photoUri }} style={{ width: 300, height: 400 }} />
        <Button title="Tirar outra" onPress={() => setPhotoUri(null)} />
      </View>
    );
  }

  // Senão, mostra a câmera + botão de captura
  return (
    <View>
      <CameraView
        ref={cameraRef}
        style={{ width: 300, height: 400 }} // tamanho mínimo pra aparecer
        facing="back"                       // câmera traseira
      />
      <Button title="Tirar foto" onPress={takePhoto} />
    </View>
  );
}
