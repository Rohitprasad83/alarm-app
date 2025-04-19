import React, { useState } from 'react';
import { View, Pressable, Animated } from 'react-native';

type CustomSwitchProps = {
    isEnabled: boolean;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ isEnabled }) => {
    const [isOn, setIsOn] = useState(isEnabled);
    const translateX = useState(new Animated.Value(isEnabled ? 28 : 0))[0];

    const toggleSwitch = () => {
        Animated.timing(translateX, {
            toValue: isOn ? 0 : 28,
            duration: 200,
            useNativeDriver: true,
        }).start();

        setIsOn(!isOn);
    };

    return (
        <Pressable
            onPress={toggleSwitch}
            className={`w-14 h-7 rounded-full ${isOn ? 'bg-gray-600' : 'bg-white border-gray-400 border-2'} justify-center`}
        >
            <Animated.View
                className={`w-5 h-5 rounded-full ${isOn ? 'bg-gray-100' : 'bg-gray-400'}`}
                style={{
                    transform: [{ translateX }],
                    marginLeft: 1,
                }}
            />
        </Pressable>
    );
};

export default CustomSwitch;
