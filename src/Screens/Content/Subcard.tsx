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
  BRANCH_ICON,
  COLOR_PROGRESS_BAR,
  LOCK_ICON,
  FISH_gray,
  Dolphin,
  Dolphin_CARD,
  Dolphion_ICON_CARD,
  Dolphion_ICON_BOOK,
  Cross_icon,
  Dolphin_LIGHT_CARD,
  Dolphin_gray_Card,
} from '../../Shell/Theme/css/base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ClassCard from '../../Components/ClassCard';
import * as Progress from 'react-native-progress';
import Drawernavigation from '../../Components/DrawerNavigation';
// create a component


const Subcard = (props, navigation) => {
    // const navigation = useNavigation();
  const renderCap = () => (
    <View
      style={{
        position: 'absolute',
        right: 0,
        top: -4,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#A80279',
      }}
    />
  );

  const submitPress = () => {
    props.navigation.navigate('Flashcard');
   
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Physics')}>
      <ClassCard
        subjectName={item.name}
        percent={item.percent}
        noOfCards={item.cardQty}
        classofMastery={item.classMarsty}
        vault={item.vault}
        total={item.total}
      />
    </TouchableOpacity>
  );

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
              paddingHorizontal: 20,
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
              style={{color: '#fff', marginRight: 20}}
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
                Cardocean
              </Text>

              <View style={{position: 'relative'}}>
                <Image
                  source={Dolphin_LIGHT_CARD}
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
      
      <View
        style={{
          position: 'absolute',
          zIndex: -1,
          alignItems: 'center',
          top: 320,
          right: 50,
          left: 50,
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: 157,
            height: 27,
            borderColor: '#c2c2c2',
            borderWidth: 1,

            borderRadius: 50,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 25},
            shadowOpacity: 0.1,
            shadowRadius: 100,
            elevation: 15,
          }}></View>
      </View>
      <View style={{top: 20}}>
      <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              // borderWidth: 1,
              borderRadius: 10,
              // borderColor: 'red',
              // padding: 10,
              marginBottom: 10,
              width: 365,
              height: 163,
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
                      width: 50,
                      height: 163,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Dolphin} style={{width: 30, height: 30}} />
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
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text
                            style={{
                              color: '#117A9B',
                              fontSize: 22,
                              fontWeight: 'bold',
                              paddingBottom: 11,
                              marginTop: 10,
                              marginLeft: -5,
                            }}>
                            Chemistry
                          </Text>
                          <Text
                            style={{
                              color: '#117A9B',
                              fontSize: 16,
                              top: -3,
                              marginLeft: -5,
                            }}>
                            23/36 Unique card studied
                          </Text>
                        </View>
                        <View style={{marginLeft: 10}}>
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
                                  top: -5,
                                }}>
                                5.4%
                              </Text>
                              <Text
                                style={{
                                  color: '#117A9B',
                                  fontSize: 13 / FONT_SCALE,
                                  top: -1,
                                  fontWeight: '400',
                                  letterSpacing: 1,
                                }}>
                                Class Mastery
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </View>

                      <View style={{marginLeft: -4, marginVertical: -16}}>
                        <View>
                          <View>
                            <Image
                              source={COLOR_PROGRESS_BAR}
                              style={{width: 290}}
                            />
                          </View>
                        </View>
                        <View style={{top: 10}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              borderRadius: 8,
                              top: -4,
                              bottom: 5,
                            }}>
                            <Text
                              style={{
                                color: '#117A9B',

                                fontSize: 16,
                                letterSpacing: 0.3,
                                textAlign: 'center',
                                marginHorizontal: 0,
                                paddingVertical: 0,
                                marginRight: 10,
                                marginLeft: -5,
                              }}>
                              {' '}
                              Time
                            </Text>

                            <Progress.Bar
                              unfilledColor="#E9Ebf1"
                              borderRadius={50}
                              borderWidth={0}
                              progress={0.7}
                              height={7}
                              width={320}
                              color={'#117A9B'}
                              borderColor="transparent"
                              style={{
                                alignSelf: 'flex-start',
                                flex: 0.94,
                                top: 10,
                              }}
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              borderRadius: 8,
                              top: 0,
                            }}>
                            <Text
                              style={{
                                color: '#117A9B',
                                fontSize: 16,
                                letterSpacing: 0.3,
                                textAlign: 'center',
                                marginHorizontal: 0,
                                paddingVertical: 0,
                                marginRight: 10,
                                marginLeft: -4,
                              }}>
                              {' '}
                              Gaol
                            </Text>

                            <Progress.Bar
                              unfilledColor="#E9Ebf1"
                              borderRadius={50}
                              borderWidth={0}
                              progress={0.4}
                              height={4}
                              width={320}
                              color={'#117A9B'}
                              borderColor="transparent"
                              style={{
                                alignSelf: 'flex-start',
                                flex: 0.94,
                                top: 10,
                              }}
                            />
                            <View style={{position:"absolute",left:110}}>
                            <View
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                backgroundColor: '#117A9B',
                                // marginLeft: -30,
                                left: 0,
                                marginTop: 3,
                              }}
                            />  
                            </View>
                            
                          </View>
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
        {/* ..........round cards......... */}

        <View
          style={{
            top: 175,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 24,
          }}>
          
          <View>
            <View>
              <View
                style={{
                  borderRadius: 50,
                  width: 157,
                  height: 50,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    gap: 5,
                    borderRadius: 50,
                    borderColor: 'black',
                    width: 165,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <View
                      style={{
                        borderTopLeftRadius: 50,
                        borderBottomLeftRadius: 50,
                        backgroundColor: '#117A9B',
                        width: 22,
                        height: 50,
                      }}></View>
                  </View>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#117A9B',
                        }}>
                        Flash Cards
                      </Text>
                      <Image
                        source={Dolphion_ICON_CARD}
                        style={{width: 24, height: 24, marginLeft: 7}}
                      />
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        borderTopRightRadius: 40,
                        borderBottomRightRadius: 40,
                        backgroundColor: '#117A9B',
                        
                        width: 22,
                        height: 50,
                      }}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ... Flipper*/}
        
      </View>
      <View style={{marginTop:210, alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              // borderWidth: 1,
              borderRadius: 10,
              // borderColor: 'red',
              // padding: 10,
              marginBottom: 10,
              width: 365,
              height: 120,
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
                      backgroundColor: '#c2c2c2',

                      borderRadius: 10,

                      padding: 10,
                      marginBottom: 10,
                      width: 50,
                      height: 120,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Dolphin_gray_Card} style={{width: 32, height: 3}} />
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
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text
                            style={{
                              color: '#117A9B',
                              fontSize: 24,
                              fontWeight: '900',
                              paddingBottom: 2,
                              marginTop: 1,
                              marginLeft: -5,
                            }}>
                            Filppers
                          </Text>
                          <Text
                            style={{
                              color: '#117A9B',
                              fontSize: 16,
                              top: -3,
                              marginLeft: -5,
                            }}>
                            23/36 Unique card studied
                          </Text>
                        </View>
                        <View style={{marginLeft: 10}}>
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
                                  top: -5,
                                }}>
                                5.4%
                              </Text>
                              
                            </View>
                          </ImageBackground>
                        </View>
                      </View>

                      <View style={{marginLeft: -4, marginVertical:-40}}>
                        <View>
                          <View>
                            <Image
                              source={COLOR_PROGRESS_BAR}
                              style={{width: 290}}
                            />
                          </View>
                        </View>
                        <View style={{top: 10}}>
                          
                          <View
                            style={{
                              flexDirection: 'row',
                              borderRadius: 8,
                              top: 0,
                            }}>
                            <Text
                              style={{
                                color: '#117A9B',
                                fontSize: 16,
                                letterSpacing: 0.3,
                                textAlign: 'center',
                                marginHorizontal: 0,
                                paddingVertical: 0,
                                marginRight: 10,
                                marginLeft: -4,
                              }}>
                              {' '}
                              Gaol
                            </Text>

                            <Progress.Bar
                              unfilledColor="#E9Ebf1"
                              borderRadius={50}
                              borderWidth={0}
                              progress={0.4}
                              height={4}
                              width={320}
                              color={'#117A9B'}
                              borderColor="transparent"
                              style={{
                                alignSelf: 'flex-start',
                                flex: 0.94,
                                top: 10,
                              }}
                            />
                            <View style={{position:"absolute",left:110}}>
                            <View
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                backgroundColor: '#117A9B',
                                // marginLeft: -30,
                                left: 0,
                                marginTop: 3,
                              }}
                            />  
                            </View>
                            
                          </View>
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
      {/* </ScrollView> */}
    </View>
        
    );
};



//make this component available to the app
export default Subcard;


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
