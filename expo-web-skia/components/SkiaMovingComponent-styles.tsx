import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: "100%",
          width: "100%",
        },
        canvasContainer: {
          flex: 1,
        },
        animatedBox: {
          backgroundColor: "#0000FF",
        },
        absoluteContainer: {
          ...StyleSheet.absoluteFillObject,
        },
      }),
    []
  );
};

export default useStyles;
