import React, {FC, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {style} from './style';
import CircleButton from '../../ui/circleButton/CircleButton';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {toogleModal} from '../../../store/slices/categorySlice';
import Card from '../card/Card';
import {
  SCREEN_WIDTH,
  SMALL_CARD_HEIGHT,
} from '../../../constants/styleConstants';

const CardContainer: FC = () => {
  const {folders} = useAppSelector(state => state.folders);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();

  const addHandler = () => {
    dispatch(toogleModal());
    navigate('addFolder');
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View
          style={[
            style.scorllView,
            {
              height:
                Math.ceil(folders.length / 2) * SMALL_CARD_HEIGHT +
                Math.ceil(folders.length / 2) * 10,
            },
          ]}>
          {folders.map(folder => (
            <Card folder={folder} />
          ))}
        </View>
      </ScrollView>
      <View style={style.button}>
        <CircleButton radius={60} text="+" buttonHandler={addHandler} />
      </View>
    </View>
  );
};

export default CardContainer;
