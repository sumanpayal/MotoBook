import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) =>
    StyleSheet.create({
        imageView: {
            width: '84%',
            height: 200,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: scaleHeightPX(16)
        },
        nameView: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: scaleHeightPX(16)
        },
        carsButton: {
            position: 'absolute',
            width: scaleWidthPX(60),
            height: scaleWidthPX(60),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: colors.primary,
            bottom: scaleHeightPX(16),
            right: scaleWidthPX(24)
        },
        cleaningOuter: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: scaleWidthPX(12),
            marginHorizontal: scaleWidthPX(24),
            marginTop: scaleHeightPX(24),
            marginBottom: scaleHeightPX(16)
        },
        cleaningInner: {
            backgroundColor: colors.backgroundColor,
            borderRadius: 5,
            flex: 1,
            paddingHorizontal: scaleWidthPX(4),
            paddingVertical: scaleHeightPX(16),
            alignItems: 'center'
        },
        cleaningHeader: {
            marginBottom: scaleHeightPX(8),
            ...commonFontStyles.fontBold,
            ...commonFontStyles.fontSizeS
        },
        content: {
            flexDirection: 'row',
            gap: scaleWidthPX(4),
            alignItems: 'center'
        }
    })
