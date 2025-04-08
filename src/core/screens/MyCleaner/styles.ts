import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
    return StyleSheet.create({
        main: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        inner: {
            backgroundColor: colors.borderColor,
            margin: scaleWidthPX(16),
            borderRadius: 16,
            paddingVertical: scaleWidthPX(32),
            gap: scaleHeightPX(16),
            width: '85%'
        },
        imageBg: {
            width: scaleWidthPX(200),
            height: scaleHeightPX(200),
            borderColor: colors.primary,
            borderWidth: 2,
            borderRadius: 16,
            alignSelf: 'center'
        },
        nameOuter: {
            alignItems: 'center'
        },
        bottomView: {
            gap: scaleHeightPX(8),
            marginTop: scaleHeightPX(16),
            paddingHorizontal: scaleWidthPX(24)
        },
        seperator: {
            height: scaleHeightPX(1),
            backgroundColor: `${colors.white}4d`,
            width: '96%'
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: scaleWidthPX(8),
            height: scaleHeightPX(36),
            alignItems: 'center'
        },
        leftView: {
            flex: 0.35
        },
        rightView: {
            flex: 0.6
        }
    })
}
