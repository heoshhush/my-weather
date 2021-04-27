import React from 'react';
import Loading from './loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './weather';

const API_KEY = "ade7a2f38a2814e556bc1cc3089f8acb";


export default class extends React.Component {
  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main : { temp },
        weather,
        name,
        sys : { country },
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}8&appid=${API_KEY}&units=metric`
      )
    this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp: temp,
        name: name,
        country: country,
    })
  }

  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      
    } catch (error) {
      Alert.alert("Can't find you.", "So sad")
    }

  }
  
  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    const { isLoading, temp, condition, name, country } = this.state;
    return ( isLoading? 
    <Loading /> : 
    <Weather 
      condition={condition} temp={Math.round(temp)} name={name} country={country}/>);
  }
}
