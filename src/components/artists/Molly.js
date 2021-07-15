import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Molly extends React.Component {

  render() {
    //<img className="showcase__image" src="../img/molly/coverimage.png" alt="Stranded"/>
    return (
      <div className="showcase__content Molly-Stanners-Putland">

        <h1 className="showcase__artwork-title">Stranded the Musical</h1>

        <div className="showcase__gap"/>
        <VideoEmbed url="https://www.youtube.com/watch?v=aUJF5EsxnZQ"/>
        <div className="showcase__gap"/>
        
        <p className="showcase__paragraph">
        Molly’s biggest passion is combining the musical world with the digital art world.
        Her Magnum Opus is Stranded the Musical, as shown in this exhibition. Molly created 
        this over a series of weeks using just her apartment and the sims as sets. 
        This musical aims to show who Molly truly is. Showing a new vulnerable side to her. 
        All expect one song are written by Molly. It is also filmed, edited, mixed and just 
        about everything else by Molly. Molly hopes that one day she gets to perform this 
        musical live.
        </p>
        <p className="showcase__paragraph">
        Content warning: Stranded contains mild nudity, themes unsuitable for children and flashing lights
        </p>


        <h1 className="showcase__author-subtitle">Created By Molly Stanners Putland</h1>
        <ArtistProfile src="../img/molly/molly.png" alt="Molly Stanners Putland">
        Molly Stanners Putland is a filmmaker, musician, photographer and illustrator. After 
        completing the BA in illustration also at the university of Brighton, Molly decided 
        to embark on the master’s in digital artand Media. Molly is known for her imaginative 
        films often with a musical element. Molly has recently rediscovered a passion for 
        machinima and uses the life simulator “The Sims 2” as a tool to create her original 
        stories. Molly’s work covers themes of pop culture, queer identity, neurodiversity, 
        history and socialism. She also creates video essays about her 2 greatest passions:
        cartoons and musicals.
        </ArtistProfile>

        <Contact 
        instagram="https://www.instagram.com/mollystannersart/" 
        youtube="https://www.youtube.com/channel/UCo3Ci2ctPJyWoi75qiDXQvg"
        website="https://lifeinthistime.com" 
        />
      </div>
    );
  }
  
}

export default Molly;