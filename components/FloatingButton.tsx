import {Pressable, View} from 'react-native';
import {Plus} from 'phosphor-react-native';
import {useRouter} from 'expo-router';

const FloatingButton = () => {
    const router = useRouter();
    return (
        <View className="absolute bottom-24 right-6">
            <Pressable
                className="bg-gray-800 w-16 h-16 rounded-full items-center justify-center shadow-lg"
                onPress={() =>
                    router.push('/(tabs)/alarms/addAlarm')}
            >
                <Plus size={28} color="white" weight="bold"/>
            </Pressable>
        </View>
    );
};

export default FloatingButton;