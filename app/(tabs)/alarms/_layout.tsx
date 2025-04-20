import { Stack } from 'expo-router';

export default function AlarmsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false // Hide header by default
      }}
    >
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false // Explicitly hide header for index
        }}
      />
      <Stack.Screen 
        name="addAlarm"
        options={{
          headerShown: true, // Show header for add alarm screen
          presentation: 'modal',
          headerTitle: 'Add Alarm'
        }}
      />
    </Stack>
  );
}
