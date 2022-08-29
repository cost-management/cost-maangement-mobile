import React, {FC, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  ViewStyle,
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
  return (
    <KeyboardAvoidingView style={container} behavior="height">
      <ScrollView contentContainerStyle={scorll}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
