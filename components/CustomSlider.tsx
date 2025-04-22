import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Animated,
    PanResponder,
    LayoutChangeEvent,
    StyleSheet,
} from 'react-native';

const CustomSlider: React.FC = () => {
    const panX = useRef(new Animated.Value(0)).current;
    const [sliderWidth, setSliderWidth] = useState(0);
    const [value, setValue] = useState(40); // initial value 40%
    const listenerRef = useRef<string | null>(null);
    const THUMB_WIDTH = 24; // Width of the thumb

    useEffect(() => {
        return () => {
            if (listenerRef.current) {
                panX.removeListener(listenerRef.current);
            }
        };
    }, []);

    const handleLayout = (e: LayoutChangeEvent) => {
        const width = e.nativeEvent.layout.width - THUMB_WIDTH; // Account for thumb width
        setSliderWidth(width);
        const initialX = (value / 100) * width;
        panX.setValue(initialX);
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                panX.extractOffset();
            },
            onPanResponderMove: Animated.event(
                [null, { dx: panX }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                panX.flattenOffset();
                if (listenerRef.current) {
                    panX.removeListener(listenerRef.current);
                }
                listenerRef.current = panX.addListener(({ value: x }) => {
                    const percent = Math.round((Math.max(0, Math.min(x, sliderWidth)) / sliderWidth) * 100);
                    setValue(percent);
                });
            },
        })
    ).current;

    return (
        <View style={styles.container} onLayout={handleLayout} className="flex-1 w-full px-4">
            <View style={styles.trackBackground} />
            <Animated.View 
                style={[
                    styles.trackFill, 
                    { 
                        width: panX.interpolate({
                            inputRange: [0, sliderWidth],
                            outputRange: [0, sliderWidth],
                            extrapolate: 'clamp'
                        }) 
                    }
                ]} 
            />
            <Animated.View
                style={[
                    styles.thumb,
                    {
                        transform: [
                            {
                                translateX: panX.interpolate({
                                    inputRange: [0, sliderWidth],
                                    outputRange: [0, sliderWidth],
                                    extrapolate: 'clamp'
                                })
                            },
                        ],
                    },
                ]}
                {...panResponder.panHandlers}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
    },
    trackBackground: {
        height: 8,
        backgroundColor: '#EBEBEB',
        borderRadius: 4,
        position: 'absolute',
        left: 0,
        right: 0,
    },
    trackFill: {
        height: 8,
        backgroundColor: '#ED7F50',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius:4,
        borderRightWidth: 0,
        position: 'absolute',
        left: 0,
    },
    thumb: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 4,
        borderColor: '#ED7F50',
        position: 'absolute',
    },
});

export default CustomSlider;
