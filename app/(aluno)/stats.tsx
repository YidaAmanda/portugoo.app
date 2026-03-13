import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/theme";

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas</Text>
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
  },
});
