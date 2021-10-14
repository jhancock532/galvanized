import React from 'react';

class ArtistOverview extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.artistCSS = props.artistDetails[0].name.replace(" ", "-");
  }

  handleClick(){
    this.props.setActiveArtist(this.props.artistDetails[0].name);
  }

  render(){
    return (
      <div className={this.artistCSS}>
        <h2 className={this.artistCSS + "__title"} onClick={this.handleClick}>
          {this.props.artistDetails[0].title}
        </h2>
        <h2 className={this.artistCSS + "__name"} onClick={this.handleClick}>
          {"By " + this.props.artistDetails[0].name}
        </h2>
      </div>
    );
  }
}

export default ArtistOverview;