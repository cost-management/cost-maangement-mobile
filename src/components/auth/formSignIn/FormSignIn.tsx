import React, {FC} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SignInSchema} from '../../../utils/auth/validation';
import {StackParams} from '../../../routes/AuthRoutes';
import style from './style';
import InputContainer from '../inputContainer/InputContainer';
import AuthHeader from '../header/AuthHeader';
import SubmitButton from '../buttonSubmit/SubmitButton';

interface FormSignInProps {
  handlerSubmit: (email: string, password: string) => void;
}

const FormSignIn: FC<FormSignInProps> = ({handlerSubmit}) => {
  const {navigate} = useNavigation<NavigationProp<StackParams, 'signIn'>>();
  const signUpHandler = () => navigate('signUp');
  return (
    <View style={style.containerContent}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={() => {}}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={style.container}>
            <InputContainer
              input={{
                value: values.email,
                placeholder: 'Введіть ваш email',
                onChangeText: handleChange('email'),
                style: style.input,
                autoComplete: 'email',
                keyboardType: 'email-address',
              }}
              title="Email"
            />
            <InputContainer
              input={{
                value: values.password,
                placeholder: 'Введіть ваш пароль',
                onChangeText: handleChange('password'),
                style: style.input,
                autoComplete: 'password',
                secureTextEntry: true,
              }}
              title="Пароль"
            />
            <TouchableOpacity>
              <Text>Забули пароль?</Text>
            </TouchableOpacity>
            <SubmitButton
              title="Увійти"
              submit={() =>
                handlerSubmit(
                  values.email.trimStart().trimEnd(),
                  values.password.trimStart().trimEnd(),
                )
              }
            />
            <View style={style.signUpContainer}>
              <Text>Нема акаунту, </Text>
              <TouchableOpacity onPress={signUpHandler}>
                <Text style={style.signUpTitle}>Зареєеструйся</Text>
              </TouchableOpacity>
            </View>
            <AuthHeader title="Вхід" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormSignIn;
