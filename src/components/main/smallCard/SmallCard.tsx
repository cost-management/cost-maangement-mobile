import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IFolder} from '../../../models/Folder';

const SmallCard: FC<IFolder> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default SmallCard;
