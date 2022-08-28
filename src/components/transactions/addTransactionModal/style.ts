import {StyleSheet} from 'react-native';
import {
  PADDING_HORIZONTAL,
  PADDING_BOTTOM,
} from '../../../constants/styleConstants';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  MODAL_TRANSLATE_Y,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  categoryContainer: object;
  form: object;
  buttonContainer: object;
  leftButton: object;
  rightButton: object;
  picker: object;
  doubleButton: object;
  scrollView: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    transform: [{translateY: MODAL_TRANSLATE_Y}],
    backgroundColor: '#D9D9D9',
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  categoryContainer: {
    height: 48,
  },
  form: {
    alignItems: 'center',
  },
  buttonContainer: {
    width: SCREEN_WIDTH - 80,
    height: 50,
    marginTop: 10,
  },
  leftButton: {
    width: SCREEN_WIDTH / 2 - 40,
    height: 50,
  },
  rightButton: {
    width: SCREEN_WIDTH / 2 - 40,
    height: 50,
  },
  picker: {
    marginTop: 40,
  },
  doubleButton: {
    position: 'absolute',
    top: -35,
  },
  scrollView: {
    width: SCREEN_WIDTH,
    marginBottom: 10,
    maxHeight: 48,
  },
});

export default style;
