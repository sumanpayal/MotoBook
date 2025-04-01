import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import CustomText from '../Text'
import { DownSVG } from '@src/assets/svg'
import { isEmpty } from 'lodash'
import { inputStyles } from './styles'

interface DropdownProps {
    value: string
    onPress?: () => void
    label: string
    disabled?: boolean
    isRequired?: boolean
    RightIcon?: any
    placeholder?: string
}

export default function CustomDate(props: DropdownProps) {
    const { colors } = useTheme()

    const { label, value = '', onPress, disabled = false, isRequired = false, RightIcon = DownSVG, placeholder = 'Select' } = props

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const styles = inputStyles(colors)

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <CustomText style={{ color: colors.labelColor }}>
                    {label}
                    {isRequired ? <CustomText style={{ color: colors.alertRed }}>{' *'}</CustomText> : ''}
                </CustomText>
                <Pressable style={styles.inputView} onPress={onPress} disabled={disabled}>
                    <CustomText style={{ ...styles.input, color: isEmpty(value) ? colors.inputPlaceholder : colors.white }}>{value || placeholder}</CustomText>
                    <RightIcon />
                </Pressable>
            </View>
        </View>
    )
}
