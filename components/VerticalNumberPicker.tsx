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
        <View style={{ height: ITEM_HEIGHT * 3, overflow: 'hidden' }} className="items-center justify-center">
            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {/* Top Spacer */}
                <View style={{ height: ITEM_HEIGHT }} />

                {numbers.map((num, index) => {
                    const isCurrent = index === currentIndex;

                    return (
                        <View
                            key={index}
                            style={{ height: ITEM_HEIGHT }}
                            className="items-center justify-center"
                        >
                            <Text
                                style={{ lineHeight: ITEM_HEIGHT }}
                                className={
                                    isCurrent
                                        ? 'text-[32px] font-semibold text-gray-600 w-12 text-center font-mono border-y-2 border-dashed border-gray-400'
                                        : 'text-[16px] font-semibold text-gray-500 w-12 text-center font-mono'
                                }
                            >
                                {num}
                            </Text>
                        </View>
                    );
                })}

                {/* Bottom Spacer */}
                <View style={{ height: ITEM_HEIGHT }} />
            </ScrollView>
        </View>
    );
}
