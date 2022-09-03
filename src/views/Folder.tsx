import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Card from '../components/main/card/Card';
import CircleButton from '../components/ui/circleButton/CircleButton';
import {IFolder} from '../models/Folder';

interface FolderProps {
  folder: IFolder;
}

const Folder: FC<FolderProps> = ({folder}) => {
  return (
    <View>
      <Card folder={folder} />
      <View>
        <Text>{folder.nanos}</Text>
        <CircleButton text="+" buttonHandler={() => {}} />
      </View>
    </View>
  );
};

export default Folder;
