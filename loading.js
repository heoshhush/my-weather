import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";


export default function Loading() {
    return <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking weather</Text>

        <StatusBar barStyle="light-content"></StatusBar>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 100,
        backgroundColor: '#8EC5FC',
    },
    text : {
        color: '#2c2c2c',
        fontSize: 40,
    },
})