import {Formik} from 'formik';
import React, {FC, useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {FolderType, IFolder, Currency, Skins} from '../../../models/Folder';
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

const CreateCardModal: FC = () => {
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();
  const [postFolder] = FolderAPI.useAddFolderMutation();
  const submitHandler = async ({
    currency,
    title,
    folder_type,
    balance,
    skin,
  }: Omit<IFolder, 'id' | 'owner_id'>) => {
    const folder = {
      title,
      currency,
      folder_type,
      balance,
      id: uuidv4(),
      owner_id: user.attributes?.sub!,
      skin,
    };
    dispatch(addFolder(folder));
    // const response = await postFolder({
    //   body: folder,
    //   id: user.attributes?.sub!,
    // });
    // console.log(response);
    dispatch(toogleModal());
    navigate('mainPage');
  };

  const initialValue: Omit<IFolder, 'id' | 'owner_id'> = {
    title: '',
    currency: Currency.uah,
    folder_type: FolderType.cash,
    balance: '',
    skin: Skins.green,
  };

  const x = useSharedValue(-288);
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
            value={values.balance}
            onChangeText={handleChange('balance')}
            placeholder="Баланс"
            keyboardType="number-pad"
          />
          <Picker
            currentValue={values.currency}
            items={[Currency.uah, Currency.usd]}
            itemHandler={setFieldValue}
            valueType="currency"
          />
          <CardSkinChanger x={x} setValue={setFieldValue} />
          <Button
            title="Exit"
            onPress={() => {
              dispatch(toogleModal());
              navigate('mainPage');
            }}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default CreateCardModal;
