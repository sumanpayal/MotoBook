import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from '@src/common/colors/colors'
import RootStack from '@src/core/navigation'
import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen'
import { StatusBar, View } from 'react-native'

function App(): React.JSX.Element {
	const [hideSplash, setHideSplash] = useState<boolean>(false)

	useEffect(() => {
		setTimeout(() => {
			setHideSplash(true)
		}, 3000)
	}, [])

	return (
		<View style={{ backgroundColor: COLORS.light.colors.backgroundColor, flex: 1 }}>
			<StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
			<NavigationContainer theme={COLORS.light}>
				{hideSplash ? <RootStack /> : <SplashScreen />}
			</NavigationContainer>
		</View>
	)
}
export default App
