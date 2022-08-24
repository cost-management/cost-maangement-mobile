import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

interface Style {
  mainContainer: object;
  currentValue: object;
  pickerContainer: object;
  picker: object;
  dropdownContainer: object;
  container: object;
  itemContainer: object;
  item: object;
  scrollViewContainer: object;
}

const style = StyleSheet.create<Style>({
  mainContainer: {
    borderRadius: 10,
    marginVertical: 20,
    width: SCREEN_WIDTH - 60,
    maxHeight: 200,
  },
  currentValue: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7C7C7',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '30%',
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#F0F0F0',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: '70%',
    paddingRight: 10,
    height: 40,
  },
  picker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  dropdownContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  container: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: '69%',
  },
  item: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 40,
  },
  scrollViewContainer: {
    height: 200,
  },
});

export default style;
