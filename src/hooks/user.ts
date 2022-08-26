import {Auth} from 'aws-amplify';
import {useEffect, useState} from 'react';
import {ICognitoUser} from '../models/Auth';

const useUser = () => {
  const [user, setUser] = useState<ICognitoUser | undefined | null>(undefined);

  const checkUser = async () => {
    try {
      const authUser: ICognitoUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  return {user, setUser, checkUser};
};

export default useUser;
