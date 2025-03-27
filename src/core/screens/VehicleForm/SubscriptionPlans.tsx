import { useTheme } from "@react-navigation/native"
import { InformationSVG, TickSVG } from "@src/assets/svg"
import CustomText from "@src/common/components/Text"
import commonFontStyles from "@src/common/styles/commonFontStyles"
import { scaleHeightPX, scaleWidthPX } from "@src/common/utils/responsiveStyle"
import { Pressable, StyleSheet, View } from "react-native"
import { SubscriptionPlanItem } from "./SubscriptionItem"

interface RenderSubscritionPlansProps {
    openInformationModal: () => void;
    setIsInteriorCleaning: (value: boolean) => void; isInteriorCleaning: boolean;
    interiorCleaningAmount: number;
    subscriptionPlansData: any[]
    selectedSubscriptionPlan: any
    setSelectedSubscriptionPlan: (item: any) => void
}

export const RenderSubscritionPlans = (props: RenderSubscritionPlansProps) => {
    const { openInformationModal, setIsInteriorCleaning, isInteriorCleaning, interiorCleaningAmount, subscriptionPlansData, selectedSubscriptionPlan, setSelectedSubscriptionPlan } = props

    const { colors } = useTheme()

    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <CustomText style={commonFontStyles.fontSizeL}>{'Your Daily Car Cleaning Plan Details'}</CustomText>
                <Pressable onPress={openInformationModal} style={styles.info}>
                    <InformationSVG />
                </Pressable>
            </View>
            <View style={styles.middle}>
                <Pressable onPress={() => setIsInteriorCleaning(!isInteriorCleaning)} style={{ ...styles.check, borderColor: colors.white }}>
                    {isInteriorCleaning && <TickSVG fill={colors.white} width={scaleWidthPX(20)} height={scaleWidthPX(20)} />}
                </Pressable>
                <CustomText style={{ color: colors.primary, ...commonFontStyles.fontSizeXS }}>{`Add 3 days of interior cleaning once a month for just ₹${interiorCleaningAmount}`}</CustomText>
            </View>
            <View style={styles.bottom}>
                {subscriptionPlansData?.map((item: any) => {
                    return <SubscriptionPlanItem key={item?._id} selectedSubscriptionPlan={selectedSubscriptionPlan} item={item} setSelectedSubscriptionPlan={setSelectedSubscriptionPlan} isInteriorCleaning={isInteriorCleaning} interiorCleaningAmount={interiorCleaningAmount} />
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
    check: {
        borderWidth: 1,
        borderRadius: 5,
        width: scaleWidthPX(20),
        height: scaleWidthPX(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        gap: scaleHeightPX(16),
        marginBottom: scaleHeightPX(32)
    }
})