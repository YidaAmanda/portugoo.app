import { StyleSheet } from "react-native";
import { color } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
    color: color.textDark,
  },
});
