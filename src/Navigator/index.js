import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import MovieList from '../Screens/MovieList';
import RegisterScreen from '../Screens/RegisterScreen';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Movie: {
      screen: MovieList
    }
  },
  {
    initialRouteName : 'Home',
    headerMode : 'none'
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

const MainNavigator = createSwitchNavigator(
  {
    LoginNav: LoginNavigator,
    HomeNav: HomeNavigator
  },
  {
    initialRouteName : 'LoginNav'
  }
);

const Navigator = createAppContainer(MainNavigator);

export default Navigator;