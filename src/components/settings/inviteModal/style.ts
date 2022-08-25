import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants/styleConstants';

interface Style {
  container: object;
  modalContainer: object;
  leftButton?: object;
  rightButton?: object;
  doubleButtonContainer: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 20,
  },
  modalContainer: {
    width: SCREEN_WIDTH - 60,
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingTop: 10,
  },
  doubleButtonContainer: {
    width: 200,
    height: 50,
  },
  leftButton: {
    width: 100,
    height: 50,
  },
  rightButton: {
    width: 100,
    height: 50,
  },
});

export default style;
