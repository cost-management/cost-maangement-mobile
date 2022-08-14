import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Formik} from 'formik';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParams} from '../views/Navigation';
import {SignInSchema} from '../utils/auth/validation';
import Field from './ui/Field';

interface FormSignInProps {
  handlerSubmit: (email: string, password: string) => void;
}

const FormSignIn: FC<FormSignInProps> = ({handlerSubmit}) => {
  const {navigate} = useNavigation<NavigationProp<StackParams, 'signIn'>>();
  const signUpHandler = () => navigate('signUp');
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={SignInSchema}
      onSubmit={values => handlerSubmit(values.email, values.password)}>
      {({handleChange, handleSubmit, values, errors}) => (
        <View>
          <Field
            placeholder="Input your Email"
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <Text>{errors.email}</Text>
          <Field
            placeholder="Input your Password"
            onChangeText={handleChange('password')}
            value={values.password}
          />
          <Text>{errors.password}</Text>
          <Button onPress={handleSubmit} title="SignIn" />
          <Button onPress={signUpHandler} title="SignUp" />
        </View>
      )}
    </Formik>
  );
};

export default FormSignIn;
