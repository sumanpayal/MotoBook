import { useTheme } from '@react-navigation/native'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React, { useRef, useState } from 'react'
import { FlatList, LayoutAnimation, View } from 'react-native'
import CarousalIndicator from './CarousalIndicator'
import CarousalItem from './CarousalItem'
import { carouselStyles } from './styles'

export const CAROUSAL_WIDTH = 330

export interface CarouselProps {
	data: any[]
	type?: 'Image' | undefined
}

const Carousel: React.FC<CarouselProps> = ({ data = [] }) => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const flatListRef = useRef<FlatList>(null)

	const { colors } = useTheme()
	const styles = carouselStyles(colors)

	// This function will be called when the carousel item is scrolled
	const onScroll = (event: { nativeEvent: { contentOffset: { x: any } } }) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		const contentOffsetX = event.nativeEvent.contentOffset.x
		const carouselSpacing = CAROUSAL_WIDTH - 2 * 16
		const index = Math.floor(contentOffsetX / scaleWidthPX(carouselSpacing))
		setSelectedIndex(index < 0 ? 0 : index)
	}

	const onPressIndicator = (index: number) => {
		setSelectedIndex(index)
		flatListRef.current?.scrollToIndex({ index, animated: true })
	}

	return (
		<View style={styles.container}>
			{/* Carousel */}
			<FlatList ItemSeparatorComponent={() => <View style={{ width: scaleWidthPX(20) }} />} ref={flatListRef} horizontal data={data} renderItem={({ item, index }) => <CarousalItem item={item} index={index} selectedIndex={selectedIndex} />} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} pagingEnabled onScroll={onScroll} decelerationRate={'fast'} snapToInterval={scaleWidthPX(CAROUSAL_WIDTH + 2 * 16)} snapToAlignment='center' scrollEventThrottle={16} />
			{/* Dots */}
			<View style={styles.dotsContainer}>{data.length > 0 && data.map((_, index) => <CarousalIndicator index={index} key={index} selectedIndex={selectedIndex} onPressIndicator={onPressIndicator} />)}</View>
		</View>
	)
}

export default Carousel
