import { View, Text } from 'react-native';

export default function Reports() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Reports</Text>
            <Text style={{ marginTop: 10 }}>You haven't generated any reports yet.</Text>
        </View>
    );
}
