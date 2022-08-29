import {StyleSheet} from 'react-native';
import {BORDER_SMALL_RADIUS} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#6C6C6C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_SMALL_RADIUS,
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default style;
