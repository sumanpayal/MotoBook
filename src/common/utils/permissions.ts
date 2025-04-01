import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';

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
      else if (requestResult === RESULTS.UNAVAILABLE) {
        Alert.alert('', 'Camera not available');
        return false;
      }
      else {
        Alert.alert('', 'Camera permission is denied');
        return false;
      }
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

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
            title: 'Photo Library Permission',
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
            title: 'Photo Library Permission',
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
        else if (requestResult === RESULTS.UNAVAILABLE) {
          Alert.alert('', 'Photo Library not available');
          return false;
        }
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

const openSettingsAlert = ({ title }: { title: string }) => {
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
      onPress: () => { },
    },
  ]);
};

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
