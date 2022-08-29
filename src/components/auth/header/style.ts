import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
}

const style = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    backgroundColor: '#6C6C6C',
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6 * 0.3,
    borderRadius: 15,
    top: (-SCREEN_WIDTH * 0.6 * 0.3) / 2,
    left: SCREEN_WIDTH * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default style;
