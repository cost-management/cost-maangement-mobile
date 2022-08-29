import {StyleSheet} from 'react-native';
import {BORDER_SMALL_RADIUS} from '../../../constants/styleConstants';

interface Style {
  contaier: object;
}

const style = StyleSheet.create<Style>({
  contaier: {
    backgroundColor: '#F8F8F8',
    borderRadius: BORDER_SMALL_RADIUS,
    width: '100%',
    paddingHorizontal: 23,
    paddingVertical: 18,
    marginBottom: 30,
  },
});

export default style;
