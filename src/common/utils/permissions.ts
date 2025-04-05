import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';
import { requestAuthorization } from 'react-native-geolocation-service'

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


const openSetting = () => {
  Linking.openSettings().catch(() => {
    Alert.alert('Unable to open settings');
  });
};

const hasLocationPermissionIOS = async () => {
  const status = await requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow "MotorWash" to determine your location.`,
      '',
      [
        { text: 'Go to Settings', onPress: openSetting },
        { text: "Don't Use Location", onPress: () => { } },
      ],
    );
  }

  return false;
};

export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasLocationPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show(
      'Location permission denied by user.',
      ToastAndroid.LONG,
    );
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }

  return false;
};