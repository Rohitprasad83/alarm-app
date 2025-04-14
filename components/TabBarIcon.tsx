import React from 'react';
import { View, Text } from 'react-native';
import PhosphorIcon from '@/components/PhosphorIcon';

type TabBarIconProps = {
    icon: string;
    iconText: string;
    focused: boolean;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ icon, iconText, focused }) => {
    return (
        <View
            className={`flex-row items-center justify-center px-3 py-3 rounded-full ${
                focused ? 'bg-gray-300' : 'bg-transparent'
            }`}
            style={{ minWidth: 120 }} // Ensure minimum width
        >
            <PhosphorIcon
                name={icon}
                size={20}
                weight={focused ? 'bold' : 'regular'}
                color={focused ? '#333537' : 'gray'}
            />
            {focused && (
                <Text className="ml-2 text-gray-600 font-bold">
                    {iconText}
                </Text>
            )}
        </View>
    );
};

export default React.memo(TabBarIcon);