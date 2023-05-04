// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// // Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../../Components/Atoms/Loader';
import {baseStyles, THEME_COLORS} from '../../Shell/Theme/css/base';
import axios from 'axios';
import { login } from '../../Utils/Store/Actions/auth';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../Utils/Store/Actions/type';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';

const LoginScreen = ({navigation,props}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const disptach=useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    const  dataToSend = {
      userName: userEmail,
       password: userPassword};
      disptach (login(dataToSend));
      AUTH.LOGIN_PREFIX?
      navigation.navigate("App","HomeScreen"):
      Alert.alert("Please Enter a valid Email or Password")
  
  };

  return (
    <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
       <AppHeader
          text={'Log In'}
          onBackPress={() => navigation.goBack()}

          backgroundLight
          showBack
        />
      <Loader loading={loading} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          //justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <Text style={[baseStyles.mT2_5x,baseStyles.mH2_5x,{color:'#000'}]}>{" "}Email</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter email or phone number" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <Text style={[baseStyles.mT1_25x,baseStyles.mH2_5x,{color:'#000'}]}>{" "}Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
             
            </View>
            <Text onPress={()=>navigation.navigate('ForgetPassword')} style={[{color:'#6750A4',alignSelf:'flex-end',marginHorizontal:30,fontSize:12,top:-5}]}>Forgot Passwrod?</Text>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle}>
              Don't have an account?{' '}
              <Text
                style={[
                  styles.registerTextStyle,
                  {color: '#6750A4'},
                ]}
                onPress={() => navigation.navigate('RegisterScreen')}>
                Sign Up
              </Text>
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

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
    marginHorizontal:20,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: THEME_COLORS.white,
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: '#117A9B',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    alignSelf:'center',
    marginBottom: 20,
    width:'50%'
  },
  buttonTextStyle: {
    color: '#117A9B',
    paddingVertical: 10,
    fontSize: 16,
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











function dispatch(arg0: (dispatch: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
// import React, {useState, createRef, useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Alert,
// } from 'react-native';
// import * as Yup from 'yup';
// import {Formik} from 'formik';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Loader from '../../Components/Atoms/Loader';
// import {baseStyles, THEME_COLORS} from '../../Shell/Theme/css/base';
// import {login} from '../../Utils/Store/Actions/auth';
// import {Input, Button} from '@rneui/themed';

// const LoginScreen = ({navigation, props}) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
//   const [animating, setAnimating] = useState(true);

//   const passwordInputRef = createRef();
//   const dispatch = useDispatch();
//   const auth = useSelector(state => state.auth);

//   // const handleSubmitPress = () => {
//   //   if (auth.loading) {
//   //     return;
//   //   }
//   //   let requestBody = {
//   //     Email: userEmail,
//   //     Password: userPassword,
//   //   };

//   // };

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimating(false);
//       //Check if user_id is set or not
//       //If not then send for Authentication
//       //else send to Home Screen
//       let Check = AsyncStorage.getItem('userName');
//       console.log('Check', Check);
//     }, 5000);
//   }, []);
//   const handleLogin = async (userName, password) => {
//     setLoading(true);
//     let userProfile = await AsyncStorage.getItem('userData');
//     userProfile = JSON.parse(userProfile);

//     userName == userProfile.userName && password == userProfile.password
//       ? navigation.navigate('HomeScreen')
//       : Alert.alert('User name invalid ');
//     setLoading(false);
//   };

//   const handleSubmit = (values: any) => {
//     handleLogin(values.userName, values.password);
//   };

//   return (
//     <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
//       <Loader loading={loading} />
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           flex: 1,
//           //justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View style={styles.loginContainer}>
//           <Formik
//             initialValues={{userName: '', password: ''}}
//             validationSchema={Yup.object({
//               userName: Yup.string().required(),
//               password: Yup.string().min(6).required(),
//             })}
//             onSubmit={values => handleSubmit(values)}>
//             {({handleChange, errors, handleBlur, handleSubmit, values}) => (
//               <View>
//                 <Input
//                   style={styles.inputStyle}
//                   placeholder="Enter your Name"
//                   //style={{fontSize: 16}}
//                   placeholderTextColor={THEME_COLORS.GrayDark}
//                   inputContainerStyle={[styles.input, {marginTop: 30}]}
//                   onChangeText={handleChange('userName')}
//                   onBlur={handleBlur('userName')}
//                   value={values.userName}
//                   errorMessage={errors.userName}
//                 />
//                 <Input
//                   placeholder="Enter your password"
//                   // leftIcon={
//                   //   <Ionicons
//                   //     name={showPassword ? 'eye' : 'eye-off'}
//                   //     size={24}
//                   //     color={THEME_COLORS.Primary}
//                   //     onPress={() => setShowPassword(state => !state)}
//                   //   />
//                   // }
//                   // style={{fontSize: 16}}
//                   style={styles.inputStyle}
//                   placeholderTextColor={THEME_COLORS.GrayDark}
//                   inputContainerStyle={[styles.input]}
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   errorMessage={errors.password}
//                   secureTextEntry={!showPassword}
//                 />
//                 <Button
//                   title={'Sign In'}
//                   buttonStyle={styles.buttonStyle}
//                   onPress={handleSubmit}
//                   loading={loading}
//                 />
//               </View>
//             )}
//           </Formik>
//           <Text style={styles.registerTextStyle}>
//             Don't have an account?{' '}
//             <Text
//               style={[styles.registerTextStyle, {color: THEME_COLORS.primary}]}
//               onPress={() => navigation.navigate('RegisterScreen')}>
//               Register
//             </Text>
//           </Text>
//         </View>

//         {/* <View>
//           <KeyboardAvoidingView enabled>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserEmail => setUserEmail(UserEmail)}
//                 placeholder="Enter Email" //dummy@abc.com
//                 placeholderTextColor="#8b9cb5"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 returnKeyType="next"
//                 onSubmitEditing={() =>
//                   passwordInputRef.current && passwordInputRef.current.focus()
//                 }
//                 underlineColorAndroid="#f000"
//                 blurOnSubmit={false}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserPassword => setUserPassword(UserPassword)}
//                 placeholder="Enter Password" //12345
//                 placeholderTextColor="#8b9cb5"
//                 keyboardType="default"
//                 ref={passwordInputRef}
//                 onSubmitEditing={Keyboard.dismiss}
//                 blurOnSubmit={false}
//                 secureTextEntry={true}
//                 underlineColorAndroid="#f000"
//                 returnKeyType="next"
//               />
//             </View>
//             {errortext != '' ? (
//               <Text style={styles.errorTextStyle}>{errortext}</Text>
//             ) : null}
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={handleSubmitPress}>
//               <Text style={styles.buttonTextStyle}>Sign In</Text>
//             </TouchableOpacity>
//             <Text style={styles.registerTextStyle}>
//               Don't have an account?{' '}
//               <Text
//                 style={[
//                   styles.registerTextStyle,
//                   {color: THEME_COLORS.primary},
//                 ]}
//                 onPress={() => navigation.navigate('RegisterScreen')}>
//                 Register
//               </Text>
//             </Text>
//           </KeyboardAvoidingView>
//         </View> */}
//       </ScrollView>
//     </View>
//   );
// };
// export default LoginScreen;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#307ecc',
//     alignContent: 'center',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: THEME_COLORS.primary,
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 25,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     // flex: 1,
//     width: '100%',
//     color: 'black',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#dadae8',
//   },
//   registerTextStyle: {
//     color: THEME_COLORS.black,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });

