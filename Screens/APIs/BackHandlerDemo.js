import React from 'react';
import { BackHandler, Button, View } from 'react-native';

class BackHandlerDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleBackButtonPress = this.handleBackButtonPress.bind(this)
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPress)
    }

    handleBackButtonPress() {
        this.props.navigation.goBack(null);
        return true;
    }

    render() {
        return(
            <View>

            </View>
        )
    }
}

export default BackHandlerDemo