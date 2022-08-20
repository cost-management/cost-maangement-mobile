import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import React, {FC, useContext} from 'react';
import {Button, View} from 'react-native';
import {FolderType, IFolder, Currency} from '../../../models/Folder';
import Field from '../../ui/Field';
import {useAppDispatch} from '../../../hooks/redux';
import {addFolder} from '../../../store/slices/folderSlice';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
import {UserContext} from '../../../contexts/UserProvider';
import {FolderAPI} from '../../../services/FolderService';

interface CreateCardModalProps {
  toogleModal: () => void;
}

const CreateCardModal: FC<CreateCardModalProps> = ({toogleModal}) => {
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const [postFolder] = FolderAPI.useAddFolderMutation();
  const submitHandler = async ({
    currency,
    title,
    folder_type,
    balance,
  }: Omit<IFolder, 'id' | 'owner_id'>) => {
    const folder = {
      title,
      currency,
      folder_type,
      balance,
      id: uuidv4(),
      owner_id: user.attributes?.sub!,
    };
    dispatch(addFolder(folder));
    // const response = await postFolder({
    //   body: folder,
    //   id: user.attributes?.sub!,
    // });
    // console.log(response);
    toogleModal();
  };

  const initialValue: Omit<IFolder, 'id' | 'owner_id'> = {
    title: '',
    currency: Currency.uah,
    folder_type: FolderType.cash,
    balance: '',
  };

  return (
    <View>
      <Formik initialValues={initialValue} onSubmit={submitHandler}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Field
              value={values.title}
              onChangeText={handleChange('title')}
              placeholder="Назва папки"
            />
            <Picker
              selectedValue={values.folder_type}
              onValueChange={handleChange('folder_type')}>
              <Picker.Item value={FolderType.card} label={FolderType.card} />
              <Picker.Item value={FolderType.cash} label={FolderType.cash} />
            </Picker>
            <Field
              value={values.balance}
              onChangeText={handleChange('balance')}
              placeholder="Баланс"
              keyboardType="number-pad"
            />
            <Picker
              selectedValue={values.currency}
              onValueChange={handleChange('currency')}>
              <Picker.Item value={Currency.uah} label={Currency.uah} />
              <Picker.Item value={Currency.usd} label={Currency.usd} />
            </Picker>
            <Button title="Exit" onPress={() => toogleModal()} />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateCardModal;
