import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) =>
	StyleSheet.create({
		main: {
			flex: 1,
			backgroundColor: colors.backgroundColor
		},
		topView: {
			backgroundColor: '#162F48',
			width: '100%',
			borderBottomLeftRadius: 60,
			borderBottomRightRadius: 60,
			paddingBottom: scaleHeightPX(16)
		},
		topInner: {
			alignItems: 'center',
			marginTop: scaleHeightPX(16),
			gap: scaleHeightPX(16)
		},
		package: {
			backgroundColor: colors.primary,
			height: scaleHeightPX(40),
			borderRadius: 9,
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: scaleWidthPX(16)
		},
		vehicleDetails: {
			height: scaleHeightPX(120),
			width: '92%',
			flexDirection: 'row',
			gap: scaleWidthPX(16),
			justifyContent: 'space-between',
			marginTop: scaleHeightPX(4)
		},
		planDetailsOuter: {
			marginHorizontal: scaleWidthPX(25),
			marginTop: scaleHeightPX(24),
			gap: scaleHeightPX(16),
			flex: 1
		},
		planDetailsInner: {
			borderWidth: 1,
			height: scaleHeightPX(60),
			alignItems: 'center',
			flexDirection: 'row',
			borderRadius: 15,
			justifyContent: 'space-between',
			paddingHorizontal: scaleWidthPX(16),
			borderColor: colors.white,
			marginHorizontal: scaleWidthPX(20)
		},
		planLeft: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: scaleWidthPX(12),
			flex: 0.6
		},
		planRight: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: scaleWidthPX(12),
			flex: 0.35,
			justifyContent: 'flex-end'
		}
	})
