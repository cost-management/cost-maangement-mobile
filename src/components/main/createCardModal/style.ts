import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constans/styleConstants';

interface Style {
  container: object;
  title: object;
  balance: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#D7D7D7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    transform: [{translateY: 60}],
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#C7C7C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  balance: {
    width: SCREEN_WIDTH - 120,
    height: 88,
    backgroundColor: '#C7C7C7',
    borderRadius: 10,
  },
});

export default style;
