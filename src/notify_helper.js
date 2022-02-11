
import { Platform} from 'react-native';
import Storage from '@react-native-async-storage/async-storage';
import  firebase  from '@react-native-firebase/messaging';
// these callback will be triggered only when app is foreground or background
export const registerAppListener = async(callback) => {
   // Build a channel
   const channel = new firebase.notifications.Android.Channel('notification_channel_name', 'Test Channel', firebase.notifications.Android.Importance.Max)
   .setDescription('My apps test channel');

   // Create the channel
   firebase.android.createChannel(channel)
   const fcmToken = await firebase.messaging().getToken();
   if (fcmToken) {
      let cacheToken = await Storage.getData("fcm_token");
      if (cacheToken !== fcmToken) {
         Storage.setData("fcm_token", fcmToken);
      }
   } else {
         console.log('fail fcmToken');
   }

  firebase.messaging().getInitialNotification().then((notificationOpen) => {
      if (notificationOpen) {
         const action = notificationOpen.action;
         const notification = notificationOpen.notification;  
         firebase.notifications().removeAllDeliveredNotifications();
      }
   });
   //
   firebase.messaging().hasPermission().then(hasPermission => {
      if (hasPermission) {
         subscribeToNotificationListeners();
         this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            console.log("notificationDisplayed");
         });
          // khi click vào thông báo
         this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
            console.log("notificationOpened --> ");
            callback();
            console.log(notification);
            firebase.notifications().removeAllDeliveredNotifications();
         });
      } else {
         firebase.messaging().requestPermission().then(() => {
            subscribeToNotificationListeners();
         }).catch(error => {
            console.error(error);
         })
      }
  })
}

const subscribeToNotificationListeners = async(serviceUrl, jwtToken) => {
   console.log("subscribeToNotificationListeners");
   this.notificationListener = firebase.notifications().onNotification((notification) => {
      displayNotification(notification);
   });    
}

const displayNotification = (notification) => {
   if (Platform.OS === 'ios') {
     notification.setSound("default");
     firebase.notifications().displayNotification(notification).catch(err => console.error(err));
   } else if (Platform.OS === 'android') {
       const localNotification = new firebase.notifications.Notification({
           sound: 'default',
           show_in_foreground: true,
           priority: "high",
           local_notification: true
       }).setNotificationId(notification.notificationId)
           .setTitle(notification.title)
           .setBody(notification.body)
           .setData(notification.data)
           .android.setChannelId('notification_channel_name') // e.g. the id you chose above
           .android.setSmallIcon('ic_action_name') // create this icon in Android Studio
           .android.setColor("#00d154") // you can set a color here 
           .android.setPriority(firebase.notifications.Android.Priority.High);
       firebase.notifications()
           .displayNotification(localNotification)
           .catch(err => console.error(err));
   }
}