import React,{Component} from 'react';
import Categories from "../Components/Categories";
import TrendingNews from "../Components/TrendingNews";
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions, Button} from 'react-native';
import config from "../../config/config";
import ProvinceNews from "../Components/ProvinceNews";
import Footer from "../Components/Footer";



const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;
class HomeScreen extends Component {
    state = {
        news: []
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c13110ac02d946fa8fc640f47303c903').then(
            res => res.json()
        ).then(response => {
            this.setState({
                news: response.articles
            })
            console.log(this.state.news.length)
        }).catch(err => console.error(err))
    }

    render() {
        const { navigation } = this.props;
        return(
            <View style={{backgroundColor:'white'}} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        onPress={() => navigation.navigate('Notifications')}
                        title="Go to notifications"
                    />
                </View>
                <Categories style={{height: 0.3*deviceHeight}} navigation={this.props.navigation}/>
                <ScrollView style={{height:0.76*deviceHeight}} >
                <TrendingNews o navigation={this.props.navigation}/>
                    <ProvinceNews o navigation={this.props.navigation}/>
                <View >
                    {
                        this.state.news.length === 0 ?
                            (<ActivityIndicator size="large" color="#0000ff" style={{height:deviceHeight,width:deviceWidth,alignItems:'center'}} />) : (
                                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
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
<Footer/>
            </View>
        );
    }
}
export default HomeScreen;