import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class TrendingNews extends Component {
    state = {
        news: []
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c13110ac02d946fa8fc640f47303c903').then(
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
                {/*<Text style={{fontSize:20}}>Heading1</Text>*/}
                {
                    this.state.news.length === 0 ?
                        (<ActivityIndicator size="large" color="#0000ff"/>) : (
                            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.news.map((news, index) => (
                                        news.urlToImage ?
                                            <TouchableOpacity key={index}
                                                              onPress={() => this.props.navigation.navigate('WebSite', {
                                                                  url: news.url,
                                                                  img:news.urlToImage
                                                              })}
                                            >
                                                <View style={{
                                                    margin: 5, flex: 1,
                                                    justifyContent: 'flex-end',

                                                }}>
                                                    <Image source={{uri: `${news.urlToImage}`}}
                                                           style={{
                                                               height: deviceHeight/2,
                                                               width: 7*deviceWidth/10,
                                                               borderRadius: 20,
                                                               margin:3,

                                                           }}/>

                                                    <View style={{
                                                        position: 'absolute',
                                                        height: deviceHeight/2,
                                                        left: 0,

                                                        justifyContent: 'center',
                                                        borderRadius: 20,
                                                        width: 7*deviceWidth/10,
                                                        backgroundColor: 'rgba(0,0,0,0.4)'
                                                    }}>
                                                        <View style={{
                                                            position: 'absolute',
                                                            height: deviceWidth/3,
                                                            justifyContent: 'center',
                                                            borderRadius: 20,
                                                            bottom:0,
                                                            width: 7*deviceWidth/10,
                                                        }}>
                                                        <Text   numberOfLines={2} style={{
                                                            position: 'absolute',
                                                            color: "white",
fontWeight:"bold",

                                                            width: 7*deviceWidth/10,
                                                            padding: 5,

                                                            textAlign: 'center'
                                                        }}>{news.title}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            : null
                                    ))

                                }
                            </ScrollView>
                        )
                }


            </View>
        );
    }
}

export default TrendingNews;