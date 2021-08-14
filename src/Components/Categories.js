import React,{Component} from 'react';
import {Text,View,ScrollView,TouchableOpacity} from 'react-native';
import config from "../../config/config";


const categories = ["Entertainment","Business","Politics","Health","Technology","Sports"]

class Categories extends Component {

    state={

    }
    componentDidMount() {
        console.log(config.API_KEY)
    }

    render() {
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {categories.map((category,index) =>(
                    <TouchableOpacity key={index}

                    onPress={()=>this.props.navigation.navigate('GetNews',{
                        category
                    })}
                    >
                    <View  >
                    <Text style={{padding:12,borderWidth:0.6,borderColor:'black',fontSize:'15',borderRadius:20,
                        margin:5,}}> {category}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}
export default Categories;