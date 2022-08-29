import React, {FC, useContext} from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import useInput from '../hooks/input';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {StackParams} from '../routes/AuthRoutes';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_HORIZONTAL,
} from '../constants/styleConstants';
import AuthHeader from '../components/auth/header/AuthHeader';
import InputContainer from '../components/auth/inputContainer/InputContainer';
import SubmitButton from '../components/auth/buttonSubmit/SubmitButton';
import {BORDER_LARGE_RADIUS} from '../constants/styleConstants';
import {UserContext} from '../contexts/UserProvider';
import {ICognitoUser} from '../models/Auth';

const Confirm: FC = () => {
  const {value, onChangeText} = useInput();
  const {setUser} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<StackParams, 'confirm'>>();
  const {params} = useRoute<RouteProp<StackParams, 'confirm'>>();
  const signInHandler = async (email: string, password: string) => {
    try {
      const user: ICognitoUser = await Auth.signIn(email, password);
      setUser(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };
  const confirmHandler = async () => {
    try {
      await Auth.confirmSignUp(params.email, value);
      signInHandler(params.email, params.password);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  const resendCodeHandler = async () => {
    try {
      await Auth.resendSignUp(params.email);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <AuthHeader title="Підтвердження" />
        <InputContainer
          title="Код"
          input={{
            value,
            onChangeText,
            placeholder: 'Введіть ваш код підтвердження',
            style: style.input,
          }}
        />
        <SubmitButton title="Підтврдити" submit={confirmHandler} />
        <View style={style.resendCodeContainer}>
          <Text>Не прийшов код? </Text>
          <TouchableOpacity onPress={resendCodeHandler}>
            <Text style={style.resendCode}>Надіслати ще раз</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C6C6C4D',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: BORDER_LARGE_RADIUS,
  },
  input: {
    paddingLeft: 0,
  },
  resendCodeContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  resendCode: {
    color: 'red',
  },
});

export default Confirm;
