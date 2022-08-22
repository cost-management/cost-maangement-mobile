import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

interface SmallCategoryProps {
  title: string;
  categoryHandle: () => void;
}

const SmallCategory: FC<SmallCategoryProps> = ({title, categoryHandle}) => {
  return (
    <TouchableOpacity style={[style.container]} onPress={categoryHandle}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallCategory;
