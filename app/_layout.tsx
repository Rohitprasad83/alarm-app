import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
      <Tabs>
        <Tabs.Screen
            name="alarms"
            options={{
              title: 'Alarms',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="alarm" size={size} color={color} />
              ),
            }}
        />
        <Tabs.Screen
            name="reports"
            options={{
              title: 'Reports',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="bar-chart" size={size} color={color} />
              ),
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
              title: 'Settings',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
              ),
            }}
        />
      </Tabs>
  );
}

