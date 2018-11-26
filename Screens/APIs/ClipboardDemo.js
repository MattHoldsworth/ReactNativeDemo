import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Clipboard } from 'react-native';

class ClipboardDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            clipboardContent: null,
        };
    }

    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString();
        this.setState({ clipboardContent })
    };

    writeToClipboard = async () => {
        await Clipboard.setString(this.state.text);
        alert('Copied to Clipboard!');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>Clipboard Contents: </Text>
                <Text>{this.state.clipboardContent}</Text>
                <Button
                onPress={this.readFromClipboard}
                title="Read from Clipboard"
                />
            <View style={styles.seperator} />
                <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder="Type here..."
                />
                <Button
                onPress={this.writeToClipboard}
                title="Write to Clipboard"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldText: {
        fontWeight: '600',
    },
    seperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'gray',
        width: '80%',
        marginVertical: 40,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
    },
});

export default ClipboardDemo