import {Image} from 'react-native';

/**
 * To check the image url is valid
 * @param imageUrl image url string
 * @returns boolean
 */
export const getIsValidImage = async (imageUrl: string) => {
  let isValidImage = false;
  await Image.getSize(imageUrl, () => {
    isValidImage = true;
  });
  return isValidImage;
};
