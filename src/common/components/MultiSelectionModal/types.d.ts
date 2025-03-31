import {NoRecordFoundProps} from '../NoRecordFound/types';
import {BottomModalProps} from '../BottomModal/types';

type MultiSelectionModalProps = {
  data: any[];
  visible: boolean;
  onClose: () => void;
  title: string;
  titleItem?: string;
  idItem?: string;
  isSeperator?: boolean;
  isIcon?: boolean;
  isIconIsImage?: boolean;
  setSelectedItem: (data: any[]) => void;
  isSearch?: boolean;
  noRecordViewProps?: NoRecordFoundProps;
  modalProps?: BottomModalProps;
  children?: any;
};
