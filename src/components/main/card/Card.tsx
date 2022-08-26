import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {style} from './style';
import {IFolder} from '../../../models/Folder';

interface CardProps {
  folder: IFolder;
}

const Card: FC<CardProps> = ({folder}) => {
  return (
    <TouchableOpacity
      style={[
        style.container,
        {backgroundColor: folder.skin.toLocaleLowerCase()},
      ]}>
      <Text style={style.title}>{folder.title}</Text>
      <Text style={style.subTitle}>
        {folder.units}
        {folder.nanos && `.${folder.nanos}`}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
