import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable } from "react-native";
export default function BackButton() {
  return (
    <Pressable
      style={{ marginLeft: 20, alignSelf: "flex-start" }}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={28} color="#2D464D" />
    </Pressable>
  );
}
