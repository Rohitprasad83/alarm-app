import {Stack, useRouter} from "expo-router";
import {Pressable, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import PhosphorIcon from "@/components/PhosphorIcon";
import CustomSwitch from "@/components/CustomSwitch";
import {useState} from "react";

export default function Reminders() {

    const router = useRouter();

    const [isLowVolume, setIsLowVolume] = useState(true);
    const [isWeekDaysAlarm, setIsWeekDaysAlarm] = useState(true);
    const [isWriteGoalOfTheDay, setIsWriteGoalOfTheDay] = useState(true);
    const [isUpcomingVacation, setIsUpcomingVacation] = useState(true);

    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: '#EBEBEB'}}>
                <Stack.Screen options={{title: 'Add Alarm', headerShown: false}}/>
                <ScrollView style={{flex: 1, gap: 16, padding: 16, backgroundColor: '#EBEBEB'}}>
                    <View className="flex gap-4">
                        <View className="flex-1 flex-row items-center justify-between">
                            <View>
                                <Pressable onPress={() => router.back()}>
                                    <PhosphorIcon name={"CaretLeft"} size={24} weight={"bold"}/>
                                </Pressable>
                            </View>
                            <View>
                                <Text className="text-gray-600 text-lg font-semibold">Reminders</Text>
                            </View>
                            <View>
                                <PhosphorIcon name={"TrashSimple"} size={24} weight={"transparent"}/>
                            </View>
                        </View>

                        <View className="gap-2 mt-4">
                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Low volume</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">This will automatically stop the white noise from playing after the specific amount of time you set.</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isLowVolume} setIsEnabled={setIsLowVolume}/>
                                </View>
                            </View>

                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Week days alarm</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">This will automatically stop the white noise from playing after the specific amount of time you set.</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isWeekDaysAlarm} setIsEnabled={setIsWeekDaysAlarm}/>
                                </View>
                            </View>

                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Write goal of the day</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">This will automatically stop the white noise from playing after the specific amount of time you set.</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isWriteGoalOfTheDay} setIsEnabled={setIsWriteGoalOfTheDay}/>
                                </View>
                            </View>

                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Upcoming vacation</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">This will
                                        automatically stop the white noise from playing after the specific amount of
                                        time you set.</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isUpcomingVacation} setIsEnabled={setIsUpcomingVacation}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}