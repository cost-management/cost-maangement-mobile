import {StyleSheet} from 'react-native';
import {
  SMALL_CARD_HEIGHT,
  SMALL_CARD_WIDTH,
} from '../../../constants/styleConstants';
interface Style {
  container: object;
}
const style = StyleSheet.create<Style>({
  container: {
    height: SMALL_CARD_HEIGHT,
    width: SMALL_CARD_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 14,
    marginHorizontal: 20,
  },
});

export default style;
