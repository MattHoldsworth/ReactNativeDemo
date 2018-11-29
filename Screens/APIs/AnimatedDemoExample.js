import React from 'react';
import AnimatedDemo from './AnimatedDemo'
import { Text, View } from 'react-native';

class AnimatedDemoExample extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <AnimatedDemo style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </AnimatedDemo>
            </View>
        )
    }
}

export default AnimatedDemoExample