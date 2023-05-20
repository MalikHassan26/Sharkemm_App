
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
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
  VIDEO_ICON,
} from '../../Shell/Theme/css/base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ClassCard from '../../Components/ClassCard';
import * as Progress from 'react-native-progress';
import Drawernavigation from '../../Components/DrawerNavigation';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';
const Flashcard = ({props,navigation}) => {

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
          delay:300
  
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
          delay:300
  
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
          delay:300
  
        }),
      ])
    ).start();
  }, []); 
  
 
  const [isActive,isSetAcitve]=useState(true);
  const [modalVisible,setModalVisible]=useState(false);
  const animated = new Animated.Value(40);
  const animatedLogo = new Animated.Value(-40);
  const animatedLeft= new Animated.Value(40)
  const duration = 1500;
  



  return (
   
    <View style={[{backgroundColor: '#F0F0F0'}, baseStyles.flex1x]}>
       <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={THEME_COLORS.primary}
        />
      <View
        style={{marginTop:20,paddingTop: 30,maxHeight:320,
           backgroundColor: THEME_COLORS.primary,borderBottomStartRadius:12,elevation:3,
        borderBottomEndRadius:12,zIndex:999}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Drawernavigation modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation.navigate}/>
         <View style={{flexDirection:'row', paddingHorizontal: 20,alignItems:'center',height:40,
          flex: 1, backgroundColor:'#C2C2C233',borderRadius:50,marginRight: 20, 
          borderWidth:1,borderColor:'#C2C2C233'}}>
         <Ionicons name={"search"} size={22} color={THEME_COLORS.white} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={THEME_COLORS.white}
            style={{color:'#fff',marginRight:20
            
            }}
          />
          </View>
        </View>
        <View style={[baseStyles.flex1, {flexDirection: 'row',marginHorizontal:15}]}>
          <View style={{flex:0.8}}>
            <View>
                <Text
                  style={{
                    fontSize: 24 / FONT_SCALE,
                    color: '#fff',
                    fontWeight:'700',
                    fontFamily:FONTS.bold,
                    lineHeight:30,
                    top: '13%',
                    left: 60,
                    letterSpacing:2
                  }}>
                  {" "}Hi, Jolliet!
                </Text>
                <Image source={FISH} style={{top:-10,width:'100%', height: 50,right:2}}></Image>
                <FastImage
                 style={{ width: '100%', height: 50,top:-60,opacity:0.4}}
                 source={GIF}
                 resizeMode={'contain'}
                   />
            </View>    
              <View
                style={[
                  {
                    flexDirection: 'row',
                    top:-30,
                    //  justifyContent: 'space-around',
                    marginHorizontal: 10,
                   
                  },
                ]}>
                <View style={{ marginBottom:90,}}/>
                
                  <ImageBackground
                    source={HALF_MULTICOLOR}
                    resizeMode="contain"
                    style={{
                      //flex:1,
                      //justifyContent: 'center',
                     //paddingHorizontal: 0,
                       height: 100,
                       width:100,
                    }}>
                    <View style={{alignSelf: 'center',marginTop:30}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16/FONT_SCALE,
                          textAlign: 'center',
                        }}>
                        30
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 13/FONT_SCALE,
                          top:5,
                          fontWeight: '400',
                          letterSpacing: 1,
                        }}>
                        Card Studied
                      </Text>
                    </View>
                  </ImageBackground>
              
               <Image source={Line} style={{height:60,width:1,position:'absolute',left:105,top:5}}/> 
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
                      width:100,
                    }}>
                    <View style={{alignSelf: 'center',marginTop:30}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14/FONT_SCALE,
                          textAlign: 'center',
                        }}>
                        70
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 13/FONT_SCALE,
                          top:5,
                          fontWeight: '400',
                          letterSpacing: 1,
                        }}>
                       {" "}Hours Spend
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <Image source={Line} style={{height:60,width:1,position:'absolute',left:225,top:5}}/>
              </View>
             </View>
           
            <View style={{flex:0.3,marginLeft:10}}>
              <ImageBackground
                source={COMEPLETE_CIRCLE}
                resizeMode="contain"
                style={{
                 // flex: 1,
                  justifyContent: 'flex-start',
                  height: 105,
                  top:30,
                  width:100
                }}>
                <View
                  style={{
                    paddingTop: 40,
                    alignItems: 'center',
                    alignContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      textAlign: 'center',
                      marginTop: 5,
                      fontWeight:'400',
                      lineHeight:19.49
                    }}>
                    20%
                  </Text>
                </View>
              </ImageBackground>
              <Text
                style={{
                  color: '#fff',
                          fontSize: 12,
                         // top:5,
                          fontWeight: '400',
                          letterSpacing:1,
                          top:32,
                          lineHeight:15,
                          
                }}>
                {'      '}
                Mastery
              </Text>
            </View>
        
     
        </View>
       
            <View style={{flexDirection:'row',borderRadius:8,top:-40}}>
              <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    letterSpacing: 0.3,
                    textAlign: 'center',
                    marginHorizontal:10,
                    paddingVertical:0


                  }}>
                  {' '}
                  Goals
                </Text>
              <Progress.Bar unfilledColor='#253457' borderRadius={50} borderWidth={0}
              progress={0.7} height={7} width={320} color={'#117A9B'} borderColor='transparent'
              style={{alignSelf:'flex-start',flex:0.94,top:10}}/>
             
            
               </View> 
               <View style={{flexDirection:'row',top:-40}}>
              <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    letterSpacing: 0.3,
                    textAlign: 'center',
                    marginHorizontal:10,
                    paddingVertical:0
                  }}>
                  {' '}
                  Rank{' '}
                </Text>
              <Progress.Bar unfilledColor='#253457' borderRadius={50} borderWidth={0}
              progress={0.7} width={320} height={7} color={'#A80279'} borderColor='transparent'
              style={{alignSelf:'flex-start',flex:0.94,top:10}}/>
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
        <Image source={CARDOCEAN} style={{height:25,width:25}}/>
      </View>:
      <View style={[baseStyles.mH2_5x,{flexDirection:'row',justifyContent:'space-between'}]}>
        
         <TouchableOpacity style={[styles?.cardsStyle]} activeOpacity={0.8}>
         <Image source={VIDEO_ICON} style={{height:25,width:25}}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={PRIMERY_CARD} style={{height:25,width:25}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={Component_Icon} style={{height:25,width:25}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={Group_Icon} style={{height:25,width:25}}/>
      </TouchableOpacity>

       </View>

}
<ScrollView>
<View style={{height:500}}>

  {/* //1 */}
      <View>
<View style={styles.thirdCard}>
<View style={styles.childiv}></View>
<Text style={{
    position: 'absolute',
    width: 96.68,
    height: 37,
    left: 28.51,
    top: 104,
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
    height: 37,
    left: 28.51,
    top: 104,
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
}}/><Image source={White_Shark} style={{
  position: 'absolute',
  width: '40%',
  height: '80%',
  left: '30%',
  marginLeft: -3.63 + 1.36,
  top: '35%',
  marginTop: -3.66 - 0.35
}}/><Image source={Diamond} style={{
  position: 'absolute',
  width: 15.77,
  height: 15.77,
  left: '67.5%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
<Image source={TREE} style={{
  position: 'absolute',
  width: 15.77,
  height: '55%',
  left: '83%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
</View>  
<Text style={{
    position: 'absolute',
    width: 96.68,
    height: 37,
    left: 21,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View> 
</View>
{/* //2 */}
<View>
  <View style={{
    position: 'absolute',
    width: 131.69,
    height: 230,
    left: 227,
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
      height: 37,
      left: 27.51,
      top: 104,
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
    left: 217,
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
      height: 37,
      left: 28.51,
      top: 104,
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
    left: 207,
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
}}/><Image source={White_Shark} style={{
  position: 'absolute',
  width: '40%',
  height: '80%',
  left: '30%',
  marginLeft: -3.63 + 1.36,
  top: '35%',
  marginTop: -3.66 - 0.35
}}/><Image source={Diamond} style={{
  position: 'absolute',
  width: 15.77,
  height: 15.77,
  left: '67.5%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
<Image source={TREE} style={{
  position: 'absolute',
  width: 15.77,
  height: '55%',
  left: '83%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
    </View>
      <Text style={{
        position: 'absolute',
        width: 96.68,
        height: 37,
        left: 21,
        top: 104,
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
<View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 40,
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
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 30,
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
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 20,
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
}}/><Image source={White_Shark} style={{
  position: 'absolute',
  width: '40%',
  height: '80%',
  left: '30%',
  marginLeft: -3.63 + 1.36,
  top: '35%',
  marginTop: -3.66 - 0.35
}}/><Image source={Diamond} style={{
  position: 'absolute',
  width: 15.77,
  height: 15.77,
  left: '67.5%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
<Image source={TREE} style={{
  position: 'absolute',
  width: 15.77,
  height: '55%',
  left: '83%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
</View>
  <Text style={{
    position: 'absolute',
    width: 96.68,
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View> 
</View>
{/* //4 */}
<View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 227,
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
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 217,
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
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View>

<View style={{    position: 'absolute',
width: 131.69,
height: 230,
left: 207,
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
}}/><Image source={White_Shark} style={{
  position: 'absolute',
  width: '40%',
  height: '80%',
  left: '30%',
  marginLeft: -3.63 + 1.36,
  top: '35%',
  marginTop: -3.66 - 0.35
}}/><Image source={Diamond} style={{
  position: 'absolute',
  width: 15.77,
  height: 15.77,
  left: '67.5%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
<Image source={TREE} style={{
  position: 'absolute',
  width: 15.77,
  height: '55%',
  left: '83%',
  marginLeft: -3.63 + 1.36,
  top: '40%',
  marginTop: -3.66 - 0.35
}}/>
</View>
  <Text style={{
    position: 'absolute',
    width: 96.68,
    height: 37,
    left: 28.51,
    top: 104,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontSize: 7,
    lineHeight: 11,
    
  }} >What are two things you can never eat for breakfast?
  What are two things you can never eat for breakfast?</Text>
</View> 
</View>


</View>

</ScrollView>
{/* //DOTS  */}
<View style={{width:'20%',flexDirection:'row',left:'23%',right:'23%',bottom:'1%'}}>
<View style={{
    // position:'absolute',
    height:10,width:10,backgroundColor:'#203870',   shadowColor: 'rgba(0, 0, 0, 0.3)',borderRadius:5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
       
        }}></View>
        <View style={{
    // position:'absolute',
    height:10,width:10,backgroundColor:'#117A9B', left:10,  shadowColor: 'rgba(0, 0, 0, 0.3)',borderRadius:5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
     
        }}></View>
        <View style={{
    // position:'absolute',
    height:10,width:10,backgroundColor:'#117A9B', left:20, shadowColor: 'rgba(0, 0, 0, 0.3)',borderRadius:5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
       
        }}></View></View>
    </View>
  );
};
export default Flashcard;

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
  thirdCard:{
    position: 'absolute',
width: 131.69,
height: 230,
left: 40,
top: 8,
color:'black',
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
  secondCard:{
    position: 'absolute',
width: 131.69,
height: 230,
left: 30,
top: 4,
color:'black',
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
  firstCard:{
    // borderRadius: 3.66826,
    position: 'absolute',
width: 131.69,
height: 230,
left: 20,
top: 0,
color:'black',
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
  childiv:{
    position: 'absolute',
    width: 131.69,
height: '12%',
borderRadius:3.6,
// left: 20,
// top: 75,
backgroundColor:'#B08368'
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
    paddingHorizontal:24,
    height: 40,
    elevation:10,
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

