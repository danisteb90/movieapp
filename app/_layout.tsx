import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  useEffect(() => {
    async function hideSystemBars() {
      await SystemUI.setBackgroundColorAsync("transparent");
    }
    hideSystemBars();
  }, []);

  return (
    <>
      {/* Configure the status bar */}
      <StatusBar style="light" hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
