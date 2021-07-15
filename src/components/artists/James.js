import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class James extends React.Component {

  render() {
    return (
      <div className="showcase__content James-Hancock">
        <h1 className="showcase__artwork-title">You Are Online</h1>

        <img className="showcase__image" src="../img/james/darkmode.png" alt="Default User reads alt text. Gets slightly confused."/>

        <p className="showcase__paragraph">
        You Are Online is a website about how we engage with the modern internet. 
        You play the role of the Default User, a grey character working productively at a desk, 
        lost in the world of colours and experiences.
        However, as the User discovers, progress isn't always as great as it seems...
        </p>

        <div className="showcase__gap"/>
        <div className="showcase__center-button">
          <a target="_blank" rel="noreferrer" href="https://you-are.online" className="button">Visit Website</a>
        </div>

        <p className="showcase__paragraph">
        When we consume content online, we are distracted from the feelings of our body, leading us
        to forget our physical presence.
        Without this presence, our mind is held in the world of binary signals displayed by our screens.
        We are then carefully manipulated 
        by the creators of modern web services, who have invested heavily in making products 
        that trap our attention, keeping us entertained and engaged.
        </p>

        <div className="showcase__two-images">
          <img className="showcase__image" src="../img/james/detail.jpg" alt="todolist"/>
          <img className="showcase__image" src="../img/james/glitched.png" alt="social media"/>
        </div>

        <p className="showcase__paragraph">
        This website reduces the participants humanity into a series of mindless interactions 
        for the website's algorithms, mirroring how humans engage in the attention economy of today.
        The human is just another object in the internet's codes and analytics; their body is discarded.
        </p>

        
        <VideoEmbed url="https://www.youtube.com/watch?v=ubBt-ZOB398" subtitle="Playthrough Supercut"/>

        <p className="showcase__paragraph">
        This website is designed for desktop devices. If you're on a mobile device and curious to see more,
        you can watch an edited playthrough of the experience using the YouTube video above.
        </p>

        <h1 className="showcase__author-subtitle">Created By James Hancock</h1>
        <ArtistProfile src="../img/james/james.png" alt="James Hancock">
        James Hancock is a creative website developer with a background in computer science 
        and innovation design. James presents the politics of the internet through striking 
        online experiences; from playing with the fundamental operations of the web browser 
        in <a target="_blank" rel="noreferrer" href="https://jameshancock.art/labyrinth/">labyr.in/th/</a>, 
        he’s also created complex 3D scenes in <a target="_blank" rel="noreferrer" href="https://fingerprint.garden">fingerprint.garden</a> and <a target="_blank" rel="noreferrer" href="https://you-are.online">you-are.online</a>. His practice is focused on learning new technologies, preparing 
        him for future work in creative web development.
        All projects are made on a no-cost basis and are open-sourced for collaborators to 
        add to or steal from.
        </ArtistProfile>

        <Contact email="jhancock532@gmail.com" github="https://github.com/jhancock532" instagram="https://www.instagram.com/jhancock532/" twitter="https://twitter.com/jhancock532" />
      </div>
    );
  }
  
}

export default James;