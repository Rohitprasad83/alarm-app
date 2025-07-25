import {Stack, useRouter} from "expo-router";
import {Pressable, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import PhosphorIcon from "@/components/PhosphorIcon";
import CustomSwitch from "@/components/CustomSwitch";
import {useState} from "react";
import CustomRadioButton, {SoundOption, WhiteNoiseTimerOption} from "@/components/CustomRadioButton";
import SoundControl from "@/components/SoundControl";


export default function WhiteNoise() {

    const router = useRouter();

    const [isGentleWakeUp, setIsGentleWakeUp] = useState(true);

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
                                <Text className="text-gray-600 text-lg font-semibold">White Noise</Text>
                            </View>
                            <View>
                                <PhosphorIcon name={"TrashSimple"} size={24} weight={"transparent"}/>
                            </View>
                        </View>

                        <View
                            className="flex-1 flex-row items-center justify-between bg-gray-100 rounded-3xl p-4 mt-8 h-16">
                            <View>
                                <Text
                                    className="text-base font-semibold text-gray-700">{isGentleWakeUp ? "On" : "Off"}</Text>
                            </View>
                            <CustomSwitch isEnabled={isGentleWakeUp} setIsEnabled={setIsGentleWakeUp}/>
                        </View>

                        <View className="flex-1 items-start justify-center bg-gray-100 rounded-3xl p-4">
                            <View>
                                <Text className="text-base font-semibold text-gray-700">Sound</Text>
                            </View>
                            <CustomRadioButton options={SoundOption} defaultValue={SoundOption.Raindrops} />
                            <SoundControl/>
                        </View>

                        <View className="flex-1 items-start justify-center bg-gray-100 rounded-3xl p-4">
                            <View className="gap-2">
                                <Text className="text-base font-semibold text-gray-700">White noise timer</Text>
                                <Text className="text-sm font-normal text-gray-500">This will automatically stop the white noise from playing after the specific
                                    amount of time you set.</Text>
                            </View>
                            <CustomRadioButton options={WhiteNoiseTimerOption} defaultValue={WhiteNoiseTimerOption.TwentyMinutes}/>
                        </View>

                        <View className="p-2 flex gap-2 mb-8">
                            <Text className="text-base font-semibold text-gray-700">About White noise</Text>
                            <Text className="text-sm font-normal text-gray-500">This will automatically stop the white
                                noise from playing after the specific amount of time you set.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}