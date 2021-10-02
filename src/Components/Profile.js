import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions, ImageBackground} from 'react-native';
import config from "../../config/config";
import western from "../Images/Provinces/western.jpg"
import central from "../Images/Provinces/central.jpg"
import northern from "../Images/Provinces/northern.jpeg"
import eastern from "../Images/Provinces/eastern.jpg"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Icon} from "react-native-elements";
import {DrawerActions} from "@react-navigation/native";
import {WebView} from "react-native-webview";
import Avatar from "../Images/Avatar.png";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import profileBG from '../Images/profileBG.jpg';

function Profile(props)  {

    return(
        <View style={{flex:1}}>

            <View style={{height:deviceHeight/3, backgroundImage:profileBG}}   >
                <Image style={{height:deviceHeight/3,width:deviceWidth}} source={profileBG} resizeMode="cover"/>
            </View>
            <View style={{flex:1, marginTop:-deviceHeight/8,marginBottom:-deviceHeight/8,marginLeft:10,marginRight:10,borderRadius:40}}>
               <View style={{backgroundColor:'white',height:deviceHeight/2,margin:20,borderRadius:20}}>
                   <View style={{flex: 2}} alignItems="center">
                       <Image
                           style={{
                               width: 120,
                               height: 120,
marginTop:-60,
                               borderRadius: 75
                           }}
                           source={Avatar}
                           resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
                       />
                       <Text style={{padding:5,fontWeight:'bold',fontSize:30}} >Dilaxn</Text>
                       <Text style={{paddingBottom:10}} >dilaxn@gmail.com</Text>
                       <TouchableOpacity  style={{borderRadius:10,borderWidth:1, borderColor:'black', padding:15,margin:20, width:'80%',justifyContent:'center',alignItems:'center'}} onPress={()=> console.log('clicked')} >
                           <Text style={{fontSize:30,fontWeight:"300"}}>
                               Interests
                           </Text>
                       </TouchableOpacity>
                       <View>
                           <TouchableOpacity  style={{borderRadius:30,borderWidth:0, borderColor:'black', paddingLeft:15,paddingRight:15,paddingTop:5,paddingBottom:5,margin:20, width:'80%',justifyContent:'center',alignItems:'center',backgroundColor:'black'}} onPress={()=> console.log('clicked')} >
                               <Text style={{fontSize:20,color:'white',fontWeight:"200"}}>
                                   Sign Out
                               </Text>
                           </TouchableOpacity>
                           {/*<Icon style={{paddingTop:10}}*/}
                           {/*      name='sign-out'*/}
                           {/*      type='font-awesome'*/}
                           {/*      color='#000'*/}
                           {/*      size='50'*/}
                           {/*      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>*/}
                       </View>

                   </View>

               </View>
            </View>

        </View>
    )
}

export default Profile;