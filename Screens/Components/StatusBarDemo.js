import React from 'react';
import { StatusBar } from 'react-native';

class StatusBarDemo extends React.Component {
    render() {
        return (
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        )
    }
    
}
export default StatusBarDemo