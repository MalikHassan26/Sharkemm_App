/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, Animated, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {INITIAL_SCREEN} from '../../Constants/core';
import CustomButton from '../../../src/Components/Atoms/Buttons/buttons';

import {
  baseStyles,
  FONT_SCALE,
  MAINLOGO,
  THEME_COLORS,
  THEME_TEXT_COLORS,
} from '../../Shell/Theme/css/base';
import Style from './Style';

const InitialScreen = ({navigation}) => {
  const animated = new Animated.Value(-20);
  const animatedLogo = new Animated.Value(-20);
  const duration = 3000;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedLogo, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),

        Animated.timing(animatedLogo, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
          delay: 30000,
        }),
      ]),
    ).start();
  }, []);

  // const navigateTo = (screen = null) => {
  //   if (screen) {
  //     navigation.navigate(screen);
  //   } else {
  //     navigation.goBack();
  //   }
  // };

  return (
    <View style={[{backgroundColor: THEME_COLORS.white, flex: 1}]}>
      <View
        style={[
          baseStyles.pB1_25x,
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            color: THEME_TEXT_COLORS.primary,
          },
        ]}>
        <Image
          source={MAINLOGO}
          resizeMode={'contain'}
          style={[{width: '50%', height: '20%'}]}
        />
        <Text
          style={[
            {
              fontSize: 42 / FONT_SCALE,
              color: THEME_COLORS.primary,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            },
          ]}>
          {INITIAL_SCREEN.HEADING01}
        </Text>
        <Text
          style={[
            {
              fontSize: 42 / FONT_SCALE,
              color: THEME_COLORS.primary,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            },
          ]}>
          {INITIAL_SCREEN.HEADING02}
        </Text>
        <Text
          style={[
            baseStyles.fs14x,
            baseStyles.fontMedium,
            {
              color: THEME_COLORS.primary,
              fontSize: 14,
              textAlign: 'center',
              marginHorizontal: 30,
            },
          ]}>
          {INITIAL_SCREEN.SUB_HEADING}
        </Text>
        <CustomButton
          children={
            <Text style={{color: '#fff'}}>{INITIAL_SCREEN.SIGN_UP}</Text>
          }
          onPress={() => navigation.navigate('RegisterScreen')}
          style={Style.SingUpButton}
        />

        <CustomButton
          children={
            <Text style={{color: '#203870'}}>{INITIAL_SCREEN.SIGN_IN}</Text>
          }
          onPress={() => navigation.navigate('LoginScreen')}
          style={Style.SingInButton}
        />
      </View>
    </View>
  );
};

export default InitialScreen;
