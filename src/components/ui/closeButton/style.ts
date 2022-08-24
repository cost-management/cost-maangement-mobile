import {StyleSheet} from 'react-native';

interface Style {
  container: object;
  title: object;
}

const style = StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 20,
  },
});

export default style;
