import React, {useRef, useState, useEffect} from 'react';
import {View, Text, ScrollView, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

const ITEM_HEIGHT = 60;

type Props = {
    start: number;
    end: number;
    initialIndex?: number;
};

export default function VerticalNumberPicker({start, end, initialIndex = 0}: Props) {
    const scrollRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const numbers = Array.from({length: end - start + 1}, (_, i) =>
        (i + start).toString().padStart(2, '0')
    );

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (scrollRef.current && initialIndex >= start && initialIndex <= end) {
            const index = initialIndex - start;
            scrollRef.current.scrollTo({y: index * ITEM_HEIGHT, animated: false});
            setCurrentIndex(index);
        }
    }, [initialIndex, start, end]);

    return (
        <View style={{height: ITEM_HEIGHT * 3}} className="items-center justify-center relative">
            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                snapToInterval={0}
                snapToAlignment="center"
                decelerationRate="fast"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={{height: ITEM_HEIGHT * 3}}
                contentContainerStyle={{
                    paddingVertical: ITEM_HEIGHT,
                }}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                bounces={false}
                overScrollMode="never"
            >
                {numbers.map((num, index) => {
                    const isCurrent = index === currentIndex;
                    const isAdjacent = Math.abs(index - currentIndex) === 1;

                    return (
                        <View
                            key={index}
                            style={{
                                height: ITEM_HEIGHT,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className={isCurrent ? 'border-t-2 border-b-2 border-dashed border-gray-400' : ''}
                        >
                            <Text
                                style={{
                                    height: 40,
                                }}
                                className={
                                    isCurrent
                                        ? 'text-[32px] font-bold text-gray-600 text-center leading-10'
                                        : isAdjacent
                                            ? 'text-base font-normal text-gray-500 text-center leading-10'
                                            : 'text-base font-normal text-gray-500 text-center leading-10 opacity-0'
                                }
                            >
                                {num}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
