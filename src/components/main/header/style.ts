import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../../constants/styleConstants';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {
  SCREEN_WIDTH,
  PADDING_HORIZONTAL,
  COLORS,
} from '../../../constants/styleConstants';

interface Style {
  container: object;
  balanceContainer: object;
  buttonsContainer: object;
  title: object;
  balance: object;
}

export const style = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.2,
    paddingHorizontal: PADDING_HORIZONTAL,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  balanceContainer: {
    width: '70%',
  },
  buttonsContainer: {
    alignSelf: 'center',
    width: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
  },
  balance: {
    fontSize: 18,
    marginTop: 10,
    color: 'red',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
  },
});
