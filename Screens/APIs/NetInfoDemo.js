import React from 'react';
import { View, Alert, NetInfo } from 'react-native';

class NetInfoDemo extends React.Component {

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
    
        NetInfo.isConnected.fetch().done(
          (isConnected) => { this.setState({ status: isConnected }); }
        );
    }
    
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }
    
    handleConnectionChange = (isConnected) => {
            this.setState({ status: isConnected });
            Alert.alert(message=`is connected: ${this.state.status}`);
    }


    render() {
        return(
            <View>

            </View>
        )
    }
}

export default NetInfoDemo