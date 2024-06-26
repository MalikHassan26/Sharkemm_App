import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../Screens/SignIn/SignIn';
import RegisterScreen from '../../../Screens/SignUp/SignUp';
import InitialScreen from '../../../Screens/InitialScreen/InitialPage';
import ForgetPassword from '../../../Screens/ForgetPassword/ForgetPassword';
import Physics from '../../../Screens/Content/Physics';
import Subbranch from '../../../Screens/Content/subbranch';
import Cardocean from '../../../Screens/Content/Cardocean';
import Subcard from '../../../Screens/Content/Subcard';
import Flashcard from '../../../Screens/Content/FlashCard';

import {THEME_COLORS} from '../../Theme/css/base';
import HomeScreen from '../../../Screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View ,Image} from 'react-native';
import Otp from '../../../Screens/Otp/Otp';
import ResetPassword from '../../../Screens/ResetPassword/ResetPassword';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigation  () {
  return (
    
    <Stack.Navigator  screenOptions={{ headerShown: true }}>
      
       <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      
      /> 
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    
    </Stack.Navigator>
  );
};


function Home02Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
  );
}

function Home03Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      
   <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
 
  );
}

function Home04Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  
  );
}

function App() {
  return (
<Tab.Navigator
  screenOptions={({route}) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: '#fff',
      minHeight: 70,
      maxHeight: 70,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      elevation: 3,
    },
    tabBarIcon: ({focused}) => {
      let iconName;
      let backgroundColor;
      let activeTintColor;
      if (route.name === 'Home') {
        iconName = require('../../Theme/Image/home.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'Award') {
        iconName = require('../../Theme/Image/award.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'Account') {
        iconName = require('../../Theme/Image/bar.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'More') {
        iconName = require('../../Theme/Image/add.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      }
      return (
        <View
          style={{
            width: 45,
            height: 40,
            elevation: 3,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            backgroundColor: backgroundColor,
          }}>
          <Image
            source={iconName}
            resizeMode="cover"
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              width: 20,
              top: 10,
              height: 20,
              tintColor: activeTintColor,
            }}
          />
        </View>
      );
    },
  })}>

  {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
  <Tab.Screen name="Home" >
    {() => (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Physics"
          component={Physics}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subbranch"
          component={Subbranch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cardocean"
          component={Cardocean}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subcard"
          component={Subcard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Flashcard"
          component={Flashcard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )}
  </Tab.Screen>
  <Tab.Screen name="Award" component={Home02Stack} />
  <Tab.Screen name="Account" component={Home03Stack} />
  <Tab.Screen name="More" component={Home04Stack} />
</Tab.Navigator>


  );
}

const MainRouter=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator   initialRouteName="InitialScreen"screenOptions={{ headerShown: false }}>

      <Stack.Screen name="App" component={App} />
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      
      />
      
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Log In', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: 'Forget Password',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: 'Reset Password',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen
        name="Otp"
        component={Otp}
        options={{
          title: 'OTP',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Create Account', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Physics"
        component={Physics}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subbranch"
        component={Subbranch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cardocean"
        component={Cardocean}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subcard"
        component={Subcard}
        options={{headerShown: false}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRouter;