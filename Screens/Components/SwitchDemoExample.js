import React from 'react';
import { View } from 'react-native';
import SwitchDemo from './SwitchDemo'

export default class SwitchDemoExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           switch1Value: false,
        }
    }

     toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }

     render() {
        return (
           <View>
                <SwitchDemo
                    toggleSwitch1 = {this.toggleSwitch1}
                    switch1Value = {this.state.switch1Value}
                />
           </View>
        );
    }

}