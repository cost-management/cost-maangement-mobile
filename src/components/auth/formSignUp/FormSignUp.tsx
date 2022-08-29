import {Formik} from 'formik';
import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import Field from '../../ui/Field';
import {SignUpSchema} from '../../../utils/auth/validation';

interface InitialValues {
  email: string;
  password: string;
  repeatPassword: string;
}

interface FormSignUpProps {
  signUpHandler: (email: string, password: string) => void;
}

const FormSignUp: FC<FormSignUpProps> = ({signUpHandler}) => {
  const initialValues: InitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => signUpHandler(values.email, values.password)}
      validationSchema={SignUpSchema}>
      {({values, handleChange, handleSubmit, errors}) => (
        <View>
          <Field
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder="Input your email"
          />
          <Text>{errors.email}</Text>
          <Field
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Input your password"
          />
          <Text>{errors.password}</Text>
          <Field
            value={values.repeatPassword}
            onChangeText={handleChange('repeatPassword')}
            placeholder="Repeat your password"
          />
          <Text>{errors.repeatPassword}</Text>
          <Button title="SignUp" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default FormSignUp;
