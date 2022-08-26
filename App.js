import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, SectionList, Alert, TouchableOpacity, Pressable,} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';



const Welcome = ({navigation}) => {


  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(

<View style = { styles.container}>

<Text style = {styles.gastracker}>
  Gas Tracker
</Text>

      <View style ={styles.Homepage}>
      <Text style = {styles.TextContent}> UserName</Text>
      <TextInput style={styles.inputContent} 
      onChangeText={newText => setUsername(newText)}
        defaultValue=""
        />

      <Text style = {styles.TextContent}> Password</Text>
        <TextInput style={styles.inputContent}
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
        defaultValue=""
        />



<View style = {styles.buttonCointainerHome}> 
        


<Pressable style={styles.inputContent} 
onPress={()=> 
  
  { if(Username == '' || password == ''){
  Alert.alert('Error', 'Check Username or Password !')
}

else {
  navigation.navigate('Dashboard')
}



}}>
<Text style={styles.buttonText}>LOG IN</Text>
</Pressable>

<Pressable style={styles.inputContent} 
onPress={()=> navigation.navigate('Reg')}>
<Text style={styles.buttonText}>REGISTER</Text>
</Pressable>

<Pressable style={styles.inputContent} 
onPress={()=> navigation.navigate('Reset')}>
<Text style={styles.buttonText}>RESET PASSWORD</Text>
</Pressable>

    </View> 
    
          
</View>
 </View>
  );
}

const Register = ({navigation}) => {


  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [repassword, setRepassword] = useState('');
  return(

<View style = { styles.container}>

<Text style = {styles.gastracker}>
  Gas Tracker
</Text>

      <View style ={styles.Register}>
      <Text style = {styles.TextContent}> UserName</Text>
      <TextInput style={styles.inputContent} 
      onChangeText={newText => setUsername(newText)}
        defaultValue=""
        />

      <Text style = {styles.TextContent}> Mobile NO</Text>
        <TextInput style={styles.inputContent}
        keyboardType = 'numeric'
        onChangeText={newText => setMobile(newText)}
        defaultValue=""
        />

<Text style = {styles.TextContent}> Password</Text>
        <TextInput style={styles.inputContent}
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
        defaultValue=""
        />
        <Text style = {styles.TextContent}> Re - Password</Text>
        <TextInput style={styles.inputContent}
        secureTextEntry={true}
        onChangeText={newText => setRepassword(newText)}
        defaultValue=""
        />





<View style = {styles.buttonCointainerREG}> 
        


<Pressable style={styles.inputContent} 
onPress={()=> 
  
  { if(Username == '' || password == '' || repassword == '' || mobile == '') {
  Alert.alert('Error', 'All Inputs are Required !');
}
else if (repassword !=  password ) {
  Alert.alert('Error', 'Password and Re - Password must be same !');
}

else {
  Alert.alert('Success', 'Registration Complete. You will be redirected to Log in page. ', 
  [{text: 'OK', onPress : () =>navigation.navigate('Welcome Screen')}]);
  
}



}}>
<Text style={styles.buttonText}>REGISTER</Text>
</Pressable>



<Pressable style={styles.inputContent} 
onPress={()=> navigation.navigate('Welcome Screen')}>
<Text style={styles.buttonText}>BACK</Text>
</Pressable>

    </View> 
    
          
</View>
 </View>
  );
}

const Reset = ({navigation}) => {


  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [repassword, setRepassword] = useState('');
  return(

<View style = { styles.container}>

<Text style = {styles.gastracker}>
  Gas Tracker
</Text>

      <View style ={styles.Register}>
      <Text style = {styles.TextContent}> UserName</Text>
      <TextInput style={styles.inputContent} 
      onChangeText={newText => setUsername(newText)}
        defaultValue=""
        />

      <Text style = {styles.TextContent}> Mobile NO</Text>
        <TextInput style={styles.inputContent}
        keyboardType = 'numeric'
        onChangeText={newText => setMobile(newText)}
        defaultValue=""
        />

<Text style = {styles.TextContent}> Password</Text>
        <TextInput style={styles.inputContent}
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
        defaultValue=""
        />
        <Text style = {styles.TextContent}> Re - Password</Text>
        <TextInput style={styles.inputContent}
        secureTextEntry={true}
        onChangeText={newText => setRepassword(newText)}
        defaultValue=""
        />





<View style = {styles.buttonCointainerREG}> 
        


<Pressable style={styles.inputContent} 
onPress={()=> 
  
  { if(Username == '' || password == '' || repassword == '' || mobile == '') {
  Alert.alert('Error', 'All Inputs are Required !');
}
else if (repassword !=  password ) {
  Alert.alert('Error', 'Password and Re - Password must be same !');
}

else {
  Alert.alert('Success', 'Password Reset Complete. You will be redirected to Log in page. ', 
  [{text: 'OK', onPress : () =>navigation.navigate('Welcome Screen')}]);
  
}



}}>
<Text style={styles.buttonText}>RESET PASSWORD</Text>
</Pressable>



<Pressable style={styles.inputContent} 
onPress={()=> navigation.navigate('Welcome Screen')}>
<Text style={styles.buttonText}>BACK</Text>
</Pressable>

    </View> 
    
          
</View>
 </View>
  );
}


const Dashboard =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      Gas Tracker
    </Text>
    
    
    
    <View style ={styles.alignCenter}>
    <View style = {styles.buttonCointainerDash}> 
            
    
    
    <Pressable style={styles.inputContent}
    onPress={() => navigation.navigate('Vendor')} >
    <Text style={styles.buttonText}>LP GAS</Text>
    </Pressable>
    
    <Pressable style={styles.inputContent} 
    onPress={() => Alert.alert("Error", "Live queue data can't be retrieved. Please try again later !")}>
    <Text style={styles.buttonText}>Live Queue Map</Text>
    </Pressable>
    
    <Pressable style={styles.inputContent} 
onPress={()=> navigation.navigate('Notifications')}>
      <Text style={styles.buttonText}>Notifications</Text>
    </Pressable>
    
   
              
    
            
    </View> 
          
        
    </View>
<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Welcome Screen')}>
    <Text style={styles.buttonText}>LOGOUT</Text>
    </Pressable>
    </View>
    </View>
     
      );
}


const Vendor =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECT YOUR VENDOR
    </Text>
    </View>
    
    
    <View style ={styles.alignCenter}>
    <View style = {styles.buttonCointainerVendor1}> 
            
    
    
    <Pressable style={styles.inputContent} >
    <Text style={styles.buttonText}
    onPress={() => navigation.navigate('Litro')}
    >LITRO GAS</Text>
    </Pressable>
    
    <Pressable style={styles.inputContent} >
    
    <Text style={styles.buttonText}
    onPress={() => navigation.navigate('Laugfs')}
    >LAUGFS GAS</Text>
    </Pressable>
    
            
    </View> 
          
        
    </View>
<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Dashboard')}>
    <Text style={styles.buttonText2}>BACK TO MAIN-MENU</Text>
    </Pressable>
    </View>
    </View>
     
      );
}

const Litro =({navigation}) => {
  const[details, setDetails] = useState([

    {brand: 'AA', size: '', price: '', pic: ''}
  ]);


 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LITRO
    </Text>
    <Text style = {styles.TextHead2 }>
      AVAILABLE SIZES
    </Text>
    </View>
    
    
    <View style ={styles.alignCenter}>
    <View style = {styles.buttonCointainerVendor}> 
            
    
    
    <Pressable style={styles.inputContent} 
    onPress={() => navigation.navigate('Litro Details1')}>
    <Text style={styles.buttonText}>5 KG</Text>
    </Pressable>
    
    <Pressable style={styles.inputContent}
    onPress={() => navigation.navigate('Litro Details2')} >
    <Text style={styles.buttonText}>12.5 KG</Text>
    </Pressable>

    <Pressable style={styles.inputContent}
    onPress={() => navigation.navigate('Litro Details3')} >
    <Text style={styles.buttonText}>37.5 KG </Text>
    </Pressable>
    {/* <Text > Brand: {details.brand}</Text>
        <Text > Size: {details.size}</Text>
        <Text > price: {details.price}</Text>
        <Image source={{
          width: 300,
          height: 300,
          uri: details.pic }} /> */}
        
            
    </View>  


    </View>
<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Vendor')}>
    <Text style={styles.buttonText2}>BACK TO SELECT VENDOR</Text>
    </Pressable>
    </View>
    </View>
     
      );
}

const Laugfs =({navigation}) => {
  const[details, setDetails] = useState([

    {brand: 'AA', size: '', price: '', pic: ''}
  ]);


 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LAUGFS
    </Text>
    <Text style = {styles.TextHead2 }>
      AVAILABLE SIZES
    </Text>
    </View>
    
    
    <View style ={styles.alignCenter}>
    <View style = {styles.buttonCointainerVendor}> 
            
    
    
    <Pressable style={styles.inputContent} 
    onPress={() => navigation.navigate('Laugfs Details1')}>
    <Text style={styles.buttonText}>5 KG</Text>
    </Pressable>
    
    <Pressable style={styles.inputContent}
    onPress={() => navigation.navigate('Laugfs Details2')} >
    <Text style={styles.buttonText}>12.5 KG</Text>
    </Pressable>

    <Pressable style={styles.inputContent}
    onPress={() => navigation.navigate('Laugfs Details3')} >
    <Text style={styles.buttonText}>37.5 KG </Text>
    </Pressable>
    {/* <Text > Brand: {details.brand}</Text>
        <Text > Size: {details.size}</Text>
        <Text > price: {details.price}</Text>
        <Image source={{
          width: 300,
          height: 300,
          uri: details.pic }} /> */}
        
            
    </View>  


    </View>
<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Vendor')}>
    <Text style={styles.buttonText2}>BACK TO SELECT VENDOR</Text>
    </Pressable>
    </View>
    </View>
     
      );
}

const LitroDetails1 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LITRO
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 200,
    
      uri: 'http://www.jack56.yolasite.com/resources/1.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 1944.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Litro')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}


const LitroDetails2 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LITRO
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 12.5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 200,
    
      uri: 'http://www.jack56.yolasite.com/resources/2.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 4860.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Litro')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}

const LitroDetails3 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LITRO
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 37.5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 100,
    
      uri: 'http://www.jack56.yolasite.com/resources/3.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 14580.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Litro')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}


const LaugfsDetails1 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LAUGFS
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 200,
    
      uri: 'http://www.jack56.yolasite.com/resources/4.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 1944.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Laugfs')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}


const LaugfsDetails2 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LAUGFS
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 12.5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 200,
    
      uri: 'http://www.jack56.yolasite.com/resources/5.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 4860.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Laugfs')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}

const LaugfsDetails3 =({navigation}) => {
 
  return(

    <View style = { styles.container}>
    
    <Text style = {styles.gastracker}>
      LP GAS
    </Text>
    
<View style = {styles.alignCenter2}>
    <Text style = {styles.TextHead2}>
      SELECTED VENDOR : LAUGFS
    </Text>
    <Text style = {styles.TextHead2}>
      SELECTED SIZE : 37.5 KG
    </Text>
    
    </View>
    <View style = {styles.alignCenter2}>
    <Image source={{
      height: 300,
      width: 100,
    
      uri: 'http://www.jack56.yolasite.com/resources/3.png'

    }} />

    <Text style = {styles.price}>
      PRICE : RS 14580.00
    </Text>
    
    </View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={()=> navigation.navigate('Laugfs')}>
    <Text style={styles.buttonText2}>BACK TO SIZES</Text>
    </Pressable>
    </View>
    </View>
     
      );
}




const Notify =({navigation}) => {

  const [vendor, setVendor] = useState('0');
  const [size, setSize] = useState('0');
  const [distric, setDistric] = useState('0');
  const [city, setCity] = useState('0');
  return(

    <View style = { styles.container}>

    <View style = {styles.alignCenter3}>
   
    <Picker style = {styles.Picker}
  selectedValue={vendor}
  onValueChange={(itemValue, itemIndex) =>
    setVendor(itemValue)
  }>
     <Picker.Item label="- Select Vendor -" value="0" />
  <Picker.Item label="LITRO" value="litro" />
  <Picker.Item label="LAUGFS" value="laugfs" />
</Picker>


    <Picker style = {styles.Picker}
  selectedValue={size}
  onValueChange={(itemValue, itemIndex) =>
    setSize(itemValue)
  }>
    <Picker.Item label="- Select Size -" value="0" />
  <Picker.Item label="5KG" value="5" />
  <Picker.Item label="12.5KG" value="12.5" />
  <Picker.Item label="37.5KG" value="37.5" />
</Picker>


    <Picker style = {styles.Picker}
  selectedValue={distric}
  onValueChange={(itemValue, itemIndex) =>
    setDistric(itemValue)
  }>
    <Picker.Item label="- Select Distric -" value="0" />
  <Picker.Item label="Colombo" value="Colombo" />
<Picker.Item label="Gampaha" value="Gampaha" />
<Picker.Item label="Kalutara" value="Kalutara" />
<Picker.Item label="Kandy" value="Kandy" />
<Picker.Item label="Matale" value="Matale" />
<Picker.Item label="Nuwara Eliya" value="Nuwara Eliya" />
<Picker.Item label="Galle" value="Galle" />
<Picker.Item label="Matara" value="Matara" />
<Picker.Item label="Hambantota" value="Hambantota" />
<Picker.Item label="Jaffna" value="Jaffna" />
<Picker.Item label="Kilinochchi" value="Kilinochchi" />
<Picker.Item label="Mannar" value="Mannar" />
<Picker.Item label="Vavuniya" value="Vavuniya" />
<Picker.Item label="Mullaitivu" value="Mullaitivu" />
<Picker.Item label="Batticaloa" value="Batticaloa" />
<Picker.Item label="Ampara" value="Ampara" />
<Picker.Item label="Trincomalee" value="Trincomalee" />
<Picker.Item label="Kurunegala" value="Kurunegala" />
<Picker.Item label="Puttalam" value="Puttalam" />
<Picker.Item label="Anuradhapura" value="Anuradhapura" />
<Picker.Item label="Polonnaruwa" value="Polonnaruwa" />
<Picker.Item label="Badulla" value="Badulla" />
<Picker.Item label="Moneragala" value="Moneragala" />
<Picker.Item label="Ratnapura" value="Ratnapura" />
<Picker.Item label="Kegalle" value="Kegalle" />
</Picker>

<TextInput style={styles.inputContent} 
      onChangeText={newText => setCity(newText)}
        defaultValue=""
      placeholder = " - Enter City -"
        />


</View>

<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
    onPress={() => 
    {if (vendor == 0 || size == 0 || distric == 0 || city == 0){
      Alert.alert("Error", "Enter or select data from above")
    }
  
  else{
    Alert.alert("Success", "Your quary received. You will notify when stock received. You will be redirected to dashboard ",
    [{text: "OK", onPress:() => navigation.navigate('Dashboard'),}])
  }}
    
    
    }>
    <Text style={styles.buttonText2}>SEARCH</Text>
    </Pressable>
    </View>




<View style = {styles.alignCenter}>
    <Pressable style={styles.inputContent} 
     onPress={()=> navigation.navigate('Dashboard') }>
    <Text style={styles.buttonText2}>BACK TO DASHBOARD</Text>
    </Pressable>
    </View>
    </View>
     
      );
}






const Stack = createNativeStackNavigator();

const App=() => {

return (

<View style = { styles.container}>  
  
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name = "Welcome Screen" component={Welcome}  options={{ title: "Gas Tracker",backgroundColor: "red", headerTitleAlign: 'center' }}/>
    <Stack.Screen name = "Reg" component={Register}  options={{ headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Reset" component={Reset}  options={{ title: "Reset Password", headerTitleAlign: 'center' }} /> 
    <Stack.Screen name = "Dashboard" component={Dashboard}  options={{ headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Vendor" component={Vendor}  options={{ headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Litro" component={Litro}  options={{ headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Laugfs" component={Laugfs}  options={{ headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Notifications" component={Notify}  options={{ headerTitleAlign: 'center' }} /> 
    <Stack.Screen name = "Litro Details1" component={LitroDetails1}  options={{ title: "LITRO", headerTitleAlign: 'center' }} /> 
    <Stack.Screen name = "Litro Details2" component={LitroDetails2}  options={{ title: "LITRO", headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Litro Details3" component={LitroDetails3}  options={{ title: "LITRO", headerTitleAlign: 'center' }} /> 
    <Stack.Screen name = "Laugfs Details1" component={LaugfsDetails1}  options={{ title: "LAUGFS", headerTitleAlign: 'center' }} /> 
    <Stack.Screen name = "Laugfs Details2" component={LaugfsDetails2}  options={{ title: "LAUGFS", headerTitleAlign: 'center' }} />  
    <Stack.Screen name = "Laugfs Details3" component={LaugfsDetails3}  options={{ title: "LAUGFS", headerTitleAlign: 'center' }} /> 
  </Stack.Navigator>
</NavigationContainer>
</View>

);}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ca6821'
  },

  Homepage: {
    backgroundColor: 'Grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  Register: {
    backgroundColor: 'Grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  alignCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  alignCenter2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  alignCenter3: {
    height: 300,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  
  },
  price: {
    fontSize: 25,
    fontWeight: '900',
    marginTop:20,
  },

  gastracker: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 30,
    color: 'white',
  },

  buttonText: {
    padding: 10, 
    alignSelf: 'center',
     justifyContent: 'center',
      fontSize: 25,
      fontWeight: 'bold',
  },

  buttonText2: {
    padding: 10, 
    alignSelf: 'center',
     justifyContent: 'center',
      fontSize: 18,
      fontWeight: 'bold',
  },

  TextContent: {
    fontSize: 16,
    marginBottom: 2,
  },

  Picker: {
    fontSize: 16,
    marginBottom: 2,
    backgroundColor: '#D9D9D9',
    width:250,

  },

  TextHead: {
    fontSize: 20,
    fontWeight: '900',
  },

  TextHead2: {
    fontSize: 25,
    fontWeight: '900',
  },

  buttonCointainerHome: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
  },
  buttonCointainerREG: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
  },
  buttonCointainerDash: {
 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
    marginBottom: 120,
  },

  buttonCointainerVendor: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    marginBottom: 100,
  },

  buttonCointainerVendor1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    marginBottom: 130,
  },

  inputContent: {
  backgroundColor: '#D9D9D9',
  width: 250,
  height: 50,
  fontSize: 20,
  fontWeight: '800',
  },

  button: {
    backgroundColor: '#D9D9D9',
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 20,
    },

});

export default App;