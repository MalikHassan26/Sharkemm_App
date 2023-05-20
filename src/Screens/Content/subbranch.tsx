//import liraries
import React, {useState, createRef, useEffect} from 'react';

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
  Alert,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
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
  FONT_SCALE,
  FONTS,
  GIF,
  Group_Icon,
  HALF,
  HALF_MULTICOLOR,
  Line,
  OBJECT_ONE,
  OBJECT_THREE,
  OBJECT_TWO,
  PRIMERY_CARD,
  // PROGRESS,
  SUBJECT,
  THEME_COLORS,
  THEME_TEXT_COLORS,
  TRANSFER_FILE,
  VALET,
  VIDEO_ICON,
  
  COLOR_PROGRESS_BAR,
  LOCK_ICON,
  FISH_gray,
  FISH_U,
  Cross_icon,
  Divers_icon,
  Brainers_icon,
  Skills_icon
} from '../../Shell/Theme/css/base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ClassCard from '../../Components/ClassCard';
import * as Progress from 'react-native-progress';
import Drawernavigation from '../../Components/DrawerNavigation';
// create a component
const Subbranch = (props, navigation) => {
  // const navigation = useNavigation();

  const submitPress = () => {
    props.navigation.navigate('Subcard');
  };

  // const renderItem = ({item}) => (
  //   <TouchableOpacity onPress={() => navigation.navigate('Physics')}>
  //     <ClassCard
  //       subjectName={item.name}
  //       percent={item.percent}
  //       noOfCards={item.cardQty}
  //       classofMastery={item.classMarsty}
  //       vault={item.vault}
  //       total={item.total}
  //     />
  //   </TouchableOpacity>
  // );

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
          delay: 300,
        }),
      ]),
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
          delay: 300,
        }),
      ]),
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
          delay: 300,
        }),
      ]),
    ).start();
  }, []);

  const DummyArrayForCards = [
    {name: 'Physics', percent: 20, cardQty: 0, myclass: 0},
    {name: 'Chemistry', percent: 40, cardQty: 0, myclass: 1},
    {name: 'English', percent: 35, cardQty: 0, myclass: 1},
    {name: 'Bio', percent: 43, cardQty: 0, myclass: 0},
    {name: 'Bio', percent: 43, cardQty: 0, myclass: 1},
  ];
  const DummyArrayForCardsFav = [
    {
      name: 'Mr Reef',
      percent: 20,
      cardQty: 23,
      favorites: 1,
      classMarsty: true,
      vault: true,
    },
    {
      name: 'Gems',
      percent: 12,
      cardQty: 23,
      favorites: 0,
      classMarsty: true,
      vault: true,
    },
    {
      name: 'Flash Bites',
      percent: 35,
      cardQty: 30,
      favorites: 0,
      classMarsty: false,
      vault: true,
      total: true,
    },
    {
      name: 'Master Shell',
      percent: 22,
      cardQty: 18,
      favorites: 0,
      classMarsty: false,
      vault: true,
      total: false,
    },
  ];
  const [isActive, isSetAcitve] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const animated = new Animated.Value(40);
  const animatedLogo = new Animated.Value(-40);
  const animatedLeft = new Animated.Value(40);
  const duration = 1500;

  return (
    <View style={[{backgroundColor: THEME_COLORS.Bg_white}, baseStyles.flex1x]}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={THEME_COLORS.primary}
      />
      <View
        style={{
          marginTop: 20,
          paddingTop: 20,
          maxHeight: 320,
          backgroundColor: THEME_COLORS.primary,
          borderBottomStartRadius: 12,
          elevation: 3,
          borderBottomEndRadius: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            top: 18,
          }}>
          <Drawernavigation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            navigation={navigation.navigate}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 0,
              paddingLeft:12,
              alignItems: 'center',
              height: 40,
              flex: 1,

              backgroundColor: '#C2C2C233',
              borderRadius: 50,
              marginRight: 20,
              borderWidth: 1,
              borderColor: '#C2C2C233',
            }}>
            <Ionicons name={'search'} size={22} color={THEME_COLORS.white} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={THEME_COLORS.white}
              style={{color: '#fff', marginLeft: 5}}
            />
          </View>
          <View style={{marginRight: 10}}>
            <Image source={Cross_icon} style={{width: 24, height: 24}} />
          </View>
        </View>
        <View
          style={[
            baseStyles.flex1,
            {flexDirection: 'row', marginHorizontal: 15, top: 27},
          ]}>
          <View style={{flex: 0.8}}>
            <View>
              <Text
                style={{
                  fontSize: 32 / FONT_SCALE,
                  color: '#ffffff',
                  fontWeight: '900',
                  fontFamily: FONTS.bold,
                  lineHeight: 30,
                  top: 20,
                  left: -8,
                  letterSpacing: 2,
                }}>
                {' '}
                Bran. of Physics
              </Text>

              <View style={{position: 'relative'}}>
                <Image
                  source={FISH_U}
                  style={{position: 'absolute', top: -20, right: -80}}
                />
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
              <View style={{marginBottom: 150}} />

              <ImageBackground
                source={HALF_MULTICOLOR}
                resizeMode="contain"
                style={{
                  //flex:1,
                  //justifyContent: 'center',
                  //paddingHorizontal: 0,
                  height: 100,
                  width: 100,
                }}>
                <View style={{alignSelf: 'center', marginTop: 30}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16 / FONT_SCALE,
                      textAlign: 'center',
                    }}>
                    5.4%
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 13 / FONT_SCALE,
                      top: 5,
                      fontWeight: '400',
                      letterSpacing: 1,
                    }}>
                    Class Mastery
                  </Text>
                </View>
              </ImageBackground>

              <Image
                source={Line}
                style={{
                  height: 67,
                  width: 1,
                  position: 'absolute',
                  left: 105,
                  top: 5,
                }}
              />
              <View>
                <ImageBackground
                  source={HALF}
                  resizeMode="contain"
                  style={{
                    // flex: 0.5,
                    // justifyContent: 'center',
                    marginHorizontal: 15,
                    //  height: 80,
                    height: 100,
                    width: 100,
                  }}>
                  <View style={{alignSelf: 'center', marginTop: 30}}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14 / FONT_SCALE,
                        textAlign: 'center',
                      }}>
                      30
                    </Text>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 13 / FONT_SCALE,
                        top: 8,
                        fontWeight: '400',
                        letterSpacing: 1,
                      }}>
                      {' '}
                      Time Spend
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <Image
                source={Line}
                style={{
                  height: 67,
                  width: 1,
                  position: 'absolute',
                  left: 225,
                  top: 5,
                }}
              />
              <ImageBackground
                source={HALF_MULTICOLOR}
                resizeMode="contain"
                style={{
                  // flex: 0.5,
                  // justifyContent: 'center',
                  marginHorizontal: 15,
                  //  height: 80,
                  height: 100,
                  width: 100,
                }}>
                <View style={{alignSelf: 'center', marginTop: 30}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14 / FONT_SCALE,
                      textAlign: 'center',
                    }}>
                    23/33
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 13 / FONT_SCALE,
                      top: 8,
                      fontWeight: '400',
                      letterSpacing: 1,
                    }}>
                    {' '}
                    Cards Studied
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderRadius: 8, top: 0, left: 9}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              letterSpacing: 0.3,
              textAlign: 'center',
              marginHorizontal: 10,
              paddingVertical: 0,
            }}>
            {' '}
            Goals
          </Text>
          <Progress.Bar
            unfilledColor="#253457"
            borderRadius={50}
            borderWidth={0}
            progress={0.8}
            height={7}
            width={300}
            color={'#117A9B'}
            borderColor="transparent"
            style={{alignSelf: 'flex-start', flex: 0.91, top: 10}}
          />
        </View>
        <View style={{flexDirection: 'row', top: 5, left: 9, marginBottom: 25}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              letterSpacing: 0.3,
              textAlign: 'center',
              marginHorizontal: 10,
              paddingVertical: 0,
            }}>
            {' '}
            Rank{' '}
          </Text>
          <Progress.Bar
            unfilledColor="#253457"
            borderRadius={50}
            borderWidth={0}
            progress={0.7}
            width={320}
            height={7}
            color={'#A80279'}
            borderColor="transparent"
            style={{alignSelf: 'flex-start', flex: 0.91, top: 10}}
          />
        </View>
      </View>
      

      <View style={{top: 17}}>
        <View style={{ alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              // borderWidth: 1,
              borderRadius: 10,
              // borderColor: 'red',
              // padding: 10,
              marginBottom: 18,
              width: 365,
              height: 95,
              // shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity onPress={submitPress}>
                <View style={{flexDirection: 'row'}}>
                  {/* first componenent */}
                  <View
                    style={{
                      backgroundColor: '#117A9B',

                      borderRadius: 10,

                      padding: 10,
                      marginBottom: 10,
                      width: 100,
                      height: 95,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 18,
                        // fontWeight: '500',
                        marginBottom: 4,
                      }}>
                      Divers
                    </Text>
                    <Image
                      source={Divers_icon}
                      style={{width: 36, height: 36}}
                    />
                  </View>
                  {/* second componenent */}
                  <View>
                    <View
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                        // borderWidth: 1,
                        // borderColor: 'red',
                      }}>
                      <View style={{flexDirection: 'row', gap: 12}}>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Studied
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Mastery
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    </View>

                    <View></View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              // borderWidth: 1,
              borderRadius: 10,
              // borderColor: 'red',
              // padding: 10,
              marginBottom: 18,
              width: 365,
              height: 95,
              // shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity onPress={submitPress}>
                <View style={{flexDirection: 'row'}}>
                  {/* first componenent */}
                  <View
                    style={{
                      backgroundColor: '#117A9B',

                      borderRadius: 10,

                      padding: 10,
                      marginBottom: 10,
                      width: 100,
                      height: 95,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 18,
                        
                        marginBottom: 4,
                      }}>
                      Brainers
                    </Text>
                    <Image
                      source={Brainers_icon}
                      style={{width: 36, height: 36}}
                    />
                  </View>
                  {/* second componenent */}
                  <View>
                    <View
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                        // borderWidth: 1,
                        // borderColor: 'red',
                      }}>
                      <View style={{flexDirection: 'row', gap: 12}}>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Studied
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Mastery
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    </View>

                    <View></View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              // borderWidth: 1,
              borderRadius: 10,
              // borderColor: 'red',
              // padding: 10,
              marginBottom: 18,
              width: 365,
              height: 95,
              // shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity onPress={submitPress}>
                <View style={{flexDirection: 'row'}}>
                  {/* first componenent */}
                  <View
                    style={{
                      backgroundColor: '#117A9B',

                      borderRadius: 10,

                      padding: 10,
                      marginBottom: 10,
                      width: 100,
                      height: 95,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        
                        color: '#ffffff',
                        fontSize: 18,
                        marginBottom: 4,
                      }}>
                      Skillers
                    </Text>
                    <Image
                      source={Skills_icon}
                      style={{width: 36, height: 36}}
                    />
                  </View>
                  {/* second componenent */}
                  <View>
                    <View
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                        // borderWidth: 1,
                        // borderColor: 'red',
                      }}>
                      <View style={{flexDirection: 'row', gap: 12}}>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Studied
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                        <View>
                          <ImageBackground
                            source={HALF_MULTICOLOR}
                            resizeMode="contain"
                            style={{
                              //flex:1,
                              //justifyContent: 'center',
                              //paddingHorizontal: 0,
                              height: 100,
                              width: 100,
                            }}>
                            <View style={{alignSelf: 'center', marginTop: 30}}>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 16 / FONT_SCALE,
                                  textAlign: 'center',
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: 5,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Card Mastery
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    </View>

                    <View></View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* //sec */}
        </View>
      </View>

      {/* </ScrollView> */}
    </View>
  );
};

// define your styles

//make this component available to the app
export default Subbranch;

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
    shadowColor: '#00000050',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: '#203870',
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
