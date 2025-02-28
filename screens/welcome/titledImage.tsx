// import React from "react";
// import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

// // Sample Image Data (Replace with Your Own)
// // const images = [
// // //   require("../../assets/Group5.png"),
// // //   require("../../assets/Rectangle4.png"),
// // //   require("../../assets/Rectangle5.png"),
// // //   require("../../assets/Rectangle6.png"),
// // //   require("../../assets/Rectangle7.png"),
// // //   require("../../assets/Rectangle8.png"),
// // //   require("../../assets/Rectangle9.png"),
// // //   require("../../assets/Rectangle10.png"),
// // ];
// const { width } = Dimensions.get("window");
// // const ITEM_SIZE = width *1; // Adjust size as needed

// export default function TiltedImageGrid() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         // data={images}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2} // Two columns
//         renderItem={({ item, index }) => (
//           <View
//             style={[
//               styles.imageContainer,
//               {
//                 width: ITEM_SIZE,
//                 height: ITEM_SIZE * 1.3,
//                 transform: [{ rotate: index % 2 === 0 ? "-10deg" : "10deg" }],
//               },
//             ]}
//           >
//             <Image source={item} style={styles.image} resizeMode="cover" />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#12171D",
//     padding: 8,
//   },
//   imageContainer: {
//     margin: 8,
//     overflow: "hidden",
//     borderRadius: 10,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//   },
// });
