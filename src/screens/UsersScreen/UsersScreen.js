import React from "react";
import { View, Text } from "react-native";
import { Modal } from "react-native-web";

export function UsersScreen() {
  return (
    <View>
      <Text>Users Screen</Text>
      <Modal>
        <Text>Modal</Text>
      </Modal>
    </View>
  );
}

