import React from 'react';
import {View, Text} from "react-native";
import PhosphorIcon from "@/components/PhosphorIcon";

type CustomSliderProps = {
    mainChallenge: string;
    subChallenge: string,
    iconName: string;
}



const Challenge: React.FC<CustomSliderProps> = ({mainChallenge, subChallenge, iconName}) => {
    return (
        <View className="flex-1 w-max h-10 flex-row items-center justify-between px-4 py-2 gap-2 rounded-[34px] bg-gray-200">
            <PhosphorIcon name={iconName} weight={"bold"} size={16} color={"#ED7F50"}/>
            <View className="">
                <Text className="text-xs font-semibold text-gray-600">{mainChallenge}</Text>
                <Text className="text-xs font-semibold text-gray-400">{subChallenge}</Text>
            </View>
            <PhosphorIcon name={"X"} weight={"bold"} size={16} color={"#727374"}/>
        </View>
    );
};

export default Challenge;