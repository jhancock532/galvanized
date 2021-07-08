import React from 'react';

import James from './artists/James';
import Jack from './artists/Jack';
import Tim from './artists/Tim';
import Jodie from './artists/Jodie';
import Vincent from './artists/Vincent';
import Lemayr from './artists/Lemayr';
import Puppyuck from './artists/Puppyuck';
import Patrick from './artists/Patrick';
import Omar from './artists/Omar';
import Molly from './artists/Molly';
import Jiaxian from './artists/Jiaxian';
import Ena from './artists/Ena';
import Chonlachat from './artists/Chonlachat';

class ArtistShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.artistSelected === null) return null;

    let artistContent;

    if (this.props.artistSelected === "James Hancock") artistContent = <James />;
    if (this.props.artistSelected === "Jodie Hartland") artistContent = <Jodie />;
    if (this.props.artistSelected === "Patrick Robinson") artistContent = <Patrick />;
    if (this.props.artistSelected === "Omar Hamouda") artistContent = <Omar />;
    if (this.props.artistSelected === "Molly Stanners Putland") artistContent = <Molly />;
    if (this.props.artistSelected === "Vincent Keep") artistContent = <Vincent />;
    if (this.props.artistSelected === "Tim McCarthy") artistContent = <Tim />;
    if (this.props.artistSelected === "Ena Koitabashi") artistContent = <Ena />;
    if (this.props.artistSelected === "Jack Myers") artistContent = <Jack />;
    if (this.props.artistSelected === "Jiaxian Liang") artistContent = <Jiaxian />;
    if (this.props.artistSelected === "Lemayr") artistContent = <Lemayr />;
    if (this.props.artistSelected === "Puppyuck") artistContent = <Puppyuck />;
    if (this.props.artistSelected === "Chonlachat Srisompetch") artistContent = <Chonlachat />;

    return (
      <div className="artist-showcase__container">
        <div className="artist-showcase__exit-button">
          <div className="button" onClick={this.props.removeActiveArtist}>Return to Homepage ✖</div>
        </div>
        { artistContent }
      </div>
    )
  }
}

export default ArtistShowcase;