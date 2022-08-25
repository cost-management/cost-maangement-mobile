import React, {FC, useContext} from 'react';
import {Text, View} from 'react-native';
import DoubleButton from '../../ui/doubleButton/DoubleButton';
import style from './style';
import {GetInvite} from '../../../models/Invite';
import {InviteAPI} from '../../../services/InviteService';
import {UserContext} from '../../../contexts/UserProvider';
import {useAppDispatch} from '../../../hooks/redux';
import {deleteInvite} from '../../../store/slices/inviteSlice';

interface InviteFieldProps {
  title?: string;
  subTitle?: string;
  isWithButton: boolean;
  item: GetInvite;
}

const InviteField: FC<InviteFieldProps> = ({item, isWithButton}) => {
  const {user} = useContext(UserContext);
  const [acceptInviteQuery] = InviteAPI.useAcceptinviteMutation();
  const dispatch = useAppDispatch();
  const acceptInvite = async () => {
    const response = await acceptInviteQuery({
      id: user.attributes?.sub!,
      body: {
        customer_role: item.customer_role,
        invited_customer_id: user.attributes?.sub!,
        folder_id: item.id,
      },
    });
    dispatch(deleteInvite(item.id));
    console.log(response);
  };

  return (
    <View style={style.container}>
      <View style={style.leftPartContainer}>
        <Text style={style.title}>{item.email}</Text>
        <Text>{item.title}</Text>
      </View>
      {isWithButton && (
        <DoubleButton
          styles={{
            container: style.buttonsContainer,
            leftButton: style.leftButtonContainer,
            rightButton: style.rightButtonContainer,
            title: style.buttonTitle,
          }}
          leftButtonHanlder={() => console.log('left')}
          rightButtonHandler={acceptInvite}
        />
      )}
    </View>
  );
};

export default InviteField;
