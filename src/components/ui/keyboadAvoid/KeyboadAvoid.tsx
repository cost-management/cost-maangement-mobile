import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  ViewStyle,
  Keyboard,
} from 'react-native';

interface KeyboardAvoidProps {
  children: ReactNode;
  container?: StyleProp<ViewStyle>;
  scorll?: StyleProp<ViewStyle>;
}

const KeyboardAvoid: FC<KeyboardAvoidProps> = ({
  children,
  container,
  scorll,
}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={container} behavior="height">
      <ScrollView scrollEnabled={keyboardStatus} contentContainerStyle={scorll}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
