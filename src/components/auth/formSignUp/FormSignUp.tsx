import {Formik} from 'formik';
import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SignUpSchema} from '../../../utils/auth/validation';
import style from './style';
import AuthHeader from '../header/AuthHeader';
import InputContainer from '../inputContainer/InputContainer';
import SubmitButton from '../buttonSubmit/SubmitButton';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParams} from '../../../routes/AuthRoutes';
import KeyboardAvoid from '../../ui/keyboadAvoid/KeyboadAvoid';
import {SCREEN_HEIGHT} from '../../../constants/styleConstants';

interface InitialValues {
  email: string;
  password: string;
  repeatPassword: string;
}

interface FormSignUpProps {
  signUpHandler: (email: string, password: string) => void;
}

const FormSignUp: FC<FormSignUpProps> = ({signUpHandler}) => {
  const {navigate} = useNavigation<NavigationProp<StackParams>>();
  const initialValues: InitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const signInHandler = () => navigate('signIn');

  return (
    <KeyboardAvoid container={{flex: 1}} scorll={{height: SCREEN_HEIGHT}}>
      <View style={style.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            signUpHandler(values.email, values.password);
          }}
          validationSchema={SignUpSchema}>
          {({values, handleChange, handleSubmit}) => (
            <View style={style.contentContainer}>
              <AuthHeader title="Реєстрація" />
              <InputContainer
                title="Email"
                input={{
                  value: values.email,
                  placeholder: 'Введіть свій Email',
                  onChangeText: handleChange('email'),
                  style: style.input,
                  autoComplete: 'email',
                  keyboardType: 'email-address',
                }}
              />
              <InputContainer
                title="Пароль"
                input={{
                  value: values.password,
                  placeholder: 'Введіть свій пароль',
                  onChangeText: handleChange('password'),
                  style: style.input,
                  secureTextEntry: true,
                }}
              />
              <InputContainer
                title="Повторний пароль"
                input={{
                  value: values.repeatPassword,
                  placeholder: 'Повторіть свій пароль',
                  onChangeText: handleChange('repeatPassword'),
                  style: style.input,
                  secureTextEntry: true,
                }}
              />
              <SubmitButton title="Зареєструватися" submit={handleSubmit} />
              <TouchableOpacity
                style={style.signInContainer}
                onPress={signInHandler}>
                <Text>Вже є акаунт?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoid>
  );
};

export default FormSignUp;
