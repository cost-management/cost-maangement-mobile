import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  button: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: 'green',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
});
