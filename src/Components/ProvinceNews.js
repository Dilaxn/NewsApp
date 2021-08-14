import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProvinceNews extends Component {
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
                            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.news.map((news, index) => (
                                        news.urlToImage ?
                                            <TouchableOpacity  key={index}
                                                               onPress={() => this.props.navigation.navigate('Name', {
                                                                   url: news.url,
                                                               })}
                                            >
                                                <View style={{
                                                    margin: 10,flex: 1,
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    <Image source={{uri: `${news.urlToImage}`}}
                                                           style={{
                                                               height: deviceHeight / 2,
                                                               width: deviceWidth,
                                                               borderRadius: 20
                                                           }}/>

                                                    <View style={{
                                                        position: 'absolute',
                                                        height: 80,
                                                        left: 0,
                                                        justifyContent:'center',
                                                        borderBottomLeftRadius:20,
                                                        borderBottomRightRadius:20,
                                                        width: deviceWidth,
                                                        backgroundColor: 'rgba(0,0,0,0.4)'
                                                    }}>
                                                        <Text style={{
                                                            position: 'absolute',
                                                            color: "white",

                                                            fontWeight: "bold",

                                                            width: deviceWidth - 10,
                                                            padding: 'auto',
                                                            textAlign: 'center'
                                                        }}>{news.title}</Text>
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

export default ProvinceNews;