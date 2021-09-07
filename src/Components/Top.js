import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";
import western from "../Images/Provinces/western.jpg"
import central from "../Images/Provinces/central.jpg"
import northern from "../Images/Provinces/northern.jpeg"
import eastern from "../Images/Provinces/eastern.jpg"
import cen from "../Images/Provinces/central.jpg";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Top extends Component {
    state = {
        news: [],
        provinces:[{name:"Central Province",url:"https://www.google.com",img:central},  {name:"Western Province",url:"https://www.google.com",img:western},{name:"Northern Province",url:"https://www.google.com",img:northern},{name:"Estern Province",url:"https://www.google.com",img:eastern},
        ]
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
            res => res.json()
        ).then(response => {
            this.setState({
                news: response.articles
            })
            console.log(this.state.news.length)
        }).catch(err => console.error(err))
    }

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <Text style={{margin:10,fontSize:20,fontWeight:"bold"}}>Explore Today's Local News</Text>
                <View style={{flex:1,flexDirection:'row',height:deviceHeight/3,  justifyContent: 'flex-end',}}>
                    <View style={{flex:1,backgroundColor:'red',padding:5,height:deviceHeight/3}}><Image style={{height:deviceHeight/3,flex:1,width:deviceWidth/2}} source={cen}/></View>
                    <View style={{flex:1,backgroundColor:'green'}}><Image style={{height:deviceHeight/3,flex:1,width:deviceWidth/2}} source={cen}/></View>
                </View>


            </View>
        );
    }
}

export default Top;