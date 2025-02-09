import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import CustomText from '@src/common/components/Text'

const Stack = createNativeStackNavigator()


const FooterScreen = () => {
	return (
		<View>
			<CustomText>Footer</CustomText>
		</View>
	)
}

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='Home' component={FooterScreen} />
		</Stack.Navigator>
	)
}
