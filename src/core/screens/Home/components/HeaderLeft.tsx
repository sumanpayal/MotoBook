import { useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { RootState } from '@src/common/redux/store/store'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { Image, View } from 'react-native'
import { useSelector } from 'react-redux'
import { createStyles } from '../styles'
import React from 'react'
import { DEFAULT_IMAGE_URL } from '@src/common/constants/constants'

export const HeaderLeftComponent = () => {
	const { colors } = useTheme()
	const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)

	const styles = createStyles(colors)
	return (
		<View style={styles.headerLeft}>
			<Image source={{ uri: DEFAULT_IMAGE_URL }} style={styles.headerLeftImage} resizeMode='cover' />
			<View>
				<CustomText>{'Good Morning,'}</CustomText>
				<CustomText textType='semi-bold' style={commonFontStyles.fontSize3XL}>
					{userData?.fullName || 'Abhishek Goyal'}
				</CustomText>
			</View>
		</View>
	)
}
