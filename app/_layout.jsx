import { View, Text, LogBox } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <Stack
      // To remove white lines from top and bottom
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
