import React from 'react';
import VideoEmbed from './showcase/VideoEmbed';

class InformationPage extends React.Component {

  render() {

    return (
      <div className="information-page">
        <div className="artist-showcase__exit-button">
          <div className="button" onClick={this.props.toggleShowInformation}>Return to Homepage ✖</div>
        </div>
        <div className="information-page__content">
          <h1 className="information-page__title">About Galvanised</h1>
          <img className="information-page__logo" src="../img/logos.png" alt="Galvanized logo"/>
          <p className="showcase__gap"/>
          <VideoEmbed url="https://www.youtube.com/watch?v=xqksblQJ9dw" subtitle="Showreel"/>
          <p className="information-page__paragraph">
          Galvanised is an online exhibition displaying the work of 13 digital media artists completing their degrees at the University of Brighton.
          <br/><br/>
          The artists each come from different artistic and academic background, specialising in a variety of skills. 

          The show delivers a diverse range of creative practices, such as interactive virtual 
          installations, 3D environments, creative coding and machine learning.
          <br/><br/>
           Throughout the 
          last year, the artists have adapted to new and unconventional ways of working, as a 
          result of the pandemic. New challenges have provided new opportunities to consider the 
          way we interact with digital art, and Galvanised brings this together with a range of 
          immersive and interactive pieces.
          </p>
          <p className="showcase__gap"/>

        </div>
      </div>
    );
  }
}

export default InformationPage;