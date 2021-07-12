import React from 'react';
import VideoEmbed from './showcase/VideoEmbed';

class InformationPage extends React.Component {

  render() {

    return (
      <div className="information-page">
        <div className="artist-showcase__exit-button">
          <div className="button" onClick={this.props.toggleShowInformation}>Return to Homepage ✖</div>
        </div>
        <div className="information-page__content">
          <h1 className="information-page__title">About Galvanised</h1>
          <img className="information-page__logo" src="../img/logos.png" alt="Galvanized logo"/>
          <p className="information-page__paragraph">
            Galvanised is the course show for the Digital Media Arts cohort of 2021.
          </p>
          <VideoEmbed url="https://www.youtube.com/watch?v=ysz5S6PUM-U" subtitle="Showreel"/>

        </div>
      </div>
    );
  }
}

export default InformationPage;