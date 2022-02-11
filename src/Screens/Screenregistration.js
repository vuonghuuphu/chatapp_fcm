import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from '../Style';
import {auth} from '../Firebase';

export default function Screenregistration(props) {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [Pass1, setPass1] = useState('');

  const regist = async () => {
    if (Pass === Pass1) {
      auth
        .createUserWithEmailAndPassword(Email, Pass)
        .then(useCredentials => {
          const user = useCredentials.user;
          console.log(user.email);
          props.navigation.replace('Login');
        })
        .catch(erro => alert('Tài khoản đã tồn tại !'));
    } else {
      alert('Mật khẩu không khớp !');
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{height: '100%', justifyContent: 'space-between'}}
        source={{
          uri: 'https://www.fonewalls.com/wp-content/uploads/Melanie-Colors-Gradient-Wallpaper.jpg',
        }}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.push('Login')}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../Img/left.png')}
            />
          </TouchableOpacity>


          <View style={Style.LogoLogin}>
            <TextInput style={Style.FromLogin} placeholder="Nhập email"
                            onChangeText={text => setEmail(text)}
                            value={Email}
            />

            {/* <TextInput
                style={[Style.FromLogin,{marginTop:20}]}
                placeholder="Nhập tên tài khoản"
                /> */}

            <TextInput
              style={[Style.FromLogin, {marginTop: 20}]}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              onChangeText={text => setPass(text)}
              value={Pass}
              keyboardType='number-pad'
            />

            <TextInput
              style={[Style.FromLogin, {marginTop: 20}]}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry
              onChangeText={text => setPass1(text)}
              value={Pass1}
              keyboardType='number-pad'
            />
          </View>

          <View style={Style.FrombtnLogin}>
            <TouchableOpacity
              style={[Style.btnLogin, {borderRadius: 20}]}
              onPress={() => regist()}>
              <Text style={Style.TextbtnLogin}>Đăng kí tài khoản</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
