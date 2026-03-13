import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const global = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  confButton: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    width: 300,
    padding: 10,
    borderRadius: 8,
  },
  confButtonPressed: {
    opacity: 0.8,
  },
  confButtonText: {
    fontSize: 18,
    color: colors.textLight,
  },
});
