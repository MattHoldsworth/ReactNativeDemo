import React from 'react';
import { Image, Text, View } from 'react-native';
import logo from './logo.png'

class ImageDemo extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={logo}
                />
            </View>
        )
    }
    
}
export default ImageDemo