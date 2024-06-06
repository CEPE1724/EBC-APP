// components/HeaderIcons.js
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screen } from "../utils/screenName"; 
const HeaderIcons = ({ showSearch, showSettings, onSearchPress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      {showSearch && (
        <Icon.Button
          name="search"
          size={25}
          backgroundColor="white"
          color="black"
          onPress={onSearchPress}
        />
      )}
      {showSettings && (
        <Icon.Button
          name="settings-outline"
          size={25}
          backgroundColor="white"
          color="black"
          onPress={() => navigation.navigate(screen.user.users)} // Usar la ruta correcta
        />
      )}
    </View>
  );
};

export default HeaderIcons;
