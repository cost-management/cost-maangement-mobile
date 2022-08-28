import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {FC, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {TransactionsRoutesParams} from '../../../routes/TransactionsRoutes';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import SmallCategory from '../../ui/smallCategories/SmallCategory';
import Keyboad from '../../ui/keyboard/Keyboard';
import style from './style';
import {toogleModal} from '../../../store/slices/categorySlice';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';
import Picker from '../../ui/picker/Picker';

interface InitialValues {
  category: string;
  folder: string;
  value: string;
  selected: boolean;
}

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<TransactionsRoutesParams>>();
  const {params} = useRoute<RouteProp<TransactionsRoutesParams>>();

  const scroll = useRef<ScrollView>(null);

  const folders = useAppSelector(state => state.folders.folders).map(
    folder => folder.title,
  );
  const {incomeCategory, costCategory} = useAppSelector(
    state => state.categories,
  );
  const [categories, setCategories] = useState(
    params?.categoryType === 'cost' ? costCategory : incomeCategory,
  );

  const initialValue: InitialValues = {
    category: params?.category!,
    folder: folders[0],
    value: '',
    selected: false,
  };

  return (
    <View style={style.container}>
      <Formik
        onSubmit={() => console.log('sumbit')}
        initialValues={initialValue}>
        {({setFieldValue, values}) => (
          <View style={style.form}>
            <DoubleButton
              styles={{
                container: style.doubleButton,
              }}
              leftButtonHanlder={() => {
                setCategories(costCategory);
                scroll.current?.scrollTo(0);
              }}
              rightButtonHandler={() => {
                setCategories(incomeCategory);
                scroll.current?.scrollTo(0);
              }}
            />
            <Picker
              items={folders}
              currentValue={values.folder}
              itemHandler={setFieldValue}
              valueType="folder"
            />
            <ScrollView ref={scroll} horizontal={true} style={style.scrollView}>
              {categories.map(category => (
                <SmallCategory
                  title={category}
                  categoryHandle={() => setFieldValue('category', category)}
                />
              ))}
            </ScrollView>
            <Keyboad value={values.value} setValue={setFieldValue} />
            <DoubleButton
              leftButtonText="*"
              rightButtonText=""
              styles={{
                leftButton: style.leftButton,
                rightButton: style.rightButton,
                container: style.buttonContainer,
              }}
              leftButtonHanlder={() =>
                setFieldValue('selected', !values.selected)
              }
              rightButtonHandler={() => {
                dispatch(toogleModal());
                navigate('transactionsView');
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTransactionModal;
