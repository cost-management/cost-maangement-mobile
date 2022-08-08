import * as Yup from 'yup';
export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(4, 'Min length 4')
    .max(16, 'Max length 16')
    .required('Password Required'),
  repeatPassword: Yup.string()
    .required('Repeat password required')
    .min(4, 'Min length 4')
    .max(16, 'Max length 16')
    .test('email-match', 'Passwords do not match', function (value) {
      const {password} = this.parent;
      return password === value;
    }),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .min(4, 'Min 4 symbol')
    .max(16, 'Max 16 symbol')
    .required('Password Required'),
});
