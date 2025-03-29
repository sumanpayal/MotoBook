import { View, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import CustomText from '@src/common/components/Text'
import { setUserData } from '@src/common/redux/reducers/currentUser'
import { useDispatch } from 'react-redux'
import { AboutSVG, EditSVG, LogoutSVG, MyAccountSVG, MyAddressSVG, MyCarsSVG, PrivacyPolicySVG, RightArrowSVG, TermsSVG } from '@src/assets/svg'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { AccountBgImage } from '@src/assets/image'
import { HeaderNavigation } from '@src/common/components/HeaderNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'

const MySettings = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const data = [
		{
			id: 0,
			title: 'My Profile',
			icon: MyAccountSVG,
			color: colors.white
		},
		{
			id: 1,
			title: 'My Car',
			icon: MyCarsSVG,
			color: colors.white
		},
		{
			id: 2,
			title: 'Manage Service Address',
			icon: MyAddressSVG,
			color: colors.white
		},
		{
			id: 3,
			title: 'Help Center',
			icon: AboutSVG,
			color: colors.white
		},
		{
			id: 4,
			title: 'Privacy Policy',
			icon: PrivacyPolicySVG,
			color: colors.white
		},
		{
			id: 5,
			title: 'Terms Of Service',
			icon: TermsSVG,
			color: colors.white
		},
		{
			id: 6,
			title: 'Log Out',
			icon: LogoutSVG,
			color: colors.alertRed
		}
	]

	const renderItem = ({ item }: { item: any }) => {
		const Icon = item?.icon
		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item?.id)}>
				<View style={styles.itemInner}>
					<Icon />
					<CustomText style={{ ...commonFontStyles.fontSizeL, color: item?.color }}>{item?.title}</CustomText>
				</View>
				<RightArrowSVG />
			</Pressable>
		)
	}

	const onPressItem = (id: number) => {
		switch (id) {
			case 0:
				// my account
				break
			case 1:
				// my cars
				navigation.navigate('MyCars', { fromCars: true })
				break
			case 2:
				// address list
				navigation.navigate('AddressList')
				break
			case 3:
				// about us
				break
			case 4:
				// privacy policy
				break
			case 5:
				// terms & conditions
				break
			case 6:
				// logout
				logoutOnPress()
				break
			default:
				break
		}
	}

	const logoutOnPress = () => {
		dispatch(setUserData(null))
		navigation.navigate('PreLogin')
	}

	const onPressEditProfileImageOnPress = () => { }

	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: AccountBgImage }} style={styles.image} resizeMode='contain'>
				<SafeAreaView edges={['top']} />
				<HeaderNavigation isBack={false} title='My Profile' />
			</ImageBackground>
			<View style={styles.profileView}>
				<Pressable onPress={onPressEditProfileImageOnPress} style={styles.edit}>
					<EditSVG />
				</Pressable>
			</View>
			<FlatList data={data} renderItem={renderItem} keyExtractor={(item: any) => `${item?.id}`} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} />
		</View>
	)
}

export default MySettings
