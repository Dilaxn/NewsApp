import {WebView} from 'react-native-webview';
import {View,Text,ActivityIndicator,TouchableOpacity,ScrollView,Image,Dimensions} from 'react-native';
import React,{Component} from "react";

const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;

class GetProvince extends Component {
    state = {
        news: []
    }
    componentDidMount() {

        this.props.navigation.setOptions({
            title:this.props.route.params.category
        })
        fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=us&apiKey=db00e5c555514d6ca6d00fb0513d40aa`).then(
            res => res.json()
        ).then(response => {
            this.setState({
                news: response.articles
            })
            console.log(this.state.news.length)
        }).catch(err => console.error(err))
    }

    render() {
        return(
            <View style={{backgroundColor:'white'}}  >
                {
                    this.state.news.length === 0 ?
                        (<ActivityIndicator size="large" color="#0000ff" style={{height:deviceHeight,width:deviceWidth,alignItems:'center'}} />) : (
                            <ScrollView horizontal={false} showHorizontalScrollIndicator={false}>
                                {
                                    this.state.news.map((news, index) => (
                                        (index===0)?(news.urlToImage ?
                                            <TouchableOpacity key={index}
                                                              onPress={()=>this.props.navigation.navigate('WebSite',{
                                                                  url:news.url,
                                                                  img:news.urlToImage
                                                              })}
                                            >
                                                <View style={{
                                                    flex: 1,
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    <Image source={{uri: `${news.urlToImage}`}}
                                                           style={{
                                                               height: deviceHeight/3,
                                                               width: deviceWidth,
                                                               borderRadius: 0
                                                           }}/>

                                                    <View style={{
                                                        position: 'absolute',
                                                        height: deviceHeight/3,
                                                        left: 0,
                                                        justifyContent: 'center',
                                                        borderRadius: 0,
                                                        width: deviceWidth,
                                                        backgroundColor: 'rgba(0,0,0,0.4)'
                                                    }}>
                                                        <View style={{
                                                            position: 'absolute',
                                                            height: deviceHeight/6,
                                                            bottom: 0,
                                                            justifyContent: 'center',
                                                            borderRadius:0,
                                                            width: deviceWidth,

                                                        }}>
                                                            <Text style={{
                                                                paddingLeft:5,
                                                                color: "white",

                                                            }}>
                                                                <Text style={{

                                                                    color: "white",

                                                                    fontWeight: "600",




                                                                    border: '3px red',
                                                                    borderWidth:2,
                                                                }} >{this.props.route.params.category}</Text>
                                                            </Text>
                                                            <Text   numberOfLines={2} style={{

                                                                color: "white",

                                                                fontWeight: "bold",

                                                                width: deviceWidth,
                                                                padding: 5,

                                                                textAlign: 'justify'
                                                            }}>{news.title}</Text>

                                                            <Text   numberOfLines={1} style={{

                                                                color: "white",

                                                                fontWeight: "300",

                                                                width: deviceWidth,
                                                                paddingLeft: 5,
                                                                marginBottom:0,
                                                                textAlign: 'left'
                                                            }}>21 Aug 2021</Text>
                                                        </View>
                                                    </View>
                                                </View></TouchableOpacity> : null):(news.urlToImage ?
                                            <TouchableOpacity key={index}
                                                              onPress={()=>this.props.navigation.navigate('WebSite',{
                                                                  url:news.url,
                                                                  img:news.urlToImage
                                                              })}
                                            >
                                                <View style={{margin: 10,
                                                    alignItems:'center',}}  display="flex" flexDirection="row"

                                                >
                                                    <Image source={{uri: `${news.urlToImage}`}}
                                                           style={{height: deviceHeight/4, width: 2*deviceWidth/5-30, borderRadius: 10}}/>
                                                    <View style={{height: deviceHeight/6, textAlign: 'justify',width:3*deviceWidth/5,paddingLeft:10,justifyContent:"center"}}>

                                                        <Text style={{fontFamily:"Times New Roman",}} >Channel</Text>
                                                        <Text numberOfLines={2} style={{paddingTop:5,fontWeight:'bold'}}>{news.title}</Text>
                                                        <Text numberOfLines={3}  style={{paddingTop:5,fontWeight:'300'}}>An enthusiastic, self-motivated, responsible and hardworking undergraduate student with excellent communication skills, willing to take-up new challenges and work in a challenging environment.</Text>
                                                        <Text style={{paddingTop:5}}>21 Aug 2021</Text>

                                                    </View>

                                                </View></TouchableOpacity> : null)

                                    ))

                                }
                            </ScrollView>
                        )
                }
            </View>
        )
    }
}

export default GetProvince;