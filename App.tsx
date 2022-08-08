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
import AuthRoutes from './src/routes/AuthRoutes';

Amplify.configure(awsconfig);

const App = () => {
  return <AuthRoutes />;
};

export default App;
