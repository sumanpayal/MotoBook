import { View, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { API_RESPONSE } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { NoNotificationsGIF } from '@src/assets/lottie'
import { createStyles } from './styles'
import { getNotificationsDataFromAPI } from '@src/network/login'
import CustomDate from '@src/common/components/CustomDate'

const CleanerHistory = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [startDate, setStartDate] = useState<any>(new Date())

    const [allCleaningHistoryData, setAllCleaningHistoryData] = useState<any[]>([1, 2, 3])

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(false))
        }, [])
    )

    const getCleaningHistoryList = () => {
        getNotificationsDataFromAPI((res: API_RESPONSE) => {
            dispatch(setIsFullScreenLoading(false))
            if (res.data) {
                setAllCleaningHistoryData(res.data)
            }
            else {
                setAllCleaningHistoryData([])
            }
        })
    }

    const renderCleaningHistoryItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.item} />
        )
    }

    return (
        <MainFrame isHeader title='Cleaning History' isNotifications={false}>
            <View style={styles.main}>
                <View style={{ gap: scaleHeightPX(16), marginBlock: scaleHeightPX(24) }}>
                    <CustomDate label='Select By Date' onPress={(value: any) => setStartDate(value)} value={startDate} minimumDate={null} />
                </View>
                <FlatList contentContainerStyle={allCleaningHistoryData.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center' }} data={allCleaningHistoryData} renderItem={renderCleaningHistoryItem} keyExtractor={(item) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListEmptyComponent={<NoRecordFound isLottieImage={false} LottieImage={NoNotificationsGIF} />} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
            </View>
        </MainFrame>
    )
}

export default CleanerHistory
