import {StyleSheet} from 'react-native';
import {MODAL_TRANSLATE_Y} from '../../../constants/styleConstants';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  PADDING_HORIZONTAL,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
  balance: object;
  line: object;
  submitButton: object;
  closeButton: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#D7D7D7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    transform: [{translateY: MODAL_TRANSLATE_Y}],
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  title: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#C7C7C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  balance: {
    width: SCREEN_WIDTH - 120,
    height: 88,
    backgroundColor: '#C7C7C7',
    borderRadius: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#919191',
    width: SCREEN_WIDTH - 60,
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
    width: SCREEN_WIDTH - 120,
    height: 60,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -40,
    right: 0,
  },
});

export default style;
