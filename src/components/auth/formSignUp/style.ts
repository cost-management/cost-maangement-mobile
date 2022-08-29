import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL} from '../../../constants/styleConstants';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BORDER_LARGE_RADIUS,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  contentContainer: object;
  input: object;
  signInContainer: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop: '30%',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: BORDER_LARGE_RADIUS,
    borderTopRightRadius: BORDER_LARGE_RADIUS,
    paddingTop: 80,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  input: {
    paddingLeft: 0,
  },
  signInContainer: {
    marginTop: 30,
  },
});

export default style;
