import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  PADDING_HORIZONTAL,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  costs: object;
  buttonsContainer: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: '20%',
    paddingHorizontal: PADDING_HORIZONTAL,
    flexDirection: 'row',
  },
  costs: {
    width: '70%',
    backgroundColor: 'grey',
  },
  buttonsContainer: {
    width: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
