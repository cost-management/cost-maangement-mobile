import React, {FC} from 'react';
import {View} from 'react-native';
import InviteField from '../inviteField/InviteField';
import style from './style';
import {GetInvite} from '../../../models/Invite';

interface InvitesCategoryContainerProps {
  items: GetInvite[];
}

const InvitesCategoryContainer: FC<InvitesCategoryContainerProps> = ({
  items,
}) => {
  return (
    <View style={style.container}>
      {items.map(item => (
        <InviteField isWithButton={true} item={item} />
      ))}
    </View>
  );
};

export default InvitesCategoryContainer;
