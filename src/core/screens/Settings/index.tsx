import { View, FlatList, Pressable } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation, useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import CustomButton from '@src/common/components/Button'
import { setUserData } from '@src/common/redux/reducers/currentUser'
import { useDispatch } from 'react-redux'

const MySettings = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const data = [
		{
			id: 0,
			title: 'My Account'
		},
		{
			id: 1,
			title: 'My Cars'
		},
		{
			id: 2,
			title: 'My Addresses'
		},
		{
			id: 3,
			title: 'About Us'
		},
		{
			id: 4,
			title: 'Privacy Policy'
		},
		{
			id: 5,
			title: 'Terms & Conditions'
		}
	]

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const renderItem = ({ item }: { item: any }) => {
		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item?.id)}>
				<CustomText textType='medium'>{item?.title}</CustomText>
			</Pressable>
		)
	}

	const onPressItem = (id: number) => {
		switch (id) {
			case 0:
				// my account
				break
			case 1:
				navigation.navigate('MySubscriptions')
				break
			case 2:
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
			default:
				break
		}
	}

	const logoutOnPress = () => {
		dispatch(setUserData(null))
	}

	const renderFooter = () => {
		return (
			<View style={{ marginVertical: scaleHeightPX(16) }}>
				<CustomButton title='Logout' onPress={logoutOnPress} />
			</View>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Settings'>
			<View style={styles.main}>
				<FlatList data={data} renderItem={renderItem} keyExtractor={(item: any) => `${item?.id}`} ItemSeparatorComponent={() => <View style={styles.seperator} />} ListHeaderComponent={() => <View style={{ marginTop: scaleHeightPX(16) }} />} ListFooterComponent={renderFooter} />
			</View>
		</MainFrame>
	)
}

export default MySettings
