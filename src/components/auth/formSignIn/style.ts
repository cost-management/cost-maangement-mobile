import {StyleSheet} from 'react-native';
import {
  PADDING_HORIZONTAL,
  BORDER_SMALL_RADIUS,
} from '../../../constants/styleConstants';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BORDER_LARGE_RADIUS,
} from '../../../constants/styleConstants';

interface Style {
  containerContent: object;
  submitButtom: object;
  submitTitle: object;
  container: object;
  signUpContainer: object;
  signUpTitle: object;
  input: object;
}

const style = StyleSheet.create<Style>({
  containerContent: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    paddingTop: '30%',
  },
  submitButtom: {
    width: '100%',
    height: 70,
    backgroundColor: '#6C6C6C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_SMALL_RADIUS,
    marginTop: 30,
  },
  submitTitle: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderTopLeftRadius: BORDER_LARGE_RADIUS,
    borderTopRightRadius: BORDER_LARGE_RADIUS,
    paddingHorizontal: PADDING_HORIZONTAL,
    flex: 1,
    paddingTop: 80,
  },
  signUpContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  signUpTitle: {
    color: 'red',
  },
  input: {
    paddingLeft: 0,
  },
});

export default style;
