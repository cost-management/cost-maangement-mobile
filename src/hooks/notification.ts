import messaging from '@react-native-firebase/messaging';
import {ICognitoUser} from '../models/Auth';
import {Auth} from 'aws-amplify';
const useNotification = () => {
  const getToken = async () => await messaging().getToken();

  const signUp = async () => {
    const token = await getToken();
    return token;
  };

  const signIn = async (user: ICognitoUser) => {
    const token = await getToken();
    if (token !== user.attributes?.['custom:token']) {
      const response = await Auth.updateUserAttributes(user, {
        'custom:token': token,
      });
      console.log('no good');
    } else {
      console.log('good');
    }
  };

  return {signUp, signIn};
};

export default useNotification;
