import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact__cta">Contact</h1>
        {this.props.instagram ? <a href={this.props.instagram} class="contact__instagram">Instagram</a> : null}
        {this.props.twitter ? <a href={this.props.twitter} class="contact__twitter">Twitter</a> : null}
        {this.props.email ? <a href={this.props.email} class="contact__email">Email</a> : null}

        {this.props.children ? 
        <div className="contact__content">
          {this.props.children}
        </div> : null }
      </div>
    );
  }
}

export default Contact;
