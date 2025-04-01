import React from 'react'
import { View } from 'react-native'
import CustomText from '../Text'
import { NoRecordFoundProps } from './types'
import { useSelector } from 'react-redux'
import { RootState } from '@src/common/redux/store/store'
import { styles } from './styles'
import { Image } from 'react-native'
import LottieView from 'lottie-react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const NoRecordFound: React.FC<NoRecordFoundProps> = (props) => {
	const { containerStyles, noRecordTextStyles, noRecordText = 'No Records Found', isImage = false, imageSource, imageStyle, isLottieImage = false, LottieImage } = props

	const isLoading = useSelector((state: RootState) => state.root.loader.isFullScreenLoading)
	return (
		<>
			{!isLoading && (
				<View style={[styles.container, containerStyles]}>
					{isImage && <Image source={{uri: imageSource}} style={imageStyle} resizeMode='center' />}
					{isLottieImage && <LottieView source={LottieImage} style={{ width: scaleWidthPX(300), height: scaleHeightPX(250)}} autoPlay loop />}
					<CustomText style={{ color: '#546D96', ...noRecordTextStyles }}>{noRecordText}</CustomText>
				</View>
			)}
		</>
	)
}
