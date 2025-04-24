import React from 'react'
import { Image, Pressable, TextInput, View } from 'react-native'
import { CustomInputProps } from './types'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { inputStyles } from './styles'
import { useTheme } from '@react-navigation/native'
import CustomText from '../Text'
import { DownSVG } from '@src/assets/svg'
import { flagImage } from '@src/assets/image'
import commonFontStyles from '@src/common/styles/commonFontStyles'

export default function CustomInput(props: CustomInputProps) {
	const { colors } = useTheme()

	const { viewStyle = {}, inputRef, label, editable = true, isRequired = false, secureTextEntry = false, isMultiline = false, isRightIcon = false, keyboardType = 'default', maxLength = 100, RightIcon = DownSVG, handleBlur, handleFocus, rightIconOnPress, isLeftChildren = false, placeholder = '', leftChildren, labelColor = colors.labelColor } = props

	const styles = inputStyles(colors)

	return (
		<View style={[styles.container, isMultiline && styles.containerMultiline, viewStyle]}>
			<View style={{ flex: 1, gap: scaleHeightPX(8) }}>
				<CustomText style={{ color: labelColor }}>
					{label}
					{isRequired ? <CustomText style={{ color: colors.alertRed }}>{' *'}</CustomText> : ''}
				</CustomText>
				<View style={styles.inputView}>
					{isLeftChildren && <CountryFlagWithDialCode />}
					{leftChildren && leftChildren}
					<TextInput ref={inputRef} style={[styles.input, isMultiline && styles.inputMultiline, {gap: isLeftChildren ? 0 : scaleWidthPX(16) }]} placeholder={placeholder} placeholderTextColor={colors.inputPlaceholder} onFocus={handleFocus} onBlur={handleBlur} editable={editable} secureTextEntry={secureTextEntry} multiline={isMultiline} keyboardType={keyboardType} maxLength={maxLength} pointerEvents={editable ? 'auto' : 'none'} {...props} />
					{isRightIcon && (
						<Pressable onPress={() => rightIconOnPress && rightIconOnPress()}>
							<RightIcon />
						</Pressable>
					)}
				</View>
			</View>
		</View>
	)
}

const CountryFlagWithDialCode = () => {
	const { colors } = useTheme()
	return (
		<View style={{ flexDirection: 'row', gap: scaleWidthPX(10), alignItems: 'center', paddingLeft: scaleWidthPX(16), height: scaleHeightPX(44) }}>
			<Image source={{ uri: flagImage }} style={{ width: scaleWidthPX(25), height: scaleHeightPX(16) }} />
			<TextInput style={{
				height: scaleHeightPX(44), color: colors.white, ...commonFontStyles.fontSizeL, paddingHorizontal: 0,
			}} placeholder={''} placeholderTextColor={colors.inputPlaceholder} editable={false} pointerEvents={'none'} value='+91' defaultValue='+91' />
		</View>
	)
}
