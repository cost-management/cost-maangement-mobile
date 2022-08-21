import React, {FC, useState} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import CircleButton from '../../ui/circleButton/CircleButton';
import CreateCardModal from '../createCardModal/CreateCardModal';
import useModal from '../../../hooks/modal';
import {useAppSelector} from '../../../hooks/redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';

const CardContainer: FC = () => {
  const {toogleModal, isToogleModal} = useModal();

  const folders = useAppSelector(state => state.folders.folders);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();

  return (
    <View>
      {folders.map(folder => (
        <TouchableOpacity onPress={() => navigate('folder', {folder})}>
          <Text>{folder.title}</Text>
        </TouchableOpacity>
      ))}
      <View style={style.button}>
        <CircleButton
          radius={60}
          text="+"
          buttonHandler={() => toogleModal()}
        />
      </View>
      <Modal animationType="slide" visible={isToogleModal}>
        <CreateCardModal toogleModal={toogleModal} />
      </Modal>
    </View>
  );
};

export default CardContainer;
