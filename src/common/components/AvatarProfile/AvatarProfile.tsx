import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles'
import { useTheme } from '@react-navigation/native'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import getInitials from '@src/common/utils/getInitials'
import { scaleWidthPX } from '@utils/responsiveStyle'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import CustomText from '../Text'
import { DefaultProfileImage } from '@src/assets/image'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'

export default function AvatarProfile({ size = scaleWidthPX(64), url, showInitials = false, name = '' }: IAvatarProfile) {
	const { colors } = useTheme()

	const [imageSource, setImageSource] = useState({ uri: url })
	const [showInitial, setShowInitial] = useState<boolean>(showInitials)

	useEffect(() => {
		setImageSource({ uri: url })
		setShowInitial(showInitials)
	}, [url, showInitials])

	const onError = () => {
		if (!isEmpty(name)) setShowInitial(true)
		else setImageSource({ uri: DefaultProfileImage })
	}

	return showInitial || isEmpty(url) ? (
		<View
			style={{
				width: scaleWidthPX(size),
				height: scaleWidthPX(size),
				backgroundColor: colors.backgroundColor,
				borderColor: colors.textColor,
				...commonBorderRadiusStyles.borderRadiusCircle,
				...commonAlignStyles.alignCenter,
				...commonAlignStyles.justifyCenter,
				...commonBorderWidthStyles.borderWidthM
			}}>
			<CustomText textType={'semi-bold'} style={{ color: colors.textColor }}>
				{getInitials(name)}
			</CustomText>
		</View>
	) : (
		<Image
			source={imageSource}
			style={{
				width: scaleWidthPX(size),
				height: scaleWidthPX(size),
				...commonBorderRadiusStyles.borderRadiusCircle,
				backgroundColor: colors.backgroundColor
			}}
			resizeMode='cover'
			onError={onError}
		/>
	)
}
