// components/HeaderIcons.js
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const HeaderIcons = ({ showSearch, showSettings, onSearchPress, onSettingsPress }) => {
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
          onPress={onSettingsPress}
        />
      )}
    </View>
  );
};

export default HeaderIcons;
