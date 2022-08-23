import {StyleSheet} from 'react-native';

interface Style {
  container: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 17,
  },
});

export default style;
