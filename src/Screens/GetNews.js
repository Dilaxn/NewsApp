import {WebView} from 'react-native-webview';
import {View,Text,ActivityIndicator,TouchableOpacity,ScrollView,Image,Dimensions} from 'react-native';
import React,{Component} from "react";

const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;

class GetNews extends Component {
    state = {
        news: []
    }
componentDidMount() {

    this.props.navigation.setOptions({
        title:this.props.route.params.category
    })
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=us&apiKey=c13110ac02d946fa8fc640f47303c903`).then(
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
                                        news.urlToImage ?
                                            <TouchableOpacity key={index}
                                            onPress={()=>this.props.navigation.navigate('Name',{
                                                url:news.url,
                                            })}
                                            >
                                            <View style={{margin: 10,
                                        alignItems:'center',}}  display="flex" flexDirection="row"

                                        >
                                            <Image source={{uri: `${news.urlToImage}`}}
                                                   style={{height: 100, width: 100, borderRadius: 10}}/>
                                            <Text style={{ textAlign: 'justify',width:deviceWidth-130,paddingLeft:10}}>{news.title}</Text>
                                        </View></TouchableOpacity> : null
                                    ))

                                }
                            </ScrollView>
                        )
                }
            </View>
        )
    }
}

export default GetNews;