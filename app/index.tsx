import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { global } from "../styles/global";

export default function Index() {
  return (
    <View style={global.main}>
      <Image
        source={require("@/assets/images/logoN.png")}
        style={{ width: 250, height: 250, marginTop: 100 }}
      />

      <Text
        style={{
          marginBottom: 100,
          fontFamily: "Lexend_400Regular",
          fontSize: 16,
        }}
      >
        Estudar português ficou mais simples
      </Text>

      <Pressable
        onPress={() => router.push("/auth/signin")}
        style={({ pressed }) => [
          global.confButton,
          pressed && global.confButtonPressed,
        ]}
      >
        <Text style={global.confButtonText}>Conecte-se</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/auth/signup")}
        style={({ pressed }) => [
          global.confButton,
          pressed && global.confButtonPressed,
        ]}
      >
        <Text style={global.confButtonText}>Cadastre-se</Text>
      </Pressable>
    </View>
  );
}
