import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProvinceNews extends Component {
    state = {
        news: [],
        provinces:[{name:"Central Province",url:"https://www.google.com"},{name:"Northern Province",url:"https://www.google.com"},{name:"Estern Province",url:"https://www.google.com"},
            {name:"Western Province",url:"https://www.google.com"}]
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

                       (
                            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.provinces.map((province, index) => (

                                            <TouchableOpacity  key={index}
                                                               onPress={() => this.props.navigation.navigate('Name', {
                                                                   url: province.url,
                                                               })}
                                            >
                                                <View style={{
                                                    margin: 10,flex: 1,
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    <Image source={{uri: `${'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Colombo_City%2C_Sri_Lanka.jpg/2560px-Colombo_City%2C_Sri_Lanka.jpg'}`}}
                                                           style={{
                                                               height: deviceHeight / 4,
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
                                                        }}>{province.name}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

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