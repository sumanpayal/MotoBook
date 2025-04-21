import { View, FlatList, Image, Pressable, Share } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { createStyles } from './styles'
import { XMLParser } from 'fast-xml-parser';
import { ShareSVG } from '@src/assets/svg'
import { setAlertData } from '@src/common/redux/reducers/alert'

const News = () => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [allNewsData, setAllNewsData] = useState<any[]>([])

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(true))
            getNewsDataList()
        }, [])
    )


    const getNewsDataList = async () => {
        const response1 = await getNewsData('https://auto.economictimes.indiatimes.com/rss/passenger-vehicle/cars')

        const response2 = await getNewsData('https://www.indianautosblog.com/feed')

        const response3 = await getNewsData('https://gaadiwaadi.com/feed/')

        setAllNewsData([...response1, ...response2, ...response3])

        dispatch(setIsFullScreenLoading(false))
    }


    const getNewsData = async (api: string) => {
        try {
            const response = await fetch(api);

            const xmlStr = await response.text();

            const parser = new XMLParser();
            const jsonObj = parser.parse(xmlStr);

            return jsonObj?.rss?.channel?.item ? [...jsonObj?.rss?.channel?.item] : [];
        } catch (error) {
            console.error('error = ', error);
            return []
        }
    };

    const getTitleDecoded = (title: any) => {
        return title?.replace(/&#(\d+);/g, (match: any, dec: any) => String.fromCharCode(dec))
    }

    const renderNewsItem = ({ item }: { item: any }) => {
        return (
            <Pressable style={styles.item} onPress={() => {
                navigation.navigate('InAppBrowser', { title: 'News Details', link: item?.link })
            }}>
                <Image style={{ width: '100%', height: scaleHeightPX(120), marginBottom: scaleHeightPX(6) }} source={{ uri: item?.image?.url || 'https://spn-sta.spinny.com/blog/20220825223325/Luxury-SUVs.jpg' }} resizeMode='cover' />
                <CustomText textType='semi-bold' lineHeight style={{ ...commonFontStyles.fontSizeL }}>{getTitleDecoded(item?.title)}</CustomText>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: scaleWidthPX(16) }}>
                    <CustomText lineHeight style={{ flex: 1 }}>{item?.pubDate?.replace('+0530', '')}</CustomText>
                    <Pressable onPress={() => shareOnPress(`${item?.title} \n ${item?.link}`)}>
                        <ShareSVG fill={colors.white} width={scaleWidthPX(24)} height={scaleWidthPX(24)} />
                    </Pressable>
                </View>
            </Pressable>
        )
    }

    const shareOnPress = async (text: string) => {
        try {
            await Share.share({
                message: text
            })
        } catch (error: any) {
            dispatch(
                setAlertData({
                    isShown: true,
                    type: 'error',
                    label: error.message
                })
            )
        }
    }

    return (
        <MainFrame isHeader title='News' isNotifications={false} isBack={false}>
            <View style={styles.main}>
                <FlatList data={allNewsData} renderItem={renderNewsItem} keyExtractor={(_, index) => `${index}`} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
            </View>
        </MainFrame>
    )
}

export default News
