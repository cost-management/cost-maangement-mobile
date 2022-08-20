import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constans/styleConstants';

interface Style {
  container: object;
  costs: object;
  buttonsContainer: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: 200,
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    flexDirection: 'row',
  },
  costs: {
    width: '70%',
  },
  buttonsContainer: {
    width: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
