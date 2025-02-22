import { useNavigation } from '@react-navigation/native'
import CustomButton from '@src/common/components/Button'
import MainFrame from '@src/common/components/Mainframe'
import { setUserData } from '@src/common/redux/reducers/currentUser'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation()

    const logoutOnPress = useCallback(() => {
        dispatch(setUserData(null))
    }, [])

    return (
        <MainFrame>
            <View style={{ gap: 16, flex: 1, alignItems: 'center', justifyContent: 'center', margin: 16 }}>
                <CustomButton title='Logout' onPress={logoutOnPress} />
                <CustomButton title='Add Address' onPress={() => navigation.navigate('AddAddress')} />
                <CustomButton title='Address List' onPress={() => navigation.navigate('AddressList')} />
            </View>
        </MainFrame>
    )
}

export default HomeScreen
