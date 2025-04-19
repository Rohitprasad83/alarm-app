import {Text, ScrollView, Pressable, View} from 'react-native';
import {useRouter} from 'expo-router';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PhosphorIcon from "@/components/PhosphorIcon";
import FloatingButton from "@/components/FloatingButton";

export default function Alarms() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-grey-500" edges={['top']}>
                <ScrollView className="px-4 mt-4">
                    <View className="flex-row justify-between items-center">
                        <Pressable
                            className="bg-gray-800 px-4 py-4 rounded-full flex-row items-center justify-center space-x-2 w-32">
                            <Text className="text-gray-100 text-center font-bold">Premium</Text>
                            <PhosphorIcon name="CaretRight" color={"white"} size={16}/>
                        </Pressable>

                        <PhosphorIcon name="DotsThreeVertical" size={24} weight="bold"/>
                    </View>

                    <View className="bg-white p-4 rounded-xl flex-row items-center justify-between mt-4">
                        <View className="gap-2 flex-1">
                            <Text className="text-gray-600 text-lg font-bold">My Goal of the day</Text>
                            <Text className="text-gray-500">Finish the presentations today</Text>
                        </View>
                        <View className="bg-gray-200 p-2 rounded-full">
                            <PhosphorIcon name="PencilSimple" size={24} weight="bold"/>
                        </View>
                    </View>

                    <View className="p-4 rounded-xl flex-1 flex-row items-center justify-between mt-4">
                        {/*Next Alarm Container*/}
                        <View className="flex-1 items-center space-y-2 gap-2">
                            <View className="flex-1 items-center gap-2">
                                <Text className="text-xl font-medium text-gray-600">Next alarm in</Text>
                                <Text className="text-4xl font-semibold text-gray-600">12 h: 28m</Text>
                            </View>
                            <Pressable className="bg-gray-300 h-12 w-36 px-4 py-3 flex-row rounded-full items-center justify-center space-x-4">
                                <Text className="text-gray-600 text-sm font-bold w-20">Go to alarm</Text>
                                <PhosphorIcon name="CaretRight" size={16} weight="bold"/>
                            </Pressable>
                        </View>
                    </View>


                    {/*change the margin-top when other components are added*/}
                    <View className="flex-row justify-between mt-96 gap-2">
                        <View className="bg-white rounded-xl p-4 flex-1">
                            <View className="flex-row items-start space-x-3">
                                <View className="bg-gray-200 p-2 rounded-full">
                                    <PhosphorIcon name="SpeakerSimpleLow" size={24} weight="bold" color={"#ED7F50"}/>
                                </View>
                            </View>
                            <View className="flex-1">
                                <Text className="text-gray-600 font-bold text-md">Control volume</Text>
                                <Text className="text-gray-500 text-sm">Volume is too low</Text>
                            </View>
                        </View>
                        <View className="bg-white rounded-xl p-4 flex-1">
                            <View className="flex-row items-start space-x-3">
                                <View className="bg-gray-200 p-2 rounded-full">
                                    <PhosphorIcon name="Island" size={24} weight="bold" color={"#719ACC"}/>
                                </View>
                            </View>
                            <View className="flex-1">
                                <Text className="text-gray-600 font-bold text-md">Manage Vacation</Text>
                                <Text className="text-gray-500 text-sm">Upcoming: None</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <FloatingButton/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}