import { View, FlatList, Pressable, ImageBackground, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import CustomText from '@src/common/components/Text'
import { setProfileData, setUserData } from '@src/common/redux/reducers/currentUser'
import { useDispatch, useSelector } from 'react-redux'
import { AboutSVG, EditSVG, LogoutSVG, MyAccountSVG, MyAddressSVG, MyCarsSVG, PrivacyPolicySVG, RightArrowSVG, TermsSVG } from '@src/assets/svg'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { AccountBgImage, ProfileImage } from '@src/assets/image'
import { HeaderNavigation } from '@src/common/components/HeaderNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { InAppBrowserType } from '../InAppBrowser'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { FilePickerModal } from '@src/common/components/FilePickerModal'
import { API_RESPONSE } from '@src/common/constants/constants'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { getUserProfileDetails, postUpdateUserDetails } from '@src/network/login'
import { RootState } from '@src/common/redux/store/store'

const MySettings = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

	const [openImagePicker, setOpenImagePicker] = useState(false)

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

	useFocusEffect(useCallback(() => {
		dispatch(setIsFullScreenLoading(false))
	}, []))

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
				navigation.navigate('MyAccount')
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
				// help center
				navigation.navigate('HelpCenter')
				break
			case 4:
				// privacy policy
				navigation.navigate('InAppBrowser', { type: InAppBrowserType.privacy, title: 'Privacy Policy' })
				break
			case 5:
				// terms & conditions
				navigation.navigate('InAppBrowser', { type: InAppBrowserType.terms, title: 'Terms Of Service' })
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
		navigation.reset({
			index: 0,
			routes: [{ name: 'PreLogin' }]
		})
	}

	const getUserDetails = () => {
		getUserProfileDetails((res: API_RESPONSE) => {
			if (res?.data) {
				dispatch(setProfileData(res?.data))
			}
		})
	}

	const onPressSaveProfile = (image: any) => {
		// call api
		dispatch(setIsFullScreenLoading(true))
		const params = {
			"email": profileData?.email ?? '',
			"fullName": profileData?.fullName ?? '',
			"image": image?.base64
		}
		postUpdateUserDetails({}, params, (res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res?.data) {
				dispatch(setAlertData({
					isShown: true,
					type: 'success', label: res?.data
				}))
				getUserDetails()
			}
			else {
				dispatch(setAlertData({
					isShown: true,
					type: 'error', label: res?.error
				}))
			}
		})
	}

	const isDefaultImage = () => {
		return profileData?.image ? false : true
	}

	const getImage = () => {
		return profileData?.image ? 'data:image/png;base64,' + profileData?.image : ProfileImage
	}

	const onPressEditProfileImageOnPress = () => { setOpenImagePicker(true) }

	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: AccountBgImage }} style={styles.image} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}>
				<SafeAreaView edges={['top']} />
				<HeaderNavigation isBack={false} title='My Profile' />
			</ImageBackground>
			<Pressable style={styles.profileView} onPress={onPressEditProfileImageOnPress}>
				<Image source={{ uri: getImage() }} style={{ width: isDefaultImage() ? '145%' : '100%', height: isDefaultImage() ? '145%' : '100%', position: 'absolute', borderRadius: 100 }} resizeMode='cover' />
				<Pressable onPress={onPressEditProfileImageOnPress} style={styles.edit}>
					<EditSVG />
				</Pressable>
			</Pressable>
			<FlatList data={data} renderItem={renderItem} keyExtractor={(item: any) => `${item?.id}`} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} />
			<FilePickerModal visible={openImagePicker} onClose={() => { setOpenImagePicker(false) }} onSelect={(image: any) => onPressSaveProfile(image)} />
		</View>
	)
}

export default MySettings
