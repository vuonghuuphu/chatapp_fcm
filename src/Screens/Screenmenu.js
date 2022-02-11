import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import Home from '../Home';
import ScreenMap from './ScreenMap';
import ScreenMess from './ScreenMess';
import ScreenLogin from './ScreenLogin';
import Screenregistration from './Screenregistration';
import Screencam from './ScreenCam';
import Styles from '../Style';
import {auth} from '../Firebase';

const Drawer = createDrawerNavigator();
function Menuapp(props) {
  const logout = async () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace('Login');
      })
      
  };

  return (
    <View>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Image
          style={Styles.sizelogoMenu}
          source={require('../Img/chat.png')}
        />
      </View>
      <TouchableOpacity
        style={Styles.Btnmenu}
        onPress={() => props.navigation.push('Map', {id: 0})}>
        <View style={Styles.fromitemMenu}>
          <Image
            style={Styles.iconitemMenu}
            source={require('../Img/phone.png')}
          />
          <Text style={Styles.TextbtnMenu}>Bản đồ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.Btnmenu}
        onPress={() => props.navigation.push('Camera')}>
        <View style={Styles.fromitemMenu}>
          <Image
            style={Styles.iconitemMenu}
            source={require('../Img/phone.png')}
          />
          <Text style={Styles.TextbtnMenu}>Chụp ảnh</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.Btnmenu}
        onPress={() => props.navigation.push('Mess')}>
        <View style={Styles.fromitemMenu}>
          <Image
            style={Styles.iconitemMenu}
            source={require('../Img/phone.png')}
          />
          <Text style={Styles.TextbtnMenu}>Liên hệ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.Btnmenu}
        onPress={() => props.navigation.push('Login')}>
        <View style={Styles.fromitemMenu}>
          <Image
            style={Styles.iconitemMenu}
            source={require('../Img/phone.png')}
          />
          <Text style={Styles.TextbtnMenu}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.Btnmenu} onPress={() => logout()}>
        <View style={Styles.fromitemMenu}>
          <Image
            style={Styles.iconitemMenu}
            source={require('../Img/log-out.png')}
          />
          <Text style={Styles.TextbtnMenu}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Screenmenu() {
  return (
    <Drawer.Navigator drawerContent={props => <Menuapp {...props} />}>
      <Drawer.Screen
        name="screen"
        component={Home}
        options={{title: '', headerShown: false}}
      />

      <Drawer.Screen
        name="Map"
        component={ScreenMap}
        options={{title: '', headerShown: false}}
      />

      <Drawer.Screen
        name="Mess"
        component={ScreenMess}
        options={{title: '', headerShown: false}}
      />

      <Drawer.Screen
        name="Login"
        component={ScreenLogin}
        options={{title: '', headerShown: false}}
      />

      <Drawer.Screen
        name="registration"
        component={Screenregistration}
        options={{title: '', headerShown: false}}
      />
      <Drawer.Screen
        name="Camera"
        component={Screencam}
        options={{title: '', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
