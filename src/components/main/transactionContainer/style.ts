import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL} from '../../../constants/styleConstants';
import {
  BORDER_SMALL_RADIUS,
  SCREEN_WIDTH,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  title: object;
  category: object;
  sum: object;
  sumContainer: object;
  contentContainer: object;
  delete: object;
  titleContainer: object;
  subTitle: object;
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
  contentContainer: {
    width: SCREEN_WIDTH - 2 * PADDING_HORIZONTAL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    marginLeft: 20,
    width: 80,
  },
  titleContainer: {
    justifyContent: 'space-between',
  },
  subTitle: {
    color: 'red',
    fontSize: 12,
  },
});

export default style;
