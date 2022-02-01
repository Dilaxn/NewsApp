import React, { Component } from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";

import { SliderBox } from "react-native-image-slider-box";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ]
        };
    }

    render() {
        return (

            <View style={styles.container}>
                <SliderBox style={{height:"100%"}}
                    images={this.state.images}
                    onCurrentImagePressed={index =>{
                        console.warn(`image ${index} pressed`)
                        this.props.navigation.navigate('WebSite', {
                        url: "https://source.unsplash.com/",
                        img: "https://source.unsplash.com/1024x768/?nature"

                    })
                    }
                    }
                           onClick={console.log("hello")}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,

    }
});