import commonFontStyles from '@commonStyles/commonFontStyles'
import CustomText from '@components/Text'
import { useTheme } from '@react-navigation/native'
import { resetAlert } from '@src/common/redux/reducers/alert'
import { RootState } from '@src/common/redux/store/store'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import { spacing } from '@src/common/styles/values'
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
					width: isTabletMode ? '65%' : SCREEN_WIDTH - scaleWidthPX(spacing['m']),
					backgroundColor: alertData.type === 'error' ? colors.alertRed : colors.warning,
					position: 'absolute',
					bottom: scaleHeightPX(32),
					...commonAlignStyles.alignSelfCenter,
					...commonBorderRadiusStyles.borderRadiusM,
					...commonFlexStyles.flexRow,
					...commonAlignStyles.alignCenter,
					...commonAlignStyles.justifyCenter,
					...(isTabletMode ? commonPaddingStyles.paddingM : commonPaddingStyles.padding3XS)
				}}>
				<CustomText
					textType='medium'
					lineHeight
					style={{
						...commonFontStyles.fontSizeS,
						color: colors.textColor,
						...commonMarginStyles.marginLeft4XS,
						...commonFlexStyles.flex1
					}}>
					{alertData.label || ''}
				</CustomText>
			</Animated.View>
		)
	}

	return alertData?.isShown ? renderErrorOrWarning() : null
}
