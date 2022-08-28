import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const PADDING_HORIZONTAL = 30;
export const CARD_WIDTH = 289;
export const CARD_HEIGHT = 177;
export const SMALL_CARD_WIDTH =
  (Dimensions.get('screen').width - PADDING_HORIZONTAL * 2 - 20) / 2;
export const SMALL_CARD_HEIGHT = 0.6 * SMALL_CARD_WIDTH;
export const TRANSACTION_MARGIN = 12;
export const TRANSACTION_WIDTH =
  Math.floor((SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 3) -
  TRANSACTION_MARGIN * 2;
export const TRANSACTION_HEIGHT = TRANSACTION_WIDTH;
export const PADDING_BOTTOM = 70;
export const MODAL_TRANSLATE_Y = 0.07 * SCREEN_HEIGHT;
