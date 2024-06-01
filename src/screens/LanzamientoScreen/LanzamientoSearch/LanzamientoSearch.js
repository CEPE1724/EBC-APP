import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";

export function LanzamientoSearch({ route }) {
  const { searchText } = route.params;
  const [firstFiveRecords, setFirstFiveRecords] = useState([]);

  const guardarEnLocalStorage = async () => {
    try {
      if (!searchText) return; // Si no hay texto de búsqueda, no hace nada
      const existingText = await AsyncStorage.getItem("searchText");
      let newText = existingText
        ? existingText + ", " + searchText
        : searchText;
      await AsyncStorage.setItem("searchText", newText);
    } catch (error) {
      console.error("Error al guardar en el local storage:", error);
    }
  };

  const borrarLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem("searchText");
      setFirstFiveRecords([]);
    } catch (error) {
      console.error("Error al borrar del local storage:", error);
    }
  };

  const searchLocal = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(keys);
      const jsonObject = {};
      values.forEach(([key, value]) => {
        jsonObject[key] = value;
      });
      const parsedObject = Object.values(jsonObject);
      const search = parsedObject[0]
        ? parsedObject[0].split(", ").filter(Boolean)
        : [];
      const uniqueValues = [...new Set(search)];
      const sortedValues = uniqueValues.reverse(); // Ordena en orden descendente
      const firstFive = sortedValues.slice(0, 5);
      console.log(firstFive);
      return firstFive;
    } catch (error) {
      console.error("Error al leer del local storage:", error);
      return []; // Devuelve un arreglo vacío en caso de error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const firstFive = await searchLocal();
      setFirstFiveRecords(firstFive);
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "left" }}>
    
      {firstFiveRecords.length === 0 ? (
        <View>
         
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              HISTORIAL DE BÚSQUEDA
            </Text>
            <Button
              title="BORRAR TODO"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainerDelete}
              titleStyle={styles.textColor}
              onPress={borrarLocalStorage}
            />
          </View>
          {firstFiveRecords.map((record, index) => (
            <Button
              key={index}
              title={record}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              titleStyle={styles.textColor}
              onPress={guardarEnLocalStorage}
            />
          ))}
        </View>
      )}
      <Button title="Guardar" onPress={guardarEnLocalStorage} />
    </View>
  );
}
