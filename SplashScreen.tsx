import { SplashMov } from '@src/assets/mov'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/common/utils/deviceInformation'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'

export default function SplashScreen() {
	return (
		<ImageBackground source={SplashMov} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgb(73, 33, 40)' }}>
			{/* <Image source={SplashMov} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} resizeMode='contain' /> */}
		</ImageBackground>
	)
}
