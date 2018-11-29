import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

class SafeAreaViewIOSDemo extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex: 1}}>
                    <Text>Hello World!</Text>
                </View>
            </SafeAreaView>
        )
    }
    
}
export default SafeAreaViewIOSDemo