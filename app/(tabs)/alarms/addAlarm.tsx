import {useRouter, Stack} from 'expo-router';
import {View, Text, ScrollView, Pressable} from 'react-native';
import PhosphorIcon from "@/components/PhosphorIcon";


export default function AddAlarm() {

    const router = useRouter();
    return (
        <>
            <Stack.Screen options={{title: 'Add Alarm', headerShown: false}}/>
            <ScrollView style={{flex: 1, gap: 16, padding: 16, backgroundColor: '#EBEBEB'}}>
                <View className="flex-1 flex-row items-center justify-between">
                    <View>
                        <Pressable onPress={() => router.back()} className="">
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
            </ScrollView>
        </>
    );
}
