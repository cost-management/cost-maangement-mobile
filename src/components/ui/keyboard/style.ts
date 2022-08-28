import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  PADDING_HORIZONTAL,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  buttonComtainer: object;
  button: object;
  value: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  buttonComtainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: Math.floor(
      (Math.floor((SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 3) - 20 * 3) / 2,
    ),
    marginVertical: 10,
  },
  value: {
    backgroundColor: '#C7C7C7',
    color: 'black',
    fontSize: 25,
    width:
      40 * 3 +
      Math.floor(
        (Math.floor((SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 3) - 20 * 3) / 2,
      ) *
        4,
    height: SCREEN_WIDTH / 6,
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default style;
