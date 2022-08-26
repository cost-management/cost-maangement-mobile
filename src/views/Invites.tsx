import {useNavigation, NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InvitesCategoryContainer from '../components/settings/invitesCategoryContainer/InvitesCategoryContainer';
import {useAppSelector, useAppDispatch} from '../hooks/redux';
import {toogleModal} from '../store/slices/categorySlice';
import {SettingsRoutesParams} from '../routes/SettingsRoutes';

const Invites: FC = () => {
  const {invites} = useAppSelector(state => state.invites);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();

  const addHandler = () => {
    dispatch(toogleModal());
    navigate('inviteModal');
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Invites</Text>
      </View>
      {invites.length ? (
        <InvitesCategoryContainer items={invites} />
      ) : (
        <View>
          <Text>No invites</Text>
        </View>
      )}
      <TouchableOpacity onPress={addHandler} style={style.addButton}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  addButton: {
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: '#B6B6B6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#6C6C6C',
    borderRadius: 10,
    width: 178,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: 'white',
  },
});

export default Invites;
