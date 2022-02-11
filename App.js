import React, {useEffect, useState} from 'react';
import {NavigationContainer , useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import ScreenMap from './src/Screens/ScreenMap';
import ScreenCam from './src/Screens/ScreenCam';
import ScreenMess from './src/Screens/ScreenMess';
import ScreenLogin from './src/Screens/ScreenLogin';
import Screenregistration from './src/Screens/Screenregistration';
import 'react-native-gesture-handler';
import Screenmenu from './src/Screens/Screenmenu';
import {Alert, LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';


const Stack = createNativeStackNavigator();

export default function App() {

  const [initialRoute, setInitialRoute] = useState('Home');
  const [loading, setLoading] = useState(true);
  const setupcloudmessaging = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    setupcloudmessaging();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.removeAllDeliveredNotifications();
      PushNotification.localNotificationSchedule({
        channelId: "channel-id",
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        date: new Date(Date.now() + 1 * 1000),
        allowWhileIdle: true,
        actions: ["Reply"],
        reply_placeholder_text: "Nhập tin nhắn...",
        reply_button_text: "Trả lời"
      });

      console.log(remoteMessage);
    });
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setInitialRoute(remoteMessage.title);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={ScreenLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={ScreenMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Camera"
          component={ScreenCam}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mess"
          component={ScreenMess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Screenmenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="registration"
          component={Screenregistration}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
