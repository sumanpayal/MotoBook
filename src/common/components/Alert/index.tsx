import commonFontStyles from '@commonStyles/commonFontStyles'
import CustomText from '@components/Text'
import { useTheme } from '@react-navigation/native'
import { resetAlert } from '@src/common/redux/reducers/alert'
import { RootState } from '@src/common/redux/store/store'
import { isTabletMode, SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React, { useEffect } from 'react'
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'

export default function CustomAlert() {
	const { colors } = useTheme()
	const dispatch = useDispatch()

	const alertData: AlertData = useSelector((state: RootState) => state.root.alert.alertData)

	useEffect(() => {
		if (alertData.isShown) {
			setTimeout(() => {
				dispatch(resetAlert())
			}, 4000)
		}
	}, [alertData.isShown])

	const renderErrorOrWarning = () => {
		return (
			<Animated.View
				entering={FadeInDown}
				exiting={FadeOutDown}
				style={{
					minHeight: scaleHeightPX(51),
					width: isTabletMode ? '65%' : SCREEN_WIDTH - scaleWidthPX(16),
					backgroundColor: alertData.type === 'error' ? colors.alertRed : alertData.type === 'warning' ? colors.warning : colors.alertGreen,
					position: 'absolute',
					bottom: scaleHeightPX(32),
					alignSelf: 'center',
					borderRadius: 8,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					...(isTabletMode ? { paddingHorizontal: scaleWidthPX(16), paddingVertical: scaleHeightPX(16) } : { paddingHorizontal: scaleWidthPX(8), paddingVertical: scaleHeightPX(8) })
				}}>
				<CustomText
					textType='medium'
					lineHeight
					style={{
						...commonFontStyles.fontSizeS,
						color: colors.white,
						marginLeft: scaleWidthPX(8),
						flex: 1
					}}>
					{alertData.label || ''}
				</CustomText>
			</Animated.View>
		)
	}

	return alertData?.isShown ? renderErrorOrWarning() : null
}
