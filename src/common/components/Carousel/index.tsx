import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { View } from 'react-native'
import { carouselStyles } from './styles'
import { SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";

export const CAROUSAL_WIDTH = SCREEN_WIDTH - scaleWidthPX(48)

export interface CarouselProps {
	data: any[]
	type?: 'Image' | undefined
}

const CustomCarousel: React.FC<CarouselProps> = ({ data = [] }) => {
	const { colors } = useTheme()
	const styles = carouselStyles(colors)

	const ref = React.useRef<ICarouselInstance>(null);
	const progress = useSharedValue<number>(0);

	const onPressPagination = (index: number) => {
		ref.current?.scrollTo({
			count: index - progress.value,
			animated: true,
		});
	};

	return (
		<View>
			<Carousel
				ref={ref}
				width={SCREEN_WIDTH}
				height={scaleHeightPX(170)}
				data={data}
				autoPlay
				loop
				pagingEnabled
				autoPlayInterval={2000}
				onProgressChange={(_, absoluteProgress: number) => progress.value = absoluteProgress}
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: scaleWidthPX(80),
				}}
				renderItem={({ item }) => (
					<View style={{
						height: scaleHeightPX(170),
						width: scaleWidthPX(CAROUSAL_WIDTH),
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 15, backgroundColor: item?.color ?? 'transparent', borderWidth: 1, borderColor: item?.color ?? 'transparent'
					}} />
				)}
				mode='parallax'
			/>

			<Pagination.Basic
				progress={progress}
				data={data}
				dotStyle={styles.inactiveDot}
				activeDotStyle={styles.activeDot}
				containerStyle={styles.dotsContainer}
				onPress={onPressPagination}
			/>
		</View>
	)
}

export default CustomCarousel
