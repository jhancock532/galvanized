import React from 'react';

class ArtistProfile extends React.Component {
  render() {
    return (
      <div className="artist-profile">
        <img className="artist-profile__image" src={this.props.src} alt={this.props.alt}/>
        <div className="artist-profile__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ArtistProfile;
