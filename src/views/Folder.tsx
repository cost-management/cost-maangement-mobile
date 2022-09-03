import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Card from '../components/main/card/Card';
import CircleButton from '../components/ui/circleButton/CircleButton';
import {IFolder} from '../models/Folder';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainRoutesParams} from '../routes/MainRoutes';

const Folder: FC = () => {
  const {params} = useRoute<RouteProp<MainRoutesParams>>();

  const folder = params?.folder!;

  return (
    <View>
      <Card folder={folder!} />
      <View>
        <Text>{folder.nanos}</Text>
        <CircleButton text="+" buttonHandler={() => {}} />
      </View>
    </View>
  );
};

export default Folder;
