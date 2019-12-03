import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import MovieList from '../Screens/MovieList';
import RegisterScreen from '../Screens/RegisterScreen';

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

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    initialRouteName : 'Login',
    headerMode : 'none'
  }
)

const Navigator = createAppContainer(AppNavigator);

export default Navigator;