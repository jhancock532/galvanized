import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';

class Omar extends React.Component {

  render() {
    return (
      <div className="showcase__content Omar-Hamouda">
        <h1 className="showcase__artwork-title">The Cozy Tapes</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=KB85n0S5GMM" subtitle="Final Piece"/>

        <h1 className="showcase__author-subtitle">By Omar Hamouda</h1>
        <p className="showcase__paragraph"></p>
        
      </div>
    );
  }
  
}

export default Omar;