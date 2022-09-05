import React, {FC, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {style} from './style';
import {IFolder} from '../../../models/Folder';
import {useAppDispatch} from '../../../hooks/redux';
import {deleteFolder} from '../../../store/slices/folderSlice';
import {UserContext} from '../../../contexts/UserProvider';
import {FolderAPI} from '../../../services/FolderService';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';

interface CardProps {
  folder: IFolder;
}

const Card: FC<CardProps> = ({folder}) => {
  const dispatch = useAppDispatch();
  const {user} = useContext(UserContext);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();
  const folderHanlder = () => navigate('folder', {folder_id: folder.id});

  const [deleteFolderMutation] = FolderAPI.useDeleteFolderMutation();

  const folderLongHanlder = async () => {
    const response = await deleteFolderMutation({
      id: user.attributes?.sub!,
      folderId: folder.id,
    });
    dispatch(deleteFolder(folder.id));
    dispatch(deleteFolder(folder.id));
    console.log(response);
  };

  return (
    <TouchableOpacity
      onPress={folderHanlder}
      onLongPress={folderLongHanlder}
      style={[
        style.container,
        {backgroundColor: folder.skin.toLocaleLowerCase()},
      ]}>
      <Text style={style.title}>{folder.title}</Text>
      <Text style={style.subTitle}>
        {folder.units}
        {folder.nanos
          ? `${
              parseInt(folder.nanos, 10) < 10
                ? `.${folder.nanos}0`
                : `.${folder.nanos}`
            }`
          : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
