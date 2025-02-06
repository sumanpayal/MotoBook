import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import commonAlignStyles from '@commonStyles/commonAlignStyles';
import commonFlexStyles from '@commonStyles/commonFlexStyles';
import commonMarginStyles from '@commonStyles/commonMarginStyles';
import commonFontStyles from '@commonStyles/commonFontStyles';
import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles';
import commonBorderWidthStyles from '@commonStyles/commonBorderWidthStyles';
import {scaleWidthPX} from '@utils/responsiveStyle';
import {useTheme} from '@react-navigation/native';
import {isTabletMode} from '@src/common/utils/deviceInformation';

export default function PinInput({numInputs = 6, onChange}: PinInputProps) {
  const [pin, setPin] = useState<string[]>(Array(numInputs).fill('')); // State to hold pin values

  const {colors} = useTheme();
  const styles = Styles(colors);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (value: string, index: number): void => {
    const newPin = [...pin];
    const isDeleting = value === '' && pin[index] !== ''; // Detect backspace
    newPin[index] = value.slice(-1); // Allow only one digit per box
    setPin(newPin);

    if (onChange) {
      onChange(newPin.join(''));
    }

    if (value && !isDeleting && index < numInputs - 1) {
      // Move to the next input if adding a character
      inputRefs.current[index + 1]?.focus();
    } else if (isDeleting && index > 0) {
      // Move to the previous input if deleting and the input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const renderInputs = (): JSX.Element[] =>
    pin.map((value, index) => (
      <TextInput
        key={index}
        ref={el => (inputRefs.current[index] = el)}
        style={[styles.input, value !== '' && styles.inputFilled]}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={text => handleChange(text, index)}
        value={value}
        placeholder="∘"
        placeholderTextColor={colors.backgroundColor + 'CC'}
        returnKeyType="done"
      />
    ));

  return <View style={styles.container}>{renderInputs()}</View>;
}

const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...commonFlexStyles.flexRow,
      ...commonAlignStyles.justifyBetween,
      ...commonAlignStyles.alignCenter,
    },
    input: {
      width: isTabletMode ? scaleWidthPX(60) : scaleWidthPX(50),
      height: isTabletMode ? scaleWidthPX(60) : scaleWidthPX(50),
      ...commonMarginStyles.marginHorizontal5XS,
      ...commonBorderWidthStyles.borderWidthM,
      ...commonBorderRadiusStyles.borderRadiusS,
      backgroundColor: colors.backgroubackgroundColorndBg + '26',
      borderColor: colors.backgroundColor + '00',
      textAlign: 'center',
      textAlignVertical: 'center',
      ...commonFontStyles.fontSemiBold,
      ...commonFontStyles.fontSize2XL,
    },
    inputFilled: {
      color: colors.backgroundColor,
    },
  });
