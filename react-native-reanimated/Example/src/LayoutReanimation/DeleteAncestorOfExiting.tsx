import Animated, { FadeOut, PinwheelOut } from 'react-native-reanimated';
import { Button, StyleSheet, View } from 'react-native';

import React from 'react';

export function DeleteAncestorOfExiting() {
  const [outer, setOuter] = React.useState(false);
  const [inner, setInner] = React.useState(true);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setOuter(!outer);
          setInner(!outer);
        }}
        title="Toggle Outer"
      />
      <Button onPress={() => setInner(!inner)} title="Toggle Inner" />
      {outer && (
        <Animated.View style={styles.outerBox} exiting={FadeOut.duration(7000)}>
          <Animated.View style={styles.box} exiting={PinwheelOut} />
          {inner && (
            <Animated.View
              style={styles.box}
              exiting={PinwheelOut.duration(5000)}
            />
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 300,
  },
  outerBox: {
    width: 260,
    height: 150,
    flexDirection: 'row',
    backgroundColor: 'navy',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    marginLeft: 20,
    backgroundColor: 'red',
  },
});
