import {NoRecordFoundProps} from '../NoRecordFound/types';
import {BottomModalProps} from '../BottomModal/types';

type SingleSelectionModalProps = {
  data: any[];
  visible: boolean;
  onClose: () => void;
  title: string;
  titleItem?: string;
  idItem?: string;
  isSeperator?: boolean;
  isIcon?: boolean;
  isIconIsImage?: boolean;
  selectedItem: any | null;
  setSelectedItem: (item: any) => void;
  isSearch?: boolean;
  noRecordViewProps?: NoRecordFoundProps;
  modalProps?: BottomModalProps;
  children?: any;
};
