import {StyleSheet} from 'react-native';
import {BORDER_SMALL_RADIUS} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
  category: object;
  sum: object;
  sumContainer: object;
}

const style = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    height: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#909090',
  },
  category: {
    color: '#C7C7C7',
  },
  sum: {
    color: 'white',
  },
  sumContainer: {
    backgroundColor: '#919191',
    height: 30,
    minWidth: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: BORDER_SMALL_RADIUS,
  },
});

export default style;
