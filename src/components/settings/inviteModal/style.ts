import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  modalContainer: object;
  leftButton?: object;
  rightButton?: object;
  doubleButtonContainer: object;
}

const style = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    width: SCREEN_WIDTH - 60,
    height: 400,
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
