import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {style} from './style';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {toogleModal} from '../../../store/slices/categorySlice';
import Card from '../card/Card';
import AddButton from '../addButton/AddButton';
import {PADDING_TOP} from '../../../constants/styleConstants';
import {
  SMALL_CARD_HEIGHT,
  PADDING_BOTTOM,
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.scorllView}
        contentContainerStyle={{
          height:
            SMALL_CARD_HEIGHT * Math.ceil(folders.length / 2) +
            Math.ceil(folders.length / 2) * 2 * 5 +
            PADDING_BOTTOM +
            PADDING_TOP +
            25,
        }}>
        {folders ? (
          <View style={style.foldersContainer}>
            {folders.map(folder => (
              <Card key={folder.id} folder={folder} />
            ))}
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
      <View style={style.button}>
        <AddButton buttonHanlder={addHandler} />
      </View>
    </View>
  );
};

export default CardContainer;
