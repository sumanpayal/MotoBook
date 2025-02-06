import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

/**
 * Hook to get the height of the keyboard.
 *
 * @returns {number} The height of the keyboard.
 *
 * @example
 * const keyboardHeight = useKeyboard();
 * return (
 *   <View style={{height: keyboardHeight}}>
 *     // The content of the view will be moved up when the keyboard appears
 *   </View>
 * );
 */
export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: KeyboardEvent) {
    // Remove type here if not using TypeScript
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardHeight;
};
