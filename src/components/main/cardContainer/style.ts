import {StyleSheet} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {
  SCREEN_HEIGHT,
  PADDING_BOTTOM,
  PADDING_TOP,
} from '../../../constants/styleConstants';
import {
  PADDING_HORIZONTAL,
  SCREEN_WIDTH,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  button: object;
  scorllView: object;
  foldersContainer: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.8,
    position: 'relative',
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  button: {
    position: 'absolute',
    bottom: 50 + PADDING_BOTTOM + PADDING_TOP,
  },
  scorllView: {
    maxHeight: SCREEN_HEIGHT * 0.8 - PADDING_BOTTOM,
  },
  foldersContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 2 * PADDING_HORIZONTAL,
    flexWrap: 'wrap',
  },
});
