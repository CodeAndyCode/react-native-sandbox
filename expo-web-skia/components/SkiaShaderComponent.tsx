import React from "react";
import { View, Text } from "react-native";
import useStyles from "./SkiaShaderComponent-styles";
import {
  Skia,
  Canvas,
  Box,
  Fill,
  rrect,
  rect,
  Group,
  useSharedValueEffect,
  useComputedValue,
  useValue,
  useClockValue,
  Selector,
  Shader,
} from "@shopify/react-native-skia";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const SkiaShaderComponent = () => {
  const source = Skia.RuntimeEffect.Make(`
    uniform float time ;
    vec4 main(vec2 pos) {
    vec2 normalized = pos/vec2(256 + mod((time * 0.1), 60));
    return vec4(normalized.x, normalized.y, 0.5, 1);
  }
  `)!;
  const styles = useStyles();
  const boxDimentions = rect(64, 64, 200, 200);
  const { x, y, width, height } = boxDimentions;
  const position = useSharedValue({ x: 0, y: 0 });
  const skPositionX = useValue(0);
  const skPositionY = useValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      const { x, y } = position.value;
      ctx.startX = x;
      ctx.startY = y;
    },
    onActive: (event, ctx) => {
      position.value = {
        x: ctx.startX + event.translationX,
        y: ctx.startY + event.translationY,
      };
    },
  });
  const animatedBoxStyle = useAnimatedStyle(() => {
    const res = {
      transform: [
        { translateX: position.value.x },
        { translateY: position.value.y },
      ],
    };
    return res;
  }, [position.value.x, position.value.y]);

  useSharedValueEffect(() => {
    const { x, y } = position.value;
    skPositionX.current = x;
    skPositionY.current = y;
  }, position);
  // const clock = useClockValue();
  // const transform = useComputedValue(
  //   () => [{ rotateZ: (Math.PI * clock.current) / 4000 }],
  //   [clock]
  // );
  const transform = useComputedValue(() => {
    return [
      { translateX: skPositionX.current },
      {
        translateY: skPositionY.current,
      },
    ];
  }, [skPositionX, skPositionY]);

  const clock = useClockValue();
  const uniforms = useComputedValue(() => ({ time: clock.current }), [clock]);

  return (
    <>
      <View style={styles.container}>
        <Canvas style={styles.canvasContainer}>
          <Fill>
            <Shader source={source} uniforms={uniforms} />
          </Fill>
        </Canvas>
        <View style={styles.absoluteContainer}>
          <PanGestureHandler {...{ onGestureEvent }}>
            <Animated.View style={animatedBoxStyle}>
              <View
                style={{
                  // ...styles.animatedBox,
                  width,
                  height,
                  top: y,
                  left: x,
                }}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
    </>
  );
};

export default SkiaShaderComponent;
