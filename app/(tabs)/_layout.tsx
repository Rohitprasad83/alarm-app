import {Tabs} from 'expo-router';
import TabBarIcon from "@/components/TabBarIcon";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    paddingHorizontal: 16,
                    width: '100%',
                },
                tabBarStyle: {
                    minHeight: 70,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: '#EBEBEB',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
            }}
        >
            <Tabs.Screen
                name="alarms/index"
                options={{
                    title: 'Alarms',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon icon={"Alarm"} iconText={"Alarms"} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="reports/index"
                options={{
                    title: 'Reports',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon icon={"ChartBar"} iconText={"Reports"} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="settings/index"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon icon={"Gear"} iconText={"Settings"} focused={focused}/>
                    ),
                }}
            />
        </Tabs>
    );
}
