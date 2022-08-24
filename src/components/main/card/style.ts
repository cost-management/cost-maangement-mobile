import {StyleSheet} from 'react-native';
import {CARD_WIDTH, CARD_HEIGHT} from '../../../constants/styleConstants';

interface Style {
  container: object;
  textContainer: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: CARD_WIDTH,
    marginVertical: 10,
    backgroundColor: 'grey',
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
