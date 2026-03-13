//import { useState } from "react";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";
import { global } from "../../styles/global";
import { sign } from "../../styles/sign.styles";
import { colors } from "../../styles/theme";

export default function Index() {
  //const [texto, setTexto] = useState("");
  return (
    <View style={global.main}>
      <BackButton />
      <AppHeader />

      <View style={sign.form}>
        <Text style={sign.title}>Conecte-se</Text>

        <TextInput
          style={sign.input}
          placeholder="Login"
          placeholderTextColor={colors.textDark}
          /*value={texto}
          onChangeText={setTexto}*/
        />

        <TextInput
          style={sign.input}
          placeholder="Senha"
          placeholderTextColor={colors.textDark}
          //secureTextEntry={true}
        />
      </View>

      {/*<Text>Você digitou: {texto}</Text>*/}

      <Pressable
        onPress={() => router.push("/home")}
        style={({ pressed }) => [
          global.confButton,
          pressed && global.confButtonPressed,
        ]}
      >
        <Text style={global.confButtonText}>Conecte</Text>
      </Pressable>
    </View>
  );
}
