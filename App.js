import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Signin from './src/screen/Signin';
import Signup from './src/screen/Signup';
import Explore from './src/screen/Explore';
import Inbox from './src/screen/Inbox';
import Logout from './src/screen/Logout';
import Saved from './src/screen/Saved';
import Trips from './src/screen/Trips';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './src/screen/Login';
import Signup1 from './src/screen/Signup1';
import Signup2 from './src/screen/Signup2';


const switchNavigator = createSwitchNavigator({
  loginarea: createStackNavigator({
    SignIn: Signin,
    SignUp: Signup,
    SignUp1: Signup1,
    SignUp2: Signup2,
    LogIn: Login
  }),
  mainarea: createMaterialBottomTabNavigator({
    Explore: { screen: Explore,
                navigationOptions: {
                  tabBarLabel: 'Explore',
                  tabBarIcon: () => (
                    <Icon name = "search" size={25}/>
                  )
                }
              },
    Saved: { screen: Saved,
              navigationOptions: {
              tabBarLabel: 'Saved',
              tabBarIcon: () => (
                <Icon name = "heart" size={25}/>
                )
              }
            },
    Trips: { screen: Trips,
              navigationOptions: {
              tabBarLabel: 'Trips',
              tabBarIcon: () => (
                <Icon name = "tripadvisor" size={20}/>
                )
              }
            },
    Inbox: { screen: Inbox,
              navigationOptions: {
              tabBarLabel: 'Inbox',
              tabBarIcon: () => (
                <Icon name = "envelope" size={25}/>
                )
              }
            },
    Profile: { screen: Logout,
              navigationOptions: {
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
              <Icon name = "user" size={25}/>
                )
              }
            },
  },
  {
    initialRouteName: 'Explore',
    activeColor: 'red',
    inactiveColor: 'blue',
    barStyle: {backgroundColor: 'white'},
  })
});

export default createAppContainer(switchNavigator);