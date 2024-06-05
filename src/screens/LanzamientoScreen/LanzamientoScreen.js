import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImageView from "../../components/ImageView";
import Api from "../../services/api";
const Segmento = [
  { id: "12", title: "Mujer" },
  { id: "123", title: "Hombre" },
  { id: "1234", title: "Niños" },
];
const Categoria = [
  { id: "12", title: "Futbol" },
  { id: "123", title: "Tenis" },
  { id: "1234", title: "natacion" },
  { id: "12345", title: "Baloncesto" },
  { id: "123456", title: "Atletismo" },
  { id: "1234567", title: "Ciclismo" },
  { id: "12345678", title: "Golf" },
];

const DEFAULT_SEGMENT = Segmento[0];

export function LanzamientoScreen(props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(DEFAULT_SEGMENT.title);
  const [activeIcon, setActiveIcon] = useState(DEFAULT_SEGMENT.id);
  const [tempSegment, setTempSegment] = useState(DEFAULT_SEGMENT.title);
  const [tempIcon, setTempIcon] = useState(DEFAULT_SEGMENT.id);
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await AsyncStorage.removeItem("selectedSegment");
        const savedSegment = await AsyncStorage.getItem("selectedSegment");
        if (savedSegment) {
          const { id, title } = JSON.parse(savedSegment);
          setSelectedSegment(title);
          setActiveIcon(id);
          setTempSegment(title);
          setTempIcon(id);
          console.log("Segmento cargado", { id, title });
        } else {
          await saveSegment(DEFAULT_SEGMENT.id, DEFAULT_SEGMENT.title);
          setSelectedSegment(DEFAULT_SEGMENT.title);
          setActiveIcon(DEFAULT_SEGMENT.id);
          setTempSegment(DEFAULT_SEGMENT.title);
          setTempIcon(DEFAULT_SEGMENT.id);
          console.log("Segmento predeterminado guardado", { id: DEFAULT_SEGMENT.id, title: DEFAULT_SEGMENT.title });
        }
      } catch (error) {
        console.error("Error loading segment", error);
      }
    };
    loadData();
  }, []);

  const handleIconPress = (option) => {
    setTempIcon(option.id);
    setTempSegment(option.title);
  };

  const handleSavePressAsynlocal = async () => {
    try {
      await saveSegment(tempIcon, tempSegment);
      setSelectedSegment(tempSegment);
      setActiveIcon(tempIcon);
      setShowModal(false);
      console.log("Segmento guardado", { id: tempIcon, title: tempSegment });
    } catch (error) {
      console.error("Error saving segment", error);
    }
  };

  const saveSegment = async (id, title) => {
    await AsyncStorage.setItem("selectedSegment", JSON.stringify({ id, title }));
  };

  const CategoryButton = ({ option, onPress, isSelected }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        isSelected && { backgroundColor: '#F0F1F2' },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.categoryButtonText,
          isSelected && { color: '#000000' },
        ]}
      >
        {option.title}
      </Text>
    </TouchableOpacity>
  );

  const handlePress = (optionId) => {
    setSelectedOption((prevSelectedOptions) => {
      const newSelectedOptions = prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter((id) => id !== optionId)
        : [...prevSelectedOptions, optionId];

      // Reorder Categoria array based on the new selection
      return newSelectedOptions;
    });
  };

  const sortedCategoria = Categoria.sort((a, b) => {
    const aSelected = selectedOption.includes(a.id);
    const bSelected = selectedOption.includes(b.id);
  
    if (aSelected && !bSelected) {
      return -1; // Si a está seleccionado pero b no, a debe ir primero
    }
    if (!aSelected && bSelected) {
      return 1; // Si b está seleccionado pero a no, b debe ir primero
    }
  
    // Si ambos están seleccionados o ambos no están seleccionados,
    // o si ambos están seleccionados o ambos no están seleccionados,
    // entonces comparamos por el orden en el que fueron seleccionados
    // (el último seleccionado debe ir primero)
    const indexOfA = selectedOption.indexOf(a.id);
    const indexOfB = selectedOption.indexOf(b.id);
    return indexOfB - indexOfA;
  });
  

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <Button
          title={selectedSegment ? `${selectedSegment}` : "Categoria"}
          onPress={() => setShowModal(true)}
          color="black"
          style={styles.button}
        />

        <ScrollView horizontal>
          {sortedCategoria.map((option) => (
            <CategoryButton
              key={option.id}
              option={option}
              isSelected={selectedOption.includes(option.id)}
              onPress={() => handlePress(option.id)}
            />
          ))}
        </ScrollView>
      </View>
    
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>FILTRAR POR CATEGORÍA</Text>
              <Icon
                name="close"
                type="material-community"
                size={20}
                onPress={() => setShowModal(false)}
              />
            </View>
            {Segmento.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.option}
                onPress={() => handleIconPress(option)}
              >
                <View style={styles.optionContent}>
                  <Text>{option.title}</Text>
                  {tempIcon === option.id && (
                    <Icon name="check" type="material-community" size={20} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
            <Button
              title="Guardar"
              color="black"
              onPress={handleSavePressAsynlocal}
            />
            <View style={styles.iconContainer}>
              <Icon
                name="arrow-right-thin"
                type="material-community"
                size={24}
                color="white"
              />
            </View>
           </View>
        </View>
      </Modal>
      <ScrollView Vertical>
          {sortedCategoria.map((option) => (
            <CategoryButton
              key={option.id}
              option={option}
              isSelected={selectedOption.includes(option.id)}
            />
          ))}
        </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryButton: {
    padding: 8,
    marginHorizontal: 4,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignSelf: "flex-end",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 175,
    left: 320,
  },
  categoryButtonText: {
    fontSize: 12,
    color: '#EEEFF1',
  },
});

export default LanzamientoScreen;
