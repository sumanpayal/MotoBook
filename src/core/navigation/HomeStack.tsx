import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReferAFriend from '../screens/ReferAFriend'
import HomeScreen from '../screens/Home'
import MySubscriptions from '../screens/MySubscriptions'
import MySettings from '../screens/Settings'
import News from '../screens/News'

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

export function SubscriptionsStack() {
	return (
		<Stack.Navigator
			initialRouteName='MySubscriptions'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='MySubscriptions' component={MySubscriptions} />
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

export function NewsStack() {
	return (
		<Stack.Navigator
			initialRouteName='News'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='News' component={News} />
		</Stack.Navigator>
	)
}

export function AccountStack() {
	return (
		<Stack.Navigator
			initialRouteName='Account'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='Account' component={MySettings} />
		</Stack.Navigator>
	)
}
