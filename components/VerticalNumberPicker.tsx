import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const ITEM_HEIGHT = 60;

type Props = {
    start: number;
    end: number;
    initialIndex?: number;
};

export default function VerticalNumberPicker({ start, end, initialIndex = 0 }: Props) {
    const scrollRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const numbers = Array.from({ length: end - start + 1 }, (_, i) =>
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
            scrollRef.current.scrollTo({ y: index * ITEM_HEIGHT, animated: false });
            setCurrentIndex(index);
        }
    }, [initialIndex, start, end]);

    return (
        <View style={{ height: ITEM_HEIGHT * 3 }} className="items-center justify-center relative">
            {/* Dashed border lines */}
            <View className="absolute w-full" style={{ top: ITEM_HEIGHT, height: ITEM_HEIGHT }}>
                <View className="w-full h-[1px] bg-grey-100 mb-[58px]" />
                <View className="w-full h-[1px] bg-grey-100" />
            </View>

            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={{ height: ITEM_HEIGHT * 3 }}
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
                            style={{ height: ITEM_HEIGHT }}
                            className="items-center justify-center px-4"
                        >
                            <Text
                                style={{ lineHeight: ITEM_HEIGHT }}
                                className={
                                    isCurrent
                                        ? 'text-[32px] font-semibold text-grey-600 text-center'
                                        : isAdjacent
                                        ? 'text-base font-medium text-grey-500 text-center'
                                        : 'text-base font-medium text-grey-500 text-center'
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
