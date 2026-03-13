import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push("../auth/signup")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#2D464D" : "#97BAAB",
          opacity: pressed ? 0.8 : 1,
          width: 310,
          height: 80,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        })}
      >
        <Image
          source={require("@/assets/images/open-book-icon.png")}
          style={{ position: "absolute", left: 0, width: 64, height: 78 }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "600",
          }}
        >
          Nova Lição
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: colors.textDark,
  },
});
