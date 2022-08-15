import {StyleSheet} from 'react-native';

interface Style {
  container: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
