import React, {Component, useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';
import config from "../../config/config";
import western from "../Images/Provinces/western.jpg"
import central from "../Images/Provinces/central.jpg"
import northern from "../Images/Provinces/northern.jpeg"
import eastern from "../Images/Provinces/eastern.jpg"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Icon} from "react-native-elements";
import {DrawerActions} from "@react-navigation/native";
import {SliderBox} from "react-native-image-slider-box";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function Provinces(props)  {

   const [images,setImages] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ])

    return(
        <View style={styles.container}>
            <SliderBox style={{height:"100%"}}
                       images={images}
                       onCurrentImagePressed={index =>{
                           console.warn(`image ${index} pressed`)
                           props.navigation.navigate('WebSite', {
                               url: "https://source.unsplash.com/",
                               img: "https://source.unsplash.com/1024x768/?nature"

                           })
                       }
                       }
                       onClick={console.log("hello")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default Provinces;