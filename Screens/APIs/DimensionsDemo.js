import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native'

class DimensionsDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
        this.getDimensions = this.getDimensions.bind(this)
    }

    getDimensions() {
        var { height, width } = Dimensions.get('window')
        this.setState({height: height, width: width})
    }

    render() {
        return (
            <View>
                <Button
                title="Get window dimensions"
                onPress={this.getDimensions}
                />
                <Text>
                    {"The window width is: "}{this.state.width}{"\n"}{"The window height is: "}{this.state.height}
                </Text>
            </View>
        )
    }
}

export default DimensionsDemo