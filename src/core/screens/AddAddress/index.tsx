import { ScrollView, View } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import { createStyles } from './styles'

const AddAddress = () => {
	const navigation: any = useNavigation()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const onPressSaveAddress = () => {}

	const RenderAddressItem = ({ item }: { item: any }) => {
		return (
			<View style={styles.addressItem}>
				<CustomText>{'name'}</CustomText>
			</View>
		)
	}
	const renderSaveAsAddress = () => {
		return (
			<View style={styles.saveAddressAs}>
				<CustomText>
					{'Save Address as '}
					<CustomText style={{ color: colors.alertRed }}>{'*'}</CustomText>
				</CustomText>
				<ScrollView horizontal contentContainerStyle={styles.scrollView} showsHorizontalScrollIndicator={false}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item: any) => {
						return <RenderAddressItem item={item} />
					})}
				</ScrollView>
			</View>
		)
	}

	const renderForm = () => {
		return (
			<View style={styles.addessOuter}>
				{renderSaveAsAddress()}
				<CustomInput label='Address' onChangeText={() => {}} value={''} isRequired />
				<CustomInput label='Landmark' onChangeText={() => {}} value={''} />
				<View style={styles.countryOuter}>
					<View style={commonFlexStyles.flex1}>
						<CustomInput label='Country' onChangeText={() => {}} value={''} isRequired />
					</View>
					<View style={commonFlexStyles.flex1}>
						<CustomInput label='State' onChangeText={() => {}} value={''} isRequired />
					</View>
				</View>
				<View>
					<View>
						<CustomInput label='District' onChangeText={() => {}} value={''} isRequired />
					</View>
				</View>
				<CustomInput label='Pincode' onChangeText={() => {}} value={''} isRequired maxLength={6} keyboardType='number-pad' />
			</View>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Address Form'>
			<View style={styles.main}>
				<KeyboardAwareScrollView style={{}} keyboardShouldPersistTaps='handled'>
					{renderForm()}
				</KeyboardAwareScrollView>
				<CustomButton title='Save Address' onPress={onPressSaveAddress} />
			</View>
		</MainFrame>
	)
}

export default AddAddress
