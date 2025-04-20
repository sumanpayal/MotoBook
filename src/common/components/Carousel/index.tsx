import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { carouselStyles } from './styles'
import { SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";
import CustomText from '../Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { fullMonthOfServiceCardImage, noVehicleCardImage, referAFriendCardImage, requestSubmittedCardImage, subscriptionExpiredCardImage } from '@src/assets/image'
import { CAR_TYPE, HATCHBACK_DETAILS, SEDAN_DETAILS, SUV_DETAILS } from '@src/core/screens/Home/components/DailyCarPlans'
import { StarSVG } from '@src/assets/svg'

export const CAROUSAL_WIDTH = SCREEN_WIDTH - scaleWidthPX(48)

export enum CAROUSEL_TYPE {
	NO_VEHICLE = 'NO_VEHICLE',
	REQUEST_SUBMITTED = 'REQUEST_SUBMITTED',
	SUBSCRIPTION_EXPIRED = 'SUBSCRIPTION_EXPIRED',
	OTHERS = 'OTHERS',
	REFER_A_FRIEND = 'REFER_A_FRIEND',
	FULL_SERVICE = 'FULL_SERVICE',
	TRANSPARENT_MONTH_HATCHBACK = 'TRANSPARENT_MONTH_HATCHBACK',
	TRANSPARENT_MONTH_SUV = 'TRANSPARENT_MONTH_SUV',
	TRANSPARENT_MONTH_SEDAN = 'TRANSPARENT_MONTH_SEDAN'
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
					height={scaleHeightPX(200)}
					data={[{ id: 1, }, { id: 2, }, { id: 3 }]}
					autoPlay
					loop
					pagingEnabled
					autoPlayInterval={3000}
					onProgressChange={(_, absoluteProgress: number) => progress.value = absoluteProgress}
					modeConfig={{
						parallaxScrollingScale: 0.9,
						parallaxScrollingOffset: scaleWidthPX(80),
					}}
					renderItem={({ item }) => {
						return (
							<>
								{item?.id === 1 && renderReferAFriendCard()}
								{item?.id === 2 && renderTransparentMonthCard()}
								{item?.id === 3 && renderFullMonthServiceCard()}
							</>
						)
					}}
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
			<Pressable onPress={() => { onPress && onPress(CAROUSEL_TYPE.NO_VEHICLE) }} style={{ backgroundColor: colors.noVehicleCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18) }}>
				<Image source={{ uri: noVehicleCardImage }} style={{ width: '60%', height: scaleHeightPX(118), position: 'absolute', bottom: 8, right: 8 }} resizeMode='cover' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Add Your Vehicle in Seconds'}</CustomText>
				<CustomText textType='medium' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginTop: scaleHeightPX(8), height: scaleHeightPX(57) }}>
					{`Start your MotorWash journey,\nadd your car to get started!`}
				</CustomText>
				<CustomText textType='bold' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, padding: scaleHeightPX(8), width: scaleWidthPX(90), borderRadius: 5, backgroundColor: colors.white, textAlign: 'center' }}>
					{'Add Vehicle'}
				</CustomText>
			</Pressable>
		)
	}

	const renderRequestSubmittedCard = () => {
		return (
			<Pressable onPress={() => { onPress && onPress(CAROUSEL_TYPE.REQUEST_SUBMITTED) }} style={{ backgroundColor: colors.requestSubmittedCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, alignItems: 'center', flexDirection: 'row', gap: scaleWidthPX(12), paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(12) }}>
				<Image source={{ uri: requestSubmittedCardImage }} style={{ width: scaleWidthPX(120), height: scaleWidthPX(120) }} resizeMode='cover' />
				<View style={{ flex: 1, justifyContent: 'center', paddingRight: scaleHeightPX(24), marginRight: scaleWidthPX(16) }}>
					<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Vehicle Form Submitted'}</CustomText>
					<CustomText textType='medium' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginTop: scaleHeightPX(8), flex: 1 }}>
						{`Our team will contact you\nshortly to confirm your\nservice start`}
					</CustomText>
				</View>
			</Pressable>
		)
	}

	const renderSubscriptionExpiredCard = () => {
		return (
			<Pressable onPress={() => { onPress && onPress(CAROUSEL_TYPE.SUBSCRIPTION_EXPIRED) }} style={{ backgroundColor: colors.subscriptionExpiredCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18) }}>
				<Image source={{ uri: subscriptionExpiredCardImage }} style={{ width: scaleWidthPX(150), height: scaleHeightPX(100), position: 'absolute', bottom: 8, right: 8 }} resizeMode='contain' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Subscription Expired'}</CustomText>
				<CustomText textType='medium' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginVertical: scaleHeightPX(8), }}>
					{`Your MotorWash service has ended.\nRenew now to continue daily car\ncleaning without interruption.`}
				</CustomText>
				<CustomText textType='bold' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, padding: scaleHeightPX(8), width: scaleWidthPX(138), borderRadius: 5, backgroundColor: colors.white, textAlign: 'center', marginTop: scaleHeightPX(8) }}>
					{'Renew Subscription'}
				</CustomText>
			</Pressable>
		)
	}

	const renderReferAFriendCard = () => {
		return (
			<Pressable onPress={() => { onPress && onPress(CAROUSEL_TYPE.REFER_A_FRIEND) }} style={{ backgroundColor: colors.referAFirendCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingVertical: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18), height: scaleHeightPX(200) }}>
				<Image source={{ uri: referAFriendCardImage }} style={{ width: scaleWidthPX(170), height: scaleHeightPX(130), position: 'absolute', bottom: 8, right: 10 }} resizeMode='cover' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Refer A Friend'}</CustomText>
				<CustomText textType='medium' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginVertical: scaleHeightPX(8), }}>
					{`Share MotorWash with\nfriends and`}<CustomText textType='bold' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginVertical: scaleHeightPX(8), }}>
						{` get 50% OFF!`}
					</CustomText>
				</CustomText>
				<CustomText textType='bold' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeXS, padding: scaleHeightPX(8), width: scaleWidthPX(90), borderRadius: 5, backgroundColor: colors.white, textAlign: 'center', marginTop: scaleHeightPX(8) }}>
					{'Refer Now'}
				</CustomText>
			</Pressable>
		)
	}

	const renderFullMonthServiceCard = () => {
		return (
			<Pressable onPress={() => { onPress && onPress(CAROUSEL_TYPE.FULL_SERVICE) }} style={{ backgroundColor: colors.fullMonthServiceCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingTop: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(18), height: scaleHeightPX(200) }}>
				<Image source={{ uri: fullMonthOfServiceCardImage }} style={{ width: '100%', height: scaleHeightPX(110), position: 'absolute', bottom: 0 }} resizeMode='contain' />
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL }} textType='bold' lineHeight>{'Pay After a Full Month of Service!'}</CustomText>
				<CustomText textType='medium' lineHeight style={{ color: colors.borderColor, ...commonFontStyles.fontSizeS, marginTop: scaleHeightPX(1), textAlign: 'center' }}>
					{`No upfront payments. Experience our service\nfirst, then pay at the end of the month`}
				</CustomText>
			</Pressable>
		)
	}

	const renderTransparentMonthCard = () => {
		return (
			<View style={{ backgroundColor: colors.transparentCardBg, width: '90%', alignSelf: 'center', marginBottom: scaleHeightPX(16), marginTop: scaleHeightPX(4), borderRadius: 15, paddingTop: scaleHeightPX(24), paddingHorizontal: scaleWidthPX(12), height: scaleHeightPX(200) }}>
				<CustomText style={{ color: colors.backgroundColor, ...commonFontStyles.fontSizeXL, textAlign: 'center' }} textType='bold' lineHeight>{'Transparent Monthly Pricing'}</CustomText>
				<View style={{
					justifyContent: 'space-between',
					gap: scaleWidthPX(4),
					flexDirection: 'row',
					marginBottom: scaleHeightPX(16),
					marginTop: scaleHeightPX(8)
				}}>
					{renderCarDetails(HATCHBACK_DETAILS)}
					{renderCarDetails(SEDAN_DETAILS)}
					{renderCarDetails(SUV_DETAILS)}
				</View>
			</View>
		)
	}

	const renderCarDetails = (carDetails: any) => {
		const type: CAROUSEL_TYPE = carDetails?.type === CAR_TYPE.SUV ? CAROUSEL_TYPE.TRANSPARENT_MONTH_SUV : carDetails?.type === CAR_TYPE.HATCHBACK ? CAROUSEL_TYPE.TRANSPARENT_MONTH_HATCHBACK : CAROUSEL_TYPE.TRANSPARENT_MONTH_SEDAN
		return (
			<Pressable onPress={() => { onPress && onPress(type) }} style={{
				height: '100%',
				flex: 0.33,
				paddingTop: scaleHeightPX(8),
				gap: scaleHeightPX(8)
			}}>
				<Image style={{ width: scaleWidthPX(90), height: scaleHeightPX(60), alignSelf: 'center' }} source={{ uri: carDetails?.smallImage }} resizeMode='cover' />
				<View style={{ position: 'absolute', right: scaleWidthPX(10), top: scaleHeightPX(22) }}>
					<StarSVG />
				</View>
				<View style={{ gap: scaleHeightPX(1), alignItems: 'center' }}>
					<CustomText textType='bold' style={{ color: colors.black }}>{carDetails?.name}</CustomText>
					<CustomText style={{ color: colors.black, textAlign: 'center', ...commonFontStyles.fontSizeS }}>
						{'@ '}
						<CustomText textType='bold' style={{ color: colors.black, ...commonFontStyles.fontSizeS }}>
							{`₹${carDetails?.price}`}
						</CustomText>
						<CustomText style={{ color: colors.black, ...commonFontStyles.fontSizeS }}>{'/month'}</CustomText>
					</CustomText>
				</View>
			</Pressable>
		)
	}

	return (
		<View>
			{cauroselType === CAROUSEL_TYPE.NO_VEHICLE ? renderNoVehicleCard() : cauroselType === CAROUSEL_TYPE.REQUEST_SUBMITTED ? renderRequestSubmittedCard() : cauroselType === CAROUSEL_TYPE.SUBSCRIPTION_EXPIRED ? renderSubscriptionExpiredCard() : renderCarousel()}
		</View>
	)
}

export default CustomCarousel
