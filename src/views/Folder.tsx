import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import SmallCard from '../components/main/smallCard/SmallCard';
import {MainRoutesParams} from '../routes/MainRoutes';

const Folder: FC = () => {
  const {params} = useRoute<RouteProp<MainRoutesParams>>();
  return <View></View>;
};

export default Folder;
