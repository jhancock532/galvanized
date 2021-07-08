import React from 'react';
import James from './artists/James';
import Jodie from './artists/Jodie';
import Fraser from './artists/Fraser';

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
    if (this.props.artistSelected === "Fraser Owens") artistContent = <Fraser />;

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