import React from 'react'
import { Modal, Pressable, SafeAreaView, View } from 'react-native'
import styles from './styles'
import CustomText from '@components/Text'
import { BottomModalProps } from './types'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import { useTheme } from '@react-navigation/native'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import Icon from 'react-native-vector-icons/AntDesign'

const BottomModal = (props: BottomModalProps) => {
	const { colors } = useTheme()
	const styles1 = styles(colors)

	const { children, visible = false, onDrop, containerStyle, isHeader = false, headerTitle = '', headerCloseOnPress, hideOnBackdropPress = true, subHeaderTitle = '', isLeftIcon = false, headerLeftOnPress } = props

	return (
		<Modal transparent visible={visible} animationType='fade' onRequestClose={() => onDrop && onDrop()}>
			<View style={[commonFlexStyles.flex1, { backgroundColor: `${colors.textColor}66` }]}>
				<Pressable onPress={() => hideOnBackdropPress && onDrop && onDrop()} style={commonFlexStyles.flex1} disabled={!hideOnBackdropPress} />
				<SafeAreaView style={[styles1.container, containerStyle]}>
					{isHeader && (
						<View style={styles1.headerStyle}>
							{isLeftIcon && (
								<Pressable onPress={headerLeftOnPress} style={styles1.headerStyleCloseView}>
									<Icon name='check' size={22} color={colors.textColor} />
								</Pressable>
							)}
							<View style={[styles1.headerStyleMiddleView, commonMarginStyles.marginRightM]}>
								{subHeaderTitle?.length > 0 && <CustomText style={styles1.subTitleStyle}>{subHeaderTitle}</CustomText>}
								<CustomText textType='medium' style={styles1.titleStyle}>
									{headerTitle}
								</CustomText>
							</View>
							<Pressable onPress={headerCloseOnPress} style={styles1.headerStyleCloseView}>
								<Icon name='close' size={22} color={colors.textColor} />
							</Pressable>
						</View>
					)}
					{children}
					<View style={styles1.bottomView} />
				</SafeAreaView>
			</View>
		</Modal>
	)
}

export default BottomModal
