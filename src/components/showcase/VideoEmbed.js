import React from 'react';
import ReactPlayer from 'react-player/lazy';

class VideoEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="showcase__video-embed">
        <ReactPlayer width="100%" url={this.props.url} />
        { this.props.dotsLeft ? <div className="showcase__video-embed__dots-left"></div> : null }
        { this.props.subtitle ? <div className="showcase__video-embed__subtitle">{this.props.subtitle}</div> : null }
      </div>
    );
  }
}

export default VideoEmbed;
