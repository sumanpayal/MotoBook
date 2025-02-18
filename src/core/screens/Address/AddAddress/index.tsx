import { Alert, Pressable, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import { createStyles } from './styles'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isEmpty } from 'lodash'
import { postAddAddressAPI } from '@src/network/address'
import { API_RESPONSE } from '@src/common/constants/constants'

enum ADDRESS_KEYS {
	addressType = 'addressType',
	address = 'address',
	landmark = 'landmark',
	country = 'country',
	state = 'state',
	city = 'city',
	postalCode = 'postalCode'
}

const AddAddress = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const addressTypesData = [
		{
			id: 0,
			name: 'Home',
			value: 'Home'
		},
		{
			id: 1,
			name: 'Parent House',
			value: 'Parent_house'
		},
		{
			id: 2,
			name: 'Other',
			value: 'Other'
		},
		{
			id: 3,
			name: 'Office',
			value: 'Office'
		}
	]

	const [addressData, setAddressData] = useState<{
		addressType: any,
		address: string,
		landmark: string,
		country: string,
		state: string,
		city: string,
		postalCode: string
	}>({
		addressType: null,
		address: '',
		landmark: '',
		country: '',
		state: '',
		city: '',
		postalCode: ''
	})

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const isValidateForm = () => {
		if (!addressData?.addressType) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please select Address Type'
			}))
			return false
		}
		if (isEmpty(addressData?.address)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter Address'
			}))
			return false
		}
		if (isEmpty(addressData?.landmark)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter Landmark'
			}))
			return false
		}
		if (isEmpty(addressData?.country)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter Country'
			}))
			return false
		}
		if (isEmpty(addressData?.state)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter State'
			}))
			return false
		}
		if (isEmpty(addressData?.city)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter District'
			}))
			return false
		}
		if (isEmpty(addressData?.postalCode)) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: 'Please enter Pincode'
			}))
			return false
		}

		return true
	}

	const onPressSaveAddress = () => {
		if (isValidateForm()) {
			addAddressAPICall()
		}
	}

	const addAddressAPICall = () => {
		setIsLoading(true)
		const params = {
			"city": addressData?.city,
			"state": addressData?.state,
			"landmark": addressData?.landmark,
			"addressType": addressData?.addressType?.value,
			"country": addressData?.country,
			"postalCode": addressData?.postalCode
		}
		postAddAddressAPI(params, (res: API_RESPONSE) => {
			if (res.data) {
				dispatch(setAlertData({
					isShown: true,
					type: 'success',
					label: res?.data,
				}))
				setTimeout(() => {
					setIsLoading(false)
					navigation.goBack()
				}, 100)
			}
			else {
				setIsLoading(false)
				dispatch(setAlertData({
					isShown: true,
					type: 'error',
					label: res?.error
				}))
			}
		})
	}

	const setAddressDetaills = (key: ADDRESS_KEYS, value: any) => {
		setAddressData({
			...addressData,
			[key]: value
		})
	}

	const RenderAddressItem = ({ item }: { item: any }) => {
		const isSelected = addressData?.addressType?.id === item?.id
		return (
			<Pressable style={[styles.addressItem, isSelected && { borderWidth: 1, borderColor: colors.primary }]} onPress={() => setAddressDetaills(ADDRESS_KEYS.addressType, item)}>
				<CustomText textType={isSelected ? 'bold' : 'regular'}>{item?.name}</CustomText>
			</Pressable>
		)
	}

	const renderSaveAsAddress = () => {
		return (
			<View style={styles.saveAddressAs}>
				<CustomText textType='medium'>
					{'Save Address as '}
					<CustomText style={{ color: colors.alertRed }}>{'*'}</CustomText>
				</CustomText>
				<ScrollView horizontal contentContainerStyle={styles.scrollView} showsHorizontalScrollIndicator={false}>
					{addressTypesData.map((item: any) => {
						return <RenderAddressItem key={item?.id} item={item} />
					})}
				</ScrollView>
			</View>
		)
	}

	const renderForm = () => {
		return (
			<View style={styles.addessOuter}>
				{renderSaveAsAddress()}
				<CustomInput
					label='Address'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.address, text)
					}}
					value={addressData?.address}
					isRequired
				/>
				<CustomInput
					label='Landmark'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.landmark, text)
					}}
					value={addressData?.landmark}
					isRequired
				/>
				<View style={styles.countryOuter}>
					<View style={commonFlexStyles.flex1}>
						<CustomInput
							label='Country'
							onChangeText={(text: string) => {
								setAddressDetaills(ADDRESS_KEYS.country, text)
							}}
							value={addressData?.country}
							isRequired
						/>
					</View>
					<View style={commonFlexStyles.flex1}>
						<CustomInput
							label='State'
							onChangeText={(text: string) => {
								setAddressDetaills(ADDRESS_KEYS.state, text)
							}}
							value={addressData?.state}
							isRequired
						/>
					</View>
				</View>
				<CustomInput
					label='District'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.city, text)
					}}
					value={addressData?.city}
					isRequired
				/>
				<CustomInput
					label='Pincode'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.postalCode, text)
					}}
					value={addressData?.postalCode}
					isRequired
					maxLength={6}
					keyboardType='number-pad'
				/>
			</View>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Address Form'>
			<View style={styles.main}>
				<KeyboardAwareScrollView style={{}} keyboardShouldPersistTaps='handled'>
					{renderForm()}
				</KeyboardAwareScrollView>
				<CustomButton title='Save Address' onPress={onPressSaveAddress} isLoading={isLoading} />
			</View>
		</MainFrame>
	)
}

export default AddAddress
