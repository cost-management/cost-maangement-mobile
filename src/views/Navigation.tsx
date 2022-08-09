import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import Confirm from './Confirm';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {useState} from 'react';
import {Auth} from 'aws-amplify';

const Navigation: FC = () => {
  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log('hello');
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="main"
            component={() => <Main setUser={setUser} />}
          />
        ) : (
          <>
            <Stack.Screen
              name="signIn"
              component={() => <SignIn setUser={setUser} />}
            />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="confirm" component={Confirm} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
