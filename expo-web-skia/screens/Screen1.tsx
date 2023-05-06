import { StyleSheet, View } from "react-native";

const width = 397;
const height = 844;

const dp = (n: number) => n * (width / 397);

export default function Screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DDDDDD",
    width: "100%",
    height: "100%",
  },
  navbar: {
    height: dp(47),
  },
});
