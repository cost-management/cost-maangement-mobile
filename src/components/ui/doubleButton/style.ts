import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  leftButton: object;
  rightButton: object;
  title: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH - 68,
    height: 70,
    borderRadius: 20,
    flexDirection: 'row',
  },
  leftButton: {
    backgroundColor: '#B6B6B6',
    width: (SCREEN_WIDTH - 68) / 2,
    height: '100%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    backgroundColor: '#6C6C6C',
    width: (SCREEN_WIDTH - 68) / 2,
    height: '100%',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  },
});

export default style;
