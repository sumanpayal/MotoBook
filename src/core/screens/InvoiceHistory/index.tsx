import { View, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { API_RESPONSE } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { InvoiceHistoryGIF } from '@src/assets/lottie'
import { createStyles } from './styles'
import { getNotificationsDataFromAPI } from '@src/network/login'
import CustomDate from '@src/common/components/CustomDate'
import { formatDate } from '@src/common/utils/formatDate'

const InvoiceHistory = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [startDate, setStartDate] = useState<any>(new Date())

    const [allInvoiceHistoryData, setAllInvoiceHistoryData] = useState<any[]>([])

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(false))
        }, [])
    )

    const getInvoiceHistoryList = () => {
        getNotificationsDataFromAPI((res: API_RESPONSE) => {
            dispatch(setIsFullScreenLoading(false))
            if (res.data) {
                setAllInvoiceHistoryData(res.data)
            }
            else {
                setAllInvoiceHistoryData([])
            }
        })
    }

    const renderInvoiceHistoryItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.item} />
        )
    }

    return (
        <MainFrame isHeader title='Invoice History' isNotifications={false}>
            <View style={styles.main}>
                <View style={{ gap: scaleHeightPX(16), marginBlock: scaleHeightPX(24) }}>
                    <CustomDate label='Select By Month' onPress={(value: any) => setStartDate(value)} value={startDate} placeholder='YYYY-MM' isMonthSelection format='yearMonth' />
                </View>
                <FlatList contentContainerStyle={allInvoiceHistoryData.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center' }} data={allInvoiceHistoryData} renderItem={renderInvoiceHistoryItem} keyExtractor={(item) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListEmptyComponent={<NoRecordFound isLottieImage LottieImage={InvoiceHistoryGIF} />} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
            </View>
        </MainFrame>
    )
}

export default InvoiceHistory
