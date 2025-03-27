import { useTheme } from '@react-navigation/native'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React, { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'
import CarousalIndicator from './CarousalIndicator'
import CarousalItem from './CarousalItem'
import { carouselStyles } from './styles'
import { SCREEN_WIDTH } from '@src/common/utils/deviceInformation'

export const CAROUSAL_WIDTH = SCREEN_WIDTH - 32

export interface CarouselProps {
	data: any[]
	type?: 'Image' | undefined
}

const CustomCarousel: React.FC<CarouselProps> = ({ data = [] }) => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const flatListRef = useRef<FlatList>(null)

	const { colors } = useTheme()
	const styles = carouselStyles(colors)

	// This function will be called when the carousel item is scrolled
	const onScroll = (event: { nativeEvent: { contentOffset: { x: any } } }) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x
		const carouselSpacing = CAROUSAL_WIDTH - 2 * 16
		const index = Math.floor(contentOffsetX / scaleWidthPX(carouselSpacing))
		setSelectedIndex(index < 0 ? 0 : index)
	}

	return (
		<View style={styles.container}>
			{/* Carousel */}
			<FlatList ItemSeparatorComponent={() => <View style={{ width: scaleWidthPX(20) }} />} ref={flatListRef} horizontal data={data} renderItem={({ item }) => <CarousalItem item={item} />} keyExtractor={(item) => item?.id} showsHorizontalScrollIndicator={false} pagingEnabled onScroll={onScroll} decelerationRate={'fast'} snapToInterval={scaleWidthPX(CAROUSAL_WIDTH + 2 * 16)} snapToAlignment='center' scrollEventThrottle={16} />
			{/* Dots */}
			<View style={styles.dotsContainer}>{data.length > 0 && data.map((_, index) => <CarousalIndicator index={index} key={index} selectedIndex={selectedIndex} />)}</View>
		</View>
	)
}

export default CustomCarousel
