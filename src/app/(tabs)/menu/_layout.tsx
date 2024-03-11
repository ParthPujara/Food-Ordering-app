import { Stack } from "expo-router";

export default function MenuStach() {
  return (
    <Stack>
      <Stack.Screen name="menu" options={{ title: "Menu" }}></Stack.Screen>;
    </Stack>
  );
}
