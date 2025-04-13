import {StyleSheet, Text, ScrollView, StatusBar, Pressable, View} from 'react-native';
import { useRouter } from 'expo-router';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PhosphorIcon from "@/components/PhosphorIcon";

export default function Alarms() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-grey-500" edges={['top']}>
                <ScrollView className="px-4 mt-4">
                    <View className="flex-row justify-between items-center">
                        <Pressable className="bg-gray-800 px-4 py-4 rounded-full flex-row items-center justify-center space-x-2 w-32">
                            <Text className="text-gray-100 text-center font-bold">Premium </Text>
                            <PhosphorIcon name="GreaterThan" color={"white"} size={18} weight="bold" />
                        </Pressable>

                        <PhosphorIcon name="DotsThreeVertical" size={36} weight="bold"/>
                    </View>

                    <View className="bg-white p-4 rounded-xl flex-row items-center justify-between mt-4">
                        <View className="gap-2">
                        <Text className="text-gray-600 font-bold">My Goal of the day</Text>
                        <Text className="text-gray-500">Finish the presentations today</Text>
                        </View>
                        <View className="bg-gray-200 p-2 rounded-full">
                            <PhosphorIcon name="PencilSimple" size={24} weight="bold"/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}