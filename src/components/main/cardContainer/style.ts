import {StyleSheet} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {
  PADDING_HORIZONTAL,
  PADDING_BOTTOM,
  SCREEN_WIDTH,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  button: object;
  scorllView: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    height: '80%',
    position: 'relative',
    paddingBottom: PADDING_BOTTOM + 30,
  },
  button: {
    position: 'absolute',
    bottom: PADDING_BOTTOM + ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  },
  scorllView: {
    width: SCREEN_WIDTH,
    flexWrap: 'wrap',
    paddingHorizontal: PADDING_HORIZONTAL,
  },
});
