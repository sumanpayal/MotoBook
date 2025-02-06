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
  textColor?: string;
  isLoading?: boolean;
  isHorizontal?: boolean;
  isFlex?: boolean;
}
