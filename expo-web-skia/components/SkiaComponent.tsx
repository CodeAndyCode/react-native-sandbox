import {
  Box,
  Canvas,
  Group,
  rrect,
  rect,
  useComputedValue,
  useClockValue,
} from "@shopify/react-native-skia";

import { Text } from "./Themed";
import useStyles from "./SkiaComponent-styles";
import { View } from "react-native";

const INTERVAL = 3000;

export const SkiaComponent = () => {
  const styles = useStyles();
  const size = 256;
  const r = size * 0.33;

  const clock = useClockValue();
  const opacity = useComputedValue(() => {
    const defVal = (clock.current % INTERVAL) / INTERVAL;
    const ease = (1 - Math.cos(defVal * Math.PI * 2)) / 2;
    return ease;
  }, [clock]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.canvasContainer}>
          <Canvas style={{ flex: 1 }}>
            <Group blendMode="multiply">
              <Box
                box={rrect(rect(64, 64, size, size), 50, 50)}
                color="#add8e6"
                opacity={opacity}
              />
            </Group>
          </Canvas>
        </View>
      </View>
    </>
  );
};
