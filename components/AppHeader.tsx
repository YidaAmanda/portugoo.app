import { Image, Text, View } from "react-native";
import { styles } from "../styles/appHeader.styles";

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Portugoo</Text>
    </View>
  );
}
