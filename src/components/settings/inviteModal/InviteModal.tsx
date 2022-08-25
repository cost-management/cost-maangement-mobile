import React, {FC, useContext, useState} from 'react';
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
import {UserContext} from '../../../contexts/UserProvider';
import {InviteAPI} from '../../../services/InviteService';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

interface InitialValues {
  email: string;
  folder: string;
  folder_id: string;
  role: FolderRole;
}

type IncomeOperations = 'get' | 'post';

const InviteModal: FC = () => {
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();
  const [incomeOperations, setincomeOperations] =
    useState<IncomeOperations>('post');
  const {data} = InviteAPI.useGetInvitesQuery(user.attributes?.sub!);
  const [addInvites] = InviteAPI.useAddInviteMutation();
  const [acceptInvite] = InviteAPI.useAcceptinviteMutation();
  const {folders} = useAppSelector(state => state.folders);

  const foldersName = folders.map(folder => folder.title);
  const foldersId = folders.map(folder => folder.id);

  const height = useSharedValue(400);

  const rStyle = useAnimatedStyle(() => ({height: height.value}));

  const initialValues: InitialValues = {
    email: '',
    folder: foldersName[0] || '',
    folder_id: foldersId[0],
    role: FolderRole.user,
  };

  const noModalHandler = () => {
    dispatch(toogleModal());
    navigate('settingsView');
  };

  const submit = async (values: InitialValues) => {
    const response = await addInvites({
      id: user.attributes?.sub,
      folder: {
        invited_customer_email: values.email,
        folder_id: values.folder_id,
        customer_role: values.role,
      },
    });
    console.log(response);
  };

  const patchInvite = async () => {
    const response = acceptInvite({
      id: user.attributes?.sub,
      folder: {
        invited_customer_id: user.attributes?.sub,
        folder_id: data[0].id,
        customer_role: data[0].customer_role,
      },
    });
    console.log(response);
  };

  const extraFunction = (changer: any, id: any) => {
    changer('folder_id', foldersId[id]);
  };

  const addInvite = () => {
    return (
      <Formik initialValues={initialValues} onSubmit={submit}>
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
              extra={extraFunction}
            />
            <Picker
              currentValue={values.role}
              valueType="role"
              itemHandler={setFieldValue}
              items={(FolderRole.user, [FolderRole.admin])}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    );
  };

  const getInvite = () => {
    if (data.length === 0) {
      return (
        <View>
          <Text>Нет інвайтов</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{data[0]?.email}</Text>
        <Button title="Accept" onPress={patchInvite} />
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={noModalHandler}>
      <View style={style.container}>
        <TouchableWithoutFeedback>
          <Animated.View style={[style.modalContainer, rStyle]}>
            <DoubleButton
              styles={{
                container: style.doubleButtonContainer,
                leftButton: style.leftButton,
                rightButton: style.rightButton,
              }}
              leftButtonHanlder={() => {
                setincomeOperations('get');
                height.value = withTiming(150);
              }}
              rightButtonHandler={() => {
                height.value = withTiming(400, {}, () =>
                  runOnJS(setincomeOperations)('post'),
                );
              }}
            />
            {incomeOperations === 'get' ? getInvite() : addInvite()}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InviteModal;
