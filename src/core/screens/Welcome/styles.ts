import commonFontStyles from "@src/common/styles/commonFontStyles";
import { scaleHeightPX, scaleWidthPX } from "@src/common/utils/responsiveStyle";
import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: scaleWidthPX(16)
    },
    imageView: {
        width: scaleWidthPX(388),
        height: scaleHeightPX(221),
        marginTop: scaleHeightPX(110),
        marginBottom: scaleHeightPX(50)
    },
    detailsOuter: {
        marginTop: scaleHeightPX(40),
        flexDirection: 'row',
        height: scaleHeightPX(115),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    detailsInner: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: scaleHeightPX(8)
    },
    bottomView: {
        width: '100%',
        position: 'absolute',
        bottom: scaleHeightPX(24),
        gap: scaleHeightPX(8)
    },
    itemImage: {
        width: scaleWidthPX(50),
        height: scaleWidthPX(50)
    },
    itemLabel: {
        ...commonFontStyles.fontSizeXS,
        textAlign: 'center'
    },
    headerLabel: {
        ...commonFontStyles.fontSize4XL,
        color: colors.white,
        textAlign: 'center'
    },
    seperator: {
        width: 0.5,
        height: scaleHeightPX(90),
        backgroundColor: colors.white + '80'
    }
})