import {StyleSheet, StyleProp, ViewProps, TextProps} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  container: object;
  iconContainer: object;
  titleContainer: object;
  title: object;
  line: object;
}

const style = StyleSheet.create<Style>({
  container: {
    backgroundColor: 'rgba(248, 248, 248, 1)',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(144, 144, 144, 1)',
    borderRadius: 10,
    marginRight: 10,
  },
  titleContainer: {
    backgroundColor: '#B6B6B6',
    padding: 5,
    borderRadius: 10,
  },
  title: {color: 'white'},
  line: {
    width: SCREEN_WIDTH - 100,
    borderColor: 'rgba(144, 144, 144, 1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default style;
