import { Pressable, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createStyles } from './styles'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isEmpty } from 'lodash'
import { postAddAddressAPI, postUpdateAddAddressAPI } from '@src/network/address'
import { API_RESPONSE } from '@src/common/constants/constants'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { UseLocationSVG } from '@src/assets/svg'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'

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
			name: `Parent's House`,
			value: 'Parent_house'
		},
		{
			id: 3,
			name: 'Office',
			value: 'Office'
		},
		{
			id: 2,
			name: 'Other',
			value: 'Other'
		},
	]

	const { params }: any = useRoute()

	const isEdit = params?.isEdit ?? false
	const addressDetails = params?.addressDetails ?? null

	const addressTypesData1 = addressDetails?.addressType ? addressTypesData?.find((item: any) => item?.value === addressDetails?.addressType) : null

	const [addressData, setAddressData] = useState<{
		addressType: any
		address: string
		landmark: string
		country: string
		state: string
		city: string
		postalCode: string
	}>({
		addressType: addressTypesData1,
		address: addressDetails?.address ?? '',
		landmark: addressDetails?.landmark ?? '',
		country: addressDetails?.country ?? 'India',
		state: addressDetails?.state ?? 'Rajasthan',
		city: addressDetails?.city ?? 'Jaipur',
		postalCode: addressDetails?.postalCode ?? ''
	})

	const [isLoading, setIsLoading] = useState<boolean>(false)

	useFocusEffect(useCallback(() => {
		dispatch(setIsFullScreenLoading(false))
	}, []))

	const isValidateForm = () => {
		if (!addressData?.addressType) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please select Address Type'
				})
			)
			return false
		}
		if (isEmpty(addressData?.address)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter Address'
				})
			)
			return false
		}
		if (isEmpty(addressData?.landmark)) {
			dispatch(
				setAlertData({
					isShown: false,
					type: 'error',
					label: 'Please enter Landmark'
				})
			)
			return true
		}
		if (isEmpty(addressData?.country)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter Country'
				})
			)
			return false
		}
		if (isEmpty(addressData?.state)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter State'
				})
			)
			return false
		}
		if (isEmpty(addressData?.city)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter District'
				})
			)
			return false
		}
		if (isEmpty(addressData?.postalCode)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter Pincode'
				})
			)
			return false
		}

		return true
	}

	const useMyLocationOnPress = () => { }

	const onPressSaveAddress = () => {
		if (isValidateForm()) {
			addAddressAPICall()
		}
	}

	const addAddressAPICall = () => {
		setIsLoading(true)
		const params = {
			city: addressData?.city,
			state: addressData?.state,
			landmark: addressData?.landmark,
			addressType: addressData?.addressType?.value,
			country: addressData?.country,
			postalCode: addressData?.postalCode,
			address: addressData?.address
		}
		if (isEdit) {
			postUpdateAddAddressAPI(addressDetails?._id, params, (res: API_RESPONSE) => {
				if (res.data) {
					dispatch(
						setAlertData({
							isShown: true,
							type: 'success',
							label: res?.data
						})
					)
					setTimeout(() => {
						setIsLoading(false)
						navigation.goBack()
					}, 100)
				} else {
					setIsLoading(false)
					dispatch(
						setAlertData({
							isShown: true,
							type: 'error',
							label: res?.error
						})
					)
				}
			})
		}
		else {
			postAddAddressAPI(params, (res: API_RESPONSE) => {
				if (res.data) {
					dispatch(
						setAlertData({
							isShown: true,
							type: 'success',
							label: res?.data
						})
					)
					setTimeout(() => {
						setIsLoading(false)
						navigation.goBack()
					}, 100)
				} else {
					setIsLoading(false)
					dispatch(
						setAlertData({
							isShown: true,
							type: 'error',
							label: res?.error
						})
					)
				}
			})
		}
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
			<Pressable style={[styles.addressItem, isSelected && { borderWidth: 1, borderColor: colors.primary, backgroundColor: colors.primary }]} onPress={() => setAddressDetaills(ADDRESS_KEYS.addressType, item)}>
				<CustomText textType={'semi-bold'} style={{ color: isSelected ? colors.backgroundColor : colors.white }}>
					{item?.name}
				</CustomText>
			</Pressable>
		)
	}

	const renderSaveAsAddress = () => {
		return (
			<View style={styles.saveAddressAs}>
				<CustomText textType='bold' style={commonFontStyles.fontSizeXL}>
					{'Save Address As '}
					<CustomText style={{ color: colors.alertRed }}>{'*'}</CustomText>
				</CustomText>
				<View style={styles.scrollView}>
					{addressTypesData.map((item: any) => {
						return <RenderAddressItem key={item?.id} item={item} />
					})}
				</View>
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
					placeholder='Enter Address'
					value={addressData?.address}
					isRequired
				/>
				<CustomInput
					label='Landmark'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.landmark, text)
					}}
					placeholder='Enter Landmark'
					value={addressData?.landmark}
					isRequired={false}
				/>
				<View style={styles.countryOuter}>
					<View style={{ flex: 1 }}>
						<CustomInput
							label='Country'
							onChangeText={(text: string) => {
								setAddressDetaills(ADDRESS_KEYS.country, text)
							}}
							editable={false}
							placeholder='Enter Country'
							value={addressData?.country}
							isRequired
						/>
					</View>
					<View style={{ flex: 1 }}>
						<CustomInput
							label='State'
							onChangeText={(text: string) => {
								setAddressDetaills(ADDRESS_KEYS.state, text)
							}}
							editable={false}
							placeholder='Enter State'
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
					editable={false}
					placeholder='Enter District'
					value={addressData?.city}
					isRequired
				/>
				<CustomInput
					label='Pincode'
					onChangeText={(text: string) => {
						setAddressDetaills(ADDRESS_KEYS.postalCode, text)
					}}
					placeholder='Enter Pincode'
					value={addressData?.postalCode}
					isRequired
					maxLength={6}
					keyboardType='number-pad'
				/>
				<Pressable style={{ flexDirection: 'row', gap: scaleWidthPX(16), alignItems: 'center', marginBottom: scaleHeightPX(24) }} onPress={useMyLocationOnPress}>
					<UseLocationSVG />
					<CustomText style={commonFontStyles.fontSizeL}>{'Use My Location'}</CustomText>
				</Pressable>
				<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Save Address' onPress={onPressSaveAddress} isLoading={isLoading} />
			</View>
		)
	}

	return (
		<MainFrame isHeader title='Address Form' isNotifications={false}>
			<View style={styles.main}>
				<KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
					{renderForm()}
				</KeyboardAwareScrollView>
			</View>
		</MainFrame>
	)
}

export default AddAddress
