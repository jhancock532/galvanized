import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Chonlachat extends React.Component {

  render() {
    return (
      <div className="showcase__content Chonlachat-Srisompetch">
        <h1 className="showcase__artwork-title">Machine Study in Thai Art</h1>
        <VideoEmbed url="https://youtu.be/QGktR2UVZGA" subtitle="Exhibition Showcase"/>
        
        <p className="showcase__paragraph">
          Machine Study in Thai Art uses machine learning to produce Thai generative artworks;
          the pictures are generated based on a dataset of 600 images using the StyleGAN algorithm. 
          This project emulates Thai artwork, sharing the results in an online exhibition website, linked below.
        </p>

        <div className="showcase__center-button">
          <a target="_blank" rel="noreferrer" href="http://www.csxwork.com/works/machine1/" className="button button--large">Visit Website</a>
        </div>

        <VideoEmbed url="https://youtu.be/r_SSzgs5xqY" subtitle="Machine Learning Showcase"/>
        <VideoEmbed url="https://youtu.be/X6jkDAxpGvk" subtitle="Particle Effect Demonstration"/>
        <VideoEmbed url="https://youtu.be/zJnyTr0CBAg" subtitle="Learning Process"/>

        <h1 className="showcase__author-subtitle">Created By Chonlachat Srisompetch</h1>
        <ArtistProfile src="../img/paul/paul.png" alt="Chonlachat Srisompetch">
        Chonlachat Srisompetch (Paul) is a technophile who is focusing on Extended Reality, 
        Machine Learning, Real-time interactive installation and New media movements. He 
        aspires to apply his technological skills to tourism, education and traditional cultures. 
        His previous works have shown at venues including Seasonal Forest (UK), 3D Pickup Customisation 
        (Thailand), Thai Costume Projection Mapping (Thailand), Interactive Firework Room 
        (Thailand). His latest project, Machine Study in Thai Art, is showcasing artworks as
        an interactive online exhibition in Twitch. He mainly uses Python, C#, C++, Javascript, and GLSL.
        </ArtistProfile>

        <Contact 
        email="chonlachat.sri@hotmail.com" 
        instagram="https://www.instagram.com/pp0oivi/"
        linkedin="https://www.linkedin.com/in/chonlachat-srisompetch-3a8698163/" 
        website="http://www.csxwork.com/"
        />
      </div>
    );
  }
  
}

export default Chonlachat;