import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) =>
	StyleSheet.create({
		carsButton: {
			position: 'absolute',
			bottom: scaleWidthPX(24),
			right: scaleWidthPX(16),
			width: scaleWidthPX(60),
			height: scaleWidthPX(60),
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
			gap: scaleWidthPX(16)
		},
		userImageView: {
			borderWidth: 1,
			borderRadius: 100,
			borderColor: colors.inputPlaceholder,
			justifyContent: 'center',
			alignItems: 'center',
			width: scaleHeightPX(40),
			height: scaleHeightPX(40)
		},
		container: {
			marginTop: scaleHeightPX(4),
			gap: scaleHeightPX(24),
		},
		interiorView: {
			backgroundColor: colors.interiorBg,
			height: scaleHeightPX(38),
			borderRadius: 2,
			justifyContent: 'center',
			paddingHorizontal: scaleWidthPX(12),
			marginHorizontal: scaleWidthPX(22)
		},
		carousel: {
			marginTop: scaleHeightPX(20)
		},
		header: {
			backgroundColor: colors.headerBg,
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20,
			paddingBottom: scaleHeightPX(16)
		},
		search: {
			marginHorizontal: scaleWidthPX(25),
			marginTop: scaleHeightPX(16)
		},
		carPlanOuter: {
			height: scaleHeightPX(154),
			justifyContent: 'space-between',
			gap: scaleWidthPX(16),
			flexDirection: 'row',
			flex: 1
		},
		carPlanInner: {
			height: '100%',
			flex: 0.33,
			borderRadius: 15,
			paddingTop: scaleHeightPX(16),
			gap: scaleHeightPX(16),
			borderColor: colors.white,
			borderWidth: 1
		},
		carPlanImage: {
			width: '80%',
			height: scaleHeightPX(60),
			alignSelf: 'center'
		},
		carPlanBottom: {
			borderTopWidth: 1,
			borderTopColor: colors.white + '4D',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			borderBottomLeftRadius: 15,
			borderBottomRightRadius: 15,
			paddingVertical: scaleHeightPX(10),
			gap: scaleHeightPX(2)
		},
		headerLeft: {
			flexDirection: 'row',
			gap: scaleWidthPX(16)
		},
		headerLeftImage: {
			width: scaleWidthPX(40),
			height: scaleWidthPX(40),
			borderRadius: 100
		},
		howItWorksOuter: {
			gap: scaleHeightPX(24),
			marginTop: scaleHeightPX(24),
			marginBottom: scaleHeightPX(70),
			marginHorizontal: scaleWidthPX(20)
		},
		howItWorksInner: {
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'space-between',
			gap: scaleWidthPX(6),
			marginBottom: scaleHeightPX(16),
			alignItems: 'center'
		},
		howItem: {
			gap: scaleHeightPX(8),
			width: scaleWidthPX(100)
		},
		howItemLeft: {
			flexDirection: 'row',
			gap: scaleWidthPX(6)
		},
		howItemText: {
			...commonFontStyles.fontSizeS,
			marginTop: -scaleHeightPX(2),
			height: scaleHeightPX(52),
			width: '80%'
		},
		planOuter: {
			gap: scaleHeightPX(16),
			marginTop: scaleHeightPX(8),
			marginHorizontal: scaleWidthPX(22)
		},
		planInner: {
			gap: scaleWidthPX(12),
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: '#182632',
			height: scaleHeightPX(50),
			paddingHorizontal: scaleWidthPX(12),
			borderRadius: 5
		}
	})
