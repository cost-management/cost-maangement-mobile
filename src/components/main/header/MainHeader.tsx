import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import React, {FC, useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {UserContext} from '../../../contexts/UserProvider';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import CircleButton from '../../ui/circleButton/CircleButton';
import {style} from './style';

const MainHeader: FC = () => {
  const {setUser} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();

  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const statisticHandler = () => navigate('statistic');
  const allTransactionsHandler = () => navigate('allTransactions');

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.costs} onPress={allTransactionsHandler} />
      <View style={style.buttonsContainer}>
        <CircleButton text="-" buttonHandler={signOutHandler} />
        <CircleButton text="i" buttonHandler={statisticHandler} />
      </View>
    </View>
  );
};

export default MainHeader;
