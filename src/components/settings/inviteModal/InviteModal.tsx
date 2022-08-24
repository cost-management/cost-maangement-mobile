import React, {FC, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  Text,
} from 'react-native';
import style from './style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {toogleModal} from '../../../store/slices/categorySlice';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SettingsRoutesParams} from '../../../routes/SettingsRoutes';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {Formik} from 'formik';
import Picker from '../../ui/picker/Picker';
import {FolderRole} from '../../../models/Folder';

interface InitialValues {
  email: string;
  folder: string;
  folder_id: string;
  role: FolderRole;
}

type IncomeOperations = 'get' | 'post';

const InviteModal: FC = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();
  const [incomeOperations, setincomeOperations] =
    useState<IncomeOperations>('post');

  const {folders} = useAppSelector(state => state.folders);

  const foldersName = folders.map(folder => folder.title);

  const initialValues: InitialValues = {
    email: '',
    folder: foldersName[0] || '',
    folder_id: '',
    role: FolderRole.owner,
  };

  const noModalHandler = () => {
    dispatch(toogleModal());
    navigate('settingsView');
  };

  const addInvite = () => {
    return (
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({values, handleChange, setFieldValue, handleSubmit}) => (
          <View>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Email"
              textAlign="center"
            />
            <Picker
              currentValue={values.folder}
              valueType="folder"
              itemHandler={setFieldValue}
              items={foldersName}
            />
            <Picker
              currentValue={values.role}
              valueType="role"
              itemHandler={setFieldValue}
              items={[FolderRole.owner, FolderRole.admin, FolderRole.user]}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    );
  };

  const getInvite = () => {
    return (
      <View>
        <Text></Text>
        <Button title="Accept" onPress={() => console.log('accept')} />
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={noModalHandler}>
      <View style={style.container}>
        <TouchableWithoutFeedback>
          <View style={style.modalContainer}>
            <DoubleButton
              styles={{
                container: style.doubleButtonContainer,
                leftButton: style.leftButton,
                rightButton: style.rightButton,
              }}
              leftButtonHanlder={() => setincomeOperations('get')}
              rightButtonHandler={() => setincomeOperations('post')}
            />
            {incomeOperations === 'get' ? getInvite() : addInvite()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InviteModal;
