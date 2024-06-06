import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LanzamientoScreen } from "../screens/LanzamientoScreen";
import { LanzamientoSearch } from "../screens/LanzamientoScreen";
import { screen } from "../utils";
import HeaderIcons from "../components/HeaderIcons";
import { View } from "react-native";
import SearchInput from "../components/SearchInput";
const Stack = createNativeStackNavigator();

export function LanzamientoStack(props) {
  const { navigation } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerLeftContainerStyle: { marginLeft: 10 },
      }}
    >
      <Stack.Screen
        name={screen.lanzamiento.lanzamientos}
        component={LanzamientoScreen}
        options={{
          title: "Lanzamientossskk",
          headerRight: () => (
            <HeaderIcons
              showSearch={true}
              showSettings={true}
              onSearchPress={() =>
                navigation.navigate(screen.lanzamiento.lanzamientosearch, {
                  searchText: searchText || "",
                })
              }
              onSettingsPress={() => console.log("Settings lanzamiento")}
            />
          ),
        }}
      />
      <Stack.Screen
        name={screen.lanzamiento.lanzamientosearch}
        component={LanzamientoSearch}
        options={{
          headerTitle: () => (
            <View>
              <SearchInput
                placeholder="Buscar productos..."
                onChangeText={setSearchText}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
