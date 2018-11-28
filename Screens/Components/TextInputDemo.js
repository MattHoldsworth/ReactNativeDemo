import React from 'react';
import { TextInput, Text, View } from 'react-native';

class TextInputDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: "Useless placeholder"
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText = { (text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
    
}
export default TextInputDemo