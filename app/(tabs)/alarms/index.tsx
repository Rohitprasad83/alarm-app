import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Alarms() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={"Premium"} />
        </View>
    );
}
