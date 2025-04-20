import {useRouter, Stack} from 'expo-router';
import {View, Text, ScrollView, Pressable, TouchableOpacity, TextInput} from 'react-native';
import PhosphorIcon from "@/components/PhosphorIcon";
import VerticalNumberPicker from "@/components/VerticalNumberPicker";
import Slider from '@react-native-community/slider';
import {useState, useEffect, useMemo} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

type amOrPm = "AM" | "PM";

function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

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

    const [sound, setSound] = useState(50);
    
    const debouncedSetSound = useMemo(
        () => debounce((value: number) => {
            setSound(value);
        }, 100), // 100ms delay
        []
    );

    useEffect(() => {
        return () => {
            debouncedSetSound.cancel?.();
        };
    }, []);

    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{title: 'Add Alarm', headerShown: false}}/>
            <SafeAreaView className="flex-1" style={{backgroundColor: '#EBEBEB'}}>
                <ScrollView style={{flex: 1, gap: 16, padding: 16}}>
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
                            <View className="flex-1 flex-row items-center justify-between gap-4">
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
                            className="flex-1 items-center justify-items-start bg-gray-100 rounded-3xl px-4 py-6 gap-5 ">
                            <View className="flex-1 w-full gap-1">
                                <View className="flex-1 w-full items-start justify-center">
                                    <Text className="text-gray-600 text-base font-semibold">Sound</Text>
                                </View>

                                <View className="flex-1 w-full gap-1/2">
                                <View className="flex-1 w-full items-start justify-center">
                                    <Text className="text-gray-600 text-base font-semibold">Chimes</Text>
                                </View>
                                <View className="flex-1 w-full flex-row items-center justify-items-start gap-3">
                                    <View className="flex-row items-center gap-1">
                                        <PhosphorIcon name={"Vibrate"} color={"#333537"} weight={"bold"} size={12}/>
                                        <Text className="text-gray-600 text-xs font-semibold">Vibration On</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <PhosphorIcon name={"Steps"} color={"#333537"} weight={"bold"} size={12}/>
                                        <Text className="text-gray-600 text-xs font-semibold">Gentle Wake up</Text>
                                    </View>
                                </View>
                                </View>
                            </View>

                            <View className="flex-1 w-full items-start justify-center">
                                {/* Slider */}
                                <Slider
                                    style={{
                                        width: '100%',
                                        transform: [{ scaleY: 2 }],
                                        height: 40
                                    }}
                                    value={sound}
                                    onValueChange={handleSoundChange}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={1}
                                    minimumTrackTintColor="#ED7F50"
                                    maximumTrackTintColor="#EBEBEB"
                                    thumbTintColor="#ED7F50"
                                />
                            </View>

                            <Text className="text-gray-600 text-lg font-semibold mt-4">Value: {sound}</Text>
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
