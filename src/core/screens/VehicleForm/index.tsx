import { View } from 'react-native'
import React, { useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomInput from '@src/common/components/Input'

const VehicleForm = () => {
	const navigation: any = useNavigation()

	const [searchText, setSearchText] = useState<string>('')

	const { colors }: any = useTheme()

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Vehicle Form'>
			<View style={{ flex: 1, gap: scaleHeightPX(16), marginVertical: scaleHeightPX(16), marginHorizontal: scaleWidthPX(16) }}>
                <CustomInput label='Model' onChangeText={setSearchText} value={searchText} />
                {/* <RenderInput label='Modal' onChangeText={setSearchText} value={searchText} />
                <RenderInput label='Category' onChangeText={setSearchText} value={searchText} />
                <RenderInput label='Color' onChangeText={setSearchText} value={searchText} />
                <RenderInput label='Registration Number' onChangeText={setSearchText} value={searchText} />
                <RenderInput label='Address' onChangeText={setSearchText} value={searchText} /> */}
			</View>
		</MainFrame>
	)
}

export default VehicleForm
