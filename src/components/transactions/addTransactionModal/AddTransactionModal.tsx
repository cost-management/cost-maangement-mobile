import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {FC, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {TransactionsRoutesParams} from '../../../routes/TransactionsRoutes';
import {CategoryType} from '../../../views/Transactions';
import {Picker} from '@react-native-picker/picker';
import {useAppSelector} from '../../../hooks/redux';
import SmallCategory from '../../ui/smallCategories/SmallCategory';

interface InitialValues {
  category: string;
  folder: string;
  value: string;
}

const AddTransactionModal: FC = () => {
  const {navigate} = useNavigation<NavigationProp<TransactionsRoutesParams>>();
  const {params} = useRoute<RouteProp<TransactionsRoutesParams>>();
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
  };

  return (
    <View>
      <Button
        title="Close Modal"
        onPress={() => navigate('transactionsView')}
      />
      <DoubleButton
        leftButtonHanlder={() => {
          setCategoryType('cost');
          setCategories(costCategory);
        }}
        rightButtonHandler={() => {
          setCategoryType('income');
          setCategories(incomeCategory);
        }}
      />
      <Formik
        onSubmit={() => console.log('sumbit')}
        initialValues={initialValue}>
        {({handleChange, setFieldValue, values}) => (
          <View>
            {folders.length !== 0 && (
              <Picker
                selectedValue={folders[0]?.title}
                onValueChange={handleChange('folder')}>
                {folders.map(folder => (
                  <Picker.Item value={folder.title} label={folder.title} />
                ))}
              </Picker>
            )}
            <Text>{values.category}</Text>
            <ScrollView horizontal={true}>
              {categories.map(category => (
                <SmallCategory
                  title={category}
                  categoryHandle={() => setFieldValue('category', category)}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTransactionModal;
