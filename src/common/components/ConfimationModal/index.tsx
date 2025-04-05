import CustomText from '@components/Text'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomModal from '../BottomModal'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomButton from '../Button'
import { BUTTON_TYPES } from '@src/common/constants/constants'

interface ConfimationModalProps {
    visible: boolean
    onClose: () => void
    noOnPress: () => void
    yesOnPress: () => void
}

export const ConfimationModal = (props: ConfimationModalProps) => {
    const { visible, onClose, noOnPress, yesOnPress } = props

    return (
        <BottomModal visible={visible} onDrop={onClose} isHeader={false} headerCloseOnPress={onClose} hideOnBackdropPress={false}>
            <View style={styles.main}>
                <CustomText textType='bold' style={styles.title}>{'Are you sure, you want to exit?'}</CustomText>
                <View style={styles.outer}>
                    <View style={styles.innerButton}>
                        <CustomButton title='No' buttonType={BUTTON_TYPES.SECONDARY} onPress={noOnPress} />
                    </View>
                    <View style={styles.innerButton}>
                        <CustomButton title='Yes' onPress={yesOnPress} />
                    </View>
                </View>
            </View>
        </BottomModal>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: scaleWidthPX(24),
        gap: scaleHeightPX(24),
        paddingVertical: scaleHeightPX(30)
    },
    title: {
        ...commonFontStyles.fontSizeXL,
        textAlign: 'center'
    },
    outer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerButton: {
        flex: 0.47
    }
})
