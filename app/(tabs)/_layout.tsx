import {Tabs} from 'expo-router';
import PhosphorIcon from '../../components/PhosphorIcon';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="alarms/index"
                options={{
                    title: 'Alarms',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <PhosphorIcon name="Alarm" color={color} size={size} weight="fill"/>
                    ),
                }}
            />
            <Tabs.Screen
                name="reports/index"
                options={{
                    title: 'Reports',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <PhosphorIcon name="ChartBar" color={color} size={size} weight="fill"/>
                    ),
                }}
            />
            <Tabs.Screen
                name="settings/index"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <PhosphorIcon name="Gear" color={color} size={size} weight="fill"/>
                    ),
                }}
            />
        </Tabs>
    );
}
