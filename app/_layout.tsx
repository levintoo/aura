import { Stack } from "expo-router";

export default function Index() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}
