import React, {FC} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParams} from '../views/Navigation';

interface FormSignInProps {
  handlerSubmit: (email: string, password: string) => void;
  email: string;
}

const FormSignIn: FC<FormSignInProps> = ({handlerSubmit, email}) => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email Required'),
    password: Yup.string()
      .min(4, 'Min 4 symbol')
      .max(16, 'Max 16 symbol')
      .required('Password Required'),
  });
  const {navigate} = useNavigation<NavigationProp<StackParams, 'signIn'>>();
  const signUpHandler = () => navigate('signUp');
  return (
    <Formik
      initialValues={{email, password: ''}}
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
