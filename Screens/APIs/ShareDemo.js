import React from 'react';
import { Button, Share, View } from 'react-native';

class ShareDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    shareContent() {
        Share.share({message: "Enter some content to share", title:"Share"}, {dialogTitle:"Choose an app"})
    }

    render() {
        return(
            <View>
                <Button 
                    title="Share"
                    onPress={this.shareContent}
                />
            </View>
        )
    }

}
export default ShareDemo