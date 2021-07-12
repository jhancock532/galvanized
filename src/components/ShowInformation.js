import React from 'react';

class ShowInformation extends React.Component {
  render() {
    return (
      <div className="show-information">
        <div className="show-information__title">
          <img className="show-information__logo" src="./img/EARLY-LOGO.png" alt="galvanised"/>
        </div>
        <div className="show-information__description">
          <p>Digital Media Arts 2021</p>
          <p>Master's Degree Exhibition</p>
          <p>University of Brighton</p>
          <button onClick={this.props.toggleShowInformation} class="button button--small show-information__button">Exhibition Information</button>
        </div>
      </div>
    );
  }
}

export default ShowInformation;