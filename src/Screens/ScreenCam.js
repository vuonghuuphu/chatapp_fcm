
import React ,{useEffect,useState,useRef}from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    StatusBar,
    PermissionsAndroid,
    Alert,
    Platform,
  } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalPreview  from './ScreenReviewCamera';
import styles from "../Style"



 export default function Screencam (props){
     
    const camera  = useRef(null)
    const scrollViewRef  = useRef();
    const [images, setimages] = useState([]);
    const [imagePreview, setimagePreview] = useState(null);
    const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
    const [type, setType] = useState(RNCamera.Constants.Type.back);

    const [isVisibleModal, setisVisibleModal] = useState(false);
    const getPermissionAndroid = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Image Download Permission',
              message: 'Your permission is required to save images to your device',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          }
          Alert.alert(
            'Save remote Image',
            'Grant Me Permission to save Image',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        } catch (err) {
          Alert.alert(
            'Save remote Image',
            'Failed to save Image: ' + err.message,
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      };
      const changeType = () => {
        type === 0
          ? setType(RNCamera.Constants.Type.front)
          : setType(RNCamera.Constants.Type.back);
      };
      const capture = async () => {
        console.log(RNCamera.Constants.FlashMode);
        const options = {quality: 0.5, base64: false};
        const data = await camera.current.takePictureAsync(options);
        // if (Platform.OS === 'android') {
        //   const granted = await getPermissionAndroid();
        //   if (granted) {
        //     CameraRoll.save(data.uri, {
        //       type: 'photo', // optional
              
        //     })
        //       .then((res) => console.log(res))
        //       .catch((err) => console.log(err));
        //   }
        // } else {
        //   CameraRoll.save(data.uri, {
        //     type: 'photo',
            
        //   })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        // }
        // setimages([...images, data.uri]);
        
        console.log('Debug', data);
        props.navigation.navigate("Photo",{Photo : data.uri,})
      };
      
      const onChangeFlashMode = (value) => {
        switch (value) {
          case 0:
            setFlash(1);
            break;
          case 1:
            setFlash(2);
            break;
          case 2:
            setFlash(0);
            break;
          default:
            break;
        }
      };
      const removeImage = (image) => {
        const temp = images.filter((e) => e !== image);
        setimages(temp);
      };
      const previewImgae = (image) => {
        setimagePreview(image);
        setisVisibleModal(true);
      };
      return (
        // <View style={{}}>
        //   <StatusBar hidden />
          <RNCamera
            ref={camera}
            style={styles.preview}
            type={type} // back : sau - front : truoc
            flashMode={flash}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
              <StatusBar hidden />
            <View style={styles.menuCamera}>
            <TouchableOpacity  onPress={()=>props.navigation.goBack()}>
                <Image
                  style={styles.flashIconBack}
                  source={require('../Img/previous.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onChangeFlashMode(flash)}
                style={styles.btnFlashControl}>
                {flash === 0 ? (
                  <View style={{backgroundColor:'grey',borderRadius:20,width:35}}>
                  <Image
                    style={styles.flashIcon}
                    source={require('../Img/no-flash.png')}
                  />
                  </View>
                ) : flash === 1 ? (
                  <View style={{backgroundColor:'grey',borderRadius:20,width:35}}>
                  <Image
                    style={styles.flashIcon}
                    source={require('../Img/thunderoff.png')}
                  />
                  </View>
                ) : (
                  <View style={{backgroundColor:'grey',borderRadius:20,width:35}}>
                  <Image
                    style={styles.flashIcon}
                    source={require('../Img/thunder.png')}
                  />
                  </View>
                )}
              </TouchableOpacity>

            </View>
     
            <TouchableOpacity style={styles.btnCapture} onPress={() => capture()}>
              <View style={{backgroundColor:"#f5f5f5",margin:10,width:80,height:80,borderRadius:50}}>

              </View>

            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btnCancel} 
            onPress={()=>props.navigation.goBack()}
            >
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity> */}
                        <View style={styles.btnCancel}>
             <TouchableOpacity  onPress={changeType}>
              <View style={{backgroundColor:'grey',borderRadius:40,width:45,margin:5}}>
                <Image
                  style={styles.PhotoIcon}
                  source={require('../Img/flip.png')}
                />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btnDone}>
             <TouchableOpacity  onPress={changeType}>
              <View style={{backgroundColor:'grey',borderRadius:40,width:45,margin:5}}>
                <Image
                  style={styles.PhotoIcon}
                  source={require('../Img/image-gallery.png')}
                />
                </View>
              </TouchableOpacity>
            </View>

          </RNCamera>
     
        //   <View style={styles.previewPhoto}>
        //     <ScrollView
        //       ref={scrollViewRef}
        //       onContentSizeChange={() =>
        //         scrollViewRef.current.scrollToEnd({animated: true})
        //       }
        //       showsHorizontalScrollIndicator={false}
        //       horizontal>
        //       {images.map((e, index) => (
        //         <View key={index}>
        //           <TouchableOpacity onPress={() => previewImgae(e)}>
        //             <Image style={styles.imgPreview} source={{uri: e}} />
        //           </TouchableOpacity>
        //           <TouchableOpacity
        //             style={styles.btnCleanImage}
        //             onPress={() => removeImage(e)}>
        //             <Image source={require('../Img/close.png')} />
        //           </TouchableOpacity>
        //         </View>
        //       ))}
        //     </ScrollView>
        //   </View>
        //   <ModalPreview
        //     isVisible={isVisibleModal}
        //     onBackdropPress={() => {
        //       setisVisibleModal(false);
        //     }}
        //     imagePreview={imagePreview}
        //   />
        // </View>
      );
    }
   
 