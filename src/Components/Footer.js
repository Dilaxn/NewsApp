import React,{Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import config from "../../config/config";
const deviceHeight =Dimensions.get('window').height;
const deviceWidth =Dimensions.get('window').width;
import { Icon } from 'react-native-elements'

const categories = ["Entertainment","Business","Politics","Health","Technology","Sports"]

class Footer extends Component {

    state={

    }
    componentDidMount() {
        console.log(config.API_KEY)
    }

    render() {
        return(

            <View style={{width: deviceWidth, height: 200}}>
<View style={{flexDirection:'column'}} >
    <Text>hello</Text>
</View>
                <View style={{flexDirection:'column'}} >
                    <Icon
                        name='home'
                        type='font-awesome'
                        color='#000'
                        onPress={() =>navigation.toggleDrawer}/>
                </View>



            </View>

        );
    }
}
export default Footer;