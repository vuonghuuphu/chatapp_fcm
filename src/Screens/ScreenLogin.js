import React,{useState,useEffect} from "react";
import { View ,Text, TouchableOpacity, Image, TextInput, ImageBackground, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "../Style";
import {auth} from '../Firebase';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default function ScreenLogin (props){

  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

    useEffect(() => {
        Loginsave();
      const unsud = auth.onAuthStateChanged(user=>{
           if(user){
            props.navigation.push("Menu"); 
           }
       })
       return unsud
    }, [])


    const Loginsave = async() => {
        let getaccount = JSON.parse( await AsyncStorage.getItem("account"));
        console.log(getaccount.email)  
        if(getaccount.email != ""){
            auth.signInWithEmailAndPassword(getaccount.email,getaccount.pass)
            .then(useCredentials => {
                const user = useCredentials.user;
                save_account();
            })
            .catch(erro => alert("Tài khoản hoặc mật khẩu không đúng !"))
            console.log(" da luu")
        }else{
            console.log(getaccount.email)  
        }
    }

  const Login = async() => {
    auth.signInWithEmailAndPassword(Email,Pass)
    .then(useCredentials => {
        const user = useCredentials.user;
        save_account();
    })
    .catch(erro => alert("Tài khoản hoặc mật khẩu không đúng !"))
  }

   const save_account = async() => {
    await AsyncStorage.setItem('account', JSON.stringify({
        email : Email,
        pass: Pass
    }));
   }  

    return(
        <SafeAreaView>
            
            <ImageBackground
            style={{height:"100%",justifyContent:'space-between'}}
            source={{uri : "https://www.fonewalls.com/wp-content/uploads/Melanie-Colors-Gradient-Wallpaper.jpg"}}
            >
            <View>
            <View style={Style.LogoLogin}>
                <Image
                style={{width:"60%",height:240}}
                source={require('../Img/chat.png')}
                /> 
            </View>

            
            <View style={Style.LogoLogin}>
                <TextInput
                style={Style.FromLogin}
                placeholder="Nhập email"
                onChangeText={text => setEmail(text)}
                value={Email}
                />

                <TextInput
                style={[Style.FromLogin,{marginTop:20}]}
                placeholder="Nhập mật khẩu"
                onChangeText={text => setPass(text)}
                secureTextEntry
                keyboardType="number-pad"
                value={Pass}
                />

            </View>

            <View style={Style.FrombtnLogin}>
                
                <TouchableOpacity style={[Style.btnLogin,{borderRadius:20}]}
                // onPress={()=>props.navigation.push("Menu")}
                onPress={()=>Login()}
                >
                    <Text style={Style.TextbtnLogin}>Đăng nhập</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image
                style={{width:50,height:50}}
                source={require('../Img/fingerprint-scan2.png')}
                /> 
                </TouchableOpacity>
            </View></View>

            <View style={{alignItems:"center",margin:20}}>
                <TouchableOpacity
                onPress={()=>props.navigation.push('registration')}
                >
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Đăng kí tài khoản</Text>
 </TouchableOpacity>
 </View>

            </ImageBackground>
            
        </SafeAreaView>
    );
}