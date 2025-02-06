import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

export const isTabletMode = DeviceInfo.isTablet();

export const isHuawei =
  Platform.OS === 'android' &&
  Platform.Version >= 5 &&
  Platform.constants.Manufacturer?.toLowerCase() === 'huawei';

/**
 * Checks if the device display is zoomed.
 * @returns {boolean} True if the device display is zoomed, false otherwise.
 */
export const isZoomed = () => {
  return Platform.OS == 'ios' && DeviceInfo.isDisplayZoomed();
};

/**
 * Retrieves the unique identifier of the device.
 * @returns {Promise<string>} The device unique identifier.
 */
export const getDeviceId = async () => {
  return await DeviceInfo.getUniqueId();
};

/**
 * Retrieves the device's IP address.
 * @returns {Promise<string>} The device's IP address.
 */
export const getIpAddress = async () => {
  return await DeviceInfo.getIpAddress();
};

/**
 * Checks if the device is an emulator.
 * @returns {Promise<boolean>} True if the device is an emulator, false otherwise.
 */
export const getIsEmulatorSync = async () => {
  return await DeviceInfo.isEmulatorSync();
};

export const extraNotchHeight = !DeviceInfo.hasNotch() ? 40 : 0;

export const notchPaddingTop = DeviceInfo.hasNotch() ? 40 : 0;
