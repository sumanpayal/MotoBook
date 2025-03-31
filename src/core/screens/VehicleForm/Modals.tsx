import { View } from 'react-native'
import React from 'react'
import SingleSelectionModal from '@src/common/components/SingleSelectionModal'
import { useTheme } from '@react-navigation/native'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import InformationModal from '@src/common/components/InformationModal'

interface RenderModalsProps {
    isColorShow: boolean
    colorsList: any[]
    setIsColorShow: (value: boolean) => void
    selectedColor: any
    onPressSelectColor: (item: any) => void

    isAddressModalVisible: boolean
    allAddressList: any[]
    setIsAddressModalVisible: (value: boolean) => void
    selectedAddress: any
    onPressSelectAddress: (item: any) => void

    isTimeSlotsModalVisible: boolean
    setIsTimeSlotsModalVisible: (value: boolean) => void
    subscriptionTimeSlotsData: any[]
    selectedSubscriptionTimeSlot: any
    onPressSelectTimeSlots: (item: any) => void


    isInfoModalOpen: boolean
    setIsInfoModalOpen: (value: boolean) => void
}

const RenderModals = (props: RenderModalsProps) => {
    const { isColorShow, colorsList, setIsColorShow, selectedColor, onPressSelectColor, isAddressModalVisible, allAddressList, setIsAddressModalVisible, selectedAddress, onPressSelectAddress, isTimeSlotsModalVisible, subscriptionTimeSlotsData, setIsTimeSlotsModalVisible, selectedSubscriptionTimeSlot, onPressSelectTimeSlots, isInfoModalOpen, setIsInfoModalOpen } = props

    const { colors } = useTheme()

    const renderColorsItem = (item: any) => {
        return <View style={{ borderWidth: 1, borderColor: item?.title ?? colors.inputPlaceholder, width: scaleWidthPX(24), height: scaleWidthPX(24), borderRadius: scaleWidthPX(12), justifyContent: 'center', alignItems: 'center', marginRight: scaleWidthPX(8), backgroundColor: item?.title }} />
    }

    return (
        <>
            {isColorShow && <SingleSelectionModal data={colorsList} visible={isColorShow} onClose={() => setIsColorShow(false)} title='Select Color' titleItem='name' idItem='_id' selectedItem={selectedColor} setSelectedItem={onPressSelectColor} children={renderColorsItem} />}
            {isAddressModalVisible && <SingleSelectionModal data={allAddressList} visible={isAddressModalVisible} onClose={() => setIsAddressModalVisible(false)} title='Select Address' titleItem='address' idItem='_id' selectedItem={selectedAddress} setSelectedItem={onPressSelectAddress} />}
            {isTimeSlotsModalVisible && <SingleSelectionModal data={subscriptionTimeSlotsData} visible={isTimeSlotsModalVisible} onClose={() => setIsTimeSlotsModalVisible(false)} title='Select Time Slot' titleItem='name' idItem='id' selectedItem={selectedSubscriptionTimeSlot} setSelectedItem={onPressSelectTimeSlots} />}
            {isInfoModalOpen && <InformationModal visible={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} description={`You don't need to pay upfront-your subscription fee is collected at the end of each month after you've enjoyed the service. Pay easily via cash or any UPI method.`} />}
        </>
    )
}

export default RenderModals