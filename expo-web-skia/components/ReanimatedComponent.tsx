// import React, { useState } from "react";
// import { Button, ScrollView, useWindowDimensions, View } from "react-native";
// import { Transition, Transitioning } from "react-native-reanimated";
// import useStyles from "./ReanimatedComponent-styles";

// export const ReanimatedComponent = () => {
//   const styles = useStyles();
//   const { width, height } = useWindowDimensions();
//   const column = {
//     id: "column",
//     name: "Column",
//     layout: {
//       flexContainer: {
//         ...styles.flexDirectionColumn,
//       },
//       child: {
//         width: width / 2,
//         height: width / 2,
//       },
//     },
//   };
//   const row = {
//     id: "row",
//     name: "Row",
//     layout: {
//       flexContainer: {
//         ...styles.flexDirectionRow,
//       },
//       child: {
//         width: width * 0.2,
//         height: width * 0.2,
//       },
//     },
//   };

//   const wrap = {
//     id: "wrap",
//     name: "Wrap",
//     layout: {
//       flexContainer: {
//         ...styles.flexDirectionRow,
//         ...styles.flexWrap,
//       },
//       child: {
//         width: width * 0.3,
//         height: width * 0.3,
//       },
//     },
//   };
//   const layouts = [column, row, wrap];
//   const transition = (
//     <Transition.Change durationMs={400} interpolation="easeInOut" />
//   );
//   const tRef = React.useRef();
//   const [currentLayout, setCurrentLayout] = useState<any>(column);
//   return (
//     <>
//       <View style={styles.buttonsContainer}>
//         {layouts.map((layout) => (
//           <Button
//             key={layout.id}
//             title={layout.name}
//             onPress={() => {
//               if (tRef.current) {
//                 tRef.current.animateNextTransition();
//               }
//               setCurrentLayout(layout);
//             }}
//           />
//         ))}
//       </View>

//       <ScrollView style={styles.container}>
//         <Transitioning.View
//           style={styles.container}
//           transition={transition}
//           ref={tRef}
//         >
//           <View
//             style={{
//               ...styles.flexContainer,
//               ...currentLayout.layout.flexContainer,
//             }}
//           >
//             <View style={{ ...styles.box, ...currentLayout.layout.child }} />
//             <View style={{ ...styles.box, ...currentLayout.layout.child }} />
//             <View style={{ ...styles.box, ...currentLayout.layout.child }} />
//           </View>
//         </Transitioning.View>
//       </ScrollView>
//     </>
//   );
// };
