import {StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '../../../constants/styleConstants';
interface Style {
  container: object;
}
const style = StyleSheet.create<Style>({
  container: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 14,
    marginHorizontal: 20,
  },
});

export default style;
