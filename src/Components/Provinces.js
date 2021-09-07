import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";
import western from "../Images/Provinces/western.jpg"
import central from "../Images/Provinces/central.jpg"
import northern from "../Images/Provinces/northern.jpeg"
import eastern from "../Images/Provinces/eastern.jpg"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Icon} from "react-native-elements";
import {DrawerActions} from "@react-navigation/native";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function Provinces(props)  {

    return(
        <View  style={{justifyContent:'center',alignItems: 'center',flex:1,flexDirection:'column',paddingTop:20}}>
            <Text  style={{padding:10,fontSize:20,fontWeight:'bold'}}>Provinces</Text>

            <View  style={{flex:1,flexDirection:'row',padding:5}}>

                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='tree'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>North Western</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='fort-awesome'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Northern</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='bank'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>North Central</Text>
                    </View>
                </View>

            </View>
            <View  style={{flex:1,flexDirection:'row',padding:5}}>

                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='building-o'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Western</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='camera-retro'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Central</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='ship'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Eastern</Text>
                    </View>
                </View>

            </View>
            <View  style={{flex:1,flexDirection:'row',padding:5}}>

                <View  style={{flex:1,flexDirection:'column'}} >
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='train'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={()=>props.navigation.navigate('GetProvince',{
                                category:"Sports"
                            })}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Uva</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='flag-o'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Southern</Text>
                    </View>
                </View>
                <View  style={{flex:1,flexDirection:'column'}}>
                    <View source={central}  style={{justifyContent:'center',alignItems: 'center',borderColor:'black',borderWidth:2,padding:5,height:deviceHeight/3-40,borderRadius:10,width:deviceWidth/3-10}}>
                        <Icon
                            name='diamond'
                            type='font-awesome'
                            color='#000'
                            size={52}
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        <Text  style={{padding:5,fontWeight:'400',color:'black',fontSize:20}}>Sabaragamuwa</Text>
                    </View>
                </View>

            </View>


        </View>
    )
}

export default Provinces;