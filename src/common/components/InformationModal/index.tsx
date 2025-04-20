import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomModal from '../BottomModal'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { BottomModalProps } from '../BottomModal/types'
import CustomText from '../Text'
import CustomButton from '../Button'
import commonFontStyles from '@src/common/styles/commonFontStyles'

type InformationModalProps = {
	visible: boolean
	onClose: () => void
	description?: string
	modalProps?: BottomModalProps
	modalIcon?: any
	title?: string
	mainStyle?: any
	descriptionStyle?: any
}

const InformationModal = (props: InformationModalProps) => {
	const { visible, onClose, description, modalProps, modalIcon, title, mainStyle, descriptionStyle } = props
	return (
		<BottomModal visible={visible} onDrop={onClose} isHeader headerCloseOnPress={onClose} {...modalProps} hideOnBackdropPress={false}>
			<View style={[styles.main, mainStyle]}>
				<View style={{ alignItems: 'center', gap: scaleHeightPX(8) }}>
					{modalIcon && modalIcon}
					<View style={{ gap: scaleHeightPX(4) }}>
						{title && <CustomText lineHeight textType='bold' style={{ textAlign: 'center', ...commonFontStyles.fontSizeXL }}>
							{title}
						</CustomText>}
						<CustomText textType='medium' style={{ textAlign: 'center', ...descriptionStyle }}>
							{description}
						</CustomText>
					</View>
				</View>
				<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Got It' onPress={onClose} />
			</View>
		</BottomModal>
	)
}

export default InformationModal

const styles = StyleSheet.create({
	main: {
		marginVertical: scaleWidthPX(16),
		justifyContent: 'center',
		alignItems: 'center',
		gap: scaleHeightPX(24),
		marginHorizontal: scaleWidthPX(24)
	}
})
