import { useNavigation, useTheme } from '@react-navigation/native'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useSelector } from 'react-redux'
import { createStyles } from './styles'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { RootState } from '@src/common/redux/store/store'

const HomeScreen = () => {
	const navigation: any = useNavigation()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)

	const renderMyCarsButton = () => {
		return (
			<Pressable style={styles.carsButton} onPress={() => navigation.navigate('MySubscriptions')}>
				<CustomText textType='bold'>{'Cars'}</CustomText>
			</Pressable>
		)
	}

	return (
		<MainFrame>
			<View style={commonFlexStyles.flex1}>
				<View style={styles.userView}>
					<View style={styles.userImageView} />
					<CustomText style={commonFontStyles.fontSizeXL} textType='semi-bold'>{`Hello ${userData?.fullName || ''}`}</CustomText>
				</View>
				{renderMyCarsButton()}
			</View>
		</MainFrame>
	)
}

export default HomeScreen
