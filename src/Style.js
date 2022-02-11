import React from "react";
import { StyleSheet ,Dimensions,} from "react-native";

export default Styles = StyleSheet.create({
  
  // Home
    containerhome: {
        padding: 1,
        alignItems: "center"
      },
      textBtn:{
        fontSize:16,
        color:"black",
        fontWeight:'bold',
      },
      Btn:{
        marginTop:5,
        width:"100%",
        padding:5,
        backgroundColor:'white'
      },
      frommess:{
        
        flexDirection:'row',
        justifyContent:"space-between"
      },
      textmesBtn:{
        width:250,
        height:30,
      },
   
  // Screen Map

      Btn_Back:{
          backgroundColor:'red',
          width:120,
          margin:10,
          padding:5,
          alignItems:'center'
      },

      textBtn_Back:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
      },

      Map:{
        width:"100%",
        height:"66%",
      },
      
      Maptitle:{
        color:'white',padding:10,
        fontWeight:'bold',
        fontSize:16,
      },
      
      Maptitle_backgourd :{
        alignItems:'center',
        backgroundColor:'#0084d6',
      },

      From_address:{
        alignItems:'center',
        width:280 ,
        backgroundColor:'white',
        marginEnd:5,
        marginLeft:5,
        paddingBottom:10,
        borderWidth:1,
        borderColor:'grey'
      },

      Imgaddress :{
        width:278,
        height:130,
      },

      Name_address:{
        fontSize:16,
        fontWeight:'bold',
        padding:5,
        color:"black"
      },

      Btn_map:{
        backgroundColor:'green',
      },

      textBtn_map:{
        fontWeight:'bold',
        color:'white',
        padding:5,
      },

        // Screen Cam

        container: {
          flex: 1,
        },
        preview: {
          flex:  1,
        },
        btnCapture: {position: 'absolute', bottom: 0, alignSelf: 'center'},
        btnFlashControl: {
          marginLeft: 15,
        },
        previewPhoto: {
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
        btnCancel: {
          position: 'absolute',
          bottom: 15,
          left: 15,
          alignSelf: 'flex-start',
        },
        txtCancel: {
          fontSize: 18,
          color: '#FFFFFF',
        },
        btnDone: {
          position: 'absolute',
          bottom: 15,
          right: 15,
          alignSelf: 'flex-end',
        },
        btnFlip: {
          margin:5,
          marginLeft: Dimensions.get('screen').width - 80,
        },
        flashIcon: {height: 25, width: 25,margin:5},
        PhotoIcon: {height: 30, width: 30,margin:7},
        flashIconBack: {height: 35, width: 35,margin:15},
        captureIcon: {height: 40, width: 40, marginBottom: 5},
        imgPreview: {height: 100, width: 100, marginRight: 5, borderRadius: 5},
        menuCamera: {
          flexDirection: 'column',
          marginTop: 15,
        },
        btnCleanImage: {
          position: 'absolute',
          top: 5,
          left: 5,
        },

        // Screen Mess
        containerMess: {
          justifyContent:"space-between",
          height:'100%',
        },
        from_mess:{
          flexDirection:"row",
          justifyContent:'space-around'
        },
        from_title:{
          paddingTop:5,
          paddingBottom:5,
          backgroundColor:"#17fc03",
          flexDirection:"row",
          justifyContent:'space-between'
        },
        Inputmess:{
          width:250,
          borderWidth:1,
          borderRadius:20,
          paddingLeft:10,
        },
        NameAccount:{
          fontSize:16,
          fontWeight:'bold',
          color:'black'
        },
        From_title:{
          flexDirection:"row"
        },
        ActiveAccount:{
          fontSize:15
        },
      
        Textmess:{
          fontSize:15,
          color:'black',
        },

        frommesstitle:{
          maxWidth:300,
          margin:10,
          borderRadius:20
        },

        // Screen Login
        LogoLogin:{
          alignItems:'center',
          marginTop:"20%",
        } ,
        FromLogin:{
          borderWidth:0.5,
          width:"85%",
          backgroundColor:"white",
          height:50,
          borderRadius:30,
          paddingLeft:20
        },
        FrombtnLogin:{
          alignItems:'center',
          marginTop:"10%",
          flexDirection:"row",
          justifyContent:'space-around',
          marginLeft:"10%",
          marginRight:"10%"
        },
        btnLogin:{
          width:"70%",
          backgroundColor:"#4fb6ff",
          alignItems:"center",
          padding:15,
          
        },
        TextbtnLogin:{
          fontWeight:"bold",
          fontSize:17,
          color:'white'
        },

        // Screen menu

        TextbtnMenu:{
          fontWeight:"bold",
          fontSize:18,
          paddingLeft:20,
          color:'black'
        },
        sizelogoMenu:{
          margin:30,
          width:"75%",
          height:200
        },
        fromitemMenu:{
          flexDirection:'row',
        },
        iconitemMenu:{
          width:30,
          height:30,
        },
        Btnmenu:{
          padding:20,
        },
    })