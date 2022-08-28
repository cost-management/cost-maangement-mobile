import {StyleSheet} from 'react-native';
import {
  PADDING_HORIZONTAL,
  SCREEN_WIDTH,
  SMALL_CARD_HEIGHT,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    height: SMALL_CARD_HEIGHT,
    flexDirection: 'row',
    width: SCREEN_WIDTH - PADDING_HORIZONTAL * 2,
    overflow: 'hidden',
    justifyContent: 'center',
  },
});

export default style;
