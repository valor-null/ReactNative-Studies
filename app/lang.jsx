import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function Home() {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("hello")}</Text>
      <Text>{t("email")}: exemplo@teste.com</Text>
      <Text>{t("password")}: ******</Text>
      <Text>{t("login")}</Text>
    </View>
  );
}
