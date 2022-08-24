import React, {FC} from 'react';
import {View, TouchableWithoutFeedback, TextInput} from 'react-native';
import style from './style';
import {useAppDispatch} from '../../../hooks/redux';
import {toogleModal} from '../../../store/slices/categorySlice';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SettingsRoutesParams} from '../../../routes/SettingsRoutes';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import {Formik} from 'formik';

interface InitialValues {
  email: string;
  folder: string;
  folder_id: string;
}

const InviteModal: FC = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();

  const initialValues: InitialValues = {
    email: '',
    folder: '',
    folder_id: '',
  };

  const noModalHandler = () => {
    dispatch(toogleModal());
    navigate('settingsView');
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
              leftButtonHanlder={() => console.log('hellp')}
              rightButtonHandler={() => console.log('helloo')}
            />
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              {({values, handleChange}) => (
                <View>
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                    textAlign="center"
                  />
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
