import React, {Component, useEffect, useState} from 'react';
import Categories from "../Components/Categories";
import TrendingNews from "../Components/TrendingNews";
import {View, Text, ActivityIndicator, TouchableOpacity, ScrollView, Image, Dimensions, Button} from 'react-native';
import {Tab, TabView} from "react-native-elements";

import {useWindowDimensions} from 'react-native';
import {SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}}/>
);

const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}}/>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function MyInterests(props) {

    const [deviceHeight,setDeviceHeight] = useState(Dimensions.get('window').height);
    const [deviceWidth,setDeviceWidth] = useState(Dimensions.get('window').width);

    const [news, setNews] = useState(['in', 'us', 'uk']);
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);
    let bgCol1 = 'white'

    const [type, setType] = useState('WorldNews');
    useEffect(() => {

        setDeviceHeight(Dimensions.get('window').height)
        setDeviceWidth(Dimensions.get('window').width)
        const unsubscribe = navigation.addListener('focus', () => {

            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
                res => res.json()
            ).then(response => {
                setCat1(response.articles)

                console.log(news.length)
            }).catch(err => console.error(err))
            fetch('https://newsapi.org/v2/top-headlines?country=' + news[1] + '&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
                res => res.json()
            ).then(response => {
                setCat2(response.articles)

                console.log(news.length)
            }).catch(err => console.error(err))
            fetch('https://newsapi.org/v2/top-headlines?country=' + news[2] + '&apiKey=db00e5c555514d6ca6d00fb0513d40aa').then(
                res => res.json()
            ).then(response => {
                setCat3(response.articles)

                console.log(news.length)
            }).catch(err => console.error(err))

            console.log(props.route.params.itemId)
            setType(props.route.params.itemId)
        });
        return unsubscribe;

    }, [props])
    const [index, setIndex] = React.useState(0);
    const {navigation} = props;
    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 2,

                }}

                style={{backgroundColor:'white'}}


            >
                <Tab.Item
                    title="Recent"
                    titleStyle={{width:'100%',fontSize: 12,color:'black',backgroundColor:bgCol1}}
                   active={{backgroundColor:'red'}}
                    onFocus={bgCol1='red'}
                    // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="favorite"
                    titleStyle={{fontSize: 12,color:'black'}}
                />
                <Tab.Item
                    title="cart"
                    titleStyle={{fontSize: 12,color:'black'}}
                />

            </Tab>

            <TabView value={index} onChange={setIndex} animationType="timing">
                <TabView.Item  style={{width: '100%'}} onMoveShouldSetResponder={(e) => e.stopPropagation()} >
                    <View style={{backgroundColor: 'white', flex: 1}}>
                        {
                            cat1.length === 0 ?
                                (<ActivityIndicator size="large" color="#0000ff" style={{
                                    height: deviceHeight,
                                    width: deviceWidth,
                                    alignItems: 'center'
                                }}/>) : (
                                    <ScrollView horizontal={false} showHorizontalScrollIndicator={false}>
                                        {
                                            cat1.map((news, index) => (
                                                (index === 0) ? (news.urlToImage ?
                                                    <TouchableOpacity key={index}
                                                                      onPress={() => props.navigation.navigate('WebSite', {
                                                                          url: news.url,
                                                                          img: news.urlToImage
                                                                      })}
                                                    >
                                                        <View style={{
                                                            flex: 1,
                                                            justifyContent: 'flex-end',

                                                        }}>
                                                            <Image source={{uri: `${news.urlToImage}`}}
                                                                   style={{

                                                                       height: 200,
                                                                       width: deviceWidth,
                                                                       borderRadius: 0
                                                                   }}/>

                                                            <View style={{
                                                                position: 'absolute',
                                                                height: deviceHeight / 3,
                                                                left: 0,
                                                                justifyContent: 'center',
                                                                borderRadius: 0,
                                                                width: deviceWidth,

                                                            }}>

                                                            </View>

                                                        </View>


                                                        <Text numberOfLines={2} style={{



                                                            fontWeight: "bold",

                                                            width: deviceWidth,
                                                            padding: 5,

                                                            textAlign: 'justify'
                                                        }}>{news.title}</Text>

                                                        <Text numberOfLines={1} style={{



                                                            fontWeight: "300",

                                                            width: deviceWidth,
                                                            paddingLeft: 5,
                                                            marginBottom: 0,
                                                            textAlign: 'left'
                                                        }}>21 Aug 2021 | Category</Text>
                                                    </TouchableOpacity> : null) : (news.urlToImage ?
                                                    <TouchableOpacity key={index}
                                                                      onPress={() => props.navigation.navigate('WebSite', {
                                                                          url: news.url,
                                                                          img: news.urlToImage
                                                                      })}
                                                    >
                                                        <View style={{
                                                            marginTop: 20,
                                                            alignItems: 'center',
                                                        }} display="flex" flexDirection="row"

                                                        >
                                                            <Image source={{uri: `${news.urlToImage}`}}
                                                                   style={{
                                                                       height: 100,
                                                                       width: 2 * deviceWidth / 5 - 30,
                                                                       borderRadius: 0,
                                                                       marginBottom:-10

                                                                   }}/>
                                                            <View style={{
                                                                height: 100,
                                                                textAlign: 'justify',
                                                                width: 3 * deviceWidth / 5,
                                                                paddingLeft: 10,
                                                                justifyContent: "center",
                                                                flex:1,
                                                                flexDirection:'column'
                                                            }}>

                                                                <Text
                                                                    style={{fontFamily: "Times New Roman",     paddingBottom:5}}>Channel</Text>
                                                                <Text numberOfLines={2} style={{
                                                                    paddingTop: 5,
                                                                    fontWeight: 'bold',
                                                                    paddingBottom:5
                                                                }}>{news.title}</Text>

                                                                <Text style={{paddingTop: 5}}>21 Aug 2021 | Category</Text>

                                                            </View>

                                                        </View></TouchableOpacity> : null)

                                            ))

                                        }
                                    </ScrollView>
                                )
                        }
                    </View>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}} onMoveShouldSetResponder={(e) => e.stopPropagation()}>
                    <View style={{backgroundColor: 'white', flex: 1}}>
                    {
                        cat1.length === 0 ?
                            (<ActivityIndicator size="large" color="#0000ff" style={{
                                height: deviceHeight,
                                width: deviceWidth,
                                alignItems: 'center'
                            }}/>) : (
                                <ScrollView horizontal={false} showHorizontalScrollIndicator={false}>
                                    {
                                        cat1.map((news, index) => (
                                            (index === 0) ? (news.urlToImage ?
                                                <TouchableOpacity key={index}
                                                                  onPress={() => props.navigation.navigate('WebSite', {
                                                                      url: news.url,
                                                                      img: news.urlToImage
                                                                  })}
                                                >
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'flex-end',

                                                    }}>
                                                        <Image source={{uri: `${news.urlToImage}`}}
                                                               style={{

                                                                   height: 200,
                                                                   width: deviceWidth,
                                                                   borderRadius: 0
                                                               }}/>

                                                        <View style={{
                                                            position: 'absolute',
                                                            height: deviceHeight / 3,
                                                            left: 0,
                                                            justifyContent: 'center',
                                                            borderRadius: 0,
                                                            width: deviceWidth,

                                                        }}>

                                                        </View>

                                                    </View>


                                                        <Text numberOfLines={2} style={{



                                                            fontWeight: "bold",

                                                            width: deviceWidth,
                                                            padding: 5,

                                                            textAlign: 'justify'
                                                        }}>{news.title}</Text>

                                                        <Text numberOfLines={1} style={{



                                                            fontWeight: "300",

                                                            width: deviceWidth,
                                                            paddingLeft: 5,
                                                            marginBottom: 0,
                                                            textAlign: 'left'
                                                        }}>21 Aug 2021 | Category</Text>
                                                    </TouchableOpacity> : null) : (news.urlToImage ?
                                                <TouchableOpacity key={index}
                                                                  onPress={() => props.navigation.navigate('WebSite', {
                                                                      url: news.url,
                                                                      img: news.urlToImage
                                                                  })}
                                                >
                                                    <View style={{
                                                        marginTop: 20,
                                                        alignItems: 'center',
                                                    }} display="flex" flexDirection="row"

                                                    >
                                                        <Image source={{uri: `${news.urlToImage}`}}
                                                               style={{
                                                                   height: 100,
                                                                   width: 2 * deviceWidth / 5 - 30,
                                                                   borderRadius: 0,
                                                                 marginBottom:-10

                                                               }}/>
                                                        <View style={{
                                                            height: 100,
                                                            textAlign: 'justify',
                                                            width: 3 * deviceWidth / 5,
                                                            paddingLeft: 10,
                                                            justifyContent: "center",
                                                            flex:1,
                                                            flexDirection:'column'
                                                        }}>

                                                            <Text
                                                                style={{fontFamily: "Times New Roman",     paddingBottom:5}}>Channel</Text>
                                                            <Text numberOfLines={2} style={{
                                                                paddingTop: 5,
                                                                fontWeight: 'bold',
                                                                paddingBottom:5
                                                            }}>{news.title}</Text>

                                                            <Text style={{paddingTop: 5}}>21 Aug 2021 | Category</Text>

                                                        </View>

                                                    </View></TouchableOpacity> : null)

                                        ))

                                    }
                                </ScrollView>
                            )
                    }
                </View>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}} onMoveShouldSetResponder={(e) => e.stopPropagation()}>
                    <View style={{backgroundColor: 'white', flex: 1}}>
                        {
                            cat1.length === 0 ?
                                (<ActivityIndicator size="large" color="#0000ff" style={{
                                    height: deviceHeight,
                                    width: deviceWidth,
                                    alignItems: 'center'
                                }}/>) : (
                                    <ScrollView horizontal={false} showHorizontalScrollIndicator={false}>
                                        {
                                            cat1.map((news, index) => (
                                                (index === 0) ? (news.urlToImage ?
                                                    <TouchableOpacity key={index}
                                                                      onPress={() => props.navigation.navigate('WebSite', {
                                                                          url: news.url,
                                                                          img: news.urlToImage
                                                                      })}
                                                    >
                                                        <View style={{
                                                            flex: 1,
                                                            justifyContent: 'flex-end',

                                                        }}>
                                                            <Image source={{uri: `${news.urlToImage}`}}
                                                                   style={{

                                                                       height: 200,
                                                                       width: deviceWidth,
                                                                       borderRadius: 0
                                                                   }}/>

                                                            <View style={{
                                                                position: 'absolute',
                                                                height: deviceHeight / 3,
                                                                left: 0,
                                                                justifyContent: 'center',
                                                                borderRadius: 0,
                                                                width: deviceWidth,

                                                            }}>

                                                            </View>

                                                        </View>


                                                        <Text numberOfLines={2} style={{



                                                            fontWeight: "bold",

                                                            width: deviceWidth,
                                                            padding: 5,

                                                            textAlign: 'justify'
                                                        }}>{news.title}</Text>

                                                        <Text numberOfLines={1} style={{



                                                            fontWeight: "300",

                                                            width: deviceWidth,
                                                            paddingLeft: 5,
                                                            marginBottom: 0,
                                                            textAlign: 'left'
                                                        }}>21 Aug 2021 | Category</Text>
                                                    </TouchableOpacity> : null) : (news.urlToImage ?
                                                    <TouchableOpacity key={index}
                                                                      onPress={() => props.navigation.navigate('WebSite', {
                                                                          url: news.url,
                                                                          img: news.urlToImage
                                                                      })}
                                                    >
                                                        <View style={{
                                                            marginTop: 20,
                                                            alignItems: 'center',
                                                        }} display="flex" flexDirection="row"

                                                        >
                                                            <Image source={{uri: `${news.urlToImage}`}}
                                                                   style={{
                                                                       height: 100,
                                                                       width: 2 * deviceWidth / 5 - 30,
                                                                       borderRadius: 0,
                                                                       marginBottom:-10

                                                                   }}/>
                                                            <View style={{
                                                                height: 100,
                                                                textAlign: 'justify',
                                                                width: 3 * deviceWidth / 5,
                                                                paddingLeft: 10,
                                                                justifyContent: "center",
                                                                flex:1,
                                                                flexDirection:'column'
                                                            }}>

                                                                <Text
                                                                    style={{fontFamily: "Times New Roman",     paddingBottom:5}}>Channel</Text>
                                                                <Text numberOfLines={2} style={{
                                                                    paddingTop: 5,
                                                                    fontWeight: 'bold',
                                                                    paddingBottom:5
                                                                }}>{news.title}</Text>

                                                                <Text style={{paddingTop: 5}}>21 Aug 2021 | Category</Text>

                                                            </View>

                                                        </View></TouchableOpacity> : null)

                                            ))

                                        }
                                    </ScrollView>
                                )
                        }
                    </View>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                    <Text h1>Cart</Text>
                </TabView.Item>
            </TabView>
        </>
    );
};