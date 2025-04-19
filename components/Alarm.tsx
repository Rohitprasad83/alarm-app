import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomSwitch from "@/components/CustomSwitch";
import PhosphorIcon from "@/components/PhosphorIcon";

type AlarmProps = {
    alarmName?: string;
    alarmTime: string;
    occurrence: string[] | string;
    puzzleCount?: number;
    isEnabled: boolean;
};


const Alarm: React.FC<AlarmProps> = ({alarmName, alarmTime, occurrence, puzzleCount, isEnabled}) => {
    const [enabled, setEnabled] = useState(isEnabled);
    const toggleSwitch = () => setEnabled(previousState => !previousState);


    const weekDays = [
        {full: 'Monday', short: 'M'},
        {full: 'Tuesday', short: 'T'},
        {full: 'Wednesday', short: 'W'},
        {full: 'Thursday', short: 'T'},
        {full: 'Friday', short: 'F'},
        {full: 'Saturday', short: 'S'},
        {full: 'Sunday', short: 'S'},
    ];

    return (
        <View className="flex-1 justify-between items-stretch bg-white px-4 py-4 rounded-xl gap-1">
            {alarmName &&
                <Text className="text-xl text-gray-600 font-normal text-left">{alarmName}</Text>}

            {/* Middle section */}
            <View className="items-center flex-1 flex-row justify-between">
                <Text className="text-3xl text-gray-600 font-bold">{alarmTime}</Text>
                <CustomSwitch isEnabled={enabled}/>
            </View>

            {/* Bottom section */}
            <View className="items-center flex-1 flex-row justify-between">
                {occurrence === "Everyday" ? (
                    <Text className="text-md text-gray-600 font-medium">{occurrence}</Text>
                ) : (
                    <View className="flex-row">
                        {weekDays.map((day, index) => (
                            <Text
                                key={index}
                                className={`mx-1 text-md ${
                                    occurrence.includes(day.full)
                                        ? 'text-gray-600 font-medium'
                                        : 'text-gray-300'
                                }`}
                            >
                                {day.short}
                            </Text>
                        ))}
                    </View>
                )}

                {puzzleCount &&
                    <View className="flex-row items-center gap-1">
                        <PhosphorIcon name="PuzzlePiece" size={16} weight={"bold"}/>
                        <Text className="font-semibold">x 3</Text>
                    </View>
                }
            </View>
        </View>

    );
};

export default Alarm;