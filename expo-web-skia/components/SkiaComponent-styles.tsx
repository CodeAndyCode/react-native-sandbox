import * as react from "react";
import { StyleSheet } from "react-native";

const useStyles = () => {
  return react.useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: "100%",
          width: "100%",
        },
        canvasContainer: {
          flex: 1,
        },
      }),
    []
  );
};

export default useStyles;
