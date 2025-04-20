// app/(tabs)/alarms/_layout.tsx
import { Stack } from 'expo-router';

export default function AlarmsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // Hide header for main alarms screen
        }} 
      />
      <Stack.Screen 
        name="addAlarm" 
        options={{ 
          presentation: 'modal',
          headerTitle: 'Add Alarm',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
    </Stack>
  );
}
