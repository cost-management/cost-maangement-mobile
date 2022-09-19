import React, {FC, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CircleButton from '../components/ui/circleButton/CircleButton';
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
import {toogleModal} from '../store/slices/categorySlice';
import Animated from 'react-native-reanimated';
import useFolder from '../hooks/folder.hook';

const Folder: FC = () => {
  const ref = useRef(null);

  const {
    viewAmount,
    scrollBegin,
    currentFolderTransactions,
    navigate,
    currentFolder,
    dispatch,
  } = useFolder();

  return (
    <View style={style.container}>
      <View
        style={[
          style.folderContaier,
          {backgroundColor: currentFolder?.skin.toLowerCase()},
        ]}>
        <Text>{currentFolder?.title}</Text>
        <Text>{viewAmount(currentFolder?.amount!)}</Text>
      </View>
      <View style={style.headerContainer}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Транзакції</Text>
        </View>
        <CircleButton
          text="+"
          buttonHandler={() => {
            dispatch(toogleModal());
            navigate('addTransaction', {
              folder_id: currentFolder?.id!,
              folderTitle: currentFolder?.title!,
              type: 'main',
            });
          }}
        />
      </View>
      <Animated.ScrollView
        onScrollBeginDrag={scrollBegin}
        scrollEventThrottle={16}
        style={style.scrollView}>
        {currentFolderTransactions?.transactions?.map(transaction => (
          <TransactionContainer
            key={transaction.id}
            amount={transaction.amount}
            folder_id={transaction.folder_id}
            transaction_id={transaction.id}
            category={transaction.income_category}
            transactionLength={currentFolderTransactions?.transactions.length}
            date={transaction.created_at}
          />
        ))}
      </Animated.ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
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
