import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import CustomInput from '@src/common/components/Input'
import CustomButton from '@src/common/components/Button'
import CustomText from '@src/common/components/Text'
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createStyle } from './styles'

const VehicleForm = () => {
	const navigation: any = useNavigation()

	const { colors } = useTheme()
	const styles = createStyle(colors)

	const [isColorShow, setIsColorShow] = useState<boolean>(false)

	const onPressColor = () => {
		setIsColorShow(!isColorShow)
	}

	const onPressAddAddress = () => {
		navigation.navigate('AddAddress')
	}

	const onPressSave = () => {}

	const RenderBrandItem = ({ item }: { item: any }) => {
		return (
			<View style={styles.colorItemView}>
				<View style={styles.colorItem} />
				<CustomText>{'name'}</CustomText>
			</View>
		)
	}
	const renderColors = () => {
		return (
			<View style={styles.colorOuter}>
				<CustomText>{'Color'}</CustomText>
				<View style={styles.colorInner}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item: any) => {
						return <RenderBrandItem item={item} />
					})}
				</View>
			</View>
		)
	}

	const renderForm = () => {
		return (
			<View style={styles.form}>
				<CustomInput label='Brand' onChangeText={() => {}} value={''} editable={false} />
				<CustomInput label='Model' onChangeText={() => {}} value={''} editable={false} />
				<CustomInput label='Category' onChangeText={() => {}} value={''} editable={false} />
				<View>
					<Pressable onPress={onPressColor}>
						<CustomInput label='Color' onChangeText={() => {}} value={''} isRightIcon editable={false} iconName={isColorShow ? 'up' : 'down'} />
					</Pressable>
					{isColorShow && renderColors()}
				</View>
				<CustomInput label='Registration Number' onChangeText={() => {}} value={''} />
				<CustomInput label='Address' onChangeText={() => {}} value={''} />
				<Pressable style={styles.addAddress} onPress={onPressAddAddress}>
					<Icon name='pluscircleo' size={22} color={colors.primary} />
					<CustomText textType='semi-bold' style={{ color: colors.primary }}>
						{'Add Address'}
					</CustomText>
				</Pressable>
			</View>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Vehicle Form'>
			<View style={styles.main}>
				<KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>{renderForm()}</KeyboardAwareScrollView>
				<CustomButton title='Save' onPress={onPressSave} />
			</View>
		</MainFrame>
	)
}

export default VehicleForm
