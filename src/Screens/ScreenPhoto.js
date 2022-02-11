import React from "react";
import { View ,Text,Image, TouchableOpacity, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraRoll from "@react-native-community/cameraroll"

export default function ScreenPhoto (props){
    const {Photo} = props.route.params;

    const savephoto = async()=>{
            CameraRoll.save(Photo, {
              type: 'photo', // optional
              album: 'Camera Filebase', // optional
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));

            Alert.alert("Đã lưu ảnh vào bộ sưu tập ")
            props.navigation.navigate("Home")
    }

    return(
        <SafeAreaView>
            <View>
                <Image
                style={{width:"100%",height:"100%"}}
                source={{uri : Photo }}
                />
            </View>
            <View style={{position:"absolute",width:"100%",marginTop:"185%"}}>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate("Camera")}
                >
                    <Image
                    style={{width:50,height:50}}
                    source={require("../Img/close1.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>savephoto()}
                >
                    <Image
                    style={{width:50,height:50}}
                    source={require("../Img/tick.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width:50,height:50,backgroundColor:"white",borderRadius:50}}>
                    <Image
                    style={{width:35,height:35,margin:8}}
                    source={require("../Img/send-message.png")}
                    />
                </TouchableOpacity>
                </View>
                </View>
            </View>
        </SafeAreaView>
    );
}