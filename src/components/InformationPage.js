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
          
          <h2 className="information-page__subtitle">Credits</h2>
          <p className="information-page__paragraph">
            <ul className="information-page__list">
              <li>This website was made by <a href="/james">James Hancock</a> (frontend development) and <a href="/tim">Tim McCarthy</a> (backend development).</li>
              <li>Artist profile pictures were produced by <a href="/jodie">Jodie Hartland</a>.</li> 
              <li><a href="/jack">Jack Myers</a> edited the showreel with <a href="/omar">Omar Hamouda</a> providing music.</li> 
              <li><a href="/jiaxian">Jiaxian Liang</a> designed the logo and branding; he was helped by <a href="/chonlachat">Chonlachat Srisompetch</a> for further 
            graphic design work.</li>
              <li><a href="/vincent">Vincent Keep</a> lead the social media campaign with help from <a href="/puppyuck">Puppyuck</a> and <a href="/lemayrt">Lemayrt</a>.</li>
              <li><a href="/molly">Molly Stanners Putland</a> hosted the private view, with <a href="/patrick">Patrick Robinson</a> administrating, arranging speakers 
              and liasing with the other MA shows at the University of Brighton.</li>
            </ul>
          </p>

          <h2 className="information-page__subtitle">Special Thanks</h2>
          <p className="information-page__paragraph">
            <ul className="information-page__list">
              <li>A <span style={{fontSize: "32px", fontWeight: "bold"}}>huge thanks</span> to Sue Gollifer for leading this course!</li>
              <li>A <span style={{letterSpacing: "4px", fontWeight: "bold"}}>long thank you</span> to all of our tutors; Alex May, 
              Angie Taylor, Ben Sheehan, Jesse Black Mooney, Laurence Hill, Luciana Haill, Paul Bunkham and Sam Proud;  
                for all your advice, support and the technical skills workshops.</li>
              <li>With a final loving thank you to friends and family who have supported us during this Masters degree. ❤️</li>
            </ul>
          </p>

          <p className="showcase__gap"/>
        </div>
      </div>
    );
  }
}

export default InformationPage;