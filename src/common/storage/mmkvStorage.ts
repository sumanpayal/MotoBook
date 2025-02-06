import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';

//TODO: Change encryption key base on env from env config
const storage = new MMKV({
  id: `reduxStorage`,
  encryptionKey: '123456789',
});

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
