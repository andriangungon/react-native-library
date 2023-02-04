import React, { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const SIZE = 100;

const BasicAnimation: FC = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: (progress.value * SIZE) / 2,
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    }
  }, []);

  useEffect(() => {
    /**
     * progress.value = withTiming(1, { duration: 2000 });
     * scale.value = withTiming(2, { duration: 2000 })
     */
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value =  withRepeat(withSpring(2), -1, true);
  }, []);

  return (
    <View style={style.container}>
      <Animated.View
        style={[style.box, reanimatedStyle]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'green',
    height: SIZE,
    width: SIZE
  }
});

export default BasicAnimation;