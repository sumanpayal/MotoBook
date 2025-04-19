import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { Image, View } from 'react-native'
import { carouselStyles } from './styles'
import { SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";
import CustomText from '../Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { noVehicleCardImage, requestSubmittedCardImage, subscriptionExpiredCardImage } from '@src/assets/image'

export const CAROUSAL_WIDTH = SCREEN_WIDTH - scaleWidthPX(48)

export enum CAROUSEL_TYPE {
	NO_VEHICLE = 'NO_VEHICLE',
	REQUEST_SUBMITTED = 'REQUEST_SUBMITTED',
	SUBSCRIPTION_EXPIRED = 'SUBSCRIPTION_EXPIRED',
	OTHERS = 'OTHERS'
}

export interface CarouselProps {
	data?: any[]
	type?: 'Image' | undefined
	cauroselType?: CAROUSEL_TYPE
	onPress?: (type: CAROUSEL_TYPE) => void
}

const CustomCarousel: React.FC<CarouselProps> = ({ data = [], onPress, cauroselType = CAROUSEL_TYPE.OTHERS }) => {
	const { colors } = useTheme()
	const styles = carouselStyles(colors)

	console.log({ cauroselType });


	const ref = React.useRef<ICarouselInstance>(null);
	const progress = useSharedValue<number>(0);

	const onPressPagination = (index: number) => {
		ref.current?.scrollTo({
			count: index - progress.value,
			animated: true,
		});
	};

	const renderCarousel = () => {
		return (
			<>
				<Carousel
					ref={ref}
					width={SCREEN_WIDTH}
					height={scaleHeightPX(140)}
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
							height: scaleHeightPX(140),
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
			</>
		)
	}

	const renderNoVehicleCard = () => {
		return (
			<View style={{ backgroundColor: colors.noVehicleCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18) }}>
				<Image source={{ uri: noVehicleCardImage }} style={{ width: '60%', height: scaleHeightPX(118), position: 'absolute', bottom: 8, right: 8 }} resizeMode='cover' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Add Your Vehicle in Seconds'}</CustomText>
				<CustomText lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, marginTop: scaleHeightPX(8), height: scaleHeightPX(57) }}>
					{`Start your MotorWash journey,\nadd your car to get started!`}
				</CustomText>
				<CustomText lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, padding: scaleHeightPX(8), width: scaleWidthPX(90), borderRadius: 5, backgroundColor: colors.white, textAlign: 'center' }} onPress={() => { onPress && onPress(CAROUSEL_TYPE.NO_VEHICLE) }}>
					{'Add Vehicle'}
				</CustomText>
			</View>
		)
	}

	const renderRequestSubmittedCard = () => {
		return (
			<View style={{ backgroundColor: colors.requestSubmittedCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, alignItems: 'center', flexDirection: 'row', gap: scaleWidthPX(12), paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(12) }}>
				<Image source={{ uri: requestSubmittedCardImage }} style={{ width: scaleWidthPX(120), height: scaleWidthPX(120) }} resizeMode='cover' />
				<View style={{ flex: 1, justifyContent: 'center', paddingRight: scaleHeightPX(24), marginRight: scaleWidthPX(16) }}>
					<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Vehicle Form Submitted'}</CustomText>
					<CustomText lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, marginTop: scaleHeightPX(8), flex: 1 }}>
						{`Our team will contact you\nshortly to confirm your\nservice start`}
					</CustomText>
				</View>
			</View>
		)
	}

	const renderSubscriptionExpiredCard = () => {
		return (
			<View style={{ backgroundColor: colors.subscriptionExpiredCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18) }}>
				<Image source={{ uri: subscriptionExpiredCardImage }} style={{ width: scaleWidthPX(150), height: scaleHeightPX(100), position: 'absolute', bottom: 8, right: 8 }} resizeMode='contain' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Subscription Expired'}</CustomText>
				<CustomText lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, marginVertical: scaleHeightPX(8), }}>
					{`Your MotorWash service has ended.\nRenew now to continue daily car\ncleaning without interruption.`}
				</CustomText>
				<CustomText lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, padding: scaleHeightPX(8), width: scaleWidthPX(134), borderRadius: 5, backgroundColor: colors.white, textAlign: 'center', marginTop: scaleHeightPX(8) }} onPress={() => { onPress && onPress(CAROUSEL_TYPE.NO_VEHICLE) }}>
					{'Renew Subscription'}
				</CustomText>
			</View>
		)
	}

	return (
		<View>
			{cauroselType === CAROUSEL_TYPE.NO_VEHICLE ? renderNoVehicleCard() : cauroselType === CAROUSEL_TYPE.REQUEST_SUBMITTED ? renderRequestSubmittedCard() : cauroselType === CAROUSEL_TYPE.SUBSCRIPTION_EXPIRED ? renderSubscriptionExpiredCard() : renderCarousel()}
			{/* {renderSubscriptionExpiredCard()} */}
		</View>
	)
}

export default CustomCarousel
