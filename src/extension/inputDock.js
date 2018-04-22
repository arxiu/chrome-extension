import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';

export default class InputDock extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>

        <Dock
          position="bottom"
          seize = {100}
          dimMode="none"
         // defaultSize={0.4}
          isVisible={true}
          //dockStyle={{background: 'rgba(0, 0, 0, 0.81)'}}
        >

          Add stuff here
          
        </Dock>
      </div>
    );
  }
}

/*<iframe
            style={{
              width: '100%',
              height: '100%',
            }}
            frameBorder={0}
            allowTransparency="true"
            src={chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)}
          />*/