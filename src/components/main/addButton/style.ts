import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/styleConstants';

interface Style {
  container: object;
  symbol: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default style;
