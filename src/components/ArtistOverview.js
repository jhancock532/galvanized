import React from 'react';

class ArtistOverview extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
    this.artistCSS = props.artistDetails[0].name.replace(" ", "-");
  }

  handleClick(){
    this.props.setActiveArtist(this.props.artistDetails[0].name);
  }

  //Can the parent element detect hover events for all children, and click events???
  //  onMouseEnter={() => setIsShown(true)}
  //  onMouseLeave={() => setIsShown(false)}
  //  https://upmostly.com/tutorials/react-onhover-event-handling-with-examples

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