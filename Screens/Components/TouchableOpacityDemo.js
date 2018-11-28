import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class TouchableOpacityDemo extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View>
                    <Text>
                        This text is touchable because it is contained within a touchable opacity component.
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    
}
export default TouchableOpacityDemo