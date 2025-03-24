import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomModal from '../BottomModal'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { BottomModalProps } from '../BottomModal/types'
import CustomText from '../Text'

type InformationModalProps = {
	visible: boolean
	onClose: () => void
	description?: string
	modalProps?: BottomModalProps
}

const InformationModal = (props: InformationModalProps) => {
	const { visible, onClose, description, modalProps } = props
	return (
		<BottomModal visible={visible} onDrop={onClose} isHeader headerCloseOnPress={onClose} containerStyle={styles.container} {...modalProps} hideOnBackdropPress={false}>
			<View style={styles.main}>
				<CustomText textType='medium' style={{ textAlign: 'center' }}>
					{description}
				</CustomText>
			</View>
		</BottomModal>
	)
}

export default InformationModal

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: '40%',
		borderRadius: 20,
		alignSelf: 'center',
		padding: scaleWidthPX(20),
		width: '90%'
	},
	main: {
		margin: scaleWidthPX(16),
		justifyContent: 'center',
		alignItems: 'center'
	}
})
