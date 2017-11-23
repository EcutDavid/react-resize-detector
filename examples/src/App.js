import React, { Component } from 'react';
import ResizeDetector from 'react-resize-detector';

const s = {
  wrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  target: {
    width: 1,
    height: 1,
    background: 'skyblue',
  },
};

class App extends Component {
  state = {
    scale: 1,
  };

  componentDidMount() {
    window.onresize = this.onResize;
  }

  onResize = () => {
    const PADDING = 60;
    const bodyWidth = document.body.offsetWidth;
    const bodyHeight = document.body.offsetHeight;
    const scale = (bodyWidth > bodyHeight ? bodyHeight : bodyWidth) - (2 * PADDING);

    this.setState({ scale });
  };

  render() {
    return (
      <div style={s.wrapper}>
        <div style={{ transform: `scale(${this.state.scale})`, ...s.target }} />
        <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
      </div>
    );
  }
}

export default App;
