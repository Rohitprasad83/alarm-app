import {Stack, useRouter} from "expo-router";
import {Pressable, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import PhosphorIcon from "@/components/PhosphorIcon";
import CustomSwitch from "@/components/CustomSwitch";
import {useState} from "react";
import SettingsPageCatSvg from "@/components/SettingsPageCatSvg";

export default function TalkingGuide() {

    const router = useRouter();

    const [isMotivate, setIsMotivate] = useState(true);
    const [isGoalAsAlarm, setIsGoalAsAlarm] = useState(true);

    const [guide, setGuide] = useState("Sunny");

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
                                <Text className="text-gray-600 text-lg font-semibold">Talking Guide</Text>
                            </View>
                            <View>
                                <PhosphorIcon name={"TrashSimple"} size={24} weight={"transparent"}/>
                            </View>
                        </View>
                        <View className="flex gap-2">
                            <View className="flex-1 items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Your guide</Text>
                                    <Text className="text-sm font-normal text-gray-500">This will automatically stop the
                                        white noise from playing after the specific amount of time you set.</Text>
                                </View>
                                <View
                                    className="flex-1 flex-row items-center justify-center w-full gap-2">
                                    <Pressable
                                        className={`flex-1 w-1/2 bg-gray-200 rounded-3xl p-7 items-center justify-center gap-2 ${guide === 'Sunny' ? 'border-2 border-gray-600' : ''}`}
                                        onPress={() => setGuide("Sunny")}
                                    >
                                        <SettingsPageCatSvg/>
                                        <Text className="text-base font-semibold text-gray-700">Sunny</Text>
                                    </Pressable>
                                    <Pressable
                                        className={`flex-1 w-1/2 bg-gray-200 rounded-3xl p-7 items-center justify-center gap-2 ${guide === 'Milly' ? 'border-2 border-gray-600' : ''}`}
                                        onPress={() => setGuide("Milly")}
                                    >
                                        <SettingsPageCatSvg/>
                                        <Text className="text-base font-semibold text-gray-700">Milly</Text>
                                    </Pressable>
                                </View>
                            </View>

                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Motivate me to wake up</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">Motivate me to wake me whenever I use  snooze</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isMotivate} setIsEnabled={setIsMotivate}/>
                                </View>
                            </View>

                            <View
                                className="flex flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 gap-4">
                                <View className="flex-1 gap-2">
                                    <Text className="text-base font-semibold text-gray-700">Use goal as alarm</Text>
                                    <Text className="text-sm font-normal text-gray-500 text-wrap">This will automatically stop the white noise from playing after the specific amount of time you set.</Text>
                                </View>
                                <View className="flex w-max">
                                    <CustomSwitch isEnabled={isGoalAsAlarm} setIsEnabled={setIsGoalAsAlarm}/>
                                </View>
                            </View>

                            <View className="p-2 flex gap-2">
                                <Text className="text-base font-semibold text-gray-700">About Talking guide</Text>
                                <Text className="text-sm font-normal text-gray-500">This will automatically stop the white noise from playing after the specific amount of time you set.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}