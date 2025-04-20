import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function AddAlarm() {
    return (
        <>
            <Stack.Screen options={{ title: 'Add Alarm', headerShown: true }} />
            <View>
                <Text>This is the Add Alarm screen</Text>
            </View>
        </>
    );
}
