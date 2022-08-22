import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constans/styleConstants';

interface Style {
  container: object;
  categoryContainer: object;
  form: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    transform: [{translateY: 60}],
    backgroundColor: '#D9D9D9',
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  categoryContainer: {
    height: 48,
  },
  form: {
    alignItems: 'center',
  },
});

export default style;
