import * as Keychain from 'react-native-keychain'

type SetSecureValue = (key: string, value: string) => Promise<boolean | Keychain.Result>
type GetSecureValue = (key: string) => Promise<string | false>
type RemoveSecureValue = (key: string) => Promise<boolean>

/**
 * To store value to keychain
 * @param key - Key to which the value has to stored
 * @param value - Value to store
 * @returns - Resolves to an object containing service and storage when successful, or false on failure.
 */
export const setSecureValue: SetSecureValue = (key, value) => {
	const val = !value ? '' : value
	return Keychain.setGenericPassword(key, val, { service: key })
}

/**
 * To retrieve value from keychain
 * @param key - Key for which value has to retrieved
 * @returns - Return value for the key when successful, or empty string on failure.
 */
export const getSecureValue: GetSecureValue = async (key) => {
	const result = await Keychain.getGenericPassword({ service: key })
	if (result) {
		return result.password
	}
	return ''
}

/**
 * To delete the store value from keychain
 * @param key Key for which the value has to be deleted
 */
export const removeSecureValue: RemoveSecureValue = (key) => Keychain.resetGenericPassword({ service: key })
