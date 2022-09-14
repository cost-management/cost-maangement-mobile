import React, {FC, forwardRef, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated as AnimatedTwo,
} from 'react-native';
import style from './style';
import useTransactionContainer from './transactionContainer.hook';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated, {
  CurvedTransition,
  Layout,
  LightSpeedInLeft,
  LightSpeedOutLeft,
} from 'react-native-reanimated';
import TransactionRightButton from '../transactionRightButton/TransactionRightButton';

interface TransactionContainerProps {
  category: string;
  amount: string;
  folder_id: string;
  transaction_id: string;
  transactionLength: number;
}
const AnimatedSwipeable = Animated.createAnimatedComponent(Swipeable);
const TransactionContainer: FC<TransactionContainerProps> = ({
  transaction_id,
  folder_id,
  amount,
  category,
}) => {
  const {deleteHandler, entering, swipableHandler} = useTransactionContainer();
  const ref = useRef<Swipeable>(null);
  return (
    <AnimatedSwipeable
      onSwipeableOpen={() => swipableHandler(ref)}
      entering={entering}
      exiting={LightSpeedOutLeft}
      layout={Layout.springify()}
      ref={ref}
      renderRightActions={(_, dragX) => {
        return (
          <TransactionRightButton
            dragX={dragX}
            deleteHandler={() => {
              deleteHandler(folder_id, transaction_id);
            }}
            ref={ref}
          />
        );
      }}>
      <View style={[style.container]}>
        <View style={[style.contentContainer]}>
          <Text style={style.title}>{category}</Text>
          <View style={style.sumContainer}>
            <Text style={style.sum}>{`${amount} грн`}</Text>
          </View>
        </View>
      </View>
    </AnimatedSwipeable>
  );
};

export default TransactionContainer;
