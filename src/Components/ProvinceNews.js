import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import config from "../../config/config";
import western from "../Images/Provinces/western.jpg"
import central from "../Images/Provinces/central.jpg"
import northern from "../Images/Provinces/northern.jpeg"
import eastern from "../Images/Provinces/eastern.jpg"
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProvinceNews extends Component {
    state = {
        news: [],
        provinces:[{name:"Central Province",url:"https://www.google.com",img:central},  {name:"Western Province",url:"https://www.google.com",img:western},{name:"Northern Province",url:"https://www.google.com",img:northern},{name:"Estern Province",url:"https://www.google.com",img:eastern},
          ]
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
                                                    margin: 5,flex: 1,
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    <Image source={province.img}
                                                           style={{
                                                               height: deviceWidth/3,
                                                               width: deviceWidth/2-15,
                                                               borderRadius: 20
                                                           }}/>

                                                    <View style={{
                                                        position: 'absolute',
                                                        height: deviceWidth/3,
                                                        left: 0,
                                                        justifyContent:'center',
                                                        borderRadius: 20,
                                                        width: deviceWidth/2-15,
                                                        backgroundColor: 'rgba(0,0,0,0.4)'
                                                    }}>
                                                        <Text style={{
                                                            position: 'absolute',
                                                            color: "white",
fontSize:"30px",
                                                            fontFamily:"Didot",
                                                            fontWeight: "700",

                                                            width: deviceWidth/2 - 10,
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