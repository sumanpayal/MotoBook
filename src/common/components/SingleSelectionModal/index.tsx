import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import BottomModal from '../BottomModal';
import CustomText from '../Text';
import {selectionModalStyles} from './styles';
import commonMarginStyles from '@src/common/styles/commonMarginStyles';
import SearchComponent from '../SearchComponent';
import {NoRecordFound} from '../NoRecordFound';
import {SingleSelectionModalProps} from './types';
import commonFlexStyles from '@src/common/styles/commonFlexStyles';

const SingleSelectionModal = (props: SingleSelectionModalProps) => {
  const {
    visible,
    onClose = () => {},
    data,
    title,
    titleItem = 'title',
    idItem = 'id',
    isSeperator = false,
    isIcon = false,
    isIconIsImage = false,
    selectedItem,
    setSelectedItem,
    isSearch = true,
    noRecordViewProps,
    modalProps,
  } = props;

  const {colors} = useTheme();
  const styles = selectionModalStyles(colors);

  const [searchText, setSearchText] = useState<string>('');
  const [flatListData, setFlatListData] = useState<any[]>(data);

  const searchData = (text: string) => {
    const search = text.toLowerCase();
    const filterData = data?.filter((item: any) =>
      `${item[titleItem]}`.toLowerCase().includes(search),
    );
    setFlatListData(filterData);
  };

  const onPressClose = () => {
    setSearchText('');
    setFlatListData(data);
    onClose();
  };

  useEffect(() => {
    setFlatListData(data);
  }, [data]);

  const onPressSelectItem = (item: any) => {
    setSelectedItem(item);
    setSearchText('');
    setFlatListData(data);
  };

  const renderItem = ({item}: {item: any}) => {
    const Icon = isIcon && item?.icon;
    const selected =
      selectedItem?.[idItem]?.toString() === item[idItem]?.toString();
    return (
      <Pressable
        style={styles.itemContent}
        onPress={() => onPressSelectItem(item)}>
        <View style={[styles.itemLeft, isIconIsImage && styles.itemLeftImage]}>
          {isIcon &&
            (isIconIsImage ? (
              <Image source={{uri: Icon}} style={styles.itemImage} />
            ) : (
              <Icon />
            ))}
          <CustomText style={styles.itemLabel}>{item[titleItem]}</CustomText>
        </View>
        <View style={styles.itemRight}>
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: selected ? colors.backgroundColor : colors.alertGreen,
            }}
          />
        </View>
      </Pressable>
    );
  };

  const listHeaderComponent = () => {
    return (
      <View style={styles.search}>
        <SearchComponent
          searchText={searchText}
          handleSearch={(text: string) => {
            setSearchText(text);
            searchData(text);
          }}
          clearSearch={() => {
            setSearchText('');
            searchData('');
          }}
        />
      </View>
    );
  };

  const listSeperatorComponent = () => {
    return isSeperator ? <View style={styles.itemSeparator} /> : null;
  };

  return (
    <BottomModal
      visible={visible}
      onDrop={onPressClose}
      isHeader
      headerTitle={title}
      isHeaderLeft
      onHeaderLeftOnPress={onPressClose}
      containerStyle={isSearch ? styles.containerStyle : {}}
      {...modalProps}
      hideOnBackdropPress={false}>
      {isSearch && listHeaderComponent()}
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={item => `${item[idItem]}`}
        ItemSeparatorComponent={listSeperatorComponent}
        ListEmptyComponent={() => <NoRecordFound {...noRecordViewProps} />}
        contentContainerStyle={[
          styles.listStyle,
          flatListData?.length === 0 && styles.listStyleEmpty,
          flatListData?.length === 0 &&
            !isSearch &&
            commonMarginStyles.marginTop2XL,
          flatListData?.length === 0 && isSearch && commonFlexStyles.flex1,
        ]}
      />
    </BottomModal>
  );
};

export default SingleSelectionModal;
