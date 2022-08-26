import {StyleSheet} from 'react-native';
import {CARD_WIDTH, CARD_HEIGHT} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
  subTitle: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 14,
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
