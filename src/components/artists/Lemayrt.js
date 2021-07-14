import React from 'react';
//import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Lemayrt extends React.Component {

  render() {
    return (
      <div className="showcase__content Lemayrt">
        <h1 className="showcase__artwork-title">Bianhua</h1>

        <img className="showcase__image" src="../img/lemayr/one.png" alt="Bianhua"/>

        <p className="showcase__paragraph">
        This work has been driven conceptually by the artist's relationship with social media 
        and online identity. For this reason, the environment is named 'Bianhua' which means
         a state of metamorphosis or transformation. It is representative of the artists own questions 
         of a shifting online sphere. The piece involves poetry, sound, and abstracted nature 
         to comment and reflect on our connection with the digitalised world. 'Bianhua' is a 
         contribution to how we can attempt create virtual worlds through alternative interactions. 
        </p>

        <img className="showcase__image" src="../img/lemayr/two.png" alt="Bianhua"/>

        <p className="showcase__paragraph">
          The final piece uses a combination of software to experiment and combine sound, 
          animation and poetry. This is delivered through a stereoscopic video 
          environment produced in Cinema 4D and After Effects. 
        </p>

        <h1 className="showcase__author-subtitle">Created By Lemayrt</h1>
        <ArtistProfile alt="Photo of lemayr." src="../img/lemayr/lemayr.png">
        Lemayrt's work varies in visuality, with a focus on colour, patterns and nature. 
        After studying Visual Art for their BA, the knowledge gained in art history influenced 
        their current research and practice within the digital realm. 
        </ArtistProfile>

        <Contact 
        website="https://www.lemayrt.com"
        instagram="https://www.instagram.com/lemayrt/" />
      </div>
    );
  }
  
}

export default Lemayrt;