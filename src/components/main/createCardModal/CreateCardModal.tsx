import {Formik} from 'formik';
import React, {FC, useContext} from 'react';
import {Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {
  FolderType,
  IFolder,
  Currency,
  Skins,
  PostFolder,
} from '../../../models/Folder';
import Field from '../../ui/Field';
import {useAppDispatch} from '../../../hooks/redux';
import {addFolder} from '../../../store/slices/folderSlice';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
import {UserContext} from '../../../contexts/UserProvider';
import {FolderAPI} from '../../../services/FolderService';
import CardSkinChanger from '../cardSkin/CardSkinChanger';
import {useSharedValue} from 'react-native-reanimated';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {toogleModal} from '../../../store/slices/categorySlice';
import style from './style';
import Picker from '../../ui/picker/Picker';
import CloseButton from '../../ui/closeButton/CloseButton';
import {FolderRole} from '../../../models/Folder';
import useBackHanlder from '../../../hooks/backHandler';

type InitialValues =
  | Omit<
      IFolder,
      'id' | 'owner_id' | 'nanos' | 'folder_customer_metadata' | 'created_at'
    > & {amount: string};

const CreateCardModal: FC = () => {
  useBackHanlder();
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();
  const [postFolderMutation] = FolderAPI.useAddFolderMutation();
  const submitHandler = async ({
    currency,
    title,
    folder_type,
    amount,
    skin,
  }: InitialValues) => {
    const id = uuidv4();
    const created_at = new Date(Date.now()).toISOString();

    const postFolder: PostFolder = {
      title,
      currency,
      folder_type,
      amount: parseInt(amount, 10) || 0,
      id,
      skin,
      created_at,
    };
    const folder: IFolder = {
      title,
      currency,
      folder_type,
      amount,
      created_at,
      id,
      skin,
      folder_customer_metadata: [
        {customer_id: user.attributes?.sub!, customer_role: FolderRole.owner},
      ],
    };
    dispatch(addFolder(folder));
    const response = await postFolderMutation({
      body: postFolder,
      id: user.attributes?.sub!,
    });
    console.log(response);
    dispatch(toogleModal());
    navigate('mainPage');
  };

  const initialValue: InitialValues = {
    title: '',
    currency: Currency.uah,
    folder_type: FolderType.cash,
    amount: '',
    skin: Skins.green,
  };

  const x = useSharedValue(0);
  return (
    <Formik initialValues={initialValue} onSubmit={submitHandler}>
      {({handleSubmit, handleChange, values, setFieldValue}) => (
        <View style={style.container}>
          <Field
            style={style.title}
            value={values.title}
            onChangeText={handleChange('title')}
            placeholder="Назва папки"
          />
          <Picker
            currentValue={values.folder_type}
            items={[FolderType.card, FolderType.cash]}
            itemHandler={setFieldValue}
            valueType="folder_type"
          />
          <Field
            style={style.balance}
            value={values.amount}
            onChangeText={handleChange('amount')}
            placeholder="Баланс"
            keyboardType="number-pad"
          />
          <Picker
            currentValue={values.currency}
            items={[Currency.uah, Currency.usd]}
            itemHandler={setFieldValue}
            valueType="currency"
          />
          <View style={style.line} />
          <CardSkinChanger x={x} setValue={setFieldValue} />
          <TouchableOpacity onPress={handleSubmit} style={style.submitButton}>
            <Text>Створити</Text>
          </TouchableOpacity>
          <CloseButton
            styles={style.closeButton}
            buttonHandler={() => {
              dispatch(toogleModal());
              navigate('mainPage');
            }}
          />
        </View>
      )}
    </Formik>
  );
};

export default CreateCardModal;
