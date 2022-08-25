import React, {FC, useContext} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import style from './style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {toogleModal} from '../../../store/slices/categorySlice';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SettingsRoutesParams} from '../../../routes/SettingsRoutes';
import {Formik} from 'formik';
import Picker from '../../ui/picker/Picker';
import {FolderRole} from '../../../models/Folder';
import {UserContext} from '../../../contexts/UserProvider';
import {InviteAPI} from '../../../services/InviteService';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface InitialValues {
  email: string;
  folder: string;
  folder_id: string;
  role: FolderRole;
}

const InviteModal: FC = () => {
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();
  const [addInvites] = InviteAPI.useAddInviteMutation();
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
    navigate('invites');
  };

  const submit = async (values: InitialValues) => {
    if (values.email !== user.attributes?.email) {
      const response = await addInvites({
        id: user.attributes?.sub!,
        body: {
          invited_customer_email: values.email,
          folder_id: values.folder_id,
          customer_role: values.role,
        },
      });
      console.log(response);
    }
  };

  const extraFunction = (changer: any, id: any) => {
    changer('folder_id', foldersId[id]);
  };

  return (
    <TouchableWithoutFeedback onPress={noModalHandler}>
      <View style={style.container}>
        <TouchableWithoutFeedback>
          <View style={[style.modalContainer, rStyle]}>
            <Formik initialValues={initialValues} onSubmit={submit}>
              {({values, handleChange, setFieldValue, handleSubmit}) => (
                <View>
                  <TextInput
                    style={style.email}
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
                    items={[FolderRole.user, FolderRole.admin]}
                  />
                  <Button title="Submit" onPress={handleSubmit} />
                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InviteModal;
