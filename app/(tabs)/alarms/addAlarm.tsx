import {useRouter, Stack} from 'expo-router';
import {View, Text, ScrollView, Pressable, TouchableOpacity, TextInput, FlatList} from 'react-native';
import PhosphorIcon from "@/components/PhosphorIcon";
import VerticalNumberPicker from "@/components/VerticalNumberPicker";
import {useState} from "react";
import {SafeAreaView} from 'react-native-safe-area-context';
import SoundControl from '@/components/SoundControl';
import Challenge from "@/components/Challenge";


type amOrPm = "AM" | "PM";

type challenge = {
    mainChallenge: string;
    subChallenge: string,
    iconName: string;
}

const challenges = [
    {
        mainChallenge: "Memory",
        subChallenge: "3x Easy",
        iconName: "Brain",
    },
    {
        mainChallenge: "Walk",
        subChallenge: "200 steps",
        iconName: "PersonSimpleWalk",
    },
    {
        mainChallenge: "Equation",
        subChallenge: "Easy",
        iconName: "MathOperations",
    },

]


export default function AddAlarm() {
    const [clock, setClock] = useState<amOrPm>("AM");
    const days = ["M", "T", "W", "T", "F", "S", "S"];

    function flipClock() {
        setClock((prevClock) => (prevClock === "AM" ? "PM" : "AM"));
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };


    const router = useRouter();

    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: '#EBEBEB'}}>
                <Stack.Screen options={{title: 'Add Alarm', headerShown: false}}/>
                <ScrollView style={{flex: 1, gap: 16, padding: 16, backgroundColor: '#EBEBEB'}}>
                    <View className="gap-5">
                        <View className="flex-1 flex-row items-center justify-between">
                            <View>
                                <Pressable onPress={() => router.back()}>
                                    <PhosphorIcon name={"CaretLeft"} size={24} weight={"bold"}/>
                                </Pressable>
                            </View>
                            <View>
                                <Text className="text-gray-600 text-lg font-semibold">Rings in: 5h 45m</Text>
                            </View>
                            <View>
                                <PhosphorIcon name={"TrashSimple"} size={24} weight={"transparent"}/>
                            </View>
                        </View>

                        <View
                            className="flex-1 items-center justify-center bg-gray-100 rounded-3xl px-4 py-6 gap-5 mt-16">
                            <Text className="text-gray-600 text-base font-semibold">Alarm Time</Text>
                            <View className="flex-row items-center justify-between gap-4 h-[180px]">
                                <VerticalNumberPicker start={1} end={12} initialIndex={5}/>
                                <Text className="text-gray-600 text-[32px] font-semibold">:</Text>
                                <VerticalNumberPicker start={0} end={59} initialIndex={35}/>
                                <View>
                                    <Pressable onPress={flipClock}>
                                        <Text className="text-gray-600 text-2xl font-semibold">{clock}</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View
                            className="flex-1 items-center justify-center bg-gray-100 rounded-3xl px-4 py-6 gap-5">

                            <View className="flex-1 flex-row items-center justify-between">
                                <View className="flex-1 flex-row items-center justify-between">
                                    <Text className="text-gray-600 text-base font-semibold">Alarm Frequency: </Text>
                                </View>
                                <View>
                                    <PhosphorIcon name={"CalendarDot"} size={24} weight={"bold"} color={"#FBB562"}/>
                                </View>
                            </View>

                            <View className="flex-1 flex-row items-center justify-between">
                                <View className="flex-1 flex-row items-center justify-items-start">
                                    <Text className="text-gray-600 text-base font-semibold">Sun, 19 Jan
                                        (once)</Text>
                                </View>
                            </View>

                            <View className="flex-1 w-full flex-row items-center justify-items-start gap-2">
                                {days.map((day, index) => (
                                    <View key={index}
                                          className="w-9 h-9 flex rounded-full bg-gray-200 items-center justify-center">
                                        <Text className="text-gray-400 text-sm font-semibold">{day}</Text>
                                    </View>
                                ))}
                            </View>

                            <View className="flex-1 w-full flex-row items-center justify-items-start">
                                <TouchableOpacity
                                    onPress={handleCheckboxToggle}
                                    style={{
                                        width: 12.5,
                                        height: 12.5,
                                        borderWidth: 2,
                                        borderColor: "#B3B4B6",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {isChecked &&
                                        <PhosphorIcon name="Check" size={10} color="#B3B4B6" weight={"bold"}/>}
                                </TouchableOpacity>

                                {/* Label */}
                                <Text className="text-gray-400 text-base font-semibold ml-2">Everyday</Text>
                            </View>

                        </View>


                        <View
                            className="flex-1 items-center justify-center bg-gray-100 rounded-3xl px-4 py-6 gap-5">
                            <View className="flex-1 w-full items-start justify-center gap-2">
                                {/* Input Box with Placeholder */}
                                <Text className="text-gray-600 text-base font-semibold">Alarm name:</Text>
                                <TextInput
                                    placeholder="Example: Rise to win"
                                    placeholderTextColor="#B3B4B6"

                                    className="w-full bg-gray-200 px-4 rounded-lg"
                                />
                            </View>
                        </View>

                        <View
                            className="flex-1 items-center justify-items-start bg-gray-100 rounded-3xl px-4 py-6 gap-5">
                            <View className="flex-1 w-full">
                                <Text className="text-base font-semibold text-gray-600">Challenges</Text>
                            </View>

                            <View className="flex-1 w-full flex-row gap-2 items-center justify-items-start">
                                <View className="w-9 h-9 rounded-full bg-orange-300 items-center justify-center">
                                    <PhosphorIcon name={"Plus"} color={"white"} size={12.5} weight={"bold"}/>
                                </View>
                                <View className="flex-1 w-full items-start justify-center gap-1">
                                    <Text className="text-sm font-semibold text-gray-600">Tap to add</Text>
                                    <Text className="text-sm font-semibold text-gray-600">3/5 left</Text>
                                </View>
                            </View>

                            <FlatList
                                data={challenges}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => (
                                    <Challenge mainChallenge={item.mainChallenge} subChallenge={item.subChallenge}
                                               iconName={item.iconName}/>
                                )}
                                className="gap-2"
                                contentContainerStyle={{gap: 8}}
                            />

                        </View>

                        <View
                            className="flex-1 items-center justify-items-start bg-gray-100 rounded-3xl px-4 py-6 gap-5">
                            <View className="flex-1 w-full gap-1">
                                <View className="flex-1 w-full items-start justify-center">
                                    <Text className="text-gray-600 text-base font-semibold">Sound</Text>
                                </View>

                                <View className="flex-1 w-full gap-8">
                                    <View className="flex-1 w-full items-start justify-center">
                                        <Text className="text-gray-600 text-base font-semibold">Chimes</Text>
                                        <View className="flex-1 w-full flex-row items-center justify-items-start gap-3">
                                            <View className="flex-row items-center gap-1">
                                                <PhosphorIcon name={"Vibrate"} color={"#333537"} weight={"bold"}
                                                              size={12}/>
                                                <Text className="text-gray-600 text-xs font-semibold">Vibration
                                                    On</Text>
                                            </View>
                                            <View className="flex-row items-center gap-1">
                                                <PhosphorIcon name={"Steps"} color={"#333537"} weight={"bold"}
                                                              size={12}/>
                                                <Text className="text-gray-600 text-xs font-semibold">Gentle Wake
                                                    up</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <SoundControl />
                                </View>
                            </View>
                        </View>

                        <View className="flex-1 w-full mb-16">
                            <Pressable className="bg-gray-600 rounded-3xl items-center p-4">
                                <Text className="text-gray-100 font-bold text-sm">Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
