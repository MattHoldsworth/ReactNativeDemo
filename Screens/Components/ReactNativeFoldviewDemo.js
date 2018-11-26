import React from 'react';
import { Button, Text, View } from 'react-native';
import FoldView from 'react-native-foldview';

class ReactNativeFoldviewDemo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    componentWillMount() {
        this.flip = this.flip.bind(this);
      }
    
      flip() {
        this.setState({
          expanded: !this.state.expanded,
        });
      }
    
      renderFrontface() {
        return (
          <Frontface />
        );
      }
    
      renderBackface() {
        /**
         * You can nest <FoldView>s here to achieve the folding effect shown in the GIF above.
         * A reference implementation can be found in examples/Simple.
         */
        return (
          <Backface />
        );
      }
    
      render() {
        return (
          <FoldView
            expanded={this.state.expanded}
            renderBackface={this.renderBackface}
            renderFrontface={this.renderFrontface}
          >
            <Base />
          </FoldView>
        );
      }
}

export default ReactNativeFoldviewDemo