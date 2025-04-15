import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { createStyles } from './styles';
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle';
import { HeaderNavigation } from '@src/common/components/HeaderNavigation';
import { useDispatch } from 'react-redux';
import { InteriorCleaning, PlanDetails } from '../Home/components/PlanDetails';
import commonFontStyles from '@src/common/styles/commonFontStyles';
import { PlusSVG, TickSVG } from '@src/assets/svg';
import CustomText from '@src/common/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@src/common/components/Button';

const CarDetails = () => {
    const navigation: any = useNavigation();
    const dispatch = useDispatch()

    const { colors } = useTheme();
    const styles = createStyles(colors);

    const { params }: any = useRoute()
    const carDetails: any = params?.carDetails

    const renderContent = (label: string) => {
        return (
            <View style={styles.content}>
                <TickSVG fill={colors.primary} width={scaleWidthPX(16)} height={scaleWidthPX(16)} />
                <CustomText lineHeight style={commonFontStyles.fontSizeS}>{label}</CustomText>
            </View>
        )
    }

    const renderCleaning = () => {
        return (
            <View style={styles.cleaningOuter}>
                <View style={styles.cleaningInner}>
                    <CustomText textType='bold' style={styles.cleaningHeader}>{'Exterior Cleaning'}</CustomText>
                    <View style={{ alignItems: 'center', gap: scaleHeightPX(1) }}>
                        {renderContent('Full Body Clean')}
                        {renderContent('Mirror Polishing')}
                        {renderContent('Dirt Removal')}
                        {renderContent('Scratch-free wipe')}
                        {renderContent('Glossy Finish')}
                    </View>
                </View>
                <View style={styles.cleaningInner}>
                    <CustomText textType='bold' style={styles.cleaningHeader}>{'Interior Cleaning*'}</CustomText>
                    <View style={{ alignItems: 'center', gap: scaleHeightPX(1) }}>
                        {renderContent('Dashboard')}
                        {renderContent('Seat Clean')}
                        {renderContent('Mat Washing')}
                        {renderContent('Car Dusting')}
                        {renderContent('Air Freshner')}
                    </View>
                </View>
            </View>
        )
    }

    const renderAddCarButton = () => {
        return (
            <Pressable style={styles.carsButton} onPress={() => navigation.navigate('SelectBrand')}>
                <PlusSVG />
            </Pressable>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: colors.backgroundColor }}>
                <SafeAreaView edges={['top']} />
                <HeaderNavigation isBack isNotifications={false} />
                <View style={styles.imageView}>
                    <Image source={{ uri: carDetails?.largeImage }} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                </View>
                <View style={styles.nameView}>
                    <CustomText textType='semi-bold' style={commonFontStyles.fontSize3XL} lineHeight>{carDetails?.name}</CustomText>
                    <CustomText style={commonFontStyles.fontSizeXL} lineHeight>{`@${carDetails?.price}/Month`}</CustomText>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingBottom: scaleHeightPX(24), backgroundColor: colors.carBg, borderTopLeftRadius: 24, borderTopRightRadius: 25 }}>
                {renderCleaning()}
                <PlanDetails />
                <View style={{ height: scaleHeightPX(24) }} />
                <InteriorCleaning />
                <View style={{ margin: scaleHeightPX(24) }}>
                    <CustomButton title='Add Vehicle' onPress={() => navigation.navigate('SelectBrand')} customLabelStyles={commonFontStyles.fontBold} />
                </View>
            </ScrollView>
        </View>
    );
};

export default CarDetails;
