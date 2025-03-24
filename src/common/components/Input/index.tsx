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

	const { viewStyle = {}, value = '', onFocus, onBlur, onChangeText, inputRef, label, inputStyle = {}, editable = true, isRequired = false, secureTextEntry = false, isMultiline = false, isRightIcon = false, keyboardType = 'default', maxLength = 100, RightIcon = DownSVG, handleBlur, handleFocus, rightIconOnPress, isLeftSideMobileView = false, placeholder = '' } = props

	const styles = inputStyles(colors)

	return (
		<View style={[styles.container, isMultiline && styles.containerMultiline, viewStyle]}>
			<View style={{ flex: 1, gap: scaleHeightPX(8) }}>
				<CustomText style={{ color: colors.labelColor }}>
					{label}
					{isRequired ? <CustomText style={{ color: colors.alertRed }}>{' *'}</CustomText> : ''}
				</CustomText>
				<View style={styles.inputView}>
					{isLeftSideMobileView && (
						<View style={{ flexDirection: 'row', gap: scaleWidthPX(10), alignItems: 'center' }}>
							<Image source={{ uri: flagImage }} style={{ width: scaleWidthPX(25), height: scaleHeightPX(16) }} />
							<CustomText textType='semi-bold' style={commonFontStyles.fontSizeL}>
								{'+91'}
							</CustomText>
						</View>
					)}
					<TextInput ref={inputRef} style={[styles.input, isMultiline && styles.inputMultiline, inputStyle]} value={value} placeholder={placeholder} placeholderTextColor={colors.inputPlaceholder} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur} editable={editable} secureTextEntry={secureTextEntry} multiline={isMultiline} keyboardType={keyboardType} maxLength={maxLength} pointerEvents={editable ? 'auto' : 'none'} />
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
