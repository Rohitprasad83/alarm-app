import {Text, TouchableOpacity, View} from "react-native";
import PhosphorIcon from "@/components/PhosphorIcon";
import {router} from "expo-router";

type SettingsGeneralProp = {
    icon: string;
    generalText: string;
    generalInformation: string;
    generalSettingsPath: string;
}

const SettingsGeneral: React.FC<SettingsGeneralProp> = ({
                                                            icon,
                                                            generalText,
                                                            generalInformation,
                                                            generalSettingsPath
                                                        }) => {

    const path = `/(tabs)/settings/${generalSettingsPath}`;
    return (
        <TouchableOpacity className="flex-row w-full justify-between h-9" onPress={() => router.push(path)}
                          activeOpacity={1}
        >
            <View className="flex-row w-max items-center justify-center gap-2">
                <PhosphorIcon name={icon} color={"#719ACC"} size={24} weight={"bold"}/>
                <Text className="font-semibold text-base text-gray-700">{generalText}</Text>
            </View>
            <View className="flex-row w-max items-center justify-center gap-2">
                <Text className="text-gray-500 text-sm">{generalInformation}</Text>
                <PhosphorIcon name="CaretRight" color={"#333537"} size={16} weight={"bold"}/>
            </View>
        </TouchableOpacity>
    )
}

export default SettingsGeneral;