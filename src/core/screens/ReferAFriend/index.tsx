import { View } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import CustomButton from '@src/common/components/Button'
import { useTheme } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { createStyles } from './styles'

const ReferAFriend = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const RenderCountView = ({ label, value }: { label: string; value: any }) => {
		return (
			<View style={styles.subContainer}>
				<CustomText style={{ ...commonFontStyles.fontSizeS }}>{label}</CustomText>
				<View style={styles.subView}>
					<CustomText textType='medium' style={{ color: colors.backgroundColor }}>
						{value}
					</CustomText>
				</View>
			</View>
		)
	}
	return (
		<MainFrame>
			<View style={styles.main}>
				<View style={styles.imageOuterView} />
				<View style={styles.topView}>
					<CustomText>{'Refer A Friend'}</CustomText>
					<View style={styles.codeView}>
						<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeL }}>
							{'12345678912345'}
						</CustomText>
						<CustomText textType='bold' style={{ color: colors.primary }}>
							{'copy'}
						</CustomText>
					</View>
				</View>
				<CustomButton title='Refer friends now' onPress={() => {}} isCircleRadius={false} showIcon SVGIcon={'share-outline'} />
				<View style={styles.bottomView}>
					<View style={styles.container}>
						<RenderCountView label='Refer code' value={'0'} />
						<RenderCountView label='Subscription' value={'0'} />
						<RenderCountView label='Coupon claim' value={'0'} />
					</View>
				</View>
			</View>
		</MainFrame>
	)
}

export default ReferAFriend
