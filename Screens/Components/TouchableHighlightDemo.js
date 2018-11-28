import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

class TouchableHighlightDemo extends React.Component {
    render() {
        return (
            <TouchableHighlight>
                <View>
                    <Text>
                        This text is contained within a touchable highlight component.
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

}
export default TouchableHighlightDemo