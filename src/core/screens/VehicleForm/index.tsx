import { Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createStyle } from './styles'
import { API_RESPONSE } from '@src/common/constants/constants'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { getAddressListAPI, getColorsList } from '@src/network/address'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isEmpty } from 'lodash'
import { getCarModalDetailsFromAPI, getSubscriptionTimeSlotsList, postSubscriptionDetailsAPI } from '@src/network/car'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { AddSVG, RegistrationNoSVG } from '@src/assets/svg'
import CustomDropdown from '@src/common/components/Dropdown'
import { RenderSubscritionPlans } from './SubscriptionPlans'
import RenderModals from './Modals'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import CustomDate from '@src/common/components/CustomDate'

const VehicleForm = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyle(colors)

	const route = useRoute()
	const { carCompany, carModal }: any = route?.params

	// const carCompany = null
	// const carModal = null

	const [selectedColor, setSelectedColor] = useState<any | null>(null)
	const [allAddressList, setAllAddressList] = useState<any>([])
	const [selectedAddress, setSelectedAddress] = useState<any | null>(null)
	const [registrationNumber, setRegistrationNumber] = useState<string>('')
	const [referralCode, setReferralCode] = useState<string>('')

	const [startDate, setStartDate] = useState<any>(null)

	const [isColorShow, setIsColorShow] = useState<boolean>(false)
	const [isAddressModalVisible, setIsAddressModalVisible] = useState<boolean>(false)

	const [isTimeSlotsModalVisible, setIsTimeSlotsModalVisible] = useState<boolean>(false)

	const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false)

	const [isInteriorCleaning, setIsInteriorCleaning] = useState<boolean>(false)

	const [subscriptionPlansData, setSubscriptionPlansData] = useState<any[]>([])
	const [subscriptionTimeSlotsData, setSubscriptionTimeSlotsData] = useState<any[]>([])

	const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<any>(null)
	const [selectedSubscriptionTimeSlot, setSelectedSubscriptionTimeSlot] = useState<any>(null)

	const [colorsList, setColorsList] = useState<any[]>([])

	const [interiorCleaningAmount, setInteriorCleaningAmount] = useState<number>(0)

	useFocusEffect(
		React.useCallback(() => {
			getAddressList()
		}, [])
	)

	useEffect(() => {
		dispatch(setIsFullScreenLoading(true))
		getSubscriptionTimeSlotsFromAPI()
		getColorsListFromAPI()
		getCarModalDetailsAPI()
	}, [])

	const getCarModalDetailsAPI = () => {
		getCarModalDetailsFromAPI(carModal?._id, (res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res.data) {
				if (res?.data?.subscriptionPlans) {
					setSubscriptionPlansData(res?.data?.subscriptionPlans?.length > 0 ? [res?.data?.subscriptionPlans[0]] : [])
					setSelectedSubscriptionPlan(res?.data?.subscriptionPlans?.length > 0 ? res?.data?.subscriptionPlans[0] : null)
				}
				else {
					setSubscriptionPlansData([])
				}
				if (res?.data?.interiorCleaningAmount) {
					setInteriorCleaningAmount(res?.data?.interiorCleaningAmount)
				}
				else {
					setInteriorCleaningAmount(0)
				}
			}
			else {
				setSubscriptionPlansData([])
				setInteriorCleaningAmount(0)
			}
		})
	}

	const getColorsListFromAPI = () => {
		getColorsList((res: API_RESPONSE) => {
			setSelectedColor(null)
			if (res.data) {
				setColorsList(res.data)
			} else {
				setColorsList([])
			}
		})
	}

	const getSubscriptionTimeSlotsFromAPI = () => {
		getSubscriptionTimeSlotsList((res: API_RESPONSE) => {
			setSelectedSubscriptionTimeSlot(null)
			if (res.data) {
				const data = res?.data?.map((item: any, index: number) => {
					return {
						...item,
						id: index,
						name: `${item?.start} - ${item?.end}`
					}
				})
				setSubscriptionTimeSlotsData(data)
			} else {
				setSubscriptionTimeSlotsData([])
			}
		})
	}

	const getAddressList = () => {
		getAddressListAPI((res: API_RESPONSE) => {
			setSelectedAddress(null)
			if (res.data) {
				const data = res?.data?.map((item: any) => {
					const address = `${item?.landmark}, ${item?.city}, ${item?.state}, ${item?.country}, ${item?.postalCode}`
					return {
						...item,
						address
					}
				})
				setAllAddressList(data)
			} else {
				setAllAddressList([])
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
		if (selectedSubscriptionTimeSlot === null) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please pick your daily car cleaning slot'
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
			dispatch(setIsFullScreenLoading(true))
			let interiorCleanAmount = interiorCleaningAmount > 0 ? isInteriorCleaning ? {
				interiorCleaningAmount: interiorCleaningAmount
			} : {} : {}
			const params = {
				model_id: carModal?._id,
				address_id: selectedAddress?._id,
				carNumber: registrationNumber,
				plan_id: selectedSubscriptionPlan?._id,
				timeSlot: {
					start: selectedSubscriptionTimeSlot?.start,
					end: selectedSubscriptionTimeSlot?.end
				},
				color_id: selectedColor?._id,
				...interiorCleanAmount
			}
			postSubscriptionDetailsAPI(params, (response: API_RESPONSE) => {
				dispatch(setIsFullScreenLoading(false))
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
					navigation.navigate('RequestSubmitted')
				}, 100)
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

	const onPressSelectTimeSlots = (data: any) => {
		setSelectedSubscriptionTimeSlot(data)
		setIsTimeSlotsModalVisible(false)
	}

	const onPressSelectAddress = (item: any) => {
		setSelectedAddress(item)
		setIsAddressModalVisible(false)
	}

	const openInformationModal = () => {
		setIsInfoModalOpen(true)
	}

	const InputChildren = () => {
		return (
			<View style={{ width: scaleWidthPX(34), height: scaleHeightPX(61), backgroundColor: '#010C22', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: -2 }}>
				<RegistrationNoSVG />
			</View>
		)
	}

	const renderForm = () => {
		return (
			<View style={styles.form}>
				<View style={styles.flexRow}>
					<View style={styles.flex5}>
						<CustomInput label='Brand' onChangeText={() => { }} value={carCompany?.name} editable={false} />
					</View>
					<View style={styles.flex5}>
						<CustomInput label='Model' onChangeText={() => { }} value={carModal?.name} editable={false} />
					</View>
				</View>
				<View style={styles.flexRow}>
					<View style={styles.flex5}>
						<CustomInput label='Category' onChangeText={() => { }} value={carModal?.car_type_id?.name} editable={false} />
					</View>
					<View style={styles.flex5}>
						<CustomDropdown label='Color' onPress={onPressColor} value={selectedColor?.name} />
					</View>
				</View>
				<CustomInput
					leftChildren={<InputChildren />}
					label='Car License Plate Number'
					onChangeText={(text: string) => {
						setRegistrationNumber(text)
					}}
					placeholder='Enter Car License Plate Number'
					value={registrationNumber}
					maxLength={10}
				/>
				<View style={{ gap: scaleHeightPX(8) }}>
					<CustomDropdown label='Address' onPress={onPressAddress} value={selectedAddress?.address} placeholder='Select' />
					<Pressable style={styles.addAddress} onPress={onPressAddAddress}>
						<AddSVG />
						<CustomText style={{ color: colors.primary }}>{'Add Address'}</CustomText>
					</Pressable>
				</View>
				<CustomInput
					label='Referral Code (Optional)'
					onChangeText={(text: string) => {
						setReferralCode(text)
					}}
					placeholder='Enter Referral Code'
					value={referralCode}
				/>
				<View style={styles.flexRow}>
					<View style={styles.flex5}>
						<CustomDate label='Select Start Date' onPress={(value: any) => setStartDate(value)} value={startDate} />
					</View>
					<View style={styles.flex5}>
						<CustomDropdown label='Select Time Slot' onPress={onPressSubscriptionTimeSlot} value={selectedSubscriptionTimeSlot?.name} />
					</View>
				</View>
				<RenderSubscritionPlans
					openInformationModal={openInformationModal}
					setIsInteriorCleaning={setIsInteriorCleaning}
					isInteriorCleaning={isInteriorCleaning}
					interiorCleaningAmount={interiorCleaningAmount}
					subscriptionPlansData={subscriptionPlansData}
				/>
				<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Submit Request' onPress={onPressSave} childernButton={<CustomText style={{ ...commonFontStyles.fontSizeS, color: '#444444' }}>{'prices are inclusive of GST'}</CustomText>} />
			</View>
		)
	}

	return (
		<MainFrame isHeader title='Vehicle Form' isNotifications={false}>
			<View style={styles.main}>
				<KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
					{renderForm()}
				</KeyboardAwareScrollView>
			</View>
			<RenderModals
				isColorShow={isColorShow}
				colorsList={colorsList}
				setIsColorShow={setIsColorShow}
				selectedColor={selectedColor}
				onPressSelectColor={onPressSelectColor}
				isAddressModalVisible={isAddressModalVisible}
				allAddressList={allAddressList}
				setIsAddressModalVisible={setIsAddressModalVisible}
				selectedAddress={selectedAddress}
				onPressSelectAddress={onPressSelectAddress}
				isTimeSlotsModalVisible={isTimeSlotsModalVisible}
				subscriptionTimeSlotsData={subscriptionTimeSlotsData}
				setIsTimeSlotsModalVisible={setIsTimeSlotsModalVisible}
				selectedSubscriptionTimeSlot={selectedSubscriptionTimeSlot}
				onPressSelectTimeSlots={onPressSelectTimeSlots}
				isInfoModalOpen={isInfoModalOpen}
				setIsInfoModalOpen={setIsInfoModalOpen}
			/>
		</MainFrame>
	)
}

export default VehicleForm
