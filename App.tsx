/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
<<<<<<< HEAD
import Navigation from './src/views/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
=======
import AuthRoutes from './src/routes/AuthRoutes';
>>>>>>> main

Amplify.configure(awsconfig);

const App = () => {
<<<<<<< HEAD
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
=======
  return <AuthRoutes />;
>>>>>>> main
};

export default App;
