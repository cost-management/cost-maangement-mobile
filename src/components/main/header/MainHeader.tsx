import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {UserContext} from '../../../contexts/UserProvider';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import CircleButton from '../../ui/circleButton/CircleButton';
import {style} from './style';
import useMainHeader from './mainHeader.hook';

const MainHeader: FC = () => {
  const {signOutHandler, statisticHandler, allTransactionsHandler, balance} =
    useMainHeader();

  return (
    <View style={style.container}>
      <View style={style.balanceContainer}>
        <Text style={style.title}>Загальний баланс</Text>
        <TouchableOpacity onPress={allTransactionsHandler}>
          <Text style={style.balance}>{`${balance} грн`}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.buttonsContainer}>
        <CircleButton text="-" buttonHandler={signOutHandler} />
        <CircleButton text="i" buttonHandler={statisticHandler} />
      </View>
    </View>
  );
};

export default MainHeader;
