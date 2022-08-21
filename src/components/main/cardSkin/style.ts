import {StyleSheet} from 'react-native';

interface Style {
  container: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
  },
});

export default style;
