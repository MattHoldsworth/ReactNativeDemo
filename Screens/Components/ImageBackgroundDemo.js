import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
import logo from './logo.png'

class ImageBackgroundDemo extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={logo}
                />
            </View>
        )
    }
    
}
export default ImageBackgroundDemo