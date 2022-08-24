import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  titleContainer: object;
  title: object;
}

const style = StyleSheet.create<Style>({
  container: {
    paddingHorizontal: 30,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    width: SCREEN_WIDTH,
    height: 100,
    justifyContent: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    backgroundColor: 'rgba(108, 108, 108, 1)',
    padding: 10,
    width: '80%',
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
});

export default style;
