/**
 * @format
 */
 import React, {useEffect, useState} from 'react';
import {Alert, AppRegistry} from 'react-native';
import Home from './src/Home';
import {name as appName} from './app.json';
import App from './App';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

PushNotification.createChannel(
  {
    channelId: 'channel-id',
    channelName: 'nMy channel',
    channelDescription: 'My apps test channel',
    playSound: false,
    soundName: 'default',
    importance: Importance.HIGH,
    vibrate: true,
  },
  created => console.log(`createChannel returned '${created}'`),
);
PushNotification.getChannels(function (channel_ids) {
  console.log(channel_ids);
});


messaging().onNotificationOpenedApp(remoteMessage => {
  console.log(
    'Notification caused app to open from background state:',
    remoteMessage.notification,
  );
});

AppRegistry.registerComponent(appName, () => App);
