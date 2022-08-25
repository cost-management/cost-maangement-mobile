import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants/styleConstants';

interface Style {
  container: object;
  modalContainer: object;
  email: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 20,
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingVertical: 60,
  },
  email: {
    width: SCREEN_WIDTH - 60,
    height: 50,
    backgroundColor: 'rgba(182, 182, 182, 1)',
    borderRadius: 10,
  },
});

export default style;
