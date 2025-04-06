import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			backgroundColor: colors.backgroundColor
		},
		item: {
			flexDirection: 'row',
			gap: scaleWidthPX(16),
			paddingHorizontal: scaleWidthPX(16),
			alignItems: 'center',
			justifyContent: 'space-between',
			borderBottomWidth: 1,
			borderBottomColor: colors.borderColor,
			height: scaleHeightPX(70)
		},
		itemInner: {
			flexDirection: 'row',
			gap: scaleWidthPX(12),
			alignItems: 'center'
		},
		image: {
			width: '100%',
			height: scaleHeightPX(224),
		},
		profileView: {
			width: scaleWidthPX(126),
			height: scaleWidthPX(126),
			borderRadius: 100,
			alignSelf: 'center',
			marginTop: scaleHeightPX(-100),
			marginBottom: scaleHeightPX(16),
			justifyContent: 'center',
			alignItems: 'center'
		},
		edit: {
			borderRadius: 100,
			width: scaleWidthPX(30),
			height: scaleWidthPX(30),
			backgroundColor: colors.white,
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			top: 0,
			right: scaleWidthPX(8)
		}
	})
}
