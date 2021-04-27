import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Clouds : {
        iconName : 'weather-cloudy',
        gradient : ['#2980b9', '#6dd5fa', '#ffffff']
    },
    ThunderStorm : {
        iconName : 'weather-lightning-rainy',
        gradient : ['#f0f2f0', '#000c40']
    },
    Drizzle : {
        iconName: 'weather-partly-rainy',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Rain : {
        iconName: 'weather-rainy',
        gradient:['#5f2c82', '#49a09d']
    }, 
    Snow : {
        iconName: 'snowflake',
        gradient:['#c9d6ff', '#e2e2e2']
    }, 
    Atmosphere : {
        iconName: 'weather-windy-variant',
        gradient:['#4ca1af','#c4e0e5']
    }, 
    Clear : {
        iconName:'weather-sunny',
        gradient:['#56ccf2', '#2f80ed']
    },
    Haze : {
        iconName:'weather-hazy',
        gradient:['#0b486b', '#f56217']
    },
    Mist : {
        iconName:'weather-fog',
        gradient:['#2c3e50', '#4ca1af']
    },
    Dust : {
        iconName:'weather-windy',
        gradient:['#ffd89b', '#19547b']
    }
  }
  
const Weather = ({ temp, condition, name, country }) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
            >
            
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>
                    {temp}°
                </Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{condition}</Text>
                <Text stlye={styles.subtitle}>{name}, {country}</Text>
            </View>
            <StatusBar barStyle="light-content"></StatusBar>
        </LinearGradient>

        
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    halfContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    temp: {
        fontSize:42,
        color:'white',
    },
    title: {
        fontSize: 36,
        marginBottom: 10,
    },
    subtitle: {
        fontSize:16,
    }
})


export default Weather;