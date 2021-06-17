import React from 'react';
import ArtistTitle from '../showcase/ArtistTitle';

class James extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="artist-showcase__container">
        <ArtistTitle name="James Hancock" classStyling="James-Hancock__title"/>
      </div>
    );
  }
}

export default James;