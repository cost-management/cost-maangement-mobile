import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
}

const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
    marginBottom: 16,
  },
});

export default style;
