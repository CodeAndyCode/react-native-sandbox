import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ChatGPTMadeReactNativeScreen = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const section = Math.round(x / SCREEN_WIDTH);
    if (section !== currentSection) {
      setCurrentSection(section);
    }
  };

  return (
    <View>
      <Text style={styles.title}>My Scrolling Sections</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollContainer}
      >
        <View style={styles.scrollSection}>
          <Text>Workouts</Text>
        </View>
        <View style={styles.scrollSection}>
          <Text>Recommended</Text>
        </View>
        <View style={styles.scrollSection}>
          <Text>Street Workouts</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  scrollSection: {
    width: SCREEN_WIDTH,
    padding: 16,
  },
};

export default ChatGPTMadeReactNativeScreen;
