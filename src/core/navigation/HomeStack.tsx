import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReferAFriend from '../screens/ReferAFriend'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='ReferAFriend'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='ReferAFriend' component={ReferAFriend} />
		</Stack.Navigator>
	)
}
