import React from 'react';
import {Text, View} from 'react-native';
import PhosphorIcon from '@/components/PhosphorIcon';

type TabBarIconProps = {
    icon: string;
    iconText: string;
    focused: boolean;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({icon, iconText, focused}) => {
    return (
        <View
            className={`flex-row items-center justify-center space-x-2 px-4 py-4 rounded-full mt-4 ${focused ? '' : 'bg-transparent'}`}
            style={{backgroundColor: focused ? "#DCDBDB" : 'transparent'}}>
            <PhosphorIcon name={icon} size={20} weight={focused ? "bold" : "regular"}
                          color={focused ? "#333537" : "gray"}/>

            {focused && <Text className="text-gray-600 font-bold">
                {iconText}
            </Text>}
        </View>
    );
};

export default TabBarIcon;
