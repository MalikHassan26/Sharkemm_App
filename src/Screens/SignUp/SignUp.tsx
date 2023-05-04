
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // Example of Splash, Login and Sign Up in React Native
// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  FlatList,

} from 'react-native';
import {FONTS, THEME_COLORS, baseStyles} from '../../Shell/Theme/css/base';
import { useDispatch } from 'react-redux';
import {register} from '../../Utils/Store/Actions/auth'
import {AUTH, LOADER, USER} from '../../Utils/Store/Actions/type';
import Toast from 'react-native-easy-toast';
import RadioForm from 'react-native-simple-radio-button';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';

import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../Shell/Theme/css/base';

const Academic_status=[
  {
    id:1,
    title: 'MBBS',
  },
  {
    id:2,
    title: 'MDCAT',
  }
]

const RegisterScreen = props => {
  var studentstatus = [
    {label: 'Fresher', value: 'Fresher' },
    {label: 'Repeater', value: 'Repeater' },

  ];
  // const Academic_status = ["MBBS", "MDCAT"]

  const data = [
    { label: 'male',value:'male' },
    { label: 'female',value:'female'},
    { label: 'others' ,value:'others'},
  ];

  const [userfirstName, setUserFirstName] = useState('');
  const [userlastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userDOB, setDOB] = useState('');
  const [userSS, setSS] = useState('');
  const [userBID, setBID] = useState('');
  const [usergender, setUsergender] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const  [isChecked,setIschecked]= useState(0);
  const [valueofAcademicstatus,setvalueofAcademicstatus]=useState('')
  

  const userfirstNameRef = createRef();
  const userlastNameRef = createRef();
  const userDOBRef = createRef();
  const userSSRef = createRef();
  const userBidRef = createRef();
  const userNameInputRef = createRef();
  const genderInputRef = createRef();
  const passwordInputRef = createRef();
  const disptach=useDispatch();

   const handleSubmitButton = async() => {
    setErrortext('');
    if (!userfirstName) {
      alert('Please fill user first name');
      return;
    }
    if (!userlastName) {
      alert('Please fill user last name');
      return;
    }
    if (!userDOB) {
      alert('Please fill date of birth');
      return;
    }
    if (!userSS) {
      alert('Please fill student ');
      return;
    }
    if (!userBID) {
      alert('Please fill user BID');
      return;
    }
    if (!userName) {
      alert('Please Enter Email address/phone number');
      return;
    }

    if (!usergender) {
      alert('Please fill gender');
      return;
    }

    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    // Show Loader
    // setLoading(true);
    const dataToSend = {
      firstName: userfirstName,
      lastName: userlastName,
      userName: userName,
      password: userPassword,
      gender: usergender,
      dateOfBirth: userDOB,
      studentStatus: userSS,
      boardId: userBID,
    };
    disptach (register(dataToSend))
   
  await AUTH.REGISTER_SUCCESS && props.navigation.navigate('LoginScreen')
 
  };


  const renderItem = (data) => {
    return (
      <TouchableOpacity
        //  onPress={() => {}
        style={[
          baseStyles.itemContainer,
          //baseStyles.pV2_5x,
          { justifyContent: "space-between", flexDirection: "row",backgroundColor:'#fff' },
        ]}
        activeOpacity={0.8}
      >
        <View style={[baseStyles.mH2_5x,{flex:.9}]}>
          <Text
            style={[
              { color: THEME_COLORS.primary, fontFamily: FONTS.semiBold },
            ]}
          >
          {data.item.title}
          </Text>
        </View>
        
      </TouchableOpacity>
    );
  };








  return (
    <View style={[baseStyles.flex1,{backgroundColor:'#fff',marginBottom:100}]}>
       
       <AppHeader
          text={'Create Account'}
          onBackPress={() => props.navigation.goBack()}
          backgroundLight
          showBack
        />
      
   <ScrollView
   nestedScrollEnabled={true}
      scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
         // justifyContent: 'center',
         alignContent: 'center',
        //  minHeight:'auto',
        //  marginBottom:300,
        
         //flex:1,        
          // maxHeight:'auto',
        
        }}> 
        

        <KeyboardAvoidingView enabled>

        <View style={{flexDirection:'row',marginTop:20,flex:1,    backgroundColor: THEME_COLORS.white,}}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={{color:'#000'}}>First Name</Text>
            </View>
        <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
           <Text style={{color:'#000'}}>Last name</Text>
           </View>
          </View>
          <View style={{flexDirection:'row'}}>  
            <View style={styles.SectionStyle}>
            <TextInput
             autoFocus={true}
              style={styles.inputStyle}
              onChangeText={userfirstName => setUserFirstName(userfirstName)}
              underlineColorAndroid="#f000"
              placeholder="Enter first name"
              placeholderTextColor="#8b9cb5"
              ref={userfirstNameRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                userlastNameRef.current && userlastNameRef.current.focus()
              }
              blurOnSubmit={false}

            />
            </View>
            <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={userlastName => setUserLastName(userlastName)}
              underlineColorAndroid="#f000"
              placeholder="Enter last name"
              placeholderTextColor="#8b9cb5"
              ref={userlastNameRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                userNameInputRef.current && userNameInputRef.current.focus()
              }
        
              blurOnSubmit={false}
            />
              {/* {!userlastName && <Text style={{color:'red',fontSize:12}}>Last Name is required *</Text>} */}
          </View>
          </View>
        


          <View style={{flexDirection:'row',marginTop:20}}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={{color:'#000'}}>Email</Text>
            </View>
          </View>



          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email or phone number"
              ref={userNameInputRef}
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType='email-address'
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={{flexDirection:'row',marginTop:20}}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={{color:'#000'}}>Password</Text>
            </View>
          </View>


          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                genderInputRef.current && genderInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>


        

          <View style={[baseStyles.mT2_5x,{flexDirection:'row',}]}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={{color:'#000'}}>Date of Birth</Text>
            </View>
          </View>

          {/* <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={userDOB => setDOB(userDOB)}
              underlineColorAndroid="#f000"
              placeholder="Enter date of birth"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType='numeric'
              ref={userDOBRef}
              returnKeyType="next"
              // onSubmitEditing={Keyboard.dismiss}
              onSubmitEditing={() =>
                userSSRef.current && userSSRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View> */}
        <View style={{flexDirection:'row',flex:1}}>
         <View style={styles.SectionStyle}>
         <SelectDropdown  
         buttonStyle={[{ width: '100%',
         height: 40,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',fontSize:12}}
         data={['1','2','3','4','5','6','7','8','9','10']}
         defaultButtonText={'Day'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
         }}
         rowStyle={{padding:12}}
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
       <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 40,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',fontSize:12}}
         data={['January','Feb','March','April','March','May','June','July','August','September','October','November','December']}
         defaultButtonText={'Month'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
         }}
         rowStyle={{padding:12}}
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
       <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 40,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',fontSize:12}}
         data={['1994','1995','1996','1997','1997','1998','1999','2000','2001','2002']}
         defaultButtonText={'Year'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
         }}
         rowStyle={{padding:12,}}
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
         </View> 
         
         <View style={[styles.SectionStyle,baseStyles.mT2_5x,{justifyContent:'space-between',}]}>
            <RadioForm
            formHorizontal={true}
            radio_props={data}
            // initial={0}
            labelStyle={{fontSize:12, color:THEME_COLORS.black,left:-5}}
            labelHorizontal={true}
            buttonColor={'#203870'}
            buttonInnerColor={'#203870'}
            animation={true}
            onPress={(Usergender) => setUsergender(Usergender)}
            buttonSize={10}
      
            buttonOuterSize={20}
            buttonStyle={{backgroundColor:'grey'}}
            buttonWrapStyle={{marginLeft: 10}}
          />
          </View>

         <View style={[baseStyles.flex1x,baseStyles.flexRow]}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={{color:COLORS.lightBlack}}>Academic Status</Text>
            </View>
          </View>

          <View style={styles.SectionStyle}>
          <SelectDropdown
          buttonStyle={[{ width: '100%',
          height: 40,
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#dadae8',}]}
          
          rowTextStyle={{textAlign:'left',fontSize:12}}
          buttonTextStyle={{textAlign:'left',fontSize:12}}
          data={Academic_status.map((data)=>{
            return(
            data.title)
          })}
          defaultButtonText={'Select'}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          rowStyle={{padding:12,width:'95%'}}
          dropdownStyle=
         {{backgroundColor:'#fff',width:'95%'}}
          onSelect={(selectedItem, index,) => {
            setvalueofAcademicstatus(selectedItem)
             console.log("onSelect",selectedItem, index)
            
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />

          </View> 

          {/* ////////////////MDCAT Select///////////// */}


          {valueofAcademicstatus == 'MDCAT' ?
             <View>
            <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
             <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
               <Text style={{color:COLORS.lightBlack}}>Board of Education</Text>
               </View>
             </View>
   
             <View style={styles.SectionStyle}>
             <SelectDropdown
             buttonStyle={[{ width: '100%',
             height: 40,
             backgroundColor: '#FFF',
             borderWidth: 1,
             borderRadius: 10,
             borderColor: '#dadae8',}]}
             rowTextStyle={{textAlign:'left',fontSize:12}}
             buttonTextStyle={{textAlign:'left',fontSize:12}}
             data={['Lahore','Islamabad','Kasur']}
             defaultButtonText={'Select'}
             renderDropdownIcon={isOpened => {
               return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
             }}
             rowStyle={{padding:12,width:'95%'}}
             dropdownStyle=
            {{backgroundColor:'#fff',width:'95%'}}
             onSelect={(selectedItem, index) => {
               console.log(selectedItem, index)
             }}
             buttonTextAfterSelection={(selectedItem, index) => {
               return selectedItem
             }}
             rowTextForSelection={(item, index) => {
               return item
             }}
           />
          </View> 
          <View style={[styles.SectionStyle,baseStyles.mT2_5x]}>
           <RadioForm
            formHorizontal={true}
            radio_props={studentstatus}
            // initial={data}
            labelStyle={{fontSize:12, color:THEME_COLORS.black,left:-5}}
            labelHorizontal={true}
            buttonColor={THEME_COLORS.primary}
            buttonInnerColor={THEME_COLORS.primary}
            animation={true}
            buttonSize={10}
            buttonOuterSize={20}
            buttonStyle={{margin:40}}
            
            onPress={(userSS) => setSS(userSS)}
          /> 
          </View>
             </View>
         : <View>
        <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
         <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
           <Text style={{color:COLORS.lightBlack}}>College / University</Text>
           </View>
         </View>
         <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 40,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',fontSize:12}}
         data={['Punjab University','Lahore College for women univerity','NUMS univeristy','NUML university','Iqra univeristy']}
         defaultButtonText={'Select'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
         }}
         rowStyle={{padding:12,width:'95%'}}
         dropdownStyle=
        {{backgroundColor:'#fff',width:'95%'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />

         </View> 
  

         <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
         <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
           <Text style={{color:COLORS.lightBlack}}>Year of Study</Text>
           </View>
         </View>

         <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 40,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',fontSize:12}}
         data={['1999','2000','2001','2002','2003','2004','2005','2006','2007']}
         defaultButtonText={'Select'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
         }}
         rowStyle={{padding:12,width:'95%'}}
         dropdownStyle=
        {{backgroundColor:'#fff',width:'95%'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />

         </View> 
         </View>}
            


          {/* //////////////////////End MDCAT Select///////// */}
           

          
          {/* <View style={styles.SectionStyle}>
         <TextInput
              style={styles.inputStyle}
              onChangeText={userBID => setBID(userBID)}
              underlineColorAndroid="#f000"
              placeholder="Enter userId"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType="numeric"
              ref={userBidRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            /> 
           
          </View> */}
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
        <View style={{flexDirection:'row',alignSelf:'center',marginBottom:30}}>
        <Text style={{textAlign:'center',color:'#000'}}>I am already a member.</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')}>
          <Text style={{color:'#6750A4'}}>{" "}Sign In</Text>
        </TouchableOpacity>
        </View>
      </ScrollView> 
   

   
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    height: 40,
    flex:1,
    marginHorizontal:10,
    justifyContent:'space-between',
    backgroundColor: THEME_COLORS.white,
  
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
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
