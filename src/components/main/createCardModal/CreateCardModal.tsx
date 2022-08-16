import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {FolderType, IFolder, Currency} from '../../../models/Folder';
import Field from '../../ui/Field';

interface CreateCardModalProps {
  toogleModal: () => void;
}

const CreateCardModal: FC<CreateCardModalProps> = ({toogleModal}) => {
  const submitHandler = () => toogleModal();

  const initialValue: Omit<IFolder, 'id' | 'owner_id'> = {
    title: '',
    currency: Currency.uan,
    folder_type: FolderType.cash,
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
            <Picker
              selectedValue={values.currency}
              onValueChange={handleChange('currency')}>
              <Picker.Item value={Currency.uan} label={Currency.uan} />
              <Picker.Item value={Currency.usd} label={Currency.usd} />
            </Picker>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateCardModal;
