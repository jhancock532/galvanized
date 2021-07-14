import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Puppyuck extends React.Component {

  render() {
    return (
      <div className="showcase__content Puppyuck">
        <h1 className="showcase__artwork-title">Evangeline</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=qzYU-RZ_Yo0"/>
        <div className="showcase__gap"/>
        <p className="showcase__paragraph">
        Puppyuck’s conclusive works - a series of 3D audio-visual projects, reimagine biblical 
        angels as digital entities existing in cyberspace. As a self-identified member of the 
        ‘internet generation’, this work speaks to a personal sense of disillusionment, 
        nihilism and digital claustrophobia, contextualised by the rapid evolution of 
        technologies in the past decades and the increasing complexity of the online world. 
        Puppyuck uses the digital uncanny; ambiguously familiar icons and user interfaces 
        of past technologies, to evoke feelings of nostalgia and loss.
        </p>
        
        <VideoEmbed url="https://www.youtube.com/watch?v=OP0xyd0l68E"/>
        <div className="showcase__gap"/>


        <h1 className="showcase__author-subtitle">Created By Puppyuck</h1>
        <ArtistProfile src="../img/puppyuck/puppyuck.png" alt="Puppyuck">
        Puppyuck is a visual artist primarily invested in the subversion and empowerment of 
        aesthetic innocence. Her work thematically utilises a defiant sense of femininity, 
        exploring concepts of youth, disturbance and self. Puppyuck has explored a number 
        of digital mediums in previous works, focusing on image manipulation, portraiture, 
        3D and augmented reality. As a young person raised on the internet, much of her 
        work is channelled through an online lens and offers a uniquely digital perspective 
        to each subject matter.
        </ArtistProfile>

        <Contact instagram="https://www.instagram.com/puppyuck/" />
        
      </div>
    );
  }
  
}

export default Puppyuck;