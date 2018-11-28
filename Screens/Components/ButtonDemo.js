import React from 'react';
import {Button, Text, View} from 'react-native';

class ButtonDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "A simple button"
        }
        this.handlePress = this.handlePress.bind(this)
    }


    handlePress() {
        this.setState({title: "Yay you pressed it!"})
    }
    
    render() {
        return (
            <View>
                <Button 
                    title={this.state.title}
                    onPress={this.handlePress}
                />
            </View>
        )
    }
    
}
export default ButtonDemo