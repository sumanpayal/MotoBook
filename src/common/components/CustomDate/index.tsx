import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import CustomText from '../Text'
import { DownSVG } from '@src/assets/svg'
import { inputStyles } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateFormat, formatDate } from '@src/common/utils/formatDate'
import MonthPicker from 'react-native-month-year-picker';

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
    isMonthSelection?: boolean
    format?: DateFormat
}

export default function CustomDate(props: DropdownProps) {
    const { colors } = useTheme()
    const styles = inputStyles(colors)

    const { label, value = '', disabled = false, isRequired = false, RightIcon = DownSVG, placeholder = 'YYYY-MM-DD', mode = 'date', is24Hour = false, onPress, minimumDate, format = 'startDateVehicle', isMonthSelection = false } = props

    const [open, setOpen] = useState(false)

    const onChange = (event: any, selectedDate: any) => {
        setOpen(false);
        onPress(selectedDate);
    };

    const onValueChange = (event: any, selectedDate: any) => {
        setOpen(false);
        onPress(selectedDate ?? value ?? new Date());
    }

    const shouDateModal = () => {
        setOpen(true);
    };

    const isValueEmpty = () => {
        return value === null || value === undefined || value?.length === 0
    }

    console.log({ date: value });


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <CustomText style={{ color: colors.labelColor }}>
                    {label}
                    {isRequired ? <CustomText style={{ color: colors.alertRed }}>{' *'}</CustomText> : ''}
                </CustomText>
                <Pressable style={styles.inputView} onPress={shouDateModal} disabled={disabled}>
                    <CustomText style={{ ...styles.input, color: isValueEmpty() ? colors.inputPlaceholder : colors.white }}>{value ? formatDate(value, format) : placeholder}</CustomText>
                    <RightIcon />
                </Pressable>
                {open && (
                    isMonthSelection ? <MonthPicker
                        onChange={onValueChange}
                        value={value ?? new Date()}
                        minimumDate={minimumDate}
                    /> : <View style={styles.dateView}>
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
