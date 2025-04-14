import { Pressable, View } from 'react-native';
import { Plus } from 'phosphor-react-native';

const FloatingButton = () => {
    return (
        <View className="absolute bottom-24 right-6">
            <Pressable
                className="bg-gray-800 w-16 h-16 rounded-full items-center justify-center shadow-lg"
                onPress={() => console.log('Add new alarm')}
            >
                <Plus size={28} color="white" weight="bold" />
            </Pressable>
        </View>
    );
};

export default FloatingButton;