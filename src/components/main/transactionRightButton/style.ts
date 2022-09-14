import {StyleSheet} from 'react-native';

interface Style {
  container: object;
  text: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  },
});

export default style;
