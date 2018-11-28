import React from 'react';
import { FlatList, Image, InteractionManager, Text, View, Image } from 'react-native';

class InteractionManagerDemo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {renderPlaceholderOnly: true};
    }
    
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }
    
    render() {
        if (this.state.renderPlaceholderOnly) {
            return this.renderPlaceholderView();
        }
        return (
            <View>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => 
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: 'http://31.media.tumblr.com/tumblr_m8ic009VjR1qi7ul8o1_500.gif'}}
                        />
                    }
                />
            </View>
        );
    }
    
    renderPlaceholderView() {
        return (
            <View>
                <Text>
                    {"Loading..."}
                </Text>
            </View>
        );
    }

}
export default InteractionManagerDemo