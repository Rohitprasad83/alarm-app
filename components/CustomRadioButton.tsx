import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export enum SoundOption {
    Waves = 'Waves',
    Wind = 'wind',
    Raindrops = 'Raindrops',
    Fire = 'Fire',
}

export enum WhiteNoiseTimerOption {
    TenMinutes = '10 minutes',
    FifteenMinutes = '15 minutes',
    TwentyMinutes = '20 minutes',
    ThirtyMinutes = '30 minutes',
    OneHour = '1 hour',
    PlayAllNight = 'Play all night',
}


type CustomRadioButtonProps = {
    options: typeof SoundOption | typeof WhiteNoiseTimerOption;
    defaultValue?: SoundOption | WhiteNoiseTimerOption;
    onChange?: (value: SoundOption | WhiteNoiseTimerOption) => void;
};

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
                                                                 options,
                                                                 defaultValue,
                                                                 onChange,
                                                             }) => {
    const enumValues = Object.values(options);
    const [selected, setSelected] = useState<SoundOption>(
        defaultValue || enumValues[0]
    );

    const handleSelect = (value: SoundOption) => {
        setSelected(value);
        onChange?.(value);
    };

    return (
        <View className="flex-1 items-start gap-2">
            {enumValues.map((option) => {
                const isSelected = selected === option;
                return (
                    <Pressable
                        key={option}
                        onPress={() => handleSelect(option)}
                        className="flex-row items-center h-[44px] gap-[7px] w-full"
                    >
                        <View
                            className={`w-6 h-6 rounded-full border-2 justify-center items-center ${
                                isSelected ? '' : 'border-gray-300'
                            }`}
                            style={{ borderColor: isSelected ? '#ED7F50' : '#DCDBDB' }}
                        >
                            {isSelected && (
                                <View
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: '#ED7F50' }}
                                />
                            )}
                        </View>
                        <Text className="text-sm text-gray-600 font-semibold capitalize">
                            {option}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default CustomRadioButton;
