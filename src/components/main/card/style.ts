import {StyleSheet} from 'react-native';
import {
  SMALL_CARD_WIDHT,
  SMALL_CARD_HEIGHT,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
  subTitle: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SMALL_CARD_WIDHT,
    height: SMALL_CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    margin: 5,
  },
  title: {
    backgroundColor: '#919191',
    padding: 2,
    borderRadius: 11,
  },
  subTitle: {
    backgroundColor: '#919191',
    padding: 2,
    borderRadius: 11,
    fontSize: 20,
  },
});
