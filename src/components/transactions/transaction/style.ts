import {StyleSheet} from 'react-native';
import {TRANSACTION_MARGIN} from '../../../constans/styleConstants';
import {
  TRANSACTION_WIDTH,
  TRANSACTION_HEIGHT,
} from '../../../constans/styleConstants';

interface Style {
  container: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: TRANSACTION_WIDTH,
    height: TRANSACTION_HEIGHT,
    borderStartColor: '#E2E2E2',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: TRANSACTION_MARGIN,
    marginVertical: TRANSACTION_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
