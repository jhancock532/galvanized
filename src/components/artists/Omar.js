import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Omar extends React.Component {

  render() {
    return (
      <div className="showcase__content Omar-Hamouda">
        <h1 className="showcase__artwork-title">The Cozy Tapes</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=KB85n0S5GMM" subtitle="Final Piece"/>

        <h1 className="showcase__author-subtitle">By Omar Hamouda</h1>

        <ArtistProfile src="../img/vincent/vincent-small.png" alt="Photo of Omar Hamouda">
        Omar Hamouda is currently focusing on music production and videography. 
        His work blends aesthetics through the use of both contemporary and retro 
        technologies and references. Omar also draws inspiration from a number of 
        cultures and is not bound by the conventions of specific genres.
        </ArtistProfile>

        <Contact instagram="https://www.instagram.com/omarhamouda_/" />
        
      </div>
    );
  }
  
}

export default Omar;