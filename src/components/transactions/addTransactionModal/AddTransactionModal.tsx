import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {FC, useRef, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {TransactionsRoutesParams} from '../../../routes/TransactionsRoutes';
import {CategoryType} from '../../../views/Transactions';
import {Picker} from '@react-native-picker/picker';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import SmallCategory from '../../ui/smallCategories/SmallCategory';
import Keyboad from '../../ui/keyboard/Keyboard';
import style from './style';
import {toogleModal} from '../../../store/slices/categorySlice';
import {SCREEN_WIDTH} from '../../../constants/styleConstants';

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

  const folders = useAppSelector(state => state.folders.folders);
  const {incomeCategory, costCategory} = useAppSelector(
    state => state.categories,
  );
  const [categoryType, setCategoryType] = useState<CategoryType>(
    params?.categoryType!,
  );
  const [categories, setCategories] = useState(
    params?.categoryType === 'cost' ? costCategory : incomeCategory,
  );

  const initialValue: InitialValues = {
    category: params?.category!,
    folder: '',
    value: '',
    selected: false,
  };

  return (
    <View style={style.container}>
      <Formik
        onSubmit={() => console.log('sumbit')}
        initialValues={initialValue}>
        {({handleChange, setFieldValue, values}) => (
          <View style={style.form}>
            <DoubleButton
              styles={{
                container: {
                  position: 'absolute',
                  top: -35,
                },
              }}
              leftButtonHanlder={() => {
                setCategoryType('cost');
                setCategories(costCategory);
                scroll.current?.scrollTo(0);
              }}
              rightButtonHandler={() => {
                setCategoryType('income');
                setCategories(incomeCategory);
                scroll.current?.scrollTo(0);
              }}
            />
            {folders.length !== 0 && (
              <Picker
                style={{
                  width: 200,
                  alignItems: 'center',
                  marginTop: 40,
                }}
                selectedValue={folders[0]?.title}
                onValueChange={handleChange('folder')}>
                {folders.map(folder => (
                  <Picker.Item value={folder.title} label={folder.title} />
                ))}
              </Picker>
            )}
            <ScrollView
              ref={scroll}
              horizontal={true}
              style={{
                width: SCREEN_WIDTH,
                marginBottom: 10,
              }}
              contentContainerStyle={{
                height: 48,
              }}>
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
                leftButton: {
                  width: SCREEN_WIDTH / 2 - 40,
                  height: 50,
                },
                rightButton: {
                  width: SCREEN_WIDTH / 2 - 40,
                  height: 50,
                },
                container: {
                  width: SCREEN_WIDTH - 80,
                  height: 50,
                  marginTop: 10,
                },
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
