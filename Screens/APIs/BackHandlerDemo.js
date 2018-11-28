import React from 'react';
import { BackHandler,  Text, View} from 'react-native';

class BackHandlerDemo extends React.Component {

    static navigationOptions =({navigation}) => {
        return {
            headerLeft: null,
        }  
    }

    constructor(props) {
        super(props)
        this.handleBackButtonPress = this.handleBackButtonPress.bind(this)
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPress)
    }

    handleBackButtonPress() {
        return this.props.navigation.goBack(null);
    }

    render() {
        return(
            <View>
                <Text>
                    Use the physical back button on your Android device.
                </Text>
            </View>
        )
    }
    
}
export default BackHandlerDemo