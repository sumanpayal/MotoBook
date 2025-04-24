import { useNavigation, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { RootState } from '@src/common/redux/store/store'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { Image, Pressable, View } from 'react-native'
import { useSelector } from 'react-redux'
import { createStyles } from '../styles'
import React from 'react'
import { ProfileImage } from '@src/assets/image'

export const HeaderLeftComponent = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

	const navigation: any = useNavigation()

	const navigateToAccountTab = () => {
		navigation.navigate('Account')
	}

	const getImage = () => {
		return profileData?.image ? profileData?.image : ProfileImage
	}

	const getGreeting = () => {
		const currentHour = new Date().getHours();

		if (currentHour >= 0 && currentHour < 12) {
			return 'Good Morning';
		} else if (currentHour >= 12 && currentHour < 16) {
			return 'Good Afternoon';
		} else {
			return 'Good Evening';
		}
	};

	return (
		<View style={styles.headerLeft}>
			<Pressable style={{ justifyContent: 'center' }} onPress={navigateToAccountTab}>
				<Image source={{ uri: getImage() }} style={styles.headerLeftImage} resizeMode='cover' />
			</Pressable>
			<View>
				<CustomText>{getGreeting()}</CustomText>
				<CustomText textType='semi-bold' style={commonFontStyles.fontSize3XL}>
					{profileData?.fullName || 'Car Owner'}
				</CustomText>
			</View>
		</View>
	)
}
