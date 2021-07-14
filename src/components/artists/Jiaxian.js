import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Jiaxian extends React.Component {

  render() {
    return (
      <div className="showcase__content Jiaxian-Liang">
        <h1 className="showcase__artwork-title">The World of Go</h1>

        <img className="showcase__image" src="../img/daniel/artwork.jpg" alt="Go board transforming the world."/>

        <p className="showcase__paragraph">
          A myth says that two immortals observe the go board as they observe the world 
          and their placement of white and black stones over 361 intersections represent 
          the passage of the days and nights. About the origin of Go game, it also relates 
          to the creation of the earth from chaos. As a fan of Go but also an artist, 
          I attempt to reappear the myth via digital media technique. People can experience 
          what the myth records by interacting with this work.
        </p>

        <p className="showcase__paragraph">
        In this work, you can see how a shan shui painting (a style of Chinese traditional 
        painting), a map and a world (or a planet) is created based on the pattern of stones 
        when the play proceeds.
        </p>
        
        <VideoEmbed url="https://www.youtube.com/watch?v=Cyf8uB5NB0w" subtitle="Lee Sedol (Black) vs Lee Changho (White) 2003"/>

        <p className="showcase__paragraph">
        This work can provide people with a more intuitive way to comprehend the abstract beauty 
        of harmony insides Go without tacit knowledge of Go. 
        </p>

        <p className="showcase__paragraph">
        <ul className="showcase__list">
          <li>This project is open source. If you want to play this installation, here is <a rel="noreferrer" target="_blank" href="../TheWorldOfGo.zip">the download link</a>.</li>
          <li>You also need to <a rel="noreferrer" target="_blank" href="https://derivative.ca/download">download TouchDesigner</a> to run this work.</li>
          <li>If you cannot access the file, you can watch a livestream <a rel="noreferrer" target="_blank" href="https://www.twitch.tv/mach1nerose">on Twitch</a>.</li>
        </ul>
        </p>
        
        <div className="showcase__two-images">
          <img className="showcase__image" src="../img/daniel/Hideo Otake-Ma Xiaochun.jpg" alt="Go board transforming the world."/>
          <img className="showcase__image" src="../img/daniel/Wu Qingyuan-Shoji Hashimoto.jpg" alt="Go board transforming the world."/>
        </div>
        <div className="showcase__image-description">Hideo Otake vs Ma Xiaochun, followed by Wu Qingyuan vs Shoji Hashimoto</div>
        
        <VideoEmbed url="https://www.youtube.com/watch?v=4-ByK9SeB54" subtitle="Alpha Go (Black) vs Lee Sedol (White) 2016"/>
        
        <h1 className="showcase__author-subtitle">Created By Jiaxian Liang</h1>
        <ArtistProfile src="../img/daniel/daniel.png" alt="Photo of Jiaxian Liang">
        Liang Jiaxian is a contemporary illustrator and visual designer mainly focusing on slide,
        UI and graphic design. His recent practice has shifted to interactive fiction and 
        interactive installation. It relates to art transformation via code and explores a 
        consistency between different media with the same content. A kind of natural beauty 
        that people can immerse into the work and feel relax is what he attempts to achieve.
         However, all his works are driven by his meaningless flash of inspirations and 
         imagination, and thus and more importantly, are for fun. 
        </ArtistProfile>

        <Contact email="mecok3263@outlook.com" website="www.machinerose.com"/>

      </div>
    );
  }
  
}

export default Jiaxian;