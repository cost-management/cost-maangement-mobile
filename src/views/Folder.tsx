import React, {FC, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/main/card/Card';
import CircleButton from '../components/ui/circleButton/CircleButton';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainRoutesParams} from '../routes/MainRoutes';
import {useAppSelector} from '../hooks/redux';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  BORDER_LARGE_RADIUS,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_HORIZONTAL,
  PADDING_BOTTOM,
} from '../constants/styleConstants';
import TransactionContainer from '../components/main/transactionContainer/TransactionContainer';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import useTransactions from '../hooks/transactions';
import {UserContext} from '../contexts/UserProvider';

const Folder: FC = () => {
  const {user} = useContext(UserContext);
  const {params} = useRoute<RouteProp<MainRoutesParams>>();
  const {getTransactions} = useTransactions();
  useEffect(() => {
    getTransactions(user.attributes?.sub!, params?.folder.id!);
  }, []);
  const folder = params?.folder!;
  const {transactions} = useAppSelector(state => state.transactions);
  const currentFolderTransactions = transactions.find(
    transaction => transaction.folder_id === folder.id,
  );
  return (
    <View style={style.container}>
      <View
        style={[
          style.folderContaier,
          {backgroundColor: folder.skin.toLowerCase()},
        ]}></View>
      <View style={style.headerContainer}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Транзакції</Text>
        </View>
        <CircleButton text="+" buttonHandler={() => {}} />
      </View>
      <ScrollView style={style.scrollView}>
        {currentFolderTransactions?.transactions.map(transaction => (
          <TransactionContainer
            sum={transaction.units}
            category={transaction.income_category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: PADDING_BOTTOM,
    backgroundColor: '#F0F0F0',
    paddingTop: 20,
  },
  folderContaier: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_LARGE_RADIUS,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#B6B6B6',
  },
  scrollView: {
    maxHeight:
      SCREEN_HEIGHT -
      PADDING_BOTTOM -
      ExtraDimensions.getStatusBarHeight() -
      20 -
      70 -
      10 -
      CARD_HEIGHT -
      60,
    width: '100%',
    padding: 0,
  },
});

export default Folder;
