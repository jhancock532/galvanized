import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact__cta">Contact</h1>
        <div className="contact__main-links">
          {this.props.email ? <a target="_blank" rel="noreferrer" href={"mailto:" + this.props.email} class="contact__email button">Email 📧</a> : null}
          {this.props.linkedin ? <a target="_blank" rel="noreferrer" href={this.props.linkedin} class="contact__email button">LinkedIn 💼</a> : null}
          {this.props.instagram ? <a target="_blank" rel="noreferrer" href={this.props.instagram} class="contact__instagram button">Instagram 📷</a> : null}
          {this.props.twitter ? <a target="_blank" rel="noreferrer" href={this.props.twitter} class="contact__twitter button">Twitter 🐦</a> : null}
          {this.props.youtube ? <a target="_blank" rel="noreferrer" href={this.props.youtube} class="contact__youtube button">YouTube 🎥</a> : null}
          {this.props.github ? <a target="_blank" rel="noreferrer" href={this.props.github} class="contact__website button">Github 💻</a> : null}
          {this.props.website ? <a target="_blank" rel="noreferrer" href={this.props.website} class="contact__website button">Personal Website</a> : null}
        </div>
        {this.props.children ? 
        <div className="contact__content">
          {this.props.children}
        </div> : null }
      </div>
    );
  }
}

export default Contact;
