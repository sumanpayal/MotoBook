import { useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { RootState } from '@src/common/redux/store/store'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { createStyles } from '../styles'

export const HeaderLeftComponent = () => {
	const { colors } = useTheme()
	const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)
	// console.log({userData});
	
	const styles = createStyles(colors)
	return (
		<View style={styles.headerLeft}>
			<View style={styles.headerLeftImage} />
			<View>
				<CustomText>{'Good Morning,'}</CustomText>
				<CustomText textType='semi-bold' style={commonFontStyles.fontSize3XL}>
					{userData?.fullName || 'Abhishek Goyal'}
				</CustomText>
			</View>
		</View>
	)
}
