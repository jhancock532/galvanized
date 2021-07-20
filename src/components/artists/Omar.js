import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
//import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Omar extends React.Component {

  render() {
    return (
      <div className="showcase__content Omar-Hamouda">
        <h1 className="showcase__artwork-title">The Cozy Tapes</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=KB85n0S5GMM" subtitle="Final Piece"/>

        <p className="showcase__paragraph">
        For the last 10 months, Omar Hamouda has been developing a videography project which involves
        the documentation of his daily life and activities during the pandemic, and where we have not
        had access to university facilities. The project incorporates elements of videography, 
        photography, music production, where they are all brought into the digital art realm. 
        The documentation is split into segments – starting from September 2020 up until right 
        before the final unit hand in date in July 2021. The projects main aim was to find 
        creative outlets within the simple everyday lives we all lead.
        </p>

        <h1 className="showcase__author-subtitle">By Omar Hamouda</h1>

        <p className="showcase__paragraph">
        Omar Hamouda is currently focusing on music production and videography. 
        His work blends aesthetics through the use of both contemporary and retro 
        technologies and references. Omar also draws inspiration from a number of 
        cultures and is not bound by the conventions of specific genres.
        </p>

        <Contact instagram="https://www.instagram.com/omarhamouda_/" />
        
      </div>
    );
  }
  
}

export default Omar;