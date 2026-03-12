import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import AppHeader from "../../components/AppHeader";
import BackButton from "../../components/BackButton";
import { global } from "../../styles/global";
import { sign } from "../../styles/sign.styles";
import { color } from "../../styles/theme";

export default function Index() {
  return (
    <View style={global.main}>
      <BackButton />
      <AppHeader />

      <View style={sign.form}>
        <Text style={sign.title}>Cadastre-se</Text>

        <TextInput
          style={sign.input}
          placeholder="Nome"
          placeholderTextColor={color.textDark}
        />

        <TextInput
          style={sign.input}
          placeholder="Login"
          placeholderTextColor={color.textDark}
        />

        <TextInput
          style={sign.input}
          placeholder="Senha"
          placeholderTextColor={color.textDark}
          //secureTextEntry={true}
        />

        <TextInput
          style={sign.input}
          placeholder="Confirmar Senha"
          placeholderTextColor={color.textDark}
          //secureTextEntry={true}
        />

        <Pressable
          onPress={() => router.push("/home")}
          style={({ pressed }) => [
            global.confButton,
            pressed && global.confButtonPressed,
          ]}
        >
          <Text style={global.confButtonText}>Cadastre</Text>
        </Pressable>
      </View>
    </View>
  );
}
