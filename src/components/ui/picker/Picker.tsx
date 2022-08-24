import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import style from './style';

interface PickerProps {
  currentValue: string;
  items: string[];
  itemHandler: (field: string, value: any) => void;
  valueType: string;
}

const AnimateTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Picker: FC<PickerProps> = ({
  currentValue,
  items,
  valueType,
  itemHandler,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const height = useSharedValue(40);
  const rContainerStyle = useAnimatedStyle(() => ({height: height.value}));
  const rItemStyle = useAnimatedStyle(() => ({
    height: interpolate(height.value, [40, items.length * 40], [0, 40]),
    borderWidth: interpolate(height.value, [40, items.length * 40], [0, 0.4]),
  }));

  const buttonHanlder = () => {
    'worklet';
    if (isOpenDropdown) {
      height.value = withTiming(40);
      setIsOpenDropdown(false);
    } else {
      height.value = withTiming(items.length * 40 + 40);
      setIsOpenDropdown(true);
    }
  };
  return (
    <Animated.View style={[style.mainContainer, rContainerStyle]}>
      <View style={style.container}>
        <View style={style.currentValue}>
          <Text>{currentValue}</Text>
        </View>
        <View style={style.pickerContainer}>
          <TouchableOpacity style={style.picker} onPress={buttonHanlder}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.dropdownContainer}>
        <View style={style.itemContainer}>
          <ScrollView
            style={style.scrollViewContainer}
            contentContainerStyle={{height: items.length * 40}}>
            {items.map(item => (
              <AnimateTouchableOpacity
                onPress={() => {
                  itemHandler(valueType, item);
                  buttonHanlder();
                }}
                style={[
                  style.item,
                  rItemStyle,
                  {
                    backgroundColor:
                      item !== currentValue ? '#F0F0F0' : '#C7C7C7',
                  },
                ]}>
                <Text>{item}</Text>
              </AnimateTouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Animated.View>
  );
};

export default Picker;