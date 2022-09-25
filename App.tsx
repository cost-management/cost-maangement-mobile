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
import Navigation from './src/views/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
