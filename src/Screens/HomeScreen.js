import React, {Component, useEffect, useState} from 'react';
import Categories from "../Components/Categories";
import TrendingNews from "../Components/TrendingNews";
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions, Button} from 'react-native';
import config from "../../config/config";
import ProvinceNews from "../Components/ProvinceNews";
import Footer from "../Components/Footer";
import cen from '../Images/Provinces/central.jpg'
import Top from "../Components/Top";


const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;
function HomeScreen(props) {


    const [news, setNews] = useState([]);
const [type,setType] = useState('WorldNews');
    useEffect(()=>{

        const unsubscribe = navigation.addListener('focus', () => {
            if(props.route.params.itemId==='WorldNews'){
                fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
                    res => res.json()
                ).then(response => {
                    setNews(response.articles)

                    console.log(news.length)
                }).catch(err => console.error(err))
            }
            else{
                fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
                    res => res.json()
                ).then(response => {
                    setNews(response.articles)

                    console.log(news.length)
                }).catch(err => console.error(err))
            }
            console.log(props.route.params.itemId)
            setType(props.route.params.itemId)
        });
        return unsubscribe;

    },[props])



        const { navigation } = props;

        return(
            <View style={{backgroundColor:'white'}} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        onPress={() => navigation.navigate('Notifications')}
                        title="Go to notifications"
                    />
                </View>
                {
                    (type==='WorldNews')?<Categories style={{height: 0.3*deviceHeight}} navigation={props.navigation}/>:null
                }


                <ScrollView >
                    <Text style={{margin:10,fontSize:40,fontWeight:"bold"}}>Explore Today's World News</Text>

                    <TrendingNews o navigation={props.navigation}/>

{/*<Top o navigation={this.props.navigation}/>*/}
                    <Text style={{margin:10,fontSize:20,fontWeight:"bold"}}>Explore Today's Local News</Text>

                    {/*<ProvinceNews o navigation={this.props.navigation}/>*/}
                <View>
                    {
                        news.length === 0 ?
                            (<ActivityIndicator size="large" color="#0000ff" style={{height:deviceHeight,width:deviceWidth,alignItems:'center'}} />) : (
                                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                                    {
                                        news.map((news, index) => (
                                            news.urlToImage ?
                                                <TouchableOpacity key={index}
                                                                  onPress={()=>props.navigation.navigate('WebSite',{
                                                                      url:news.url,
                                                                      img:news.urlToImage
                                                                  })}
                                                >
                                                    <View style={{margin: 10,
                                                        alignItems:'center',}}  display="flex" flexDirection="row"

                                                    >
                                                        <Image source={{uri: `${news.urlToImage}`}}
                                                               style={{height: 100, width: 150, borderRadius: 10}}/>
                                                               <View style={{width:deviceWidth-120,}}>

                                                                       <Text style={{fontFamily:"Times New Roman",paddingLeft:10,fontWeight:'500'}} >Category</Text>


                                                                   <Text numberOfLines={2} style={{fontWeight:'bold',width:deviceWidth-170,paddingLeft:10,paddingTop:5}}>{news.title}</Text>
                                                                   <View style={{ flexDirection: 'row',width:deviceWidth-170,paddingTop:5}}>
                                                                   <Text style={{fontFamily:"Times New Roman",paddingLeft:10,fontWeight:'400'}}>Channel</Text>
                                                                   <Text style={{flex:1,fontFamily:"Times New Roman",fontWeight:'400',textAlign:"right"}}>21 Aug 2021</Text>
                                                               </View>
                                                               </View>
                                                    </View>
                                                    <View
                                                        style={{marginBottom:10,marginTop:10,
                                                            borderBottomColor: 'black',
                                                            borderBottomWidth: 0.5,opacity:0.5
                                                        }}
                                                    />
                                                </TouchableOpacity> : null
                                        ))

                                    }
                                </ScrollView>
                            )
                    }
                </View>
                </ScrollView>

            </View>
        );

}
export default HomeScreen;