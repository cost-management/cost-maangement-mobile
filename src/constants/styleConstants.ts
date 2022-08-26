import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const PADDING = 30;
export const CARD_WIDTH = 289;
export const CARD_HEIGHT = 177;
export const SMALL_CARD_WIDHT =
  (Dimensions.get('screen').width - PADDING * 2 - 20) / 2;
export const SMALL_CARD_HEIGHT = 107;
export const TRANSACTION_MARGIN = 12;
export const TRANSACTION_CONTAINER_HORIZONTAL_PADDING = 15;
export const TRANSACTION_WIDTH =
  SCREEN_WIDTH / 3 -
  TRANSACTION_MARGIN * 2 -
  TRANSACTION_CONTAINER_HORIZONTAL_PADDING;
export const TRANSACTION_HEIGHT = TRANSACTION_WIDTH;
