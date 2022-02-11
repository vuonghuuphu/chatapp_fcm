import React, {useState} from 'react';
import {View, Text, TouchableOpacity,FlatList,Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from '../Style';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function ScreenMap(props) {
  const {id} = props.route.params;
  const [dataMap, setdataMap] = useState(null);

  const Data = [
    {
      id: 1,
      lan: 21.017596,
      lon: 105.825175,
      name: 'Địa điểm 1',
      img: 'https://thietkehomexinh.com/wp-content/uploads/2017/03/cafe2.jpg',
    },
    {
      id: 2,
      lan: 10.80669,
      lon: 106.635115,
      name: 'Địa điểm 2',
      img: 'https://neohouse.vn/wp-content/uploads/2019/07/thiet-ke-quan-cafe-anh-bia.jpg',
    },
    {
      id: 3,
      lan: 16.071381,
      lon: 108.222183,
      name: 'Địa điểm 3',
      img: 'https://stdecor.net/Upload/images/mo-hinh-quan-cafe-sach.jpg',
    },
    {
        id: 4,
        lan: 21.017596,
        lon: 105.825175,
        name: 'Địa điểm 4',
        img: 'https://lh5.googleusercontent.com/xEB28dgmGVfeHFwphKoM-8dJQIOx9_DaicwPUEeM20evM0ALdf1EUWS_Qmbpm_-XPRFcdmQ7kWtTafkgnAc-5FSBFHTdfZ66Ybdike8NHdNVJx5-KRgG92N3Qktwhecfm6ArRN8v',
      },
      {
        id: 5,
        lan: 10.80669,
        lon: 106.635115,
        name: 'Địa điểm 5',
        img: 'https://ohay.vn/blog/wp-content/uploads/2020/02/cafe-tieng-anh-sai-gon-2-min.jpg',
      },
      {
        id: 6,
        lan: 16.071381,
        lon: 108.222183,
        name: 'Địa điểm 6',
        img: 'https://dananghomestay.net/wp-content/uploads/2018/03/nhung-quan-ca-phe-hoai-niem-giua-long-da-thanh-2.3-min-1.jpg',
      },
  ];
  let d;
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === id) {
      d = Data[i];
    }
    if (id == 0) {
      d = Data[0];
    }
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={Styles.Btn_Back}
        onPress={() => props.navigation.goBack()}>
        <Text style={Styles.textBtn_Back}>Quay lại</Text>
      </TouchableOpacity>

      <View>
      <View>
        <MapView
        style={Styles.Map}
          initialRegion={{
            latitude: d.lan,
            longitude: d.lon,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004,
          }}
          zoomEnabled={true}
          scrollEnabled={true}
          showsScale={true}
        >
          {Data.map((item,index)=>(
             <Marker
             key={item.id}
          coordinate={{
            latitude: item.lan,
            longitude: item.lon,
          }}
          image={require("../Img/pin.png")}
        >

          <Callout>
             
            <Text>{item.name}</Text>
          </Callout>

          </Marker>  
        
          ))}
          
         </MapView> 
       
        
      

      <View>

        <View style={Styles.Maptitle_backgourd}>
          <Text style={Styles.Maptitle}>Các địa điểm gợi ý</Text>
        </View>

      <FlatList
            data={Data}
            style={{paddingBottom: 10,paddingTop:5}}
            keyExtractor={({ id }, index) => id}
            horizontal={true}
            renderItem={({ item }) => (
              
              <View key={item.id}
              style={Styles.From_address}
              >
                <View>
                  <Image
                  style={Styles.Imgaddress}
                  source={{uri : item.img}}
                  />
                  <Text style={Styles.Name_address}>{item.name}</Text>
                </View>

                <TouchableOpacity 
                style={Styles.Btn_map}
                onPress={()=>props.navigation.replace("Map",{id:item.id})}
                >
                  <Text style={Styles.textBtn_map}>
                    Xem địa chỉ
                  </Text>
                </TouchableOpacity>

              </View>

            )}
          />
      </View>
      </View></View>
    </SafeAreaView>
  );
}
