import React, {FC, useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Card from '../card/Card';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

const CardContainer: FC = () => {
  const initialCard = [{text: 'card1', id: Date.now().toString()}];

  const [cards, setCards] = useState(initialCard);

  const deleteCard = (index: string) => {
    const result = cards.filter(card => card.id !== index);
    const lastCard = cards.filter(card => card.id === index);
    setCards(result.concat(lastCard));
  };

  const addCard = () =>
    setCards(
      [{text: Date.now().toString(), id: Date.now().toString()}].concat(cards),
    );

  return (
    <GestureHandlerRootView>
      <View style={style.container}>
        <ScrollView style={style.scroll}>
          {cards.map(card => (
            <Card
              text={card.text}
              key={card.id}
              deleteCard={deleteCard}
              index={card.id}
            />
          ))}
        </ScrollView>
        <Button title="Add" onPress={addCard} />
      </View>
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    height: '85%',
  },
});

export default CardContainer;
