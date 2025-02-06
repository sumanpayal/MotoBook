import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'
import FullScreenLoaderStyles from './styles'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { useSelector } from 'react-redux'
import { useTheme } from '@react-navigation/native'
import { AppLoader } from '@src/assets/lottie'
import { RootState } from '@src/common/redux/store/store'

const FullScreenLoader = () => {
	const isLoading = useSelector((state: RootState) => state.root.loader.isFullScreenLoading)
	const { colors } = useTheme()
	const styles = FullScreenLoaderStyles(colors)

	return (
		<>
			{isLoading && (
				<View style={styles.modalContainer}>
					<View style={styles.center}>
						<LottieView source={AppLoader} autoPlay={true} style={{ height: scaleWidthPX(150), width: scaleWidthPX(150) }} />
					</View>
				</View>
			)}
		</>
	)
}

export default FullScreenLoader
