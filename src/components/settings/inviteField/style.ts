import {StyleSheet} from 'react-native';

interface Style {
  container: object;
  leftPartContainer: object;
  buttonsContainer: object;
  leftButtonContainer: object;
  rightButtonContainer: object;
  title: object;
  subTitle: object;
  buttonTitle: object;
}

const style = StyleSheet.create<Style>({
  container: {
    paddingHorizontal: 30,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  leftButtonContainer: {width: 40, height: 28, backgroundColor: '#909090'},
  leftPartContainer: {},
  rightButtonContainer: {width: 40, height: 28, backgroundColor: '#909090'},
  buttonsContainer: {
    width: 80,
    height: 28,
  },
  title: {},
  subTitle: {},
  buttonTitle: {
    fontSize: 20,
  },
});

export default style;
