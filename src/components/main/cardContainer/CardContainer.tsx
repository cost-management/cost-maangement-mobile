import React, {FC, useState} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import Card from '../card/Card';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {style} from './style';
import CircleButton from '../../ui/circleButton/CircleButton';
import {CARD_HEIGHT} from '../../../constans/styleConstants';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import CreateCardModal from '../createCardModal/CreateCardModal';
import useModal from '../../../hooks/modal';
import {useAppSelector} from '../../../hooks/redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainRoutesParams} from '../../../routes/MainRoutes';

const CardContainer: FC = () => {
  const {toogleModal, isToogleModal} = useModal();

  const folders = useAppSelector(state => state.folders.folders);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();

  // const initialCard = [
  //   {text: 'card0', id: Date.now().toString()},
  //   {text: 'card1', id: Date.now().toString() + 1},
  //   {text: 'card2', id: Date.now().toString() + 2},
  //   {text: 'card3', id: Date.now().toString() + 3},
  //   {text: 'card4', id: Date.now().toString() + 4},
  //   {text: 'card5', id: Date.now().toString() + 5},
  // ];

  // const [cards, setCards] = useState(initialCard);
  // const y = useSharedValue(0);
  // const deleteCard = (index: string) => {
  //   'worklet';
  //   const result = cards.filter(card => card.id !== index);
  //   const lastCard = cards.filter(card => card.id === index);
  //   setCards(result.concat(lastCard));
  // };

  // const scrollHandler = useAnimatedScrollHandler(event => {
  //   y.value = event.contentOffset.y;
  // });

  return (
    <GestureHandlerRootView style={style.container}>
      {/* <Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          contentContainerStyle={{height: CARD_HEIGHT * (cards.length + 2)}}>
          {cards.map((card, id) => (
            <Card
              text={card.text}
              key={card.id}
              deleteCard={deleteCard}
              index={card.id}
              id={id}
              y={y}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View> */}
      {folders.map(folder => (
        <TouchableOpacity onPress={() => navigate('folder', {folder})}>
          <Text>{folder.title}</Text>
        </TouchableOpacity>
      ))}
      <View style={style.button}>
        <CircleButton
          radius={60}
          text="+"
          buttonHandler={() => toogleModal()}
        />
      </View>
      <Modal animationType="slide" visible={isToogleModal}>
        <CreateCardModal toogleModal={toogleModal} />
      </Modal>
    </GestureHandlerRootView>
  );
};

export default CardContainer;
