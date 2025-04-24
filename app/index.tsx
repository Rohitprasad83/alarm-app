import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-2">
      <Text className="text-2xl text-gray-600 font-bold">Welcome to the Alarm App !</Text>
        <Pressable
            className="bg-gray-600 px-4 py-4 rounded-full flex-row items-center justify-center space-x-2 w-32"
            onPress={() => router.replace("/(tabs)/alarms")}
        >
            <Text className="text-gray-100 text-center font-bold">LOGIN</Text>
        </Pressable>
    </View>
  );
}
