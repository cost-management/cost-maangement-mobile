import React, {FC} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParams} from '../views/Navigation';
import {SignInSchema} from '../utils/auth/validation';

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
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <TextInput
            placeholder="Input your Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <Text>{errors.email}</Text>
          ) : (
            <Text> </Text>
          )}
          <TextInput
            placeholder="Input your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <Text>{errors.password}</Text>
          ) : (
            <Text> </Text>
          )}
          <Button onPress={handleSubmit} title="SignIn" />
          <Button onPress={signUpHandler} title="SignUp" />
        </View>
      )}
    </Formik>
  );
};

export default FormSignIn;
