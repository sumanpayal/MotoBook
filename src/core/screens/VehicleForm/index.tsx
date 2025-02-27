import { Pressable, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createStyle } from './styles'
import { API_RESPONSE, colorsList } from '@src/common/constants/constants'
import SingleSelectionModal from '@src/common/components/SingleSelectionModal'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { getAddressListAPI } from '@src/network/address'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isEmpty } from 'lodash'
import { postVehicleDetailsAPI } from '@src/network/car'

const VehicleForm = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyle(colors)

	const route = useRoute()

	const { carCompany, carModal }: any = route?.params

	const [selectedColor, setSelectedColor] = useState<any | null>(null)
	const [allAddressList, setAllAddressList] = useState<any>([])
	const [selectedAddress, setSelectedAddress] = useState<any | null>(null)
	const [registrationNumber, setRegistrationNumber] = useState<string>('')

	const [isColorShow, setIsColorShow] = useState<boolean>(false)
	const [isAddressModalVisible, setIsAddressModalVisible] = useState<boolean>(false)

	useFocusEffect(
		useCallback(() => {
			getAddressList()
		}, [])
	)

	const getAddressList = () => {
		getAddressListAPI((res: API_RESPONSE) => {
			if (res.data) {
				const data = res?.data?.map((item: any) => {
					const address = `${item?.landmark}, ${item?.city}, ${item?.state}, ${item?.country}, ${item?.postalCode}`
					return {
						...item,
						address
					}
				})
				setAllAddressList(data)
			}
		})
	}

	const onPressColor = () => {
		setIsColorShow(!isColorShow)
	}

	const onPressAddAddress = () => {
		navigation.navigate('AddAddress')
	}

	const validateForm = () => {
		if (selectedColor === null) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please select Color'
				})
			)
			return false
		}
		if (isEmpty(registrationNumber)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter Registration Number'
				})
			)
			return false
		}
		if (selectedAddress === null) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please select Address'
				})
			)
			return false
		}
		return true
	}

	const onPressSave = () => {
		if (validateForm()) {
			// call api
			const params = {
				model_id: carModal?._id,
				address_id: selectedAddress?._id,
				carNumber: registrationNumber,
				color: selectedColor?.name
			}
			postVehicleDetailsAPI(params, (response: API_RESPONSE) => {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'success',
						label: response.data
					})
				)
				setTimeout(() => {
					navigation.popToTop()
				}, 500)
			})
		}
	}

	const onPressAddress = () => {
		if (allAddressList?.length === 0) onPressAddAddress()
		else setIsAddressModalVisible(true)
	}

	const onPressSelectColor = (item: any) => {
		setSelectedColor(item)
		setIsColorShow(false)
	}

	const onPressSelectAddress = (item: any) => {
		setSelectedAddress(item)
		setIsAddressModalVisible(false)
	}

	const renderForm = () => {
		return (
			<View style={styles.form}>
				<CustomInput label='Brand' onChangeText={() => {}} value={carCompany?.name} editable={false} />
				<CustomInput label='Model' onChangeText={() => {}} value={carModal?.name} editable={false} />
				<CustomInput label='Category' onChangeText={() => {}} value={carModal?.car_type_id?.name} editable={false} />
				<Pressable onPress={onPressColor}>
					<CustomInput label='Color' onChangeText={() => {}} value={selectedColor?.name} isRightIcon editable={false} iconName={'down'} />
				</Pressable>
				<CustomInput
					label='Registration Number'
					onChangeText={(text: string) => {
						setRegistrationNumber(text)
					}}
					value={registrationNumber}
				/>
				<Pressable onPress={onPressAddress}>
					<CustomInput label='Address' onChangeText={() => {}} value={selectedAddress?.address} isRightIcon editable={false} iconName={'down'} />
				</Pressable>
				<Pressable style={styles.addAddress} onPress={onPressAddAddress}>
					<Icon name='pluscircleo' size={22} color={colors.primary} />
					<CustomText textType='semi-bold' style={{ color: colors.primary }}>
						{'Add Address'}
					</CustomText>
				</Pressable>
			</View>
		)
	}

	const renderColorsItem = (item: any) => {
		return <View style={{ borderWidth: 1, borderColor: colors.inputPlaceholder, width: scaleWidthPX(24), height: scaleWidthPX(24), borderRadius: scaleWidthPX(12), justifyContent: 'center', alignItems: 'center', marginRight: scaleWidthPX(8), backgroundColor: item?.color }} />
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Vehicle Form'>
			<View style={styles.main}>
				<KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>{renderForm()}</KeyboardAwareScrollView>
				<CustomButton title='Save' onPress={onPressSave} />
			</View>
			{isColorShow && <SingleSelectionModal data={colorsList} visible={isColorShow} onClose={() => setIsColorShow(false)} title='Select Color' titleItem='name' idItem='id' selectedItem={selectedColor} setSelectedItem={onPressSelectColor} children={renderColorsItem} />}
			{isAddressModalVisible && <SingleSelectionModal data={allAddressList} visible={isAddressModalVisible} onClose={() => setIsAddressModalVisible(false)} title='Select Address' titleItem='address' idItem='_id' selectedItem={selectedAddress} setSelectedItem={onPressSelectAddress} />}
		</MainFrame>
	)
}

export default VehicleForm
