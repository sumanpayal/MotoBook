import {ENV} from '@src/network/apiClient';
import {MMKV} from 'react-native-mmkv';
import {ENVIRONMENT} from '../constants/constants';

//TODO: Change encryption key base on env from env config

// Storage that stores data even after user log's out.
const anonymousStorage = new MMKV({
  id: `anonymousUserStorage`,
  encryptionKey: '123456789',
});

// Storage that stores data that deletes after user log's out.
const loggedInStorage = new MMKV({
  id: `loggedInUserStorage`,
  encryptionKey: '12345',
});

/**
 * To store Data in anonymousStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store except Boolean and Number
 */
export const storeAnonymousData = async (key: string, value: any) => {
  anonymousStorage.set(key, JSON.stringify(value));
};

/**
 * To store Data in loggedInStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store except Boolean and Number
 */
export const storeData = (key: string, value: any) => {
  loggedInStorage.set(key, JSON.stringify(value));
};

/**
 * To retrieve value from anonymousStorage
 * @param key - Key for which value has to retrieved
 * @returns - Return value for the key when successful, or null on failure.
 */
export const getAnonymousStoreData = (key: string) => {
  const value: any = anonymousStorage.getString(key);
  if (!value) return value;
  return JSON.parse(value) || value;
};

/**
 * To retrieve value from loggedInStorage
 * @param key - Key for which value has to retrieved
 * @returns - Return value for the key when successful, or null on failure.
 */
export const getData = (key: string) => {
  const value: any = loggedInStorage.getString(key);
  if (!value) return null;
  return JSON.parse(value) || null;
};

/**
 * To delete all store value from anonymousStorage
 */
export const deleteAnonymousStorageData = () => {
  anonymousStorage.clearAll();
};

/**
 * To delete all store value from loggedInStorage
 */
export const deleteStorageData = () => {
  loggedInStorage.clearAll();
};

/**
 * To delete the store value from anonymousStorage
 * @param key Key for which the value has to be deleted
 */
export const deleteAnonymousStorageSpecificData = (key: string) => {
  anonymousStorage.delete(key);
};

/**
 * To delete the store value from loggedInStorage
 * @param key Key for which the value has to be deleted
 */
export const deleteStorageSpecificData = (key: string) => {
  loggedInStorage.delete(key);
};

/**
 * To store boolean Data in anonymousStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store accepts only boolean
 */
export const storeBooleanAnonymousData = (key: string, value: boolean) => {
  anonymousStorage.set(key, value);
};

/**
 * To store boolean Data in loggedInStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store accepts only boolean
 */
export const storeBooleanData = (key: string, value: boolean) => {
  loggedInStorage.set(key, value);
};

/**
 * To get boolean Data from anonymousStorage
 * @param key - Key to which the value has to retrieved
 */
export const getBooleanAnonymousStoreData = (key: string) => {
  return anonymousStorage.getBoolean(key);
};

/**
 * To get boolean Data from loggedInStorage
 * @param key - Key to which the value has to retrieved
 */
export const getBooleanStoreData = (key: string) => {
  return loggedInStorage.getBoolean(key);
};

/**
 * To store Integer Data in anonymousStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store accepts only Number
 */
export const storeIntAnonymousData = (key: string, value: number) => {
  anonymousStorage.set(key, value);
};

/**
 * To store Integer Data in loggedInStorage
 * @param key - Key to which the value has to stored
 * @param value - Value to store accepts only Number
 */
export const storeIntData = (key: string, value: number) => {
  loggedInStorage.set(key, value);
};

/**
 * To get integer Data from anonymousStorage
 * @param key - Key to which the value has to retrieved
 */
export const getIntAnonymousStoreData = (key: string) => {
  return anonymousStorage.getNumber(key);
};

/**
 * To get integerData from loggedInStorage
 * @param key -Key to which the value has to retrieved
 */
export const getIntStoreData = (key: string) => {
  return loggedInStorage.getNumber(key);
};

export const deleteLoggedInData = () => {
  //Delete userStorage if previous user and current user is not same
  deleteStorageData();
};
