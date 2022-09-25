import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/UserProvider';
import {MainRoutesParams} from '../../../routes/MainRoutes';
import {useAppSelector} from '../../../hooks/redux';

const useMainHeader = () => {
  const {setUser} = useContext(UserContext);
  const {folders} = useAppSelector(state => state.folders);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  const statisticHandler = () => navigate('statistic');
  const allTransactionsHandler = () => navigate('allTransactions');

  const balance = folders.reduce((accumulator, current) => {
    return accumulator + parseFloat(current.amount);
  }, 0);

  return {signOutHandler, statisticHandler, allTransactionsHandler, balance};
};

export default useMainHeader;
