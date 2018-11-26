import React from 'react';
import { AppState, Text } from 'react-native';

class AppStateDemo extends React.Component{
    state = {
        appState: AppState.currentState
      }
    
      componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
      }
    
      componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
      }
    
      _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState});
      }
    
      render() {
        return (
          <Text>
          {"\n"}
          {"\n"}
          Current state is: {this.state.appState}</Text>
        );
      }    
}

export default AppStateDemo
