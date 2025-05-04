import {View, Text, ScrollView, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PhosphorIcon from "@/components/PhosphorIcon";
import SettingsPageCatSvg from "@/components/SettingsPageCatSvg";
import SettingsGeneral from "@/components/SettingsGeneral";
import SettingsMore from "@/components/SettingsMore";


const generalTypes = [
    {
        icon: "Waveform",
        generalText: "White Noise",
        generalInformation: "On, 20min",
        generalSettingsPath: 'whiteNoise'
    },
    {
        icon: "Bed",
        generalText: "Gentle wake up",
        generalInformation: "On",
        generalSettingsPath: 'gentleWakeUp'
    },

    {
        icon: "BellRinging",
        generalText: "Reminders",
        generalInformation: "",
        generalSettingsPath: 'reminders'
    },
    {
        icon: "Vibrate",
        generalText: "Vibration",
        generalInformation: "On",
        generalSettingsPath: 'vibration'
    },
    {
        icon: "Prohibit",
        generalText: "Do not disturb",
        generalInformation: "On",
        generalSettingsPath: 'doNotDisturb'
    },

    {
        icon: "PawPrint",
        generalText: "Talking guide",
        generalInformation: "On",
        generalSettingsPath: 'talkingGuide'
    },

]

const moreTypes = [
    {
        icon: "Users",
        iconColor: "#ED7F50",
        generalText: "Share with friends",
    },
    {
        icon: "ShootingStar",
        iconColor: "#719ACC",
        generalText: "Rate Us",
    },
    {
        icon: "Info",
        iconColor: "#719ACC",
        generalText: "Help",
    }
]


export default function Settings() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EBEBEB'}}>
            <ScrollView style={{flex: 1, gap: 16, padding: 16, backgroundColor: '#EBEBEB'}}>

                <View className="gap-4">
                    <View className="flex-1 w-full justify-items-start items-start">
                        <Text className="font-semibold text-2xl text-center text-gray-600">Settings</Text>
                    </View>

                    <View className="bg-gray-100 p-6 rounded-3xl flex-row items-center justify-between mt-4">
                        <View className="flex w-2/3 gap-4">
                            <View className="gap-2">
                                <Text className="text-gray-600 text-xl font-semibold">Enjoy our current discount</Text>
                                <Text className="text-gray-500 text-xs font-normal">Based on your mood average sleep
                                    time and our research</Text>
                            </View>
                            <View>
                                <Pressable
                                    className="bg-gray-600 px-4 py-4 rounded-full flex-row items-center justify-center space-x-2 w-40">
                                    <Text className="text-gray-100 text-center font-bold">Premium</Text>
                                    <PhosphorIcon name="CaretRight" color={"white"} size={16}/>
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <SettingsPageCatSvg/>
                        </View>
                    </View>

                    <View className="flex-1 w-full justify-items-start items-start">
                        <Text className="font-semibold text-sm text-center text-gray-600">General</Text>
                    </View>

                    <View className="bg-gray-100 px-4 py-6 rounded-3xl flex items-center justify-between gap-6">

                        {generalTypes.map((type, index) => (
                            <SettingsGeneral icon={type.icon} generalText={type.generalText}
                                             generalInformation={type.generalInformation} key={index}
                                                generalSettingsPath={type.generalSettingsPath}
                            />
                        ))}
                    </View>

                    <View className="flex-1 w-full justify-items-start items-start">
                        <Text className="font-semibold text-sm text-center text-gray-600">More</Text>
                    </View>

                    <View className="bg-gray-100 px-4 py-6 rounded-3xl flex items-center justify-between gap-6 mb-8">

                        {moreTypes.map((type, index) => (
                            <SettingsMore icon={type.icon} iconColor={type.iconColor}
                                          generalText={type.generalText}
                                          key={index}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
