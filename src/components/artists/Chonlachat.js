import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';

class Chonlachat extends React.Component {

  render() {
    return (
      <div className="showcase__content Chonlachat-Srisompetch">
        <h1 className="showcase__artwork-title">Machine Study in Thai Art</h1>
        <VideoEmbed url="https://youtu.be/QGktR2UVZGA" subtitle="Painting I"/>
        
        <p className="showcase__paragraph">
          Machine Study in Thai Art uses machine learning to produce Thai generative artworks;
          the pictures are generated based on a dataset of 600 images using the StyleGAN algorithm. 
          This project emulates Thai artwork, sharing the results in an online exhibition website, linked below.
        </p>

        <div className="showcase__center-button">
          <a target="_blank" rel="noreferrer" href="http://www.csxwork.com/works/machine1/" className="button button--large">Visit Website</a>
        </div>
        <h1 className="showcase__author-subtitle">By Chonlachat Srisompetch</h1>
      </div>
    );
  }
  
}

export default Chonlachat;