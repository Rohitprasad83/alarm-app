import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-2">
      <Text className="text-2xl font-bold">Welcome to the Alarm App !</Text>
      <Button title="Login" onPress={() => router.replace("/(tabs)/alarms")} />
    </View>
  );
}
