import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { createStyles } from './styles';
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle';
import { useDispatch } from 'react-redux';
import { InteriorCleaning, PlanDetails } from '../Home/components/PlanDetails';
import commonFontStyles from '@src/common/styles/commonFontStyles';
import { TickSVG } from '@src/assets/svg';
import CustomText from '@src/common/components/Text';
import CustomButton from '@src/common/components/Button';
import MainFrame from '@src/common/components/Mainframe';

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
                    <CustomText textType='bold' style={styles.cleaningHeader}>{'Interior Cleaning'}</CustomText>
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

    return (
        <MainFrame isHeader title='Plan Details' isNotifications={false}>
            <FlatList data={[1]} keyExtractor={(_, index) => index.toString()} ListHeaderComponent={<View>
                <View style={{ backgroundColor: colors.backgroundColor }}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: carDetails?.smallImage }} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                    </View>
                    <View style={styles.nameView}>
                        <CustomText style={commonFontStyles.fontSize3XL} lineHeight>{carDetails?.name}</CustomText>
                        <CustomText textType='bold' style={{ ...commonFontStyles.fontSizeXL, color: colors.primary }} lineHeight>{`@₹${carDetails?.price}/Month`}</CustomText>
                    </View>
                </View>
                <View
                    style={{ paddingBottom: scaleHeightPX(24), backgroundColor: colors.carBg, borderTopLeftRadius: 24, borderTopRightRadius: 25 }}>
                    {renderCleaning()}
                    <PlanDetails />
                    <View style={{ height: scaleHeightPX(24) }} />
                    <InteriorCleaning />
                    <View style={{ marginHorizontal: scaleHeightPX(16), marginTop: scaleHeightPX(32) }}>
                        <CustomButton title='Add Vehicle' onPress={() => navigation.navigate('SelectBrand')} customLabelStyles={commonFontStyles.fontBold} />
                    </View>
                </View>
            </View>} renderItem={() => <View />} />
        </MainFrame>
    );
};

export default CarDetails;
