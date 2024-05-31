import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa el icono de Ionicons

const SearchInput = ({ placeholder, onChangeText }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 5,
          right: 20,
          width: 300,
          borderRadius: 10,
          height: 40,
          paddingRight: inputValue ? 35 : 10, // Ajusta el paddingRight para dejar espacio al icono de "X"
        }}
        placeholder={placeholder}
        onChangeText={(text) => {
          setInputValue(text);
          onChangeText(text); // Pasa el texto actualizado al componente padre si es necesario
        }}
        value={inputValue}
      />
      {inputValue ? (
        <Ionicons
          name="close-circle"
          size={24}
          color="black"
          onPress={handleClearInput}
          style={{ position: "absolute", right: 10 }}
        />
      ) : null}
    </View>
  );
};

export default SearchInput;
