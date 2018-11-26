import React from 'react';
import { TextInput, Keyboard } from 'react-native';

class KeyboardDemo extends React.Component {
    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow () {
        alert('Keyboard Shown');
    }
    
    _keyboardDidHide () {
        alert('Keyboard Hidden');
    }
    
    render() {
        return (
            <TextInput
                onSubmitEditing={Keyboard.dismiss}
            />
        );
    }
}

export default KeyboardDemo