import {StyleSheet} from 'react-native';
import {PADDING} from '../../../constants/styleConstants';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  button: object;
  scorllView: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    paddingBottom: 105,
  },
  button: {
    position: 'absolute',
    bottom: 85,
  },
  scorllView: {
    width: SCREEN_WIDTH,
    flexWrap: 'wrap',
    paddingHorizontal: PADDING,
  },
});
