import React from 'react';
import ARTIST_DETAILS from '../artistDetails';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitComment = this.submitComment.bind(this);
  }

  submitComment() {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://135.125.205.105/mashow/save_comment.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return;
      }
  
      if (this.status === 200) {
        alert("Submitted successfully!");
      }
    };

    const POST_DATA = [
      "body=" + document.getElementById("comment-form-body").value,
      "name=" + document.getElementById("comment-form-name").value,
      "for=" + document.getElementById("comment-form-response-selector").value,
    ].join("&");

    xhr.send(POST_DATA);

    this.props.closeCommentForm();
  }

  render() {

    const artistOptions = ARTIST_DETAILS.map((artist) => 
      
      <option 
        className="comment-form__artist-option" 
        key={artist.name} 
        selected={(this.props.artistSelected === artist.name)}
      >
        {artist.name}
      </option>
    );

    return (
      <div className="comment-form">
        <div className="comment-form__form">
          <h2 className="comment-form__title">Leave a Comment</h2>
          <textarea 
            className="comment-form__comment" 
            id="comment-form-body" name="body" 
            placeholder="Write your comment here..."
            maxLength="512"
          ></textarea>
          <div className="comment-form__flex-pair">
            <p className="comment-form__label">Your name:</p>
            <input className="comment-form__name" type="text" id="comment-form-name" name="name" placeholder="(optional)"></input>
          </div>
          <div className="comment-form__flex-pair">
            <p className="comment-form__label">Comment for:</p>
            <div className="comment-form__feedback-target-dropdown">
              <select className="comment-form__artist-selector" id="comment-form-response-selector">
                <option className="comment-form__artist-option">Everyone</option>
                { artistOptions }
              </select>
            </div>
          </div>
          <div className="comment-form__button-pair">
            <button className="comment-form__cancel-button button--subtle" onClick={this.props.closeCommentForm}>Cancel</button>
            <button className="comment-form__submit-button button" onClick={this.submitComment}>Submit!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;