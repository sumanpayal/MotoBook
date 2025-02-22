import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReferAFriend from '../screens/ReferAFriend'
import HomeScreen from '../screens/Home'

const Stack = createNativeStackNavigator()

export function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
		</Stack.Navigator>
	)
}

export function ReferStack() {
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

export function MoreStack() {
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
