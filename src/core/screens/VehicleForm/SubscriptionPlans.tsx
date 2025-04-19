import { useTheme } from "@react-navigation/native"
import CustomText from "@src/common/components/Text"
import commonFontStyles from "@src/common/styles/commonFontStyles"
import { scaleHeightPX, scaleWidthPX } from "@src/common/utils/responsiveStyle"
import { Pressable, StyleSheet, View } from "react-native"
import { SubscriptionPlanItem } from "./SubscriptionItem"
import React from "react"
import { CheckBox } from "@src/common/components/MultiSelectionModal"
import { InformationSVG } from "@src/assets/SvgJSX/InformationSVG"

interface RenderSubscritionPlansProps {
    openInformationModal: () => void;
    setIsInteriorCleaning: (value: boolean) => void; isInteriorCleaning: boolean;
    interiorCleaningAmount: number;
    subscriptionPlansData: any[]
}

export const RenderSubscritionPlans = (props: RenderSubscritionPlansProps) => {
    const { openInformationModal, setIsInteriorCleaning, isInteriorCleaning, interiorCleaningAmount, subscriptionPlansData } = props

    const { colors } = useTheme()

    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <CustomText style={commonFontStyles.fontSizeL}>{'Your Daily Car Cleaning Plan Details'}</CustomText>
                <Pressable onPress={openInformationModal} style={styles.info}>
                    <InformationSVG fillColor={colors.white} />
                </Pressable>
            </View>
            {interiorCleaningAmount > 0 && <Pressable onPress={() => setIsInteriorCleaning(!isInteriorCleaning)} style={styles.middle}>
                <CheckBox disabled isSelected={isInteriorCleaning} />
                <CustomText style={{ color: colors.primary, ...commonFontStyles.fontSizeS, flex: 1 }}>{`Add 3 days of interior cleaning once a month for just ₹${interiorCleaningAmount}`}</CustomText>
            </Pressable>}
            <View style={styles.bottom}>
                {subscriptionPlansData?.map((item: any) => {
                    return <SubscriptionPlanItem key={item?._id} item={item} isInteriorCleaning={isInteriorCleaning} interiorCleaningAmount={interiorCleaningAmount} />
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        gap: scaleHeightPX(10),
        marginTop: scaleHeightPX(16)
    },
    top: {
        gap: scaleWidthPX(2),
        alignItems: 'center',
        flexDirection: 'row'
    },
    info: {
        width: scaleWidthPX(32),
        alignItems: 'center',
        height: scaleHeightPX(24),
        justifyContent: 'center'
    },
    middle: {
        flexDirection: 'row',
        gap: scaleWidthPX(12),
        alignItems: 'center',
        marginBottom: scaleHeightPX(4)
    },
    bottom: {
        gap: scaleHeightPX(16),
        marginBottom: scaleHeightPX(24)
    }
})