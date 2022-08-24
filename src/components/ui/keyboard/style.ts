import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  buttonComtainer: object;
  button: object;
  value: object;
}

const style = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  buttonComtainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  button: {
    marginHorizontal: 47,
    marginVertical: 10,
  },
  value: {
    backgroundColor: '#C7C7C7',
    color: 'black',
    fontSize: 25,
    width: 240,
    height: 88,
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default style;
