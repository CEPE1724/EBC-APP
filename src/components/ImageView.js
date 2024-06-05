import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ImageView = ({ imageUrl, buttonText, onButtonClick }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: "cover",
    marginBottom: 200,
  },
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ImageView;
