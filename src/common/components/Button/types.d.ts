import {BUTTON_TYPES} from '@constants/constants';

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  SVGIcon?: any;
  iconSize?: number;
  backgroundColor?: string;
  width?: any;
  buttonType?: BUTTON_TYPES;
  white?: string;
  isLoading?: boolean;
  isFlex?: boolean;
  isCircleRadius?: boolean
}
