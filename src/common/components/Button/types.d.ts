import { BUTTON_TYPES } from '@constants/constants';
import { TextStyle } from 'react-native';

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  SVGIcon?: any;
  backgroundColor?: string;
  width?: any;
  buttonType?: BUTTON_TYPES;
  white?: string;
  isLoading?: boolean;
  isFlex?: boolean;
  isCircleRadius?: boolean
  customLabelStyles?: TextStyle
  childernButton?: React.ReactNode | undefined
  showAnimation?: boolean;
  animationChildren?: React.ReactNode | undefined
}
