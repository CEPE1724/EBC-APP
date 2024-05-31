import {StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    button: {
       
        padding: 10,
        margin: 0,
        justifyContent: "left",
        backgroundColor: "transparent",
     
    },
    buttonContainer: {
        margin: 1,
        width: 378,
        right: 0,
        textAlign: "left",
    },
    textColor: {
        color: "black",
        fontFamily: "Roboto",
        fontSize: 13,
    },
    buttonContainerDelete: {
        margin: 1,
        right: 0,
        textAlign: "right",
    },

});