import React, {FC, useState} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import CircleButton from '../../ui/circleButton/CircleButton';
import CreateCardModal from '../createCardModal/CreateCardModal';
import useModal from '../../../hooks/modal';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {toogleModal} from '../../../store/slices/categorySlice';
import Card from '../card/Card';

const CardContainer: FC = () => {
  const folders = useAppSelector(state => state.folders.folders);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();

  const addHandler = () => {
    dispatch(toogleModal());
    navigate('addFolder');
  };

  return (
    <View>
      <Card />
      <View style={style.button}>
        <CircleButton radius={60} text="+" buttonHandler={addHandler} />
      </View>
    </View>
  );
};

export default CardContainer;
