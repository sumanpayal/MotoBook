import { useNavigation, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { RootState } from '@src/common/redux/store/store'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { Image, Pressable, View } from 'react-native'
import { useSelector } from 'react-redux'
import { createStyles } from '../styles'
import React from 'react'
import { ProfileImage } from '@src/assets/image'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const HeaderLeftComponent = () => {
	const { colors } = useTheme()

	const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

	const navigation: any = useNavigation()

	const navigateToAccountTab = () => {
		navigation.navigate('Account')
	}

	const getImage = () => {
		return profileData?.image ? 'data:image/png;base64,' + profileData?.image : ProfileImage
	}

	const styles = createStyles(colors)
	return (
		<View style={styles.headerLeft}>
			<Pressable onPress={navigateToAccountTab}>
				<Image source={{ uri: getImage() }} style={styles.headerLeftImage} resizeMode='cover' />
			</Pressable>
			<View>
				<CustomText>{'Good Morning,'}</CustomText>
				<CustomText textType='semi-bold' style={commonFontStyles.fontSize3XL}>
					{profileData?.fullName || 'Car Owner'}
				</CustomText>
			</View>
		</View>
	)
}
