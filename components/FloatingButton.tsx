import {Pressable} from 'react-native';
import {Plus} from 'phosphor-react-native'; // or your icon lib
import {View} from 'react-native';

const FloatingButton = () => {
    return (
        <View className="absolute bottom-20 right-6">
            <Pressable
                className="bg-gray-800 w-14 h-14 rounded-full items-center justify-center shadow-lg"
                onPress={() => console.log('Add new alarm')}
            >
                <Plus size={24} color="white" weight="bold" />
            </Pressable>
        </View>
    );
};

export default FloatingButton;
