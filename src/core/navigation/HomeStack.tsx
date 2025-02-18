import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReferAFriend from '../screens/ReferAFriend'
import HomeScreen from '../screens/Home'
import SelectBrand from '../screens/SelectBrand'
import VehicleForm from '../screens/VehicleForm'

const Stack = createNativeStackNavigator()

export function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
			<Stack.Screen name='SelectBrand' component={SelectBrand} />
			<Stack.Screen name='VehicleForm' component={VehicleForm} />
		</Stack.Navigator>
	)
}

export function SecondStack() {
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
