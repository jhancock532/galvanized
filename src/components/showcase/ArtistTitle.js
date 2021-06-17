import React from 'react';

class ArtistTitle extends React.Component {
  render() {
    return (
      <h1 className={this.props.classStyling}>{this.props.name}</h1>
    );
  }
}

export default ArtistTitle;