import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Text as RNText,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Register from "../auth/register";
// import Login from "../auth" // Importing the useNavigation hook

export default function Welcome() {
  const navigation = useNavigation();
  const router=useRoute();
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  const handleLogin=()=>{
    // navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require("../../assets/Logo.png")}  />
        <Text style={styles.text}>
          Rwandan sports and entertainment all at a single place with SpoRwa
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <RNText style={styles.buttonText}>Register Now</RNText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <RNText style={styles.buttonText1}>Try it for free</RNText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers everything vertically
    alignItems: "center", // Centers everything horizontally
    padding: 20,
    backgroundColor: "#12171D", // Darkish blue color
  },

  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Space between content and buttons
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#ffffff", // White text color to contrast with dark blue background
  },

  buttonContainer: {
    marginTop: 40, // Space between buttons and other content
    width: "100%", // Make buttons stretch across the screen width
    paddingHorizontal: 20, // Some padding on the sides
  },

  button: {
    width: 350, // Full width of the screen
    height: 50,
    backgroundColor: "#ffffff", // White button to stand out against the blue background
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Space between the buttons
  },

  buttonText: {
    fontSize: 16,
    color: "#12171D", // Dark blue text for button
  },

  button1: {
    width: 350, // Full width of the screen
    height: 50,
    borderColor: "#ffffff", // Border color (white in this case)
    borderWidth: 1, // Set border width to make it visible
    borderRadius: 2, // Rounded corners
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
  },

  buttonText1: {
    fontSize: 16,
    color: "#ffffff", // White text color for button
  },
});
