import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {TransactionsRoutesParams} from '../../../routes/TransactionsRoutes';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import SmallCategory from '../../ui/smallCategories/SmallCategory';
import Keyboad from '../../ui/keyboard/Keyboard';
import style from './style';
import {toogleModal} from '../../../store/slices/categorySlice';
import Picker from '../../ui/picker/Picker';
import useBackHanlder from '../../../hooks/backHandler';
import {PostTransaction, TransactionsFolder} from '../../../models/Transaction';
import getTimezone from '../../../utils/getTimesone';
import {UserContext} from '../../../contexts/UserProvider';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
import {addTransaction} from '../../../store/slices/transactionSlice';
import {TransactionAPI} from '../../../services/TransactionService';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {CategoryType} from '../../../views/Transactions';
import {changeSum} from '../../../store/slices/folderSlice';
interface InitialValues {
  category: string;
  folderTitle: string;
  amount: string;
  selected: boolean;
  folder_id: string;
}

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const [categoryType, setCategoryType] = useState<CategoryType>('cost');
  const transactionNavigate =
    useNavigation<NavigationProp<TransactionsRoutesParams>>();
  const mainNavigate = useNavigation<NavigationProp<MainRoutesParams>>();
  const transactionRoute = useRoute<RouteProp<TransactionsRoutesParams>>();
  const mainRoute = useRoute<RouteProp<MainRoutesParams, 'addTransaction'>>();
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
    transactionRoute.params?.categoryType !== 'cost' &&
      mainRoute.params.type !== 'main'
      ? incomeCategory
      : costCategory,
  );
  useEffect(() => {
    transactionRoute.params?.categoryType !== 'cost' &&
    mainRoute.params.type !== 'main'
      ? setCategoryType('income')
      : setCategoryType('cost');
  }, []);
  const {user} = useContext(UserContext);

  const changeFolderId = (
    handleChange: (field: string, value: any) => void,
    id: number,
  ) => {
    handleChange('folder_id', foldersId[id]);
  };
  const initialValue: InitialValues = {
    category: transactionRoute.params?.category! || categories[0],
    folderTitle: mainRoute.params.folderTitle || foldersTitle[0],
    amount: '',
    selected: false,
    folder_id: mainRoute.params.folder_id || foldersId[0],
  };

  const submitHandler = async ({
    category,
    folderTitle,
    amount,
    folder_id,
  }: InitialValues) => {
    const id = uuidv4();
    if (mainRoute.params.type) {
      mainNavigate.navigate('folder', {folder_id: mainRoute.params.folder_id});
    } else {
      transactionNavigate.navigate('transactionsView');
    }
    dispatch(toogleModal());

    const created_at = new Date(Date.now()).toISOString();
    const transactionPost: PostTransaction = {
      amount:
        (categoryType === 'cost'
          ? parseFloat(amount) * -1
          : parseFloat(amount)) || 0,
      timezone: getTimezone(),
      income_category: category,
      title: folderTitle,
      customer_id: user.attributes?.sub!,
      folder_id,
      id,
      created_at,
    };
    const transactionFolder: TransactionsFolder = {
      folder_id,
      transactions: [
        {
          amount: (categoryType === 'cost' ? `-${amount}` : amount) || '0',
          created_at,
          timezone: getTimezone(),
          income_category: category,
          title: folderTitle,
          costumer_id: user.attributes?.sub!,
          folder_id,
          id,
        },
      ],
    };
    dispatch(addTransaction(transactionFolder));
    const response = await addTransactionMutation({
      id: user.attributes?.sub!,
      body: transactionPost,
    });
    console.log(response);

    dispatch(
      changeSum({
        amount: (categoryType === 'cost' ? `-${amount}` : amount) || '0',
        folder_id,
      }),
    );
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
                setFieldValue('category', costCategory[0]);
                setCategoryType('cost');
                setCategories(costCategory);
                scroll.current?.scrollTo(0);
              }}
              rightButtonHandler={() => {
                setFieldValue('category', incomeCategory[0]);
                setCategoryType('income');
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
            <Keyboad value={values.amount} setValue={setFieldValue} />
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
