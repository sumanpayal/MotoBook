import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';

/**
 * To check camera permission
 * @returns boolean
 * @description
 * This function will check and request the camera permission
 * for both android and ios. If the permission is granted, it will return true
 * otherwise it will return false.
 */
export const requestCameraPermission = async () => {
  try {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;

    const result = await check(permission);

    if (result === RESULTS.GRANTED) return true;
    else {
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) return true;
      else {
        Alert.alert('permissionDenied', 'cameraPermissionBlocked');
        return false;
      }
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * To check library permission
 * @returns boolean
 * @description
 * This function will check and request the library permission
 * for both android and ios. If the permission is granted, it will return true
 * otherwise it will return false.
 */
export const requestLibraryPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        const permissions = await checkMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        ]);
        if (
          permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === RESULTS.GRANTED
        )
          return true;

        const response = await requestMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        ]);
        if (response[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === RESULTS.GRANTED)
          return true;

        if (
          response[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === RESULTS.DENIED ||
          response[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === RESULTS.BLOCKED
        ) {
          openSettingsAlert({
            title: 'photoLibraryPermission',
          });
        }
      } else {
        const permission = await check(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );
        if (permission === RESULTS.GRANTED) return true;

        const response = await request(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );
        if (response === RESULTS.GRANTED) return true;
        if (response === RESULTS.DENIED || response === RESULTS.BLOCKED) {
          openSettingsAlert({
            title: 'photoLibraryPermission',
          });
        }
      }
      return false;
    } else {
      const photoLibraryPermission = PERMISSIONS.IOS.PHOTO_LIBRARY;
      const result = await check(photoLibraryPermission);
      if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) return true;
      else {
        const requestResult = await request(photoLibraryPermission);
        if (
          requestResult === RESULTS.GRANTED ||
          requestResult === RESULTS.LIMITED
        )
          return true;
        else {
          return false;
        }
      }
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * Displays an alert prompting the user to open the app settings.
 *
 * @param {Object} param - The function parameter.
 * @param {string} param.title - The title of the alert dialog.
 */
const openSettingsAlert = ({title}: {title: string}) => {
  Alert.alert(title, '', [
    {
      isPreferred: true,
      style: 'default',
      text: 'openSettings',
      onPress: () => Linking?.openSettings(),
    },
    {
      isPreferred: false,
      style: 'destructive',
      text: 'cancel',
      onPress: () => {},
    },
  ]);
};

/**
 * Requests microphone permission from the user.
 *
 * On Android, it prompts the user with a dialog requesting access to record audio.
 * On iOS, it assumes permission is handled automatically.
 *
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the permission is granted, otherwise `false`.
 */
export const requestMicrophonePermission = async () => {
  try {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO;

    const result = await check(permission);

    if (result === RESULTS.GRANTED) return true;
    else {
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) return true;
      else {
        Alert.alert('permissionDenied', 'microphonePermissionBlocked');
        return false;
      }
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * Requests location permission from the user.
 * On Android, it prompts the user with a dialog requesting access to fine location.
 * On iOS, it assumes permission is handled automatically.
 *
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the permission is granted, otherwise `false`.
 */
export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'locationPermission',
        message: 'locationMessage',
        buttonNeutral: 'askMeLater',
        buttonNegative: 'cancel',
        buttonPositive: 'ok',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true; // iOS handles permissions automatically.
};
