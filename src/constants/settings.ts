import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Setting} from '../models/Settings';
import {SettingsRoutesParams} from '../routes/SettingsRoutes';
import {useAppDispatch} from '../hooks/redux';
import {toogleModal} from '../store/slices/categorySlice';

const useSettings = () => {
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();
  const dispatch = useAppDispatch();
  const inviteSettings: Setting[] = [
    {
      title: 'Invites',
      settingHandler: () => {
        dispatch(toogleModal());
        navigate('inviteModal');
      },
    },
  ];
  return {inviteSettings};
};

export default useSettings;
