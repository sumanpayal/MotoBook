import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import CustomText from '../Text'
import { DownSVG } from '@src/assets/svg'
import { inputStyles } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '@src/common/utils/formatDate'

interface DropdownProps {
    value: any
    label: string
    disabled?: boolean
    isRequired?: boolean
    RightIcon?: any
    placeholder?: string
    mode?: 'date' | 'time' | 'datetime'
    is24Hour?: boolean
    onPress: (value: any) => void
    minimumDate?: Date
}

export default function CustomDate(props: DropdownProps) {
    const { colors } = useTheme()
    const styles = inputStyles(colors)

    const { label, value = '', disabled = false, isRequired = false, RightIcon = DownSVG, placeholder = 'YYYY-MM-DD', mode = 'date', is24Hour = false, onPress, minimumDate = new Date() } = props

    const [open, setOpen] = useState(false)

    const onChange = (event, selectedDate) => {
        setOpen(false);
        onPress(selectedDate);
    };

    const shouDateModal = () => {
        setOpen(true);
    };

    const isValueEmpty = () => {
        return value === null || value === undefined || value?.length === 0
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <CustomText style={{ color: colors.labelColor }}>
                    {label}
                    {isRequired ? <CustomText style={{ color: colors.alertRed }}>{' *'}</CustomText> : ''}
                </CustomText>
                <Pressable style={styles.inputView} onPress={shouDateModal} disabled={disabled}>
                    <CustomText style={{ ...styles.input, color: isValueEmpty() ? colors.inputPlaceholder : colors.white }}>{value ? formatDate(value, 'startDateVehicle') : placeholder}</CustomText>
                    <RightIcon />
                </Pressable>
                {open && (
                    <View style={styles.dateView}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={value ?? new Date()}
                            mode={mode}
                            is24Hour={is24Hour}
                            onChange={onChange}
                            minimumDate={minimumDate}
                        />
                    </View>
                )}
            </View>
        </View>
    )
}
