import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) =>
	StyleSheet.create({
		carsButton: {
			position: 'absolute',
			bottom: scaleWidthPX(24),
			right: scaleWidthPX(24),
			width: scaleWidthPX(55),
			height: scaleWidthPX(55),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 100,
			backgroundColor: colors.primary
		},
		userView: {
			height: scaleHeightPX(64),
			alignItems: 'center',
			flexDirection: 'row',
			paddingHorizontal: scaleWidthPX(16),
			gap: scaleWidthPX(16),
			marginBottom: scaleHeightPX(24),
			borderBottomColor: colors.inputPlaceholder,
			borderBottomWidth: 1
		},
		userImageView: {
			borderWidth: 1,
			borderRadius: 100,
			borderColor: colors.inputPlaceholder,
			justifyContent: 'center',
			alignItems: 'center',
			width: scaleHeightPX(40),
			height: scaleHeightPX(40)
		}
	})
