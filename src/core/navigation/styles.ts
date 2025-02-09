import { COLORS } from "@src/common/colors/colors";
import commonAlignStyles from "@src/common/styles/commonAlignStyles";
import commonBorderWidthStyles from "@src/common/styles/commonBorderWidthStyles";
import commonFontStyles from "@src/common/styles/commonFontStyles";
import commonMarginStyles from "@src/common/styles/commonMarginStyles";
import commonPaddingStyles from "@src/common/styles/commonPaddingStyles";
import { scaleHeightPX } from "@src/common/utils/responsiveStyle";
import { StyleSheet } from "react-native";

const {colors} = COLORS.light

export const createStyles = () =>  StyleSheet.create({
    tabBarStyle: {
        ...commonBorderWidthStyles.borderTopWidthM,
        borderTopColor: colors.inputPlaceholder,
        height: scaleHeightPX(88),
        ...commonPaddingStyles.paddingTop5XS,
        backgroundColor: colors.backgroundColor
    },
    textStyle: {
        ...commonFontStyles.fontSizeXS,
        ...commonFontStyles.fontMedium,
    },
    labelView: {
        ...commonAlignStyles.justifyCenter,
        ...commonAlignStyles.alignCenter,
        ...commonMarginStyles.marginBottom5XS,
    },
})