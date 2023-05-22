
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import {
  ACTIVE_SUBJECT,
  ACTIVE_VALET,
  ALIGNLET,
  baseStyles,
  CARDOCEAN,
  COMEPLETE_CIRCLE,
  Component_Icon,
  FISH,
  Divers_icon,
  Date_e,
  FONT_SCALE,
  FONTS,
  GIF,
  Group_Icon,
  HALF,
  Diamond,
  HALF_MULTICOLOR,
  Line,
  OBJECT_ONE,
  OBJECT_THREE,
  OBJECT_TWO,
  PRIMERY_CARD,
  Brainers_icon,
  White_Shark,
  SUBJECT,
  THEME_COLORS,
  THEME_TEXT_COLORS,
  TRANSFER_FILE,
  TREE,
  VALET,
  VALET_TITLE,
  SETTING_ICON,
  VIDEO_ICON,
  MULTIPLE_ICON,
  THREE_CARD,
  ROUND_ARROW,
} from '../../Shell/Theme/css/base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ClassCard from '../../Components/ClassCard';
import * as Progress from 'react-native-progress';
import Drawernavigation from '../../Components/DrawerNavigation';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';
const Flashcard = ({ props, navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      let Check = AsyncStorage.getItem('userName');
      console.log('Check', Check);
    }, 5000);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 90,
          duration: duration,
          useNativeDriver: true,

        }),

        Animated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
          delay: 300

        }),


      ])
    ).start();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedLogo, {
          toValue: 90,
          duration: duration,
          useNativeDriver: true,
        }),

        Animated.timing(animatedLogo, {
          toValue: -50,
          duration: duration,
          useNativeDriver: true,
          delay: 300

        }),


      ])
    ).start();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedLeft, {
          toValue: -90,
          duration: duration,
          useNativeDriver: true,
        }),

        Animated.timing(animatedLeft, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
          delay: 300

        }),
      ])
    ).start();
  }, []);


  const [isActive, isSetAcitve] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const animated = new Animated.Value(40);
  const animatedLogo = new Animated.Value(-40);
  const animatedLeft = new Animated.Value(40)
  const duration = 1500;




  return (

    <View style={[{ backgroundColor: '#F0F0F0' }]}>
      {/* <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={THEME_COLORS.primary}
        /> */}
      <View
        style={{
          marginTop: '5%', paddingTop: '8%', height: '32%',
          backgroundColor: THEME_COLORS.primary, borderBottomStartRadius: 12, elevation: 3,
          borderBottomEndRadius: 12, zIndex: 999
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Drawernavigation modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation.navigate} />
          <View style={{
            flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', height: 40,
            flex: 1, backgroundColor: '#C2C2C233', borderRadius: 50, marginRight: 20,
            borderWidth: 1, borderColor: '#C2C2C233'
          }}>
            <Ionicons name={"search"} size={22} color={THEME_COLORS.white} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={THEME_COLORS.white}
              style={{
                color: '#fff', marginRight: 20

              }}
            />
          </View>
        </View>
        <View
          style={[
            baseStyles.flex1,
            { flexDirection: 'row', top: 10 },
          ]}>
          <View style={{ flex: 0.8 }}>
            <View style={{ borderColor: '#FFF', top:'8%',width: '60%', height: '10%', flexDirection: 'row' }}>
              <Image
                source={Divers_icon}
                style={{
                  // position: 'absolute',
                  top: '-5%',
                  // left: -40,
                  width: '25%',
                  height: '120%',
                  marginLeft: '5%',
                }}
              />
              <Text
                style={{
                  fontSize: 32 / FONT_SCALE,
                  color: '#ffffff',
                  fontWeight: '900',
                  fontFamily: FONTS.bold,
                  lineHeight: 30,
                  // top: 20,
                  left: '3%',
                  letterSpacing: 1.5,
                }}>
                {' '}
                Drivers
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            {/* //small curcle */}
            <View style={{  borderColor: '#FFF',flexDirection:'column',width:'40%',height:'45%',left:'5%',top:"9%",alignItems:'center',justifyContent:'center'}}>
              <Text style={{
                color: '#FFFFFF', fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: 23, 
                top: '30%',
                left: '35%', 
                position: 'absolute'
              }}>20%</Text>

              <Image
                source={COMEPLETE_CIRCLE}
                style={{
                  // position: 'absolute',
                  // top: 40,
                  // left: 40,
                  width: 94,
                  height: 94,
                }}
              />
              <Text style={{
              color: '#FFFFFF', fontFamily: 'Proxima Nova',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 16,
              top: '9%'
                
              }}>Card Studied</Text>
            </View>
            <Image
                source={Line}
                style={{
                  height: '30%',
                  width: 1,
                  // position: 'absolute',
                  left: '15%',
                  top: '13%',
                }}
              />
            {/* ///big circle */}
            <View style={{ flexDirection: 'column', borderColor: '#FFF',  height: '80%', top: '-18%', width: '55%', left: '25%',  alignItems: 'center' }}>
              <Text style={{
                position: 'absolute',
                left:'35%',
                top: '37%',
                color: '#FFFFFF', fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 32
              }}>20%</Text>

              <Image
                source={COMEPLETE_CIRCLE}
                style={{ resizeMode: 'contain', width: '90%', height: '90%' }}

              />
              <Text style={{
                color: '#FFFFFF', fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 16,
                top: '-9%'
              }}>Mastery</Text>
            </View>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  top: 45,
                  //  justifyContent: 'space-around',
                  marginHorizontal: 10,
                },
              ]}>
              <View style={{ marginBottom: 150 }} />






            </View>
          </View>
        </View>


      </View>

      {!isActive ?
        <View style={styles?.heading}>
          <Text
            style={{
              color: THEME_COLORS.white,
              fontWeight: 'bold',
            }}>
            CARDOCEAN
          </Text>
          <Image source={CARDOCEAN} style={{ height: 25, width: 25 }} />
        </View> :
        <View style={[baseStyles.mH2_5x, { flexDirection: 'row', justifyContent: 'space-between' }]}>

          <TouchableOpacity style={[styles?.cardsStyle]} activeOpacity={0.8}>
            <Image source={SETTING_ICON} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
            <Image source={MULTIPLE_ICON} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
            <Image source={ROUND_ARROW} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
            <Image source={THREE_CARD} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>

        </View>

      }

      <ScrollView>
      
        <View style={{ height:840,marginTop:'2.5%',position:'relative',alignItems:'center',}}>

          {/* //1 */}
          <View style={{left:'-42%'}}>
            <View style={styles.thirdCard}>
              <View style={styles.childiv}></View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>
            <View style={styles.secondCard}>
              <View style={styles.childiv}></View>
              <Text style={{
               position: 'absolute',
               width: 96.68,
               alignSelf:'center',
               height: 37,
               // left: 21,
               top: '48%',
               // bottom:'40%',
               fontWeight:700,
               fontFamily: 'Proxima Nova',
               fontStyle: 'normal',
               fontSize: 7,
               lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>
            <View style={styles.firstCard}>
              <View style={styles.childiv}><Image source={Date_e} style={{
                position: 'absolute',
                width: '25%',
                height: '80%',
                left: '5%',
                marginLeft: -3.63 + 1.36,
                top: '25%',
                marginTop: -3.66 - 0.35
              }} /><Image source={White_Shark} style={{
                position: 'absolute',
                width: '40%',
                height: '80%',
                left: '30%',
                marginLeft: -3.63 + 1.36,
                top: '35%',
                marginTop: -3.66 - 0.35
              }} /><Image source={Diamond} style={{
                position: 'absolute',
                width: 15.77,
                height: 15.77,
                left: '67.5%',
                marginLeft: -3.63 + 1.36,
                top: '40%',
                marginTop: -3.66 - 0.35
              }} />
                <Image source={TREE} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: '55%',
                  left: '83%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
              </View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>
          </View>
          {/* //2 */}
          <View style={{right:'-5%'}} >
            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left: 20,
              // right:20,
              top: 8,
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                 position: 'absolute',
                 width: 96.68,
                 alignSelf:'center',
                 height: 37,
                 // left: 21,
                 top: '48%',
                 // bottom:'40%',
                 fontWeight:700,
                 fontFamily: 'Proxima Nova',
                 fontStyle: 'normal',
                 fontSize: 7,
                 lineHeight: 11,
              }}>
                What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?
              </Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left:10,
              top: 4,
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,
              }}>
                What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?
              </Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              // left: 207,
              top: 0,
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}>
                <Image source={Date_e} style={{
                  position: 'absolute',
                  width: '25%',
                  height: '80%',
                  left: '5%',
                  marginLeft: -3.63 + 1.36,
                  top: '25%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={White_Shark} style={{
                  position: 'absolute',
                  width: '40%',
                  height: '80%',
                  left: '30%',
                  marginLeft: -3.63 + 1.36,
                  top: '35%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={Diamond} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: 15.77,
                  left: '67.5%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
                <Image source={TREE} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: '55%',
                  left: '83%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
              </View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,
              }}>
                What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?
              </Text>
            </View>

          </View>

          {/* //3 */}
          <View style={{left:'-42%'}}>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left: 20,
              top: 258,
              // color:'black',

              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,
              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left: 10,
              top: 254,
              // color:'black',
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              // left: 20,
              top: 250,
              // color:'black',
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}>
                <Image source={Date_e} style={{
                  position: 'absolute',
                  width: '25%',
                  height: '80%',
                  left: '5%',
                  marginLeft: -3.63 + 1.36,
                  top: '25%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={White_Shark} style={{
                  position: 'absolute',
                  width: '40%',
                  height: '80%',
                  left: '30%',
                  marginLeft: -3.63 + 1.36,
                  top: '35%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={Diamond} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: 15.77,
                  left: '67.5%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
                <Image source={TREE} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: '55%',
                  left: '83%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
              </View>
              <Text style={{
                position: 'absolute',
                width: 96.68,
                alignSelf:'center',
                height: 37,
                // left: 21,
                top: '48%',
                // bottom:'40%',
                fontWeight:700,
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: 7,
                lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>
          </View>
          {/* //4 */}
          <View style={{right:'-5%'}}>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left: 20,
              top: 258,
              // color:'black',
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                 position: 'absolute',
                 width: 96.68,
                 alignSelf:'center',
                 height: 37,
                 // left: 21,
                 top: '48%',
                 // bottom:'40%',
                 fontWeight:700,
                 fontFamily: 'Proxima Nova',
                 fontStyle: 'normal',
                 fontSize: 7,
                 lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              left: 10,
              top: 254,
              // color:'black',
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}></View>
              <Text style={{
                 position: 'absolute',
                 width: 96.68,
                 alignSelf:'center',
                 height: 37,
                 // left: 21,
                 top: '48%',
                 // bottom:'40%',
                 fontWeight:700,
                 fontFamily: 'Proxima Nova',
                 fontStyle: 'normal',
                 fontSize: 7,
                 lineHeight: 11,
              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>

            <View style={{
              position: 'absolute',
              width: 131.69,
              height: 230,
              // left: 207,
              top: 250,
              // color:'black',
              backgroundColor: '#FFFF',
              borderRadius: 3.66826,
              shadowOffset: {
                width: 0,
                height: 2.20096,
              },
              shadowOpacity: 0.2,
              shadowRadius: 6.60287,
              shadowColor: 'black',
              elevation: 3, // Only for Android
            }}>
              <View style={styles.childiv}>
                <Image source={Date_e} style={{
                  position: 'absolute',
                  width: '25%',
                  height: '80%',
                  left: '5%',
                  marginLeft: -3.63 + 1.36,
                  top: '25%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={White_Shark} style={{
                  position: 'absolute',
                  width: '40%',
                  height: '80%',
                  left: '30%',
                  marginLeft: -3.63 + 1.36,
                  top: '35%',
                  marginTop: -3.66 - 0.35
                }} /><Image source={Diamond} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: 15.77,
                  left: '67.5%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
                <Image source={TREE} style={{
                  position: 'absolute',
                  width: 15.77,
                  height: '55%',
                  left: '83%',
                  marginLeft: -3.63 + 1.36,
                  top: '40%',
                  marginTop: -3.66 - 0.35
                }} />
              </View>
              <Text style={{
                 position: 'absolute',
                 width: 96.68,
                 alignSelf:'center',
                 height: 37,
                 // left: 21,
                 top: '48%',
                 // bottom:'40%',
                 fontWeight:700,
                 fontFamily: 'Proxima Nova',
                 fontStyle: 'normal',
                 fontSize: 7,
                 lineHeight: 11,

              }} >What are two things you can never eat for breakfast?
                What are two things you can never eat for breakfast?</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',bottom:'-130%' }}>
        <View style={{
          // position:'absolute',
          height: 10, width: 10, backgroundColor: THEME_TEXT_COLORS.primary, shadowColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 1,
          elevation: 2,

        }}></View>
        <View style={{
          // position:'absolute',
          height: 10, width: 10, backgroundColor:THEME_COLORS.lightBlue, left: 10, shadowColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 1,
          elevation: 2,

        }}></View>
        <View style={{
          // position:'absolute',
          height: 10, width: 10, backgroundColor:THEME_COLORS.lightBlue, left: 20, shadowColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 1,
          elevation: 2,

        }}></View></View>
        </View>

       
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  thirdCard: {
    position: 'absolute',
    width: 131.69,
    height: 230,
    left: 20,
    top: 8,
    color: 'black',
    backgroundColor: '#FFFF',
    borderRadius: 3.66826,
    shadowOffset: {
      width: 0,
      height: 2.20096,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.60287,
    shadowColor: 'black',
    elevation: 3, // Only for Android
  },
  secondCard: {
    position: 'absolute',
    width: 131.69,
    height: 230,
    left: 10,
    // right:6,
    top: 4,
    color: 'black',
    backgroundColor: '#FFFF',
    borderRadius: 3.66826,
    shadowOffset: {
      width: 0,
      height: 2.20096,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.60287,
    shadowColor: 'black',
    elevation: 3, // Only for Android
  },
  firstCard: {
    // borderRadius: 3.66826,
    position: 'absolute',
    width: 131.69,
    height: 230,
    // alignItems:'center',
    // justifyContent:'center',
    // left: 20,
    top: 0,
    color: 'black',
    backgroundColor: '#FFFF',
    borderRadius: 3.66826,
    shadowOffset: {
      width: 0,
      height: 2.20096,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.60287,
    shadowColor: 'black',
    elevation: 3, // Only for AndroidRR
  },
  childiv: {
    position: 'absolute',
    width: 131.69,
    height: '12%',
    borderRadius: 3.6,
    // left: 20,
    // top: 75,
    backgroundColor: '#B08368'
  },
  buttonStyle: {
    backgroundColor: THEME_COLORS.primary,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  heading: {
    width: '45%',
    height: 40,
    backgroundColor: '#117A9B',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cardsStyle: {
    //width: '%',
    paddingHorizontal: 24,
    height: 40,
    elevation: 10,
    shadowColor: "#00000050",
    shadowOffset: {
      width: 2, height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: '#117A9B',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  inputStyle: {
    // flex: 1,
    width: '100%',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: THEME_COLORS.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});


export default Flashcard;
