import { Pressable, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createStyle } from './styles'
import { API_RESPONSE } from '@src/common/constants/constants'
import SingleSelectionModal from '@src/common/components/SingleSelectionModal'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { getAddressListAPI, getColorsList } from '@src/network/address'
import { useDispatch, useSelector } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isEmpty } from 'lodash'
import { getSubscriptionPlansList, getSubscriptionTimeSlotsList, postSubscriptionDetailsAPI } from '@src/network/car'
import { RootState } from '@src/common/redux/store/store'
import MultiSelectionModal from '@src/common/components/MultiSelectionModal'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonFontStyles from '@src/common/styles/commonFontStyles'

const VehicleForm = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyle(colors)

	const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)

	const route = useRoute()

	const { carCompany, carModal }: any = route?.params

	const [selectedColor, setSelectedColor] = useState<any | null>(null)
	const [allAddressList, setAllAddressList] = useState<any>([])
	const [selectedAddress, setSelectedAddress] = useState<any | null>(null)
	const [registrationNumber, setRegistrationNumber] = useState<string>('')

	const [isColorShow, setIsColorShow] = useState<boolean>(false)
	const [isAddressModalVisible, setIsAddressModalVisible] = useState<boolean>(false)

	const [isTimeSlotsModalVisible, setIsTimeSlotsModalVisible] = useState<boolean>(false)

	const [subscriptionPlansData, setSubscriptionPlansData] = useState<any[]>([])
	const [subscriptionTimeSlotsData, setSubscriptionTimeSlotsData] = useState<any[]>([])

	const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<any>(null)

	const [colorsList, setColorsList] = useState<any[]>([])

	useFocusEffect(
		useCallback(() => {
			getAddressList()
			getSubscriptionPlansListFromAPI()
			getSubscriptionTimeSlotsFromAPI()
			getColorsListFromAPI()
		}, [])
	)

	const getColorsListFromAPI = () => {
		getColorsList((res: API_RESPONSE) => {
			if (res.data) {
				setColorsList(res.data)
			}
		})
	}

	const getSubscriptionTimeSlotsFromAPI = () => {
		getSubscriptionTimeSlotsList((res: API_RESPONSE) => {
			if (res.data) {
				const data = res?.data?.map((item: any, index: number) => {
					return {
						...item,
						isSelected: false,
						id: index,
						title: `${item?.start} - ${item?.end}`
					}
				})
				setSubscriptionTimeSlotsData(data)
			}
		})
	}

	const getSubscriptionPlansListFromAPI = () => {
		getSubscriptionPlansList(carModal?.car_type_id?._id, (res: API_RESPONSE) => {
			if (res.data) {
				setSubscriptionPlansData(res.data)
			}
		})
	}

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
		if (selectedTimeSlots?.length === 0) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please select Time Slots'
				})
			)
			return false
		}
		if (selectedSubscriptionPlan === null) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please select Subscription Plan'
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
				plan_id: selectedSubscriptionPlan?._id,
				timeSlot: selectedTimeSlots?.map((item: any) => {
					return {
						start: item?.start,
						end: item?.end
					}
				}),
				color_id: selectedColor?._id
			}
			postSubscriptionDetailsAPI(params, (response: API_RESPONSE) => {
				if (response.error) {
					dispatch(
						setAlertData({
							isShown: true,
							type: 'error',
							label: response.error
						})
					)
					return
				}
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

	const onPressSubscriptionTimeSlot = () => {
		setIsTimeSlotsModalVisible(true)
	}

	const onPressSelectColor = (item: any) => {
		setSelectedColor(item)
		setIsColorShow(false)
	}

	const onPressSelectTimeSlots = (data: any[]) => {
		setSubscriptionTimeSlotsData(data)
		setIsTimeSlotsModalVisible(false)
	}

	const onPressSelectAddress = (item: any) => {
		setSelectedAddress(item)
		setIsAddressModalVisible(false)
	}

	const selectedTimeSlots = useMemo(() => {
		return subscriptionTimeSlotsData?.filter((item: any) => item?.isSelected)
	}, [subscriptionTimeSlotsData])

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
					maxLength={10}
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
				<Pressable onPress={onPressSubscriptionTimeSlot}>
					<CustomInput label='Time Slots' onChangeText={() => {}} value={`${selectedTimeSlots?.length} selected`} isRightIcon editable={false} iconName={'down'} />
				</Pressable>
				<View style={{ gap: scaleHeightPX(16) }}>
					<CustomText style={{ marginTop: scaleHeightPX(8), ...commonFontStyles.fontSizeL }} textType='bold'>
						Subscription Plans
					</CustomText>
					{subscriptionPlansData?.map((item: any, index: number) => {
						return (
							<Pressable key={item?._id} style={{ borderWidth: 1, borderColor: selectedSubscriptionPlan?._id === item?._id ? colors.primary : colors.inputPlaceholder, padding: scaleWidthPX(16), borderRadius: 12 }} onPress={() => setSelectedSubscriptionPlan(item)}>
								<CustomText>{`Duration: ${item?.duration} ${item?.type}`}</CustomText>
								<CustomText textType='semi-bold'>{`Price: ₹${item?.price}`}</CustomText>
							</Pressable>
						)
					})}
					<View style={commonMarginStyles.marginVertical2XL} />
				</View>
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
			{isColorShow && <SingleSelectionModal data={colorsList} visible={isColorShow} onClose={() => setIsColorShow(false)} title='Select Color' titleItem='name' idItem='_id' selectedItem={selectedColor} setSelectedItem={onPressSelectColor} children={renderColorsItem} />}
			{isAddressModalVisible && <SingleSelectionModal data={allAddressList} visible={isAddressModalVisible} onClose={() => setIsAddressModalVisible(false)} title='Select Address' titleItem='address' idItem='_id' selectedItem={selectedAddress} setSelectedItem={onPressSelectAddress} />}
			{isTimeSlotsModalVisible && <MultiSelectionModal data={subscriptionTimeSlotsData} visible={isTimeSlotsModalVisible} onClose={() => setIsTimeSlotsModalVisible(false)} title='Select Time Slots' setSelectedItem={onPressSelectTimeSlots} />}
		</MainFrame>
	)
}

export default VehicleForm
