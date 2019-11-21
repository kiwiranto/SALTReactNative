import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import MovieList from '../Screens/MovieList';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen,
    },
    Movie: {
      screen: MovieList
    }
  },
  {
    initialRouteName : 'Login'
  }
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;