import React, {FC} from 'react';
import SmallCard from '../smallCard/SmallCard';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {Skins} from '../../../models/Folder';
import Animated, {
  useAnimatedGestureHandler,
  withSpring,
  SharedValue,
  runOnJS,
} from 'react-native-reanimated';
import {
  SMALL_CARD_WIDHT,
  SMALL_CARD_HEIGHT,
} from '../../../constants/styleConstants';

interface CardScinChangerProps {
  x: SharedValue<number>;
  setValue: any;
}

const arr = [
  {backgroundColor: Skins.blue.toLowerCase()},
  {backgroundColor: Skins.green.toLowerCase()},
  {backgroundColor: Skins.red.toLowerCase()},
];

type Context = {
  startValue: number;
};

const CardSkinChanger: FC<CardScinChangerProps> = ({x, setValue}) => {
  const onGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart: (_, ctx) => {
      ctx.startValue = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startValue + event.translationX;
    },
    onEnd: () => {
      if (x.value > SMALL_CARD_WIDHT / 2) {
        x.value = withSpring(SMALL_CARD_WIDHT);
        runOnJS(setValue)('skin', Skins.blue);
      } else if (x.value < -SMALL_CARD_WIDHT / 2) {
        x.value = withSpring(-SMALL_CARD_WIDHT);
        runOnJS(setValue)('skin', Skins.red);
      } else if (
        x.value > -SMALL_CARD_WIDHT / 2 &&
        x.value < SMALL_CARD_WIDHT / 2
      ) {
        x.value = withSpring(0);
        runOnJS(setValue)('skin', Skins.green);
      }
    },
  });

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={onGesture}>
        <Animated.View
          style={{height: SMALL_CARD_HEIGHT, flexDirection: 'row'}}>
          {arr.map(ar => (
            <SmallCard styles={ar} x={x} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default CardSkinChanger;
