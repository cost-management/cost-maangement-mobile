import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../../constans/styleConstants';

interface Style {
  container: object;
  costs: object;
  buttonsContainer: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: WIDTH_SCREEN,
    height: 200,
    paddingHorizontal: WIDTH_SCREEN * 0.1,
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
