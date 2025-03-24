import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import { StyleSheet } from 'react-native'

const FullScreenLoaderStyles = (colors: any) =>
	StyleSheet.create({
		modalContainer: {
			backgroundColor: colors.loaderBackground,
			position: 'absolute',
			height: SCREEN_HEIGHT,
			width: SCREEN_WIDTH,
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		},
		center: {
			alignItems: 'center',
			justifyContent: 'center'
		}
	})

export default FullScreenLoaderStyles
