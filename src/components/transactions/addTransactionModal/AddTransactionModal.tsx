import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {FC, useRef, useState, useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {TransactionsRoutesParams} from '../../../routes/TransactionsRoutes';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import SmallCategory from '../../ui/smallCategories/SmallCategory';
import Keyboad from '../../ui/keyboard/Keyboard';
import style from './style';
import {toogleModal} from '../../../store/slices/categorySlice';
import Picker from '../../ui/picker/Picker';
import useBackHanlder from '../../../hooks/backHandler';
import {ITransaction, PostTransaction} from '../../../models/Transaction';
import {CategoryType} from '../../../views/Transactions';
import getTimezone from '../../../utils/getTimesone';
import {UserContext} from '../../../contexts/UserProvider';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
import {addTransaction} from '../../../store/slices/transactionSlice';
import {TransactionAPI} from '../../../services/TransactionService';
interface InitialValues {
  category: string;
  folderTitle: string;
  value: string;
  selected: boolean;
  folder_id: string;
}

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<TransactionsRoutesParams>>();
  const {params} = useRoute<RouteProp<TransactionsRoutesParams>>();
  const [addTransactionMutation] = TransactionAPI.useAddTransactionMutation();
  useBackHanlder();
  const scroll = useRef<ScrollView>(null);
  const foldersTitle = useAppSelector(state => state.folders.folders).map(
    folder => folder.title,
  );
  const foldersId = useAppSelector(state => state.folders.folders).map(
    folder => folder.id,
  );
  const {incomeCategory, costCategory} = useAppSelector(
    state => state.categories,
  );
  const [categories, setCategories] = useState(
    params?.categoryType === 'cost' ? costCategory : incomeCategory,
  );

  const {user} = useContext(UserContext);

  const changeFolderId = (
    handleChange: (field: string, value: any) => void,
    id: number,
  ) => {
    handleChange('folder_id', foldersId[id]);
  };

  const initialValue: InitialValues = {
    category: params?.category!,
    folderTitle: foldersTitle[0],
    value: '',
    selected: false,
    folder_id: foldersId[0],
  };

  const submitHandler = async ({
    category,
    folderTitle,
    value,
    folder_id,
  }: InitialValues) => {
    const [units, nanos] = value.split('.');
    const id = uuidv4();
    const transaction: ITransaction = {
      units: units || '0',
      nanos: nanos || '',
      created_at: Date.now().toString(),
      timezone: getTimezone(),
      income_category: category,
      title: folderTitle,
      costumer_id: user.attributes?.sub!,
      folder_id,
      id,
    };
    const transactionPost: PostTransaction = {
      units: parseInt(units, 10) || 0,
      nanos: parseInt(nanos, 10) || 0,
      timezone: getTimezone(),
      income_category: category.toUpperCase(),
      title: folderTitle,
      costumer_id: user.attributes?.sub!,
      folder_id,
      id,
    };
    console.log(transactionPost);
    dispatch(addTransaction(transaction));
    const response = await addTransactionMutation({
      id: user.attributes?.sub!,
      body: transactionPost,
    });
    console.log(response);
    dispatch(toogleModal());
    navigate('transactionsView');
  };

  return (
    <View style={style.container}>
      <Formik onSubmit={submitHandler} initialValues={initialValue}>
        {({setFieldValue, values, handleSubmit}) => (
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
              styles={style.picker}
              items={foldersTitle}
              currentValue={values.folderTitle}
              itemHandler={setFieldValue}
              valueType="folderTitle"
              extra={changeFolderId}
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
              rightButtonHandler={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTransactionModal;
