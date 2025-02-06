import { useNavigation } from '@react-navigation/native'
import CustomButton from '@src/common/components/Button'
import MainFrame from '@src/common/components/Mainframe'
import React from 'react'
import { View } from 'react-native'

const Demo = () => {
	const navigation: any = useNavigation()
	return (
		<MainFrame>
			<View style={{gap: 16}}>
				<CustomButton title='Select Your Brand' onPress={() => navigation.navigate('SelectBrand')} />
			</View>
		</MainFrame>
	)
}

export default Demo
