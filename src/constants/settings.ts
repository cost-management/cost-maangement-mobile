import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Setting} from '../models/Settings';
import {SettingsRoutesParams} from '../routes/SettingsRoutes';

const useSettings = () => {
  const {navigate} = useNavigation<NavigationProp<SettingsRoutesParams>>();
  const inviteSettings: Setting[] = [
    {
      title: 'Invites',
      settingHandler: () => {
        navigate('invites');
      },
    },
  ];
  return {inviteSettings};
};

export default useSettings;
