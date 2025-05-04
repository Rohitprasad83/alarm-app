import {Text, View} from "react-native";
import PhosphorIcon from "@/components/PhosphorIcon";
type SettingsMoreProp = {
    icon: string;
    iconColor: string;
    generalText: string;
}

const SettingsMore: React.FC<SettingsMoreProp> = ({icon, iconColor, generalText}) =>
{
    return(
    <View className="flex-row w-full justify-between h-9">
        <View className="flex-row w-max items-center justify-center gap-2">
            <PhosphorIcon name={icon} color={iconColor} size={24} weight={"bold"}/>
            <Text className="font-semibold text-base text-gray-700">{generalText}</Text>
        </View>
        <View className="flex-row w-max items-center justify-center gap-2">
            <PhosphorIcon name="CaretRight" color={"#333537"} size={16} weight={"bold"}/>
        </View>
    </View>
    )
}

export default SettingsMore;