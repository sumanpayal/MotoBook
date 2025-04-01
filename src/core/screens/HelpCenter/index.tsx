import { FlatList, Pressable, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { createStyles } from './styles'
import LottieView from 'lottie-react-native'
import { HelpCenterGIF } from '@src/assets/lottie'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomText from '@src/common/components/Text'
import { DownSVG, UpArrowSVG } from '@src/assets/svg'
import commonFontStyles from '@src/common/styles/commonFontStyles'

const HelpCenter = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const data = [
        {
            id: 0,
            title: 'Do I need to be at home when the service is being performed?',
            description: `No, you don't need to be home. Our team will clean your car while it's parked in your driveway or at your workspace.`
        },
        {
            id: 1,
            title: `Do I need to provide water or power for this service?`,
            description: `No, you don’t need to provide water or any power source for the daily car cleaning service.`
        },
        {
            id: 2,
            title: `Are your service providers trained?`,
            description: `Yes, all our service providers undergo professional training to ensure high quality results and careful handling of your vehicle.`
        },
        {
            id: 3,
            title: `When do I need to pay the subscription fee?`,
            description: `You don’t need to pay upfront! We believe in offering convenience and flexibility. The subscription fee is collected at the end of each month after you've received the service. We accept payments via cash or UPI, making it easy for you to settle the bill.`
        }
    ]

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(false))
        }, [])
    )

    const selectIndex = (item: any) => {
        if (selectedIndex === item?.id) {
            setSelectedIndex(-1)
            return
        }
        setSelectedIndex(item?.id)
    }

    const renderItem = ({ item }: any) => {
        return (
            <Pressable onPress={() => selectIndex(item)} style={styles.item}>
                <View style={[styles.itemTop, { paddingBottom: selectedIndex === item?.id ? scaleHeightPX(8) : 0 }]}>
                    <View style={{ flex: 1 }}>
                        <CustomText style={selectedIndex === item?.id ? { ...commonFontStyles.fontBold, ...commonFontStyles.fontSizeL } : commonFontStyles.fontRegular}>{item?.title}</CustomText>
                    </View>
                    {selectedIndex === item?.id ? <UpArrowSVG /> : <DownSVG />}
                </View>
                {selectedIndex === item?.id && <View style={styles.itemBottom}>
                    <CustomText>{item?.description}</CustomText></View>}
            </Pressable>
        )
    }

    return (
        <MainFrame isHeader title='Help Center' isNotifications={false}>
            <View style={styles.main}>
                <FlatList ListHeaderComponent={<LottieView source={HelpCenterGIF} style={{ width: scaleWidthPX(300), height: scaleHeightPX(300), alignSelf: 'center' }} autoPlay loop />} data={data} renderItem={renderItem} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
            </View>
        </MainFrame>
    )
}

export default HelpCenter
