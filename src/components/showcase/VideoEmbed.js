import React from 'react';
import ReactPlayer from 'react-player/lazy';

class VideoEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let playerHeight = "200px";
    if (window.innerWidth > 500){
      playerHeight = "360px";
    }

    return (
      <div className="showcase__video-embed">
        <ReactPlayer width="100%" height={playerHeight} url={this.props.url} config={{ youtube: {
      playerVars: { controls: 1, fs: 1 }
    }}} />
        { this.props.dotsLeft ? <div className="showcase__video-embed__dots-left"></div> : null }
        { this.props.subtitle ? <div className="showcase__video-embed__subtitle">{this.props.subtitle}</div> : null }
      </div>
    );
  }
}

export default VideoEmbed;
