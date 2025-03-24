import React from 'react'
import { Modal, Pressable, SafeAreaView, View } from 'react-native'
import styles from './styles'
import CustomText from '@components/Text'
import { BottomModalProps } from './types'
import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { CloseSVG } from '@src/assets/svg'

const BottomModal = (props: BottomModalProps) => {
	const { colors } = useTheme()
	const styles1 = styles(colors)

	const { children, visible = false, onDrop, containerStyle, isHeader = false, headerTitle = '', headerCloseOnPress, hideOnBackdropPress = true, isLeftIcon = false, LeftIcon, headerLeftOnPress, headerChildren } = props

	return (
		<Modal transparent visible={visible} animationType='fade' onRequestClose={() => onDrop && onDrop()}>
			<View style={[{ flex: 1 }, { backgroundColor: `${colors.black}96` }]}>
				<Pressable onPress={() => hideOnBackdropPress && onDrop && onDrop()} style={{ flex: 1 }} disabled={!hideOnBackdropPress} />
				<SafeAreaView style={[styles1.container, containerStyle]}>
					{isHeader && (
						<View style={styles1.headerStyle}>
							{isLeftIcon && LeftIcon && (
								<Pressable onPress={headerLeftOnPress} style={styles1.headerStyleCloseView}>
									<LeftIcon />
								</Pressable>
							)}
							<View style={[styles1.headerStyleMiddleView, { marginRight: scaleWidthPX(16), gap: scaleHeightPX(10) }]}>
								{headerChildren}
								<CustomText style={styles1.titleStyle}>{headerTitle}</CustomText>
							</View>
							<Pressable onPress={headerCloseOnPress} style={styles1.headerStyleCloseView}>
								<CloseSVG />
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
