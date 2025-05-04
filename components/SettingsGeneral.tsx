import {Text, View} from "react-native";
import PhosphorIcon from "@/components/PhosphorIcon";
type SettingsGeneralProp = {
    icon: string;
    generalText: string;
    generalInformation: string;
}

const SettingsGeneral: React.FC<SettingsGeneralProp> = ({icon, generalText, generalInformation}) =>
{
    return(
    <View className="flex-row w-full justify-between h-9">
        <View className="flex-row w-max items-center justify-center gap-2">
            <PhosphorIcon name={icon} color={"#719ACC"} size={24} weight={"bold"}/>
            <Text className="font-semibold text-base text-gray-700">{generalText}</Text>
        </View>
        <View className="flex-row w-max items-center justify-center gap-2">
            <Text className="text-gray-500 text-sm">{generalInformation}</Text>
            <PhosphorIcon name="CaretRight" color={"#333537"} size={16} weight={"bold"}/>
        </View>
    </View>
    )
}

export default SettingsGeneral;