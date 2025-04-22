import React from 'react';
import {View} from "react-native";
import PhosphorIcon from "@/components/PhosphorIcon";
import Slider from "@react-native-community/slider"
import CustomSlider from "@/components/CustomSlider";

const SoundControl = () => {
    return (
        <View className="flex-1 flex-row items-center justify-between gap-4">
            <View>
                <PhosphorIcon name={"SpeakerSimpleHigh"} size={24} color={"#B3B4B6"} weight={"bold"}
                />
            </View>

            <View className="flex-1">
                <CustomSlider />
            </View>
        </View>
    );
};

export default SoundControl;