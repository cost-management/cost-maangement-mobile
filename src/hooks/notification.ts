import messaging from '@react-native-firebase/messaging';
import {ICognitoUser} from '../models/Auth';
import {Auth} from 'aws-amplify';
import PushNotification from 'react-native-push-notification';
import useStartApp from './startApp';
const useNotification = () => {
  const getToken = async () => await messaging().getToken();
  const {getInvites} = useStartApp();
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
    }
  };

  const createChanel = () => {
    PushNotification.createChannel(
      {
        channelId: 'ids', // (required)
        channelName: 'My channels', // (required)
      },
      created => {},
    );
  };
  const getPush = async (message: any, user: ICognitoUser) => {
    const {type, owner} = JSON.parse(message.notification.body);
    console.log(message);
    await getInvites(user.attributes?.sub!);
    if (type === 'INVITE') {
      PushNotification.localNotification({
        title: 'Cost Manager',
        message: `Вас запрошує ${owner}`,
        channelId: 'id',
      });
    }
  };

  return {signUp, signIn, getPush, createChanel};
};

export default useNotification;
