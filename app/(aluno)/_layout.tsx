import {
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { colors } from "../../styles/theme";

SplashScreen.preventAutoHideAsync();

type TabIconProps = {
  routeName: string;
  focused: boolean;
};

function AnimatedTabIcon({ routeName, focused }: TabIconProps) {
  const scaleAnim = useRef(new Animated.Value(focused ? 1.1 : 1)).current;
  const opacityAnim = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: focused ? 1.1 : 1,
        friction: 6,
        tension: 120,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: focused ? 1 : 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused, scaleAnim, opacityAnim]);

  const iconColor = focused ? colors.primary : colors.textLight;

  const renderIcon = () => {
    switch (routeName) {
      case "home":
        return <Feather name="home" size={22} color={iconColor} />;
      case "lessons":
        return <Feather name="bookmark" size={22} color={iconColor} />;
      case "stats":
        return (
          <Ionicons name="stats-chart-outline" size={22} color={iconColor} />
        );
      default:
        return <Feather name="user" size={22} color={iconColor} />;
    }
  };

  return (
    <View style={styles.iconContainer}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {renderIcon()}
      </Animated.View>

      <Animated.View style={[styles.indicator, { opacity: opacityAnim }]} />
    </View>
  );
}

export default function TabsLayout() {
  const [loaded, error] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => (
          <AnimatedTabIcon routeName={route.name} focused={focused} />
        ),
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="lessons" options={{ title: "Lições" }} />
      <Tabs.Screen name="stats" options={{ title: "Estatísticas" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    height: 68,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: {
    width: 56,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  indicator: {
    width: 18,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
