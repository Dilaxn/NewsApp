import {WebView} from 'react-native-webview';
import React,{Component} from "react";
import {Dimensions, Image, Text, View} from "react-native";

const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;
class WebViewComponent extends Component {

    render() {
        return(
            <View style={{flex:1}}>

                <Image style={{height:deviceHeight/3}} source={{uri: `${this.props.route.params.img}`}}/>
                <View style={{flex:1, marginTop:-deviceHeight/8,marginLeft:10,marginRight:10,borderRadius:10}}>
                    <WebView source={{uri:`${this.props.route.params.url}`}} style={{flex:1,borderRadius:10}}/>
                </View>

            </View>
        )
    }
}

export default WebViewComponent;