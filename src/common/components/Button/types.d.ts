import {BUTTON_TYPES} from '@constants/constants';
import { TextProps, TextStyle } from 'react-native';

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  SVGIcon?: any;
  backgroundColor?: string;
  width?: any;
  buttonType?: BUTTON_TYPES;
  textColor?: string;
  isLoading?: boolean;
  isFlex?: boolean;
  isCircleRadius?: boolean
  customTextStyles?: TextStyle
  textChildren?: React.ReactNode | undefined
}
