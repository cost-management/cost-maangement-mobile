import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import CircleButton from '../circleButton/CircleButton';
import style from './style';

interface KeyboadProps {
  value: string;
  setValue: any;
}

const Keyboad: FC<KeyboadProps> = ({value: currentValue, setValue}) => {
  const numberHandler = (value: string) => {
    setValue('value', currentValue + value);
  };

  const dotHandler = () => {
    if (
      currentValue[currentValue.length - 1] !== '.' &&
      !currentValue.includes('.')
    ) {
      setValue('value', currentValue + '.');
    }
  };

  const erase = () => {
    setValue('value', currentValue.slice(0, -1));
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.value}
        value={currentValue}
        textAlign="center"
        placeholder="0"
        editable={false}
        maxLength={16}
      />
      <View style={style.buttonComtainer}>
        <CircleButton
          text="1"
          buttonHandler={() => numberHandler('1')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="2"
          buttonHandler={() => numberHandler('2')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="3"
          buttonHandler={() => numberHandler('3')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="4"
          buttonHandler={() => numberHandler('4')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="5"
          buttonHandler={() => numberHandler('5')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="6"
          buttonHandler={() => numberHandler('6')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="7"
          buttonHandler={() => numberHandler('7')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="8"
          buttonHandler={() => numberHandler('8')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="9"
          buttonHandler={() => numberHandler('9')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="."
          buttonHandler={dotHandler}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="0"
          buttonHandler={() => numberHandler('0')}
          styles={style.button}
          radius={40}
        />
        <CircleButton
          text="<"
          buttonHandler={erase}
          styles={style.button}
          radius={40}
        />
      </View>
    </View>
  );
};

export default Keyboad;
