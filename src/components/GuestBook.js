import React from 'react';
import Sketchpad from './Sketchpad';
import CommentForm from './CommentForm';
import SubmissionsGallery from './SubmissionsGallery';

class Guestbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      sketchpadOpen: false,
      commentFormOpen: false,
      submissionsGalleryOpen: false,
    };

    this.toggleGuestbookDisplay = this.toggleGuestbookDisplay.bind(this);
    this.toggleSketchpadDisplay = this.toggleSketchpadDisplay.bind(this);
    this.toggleCommentFormDisplay = this.toggleCommentFormDisplay.bind(this);
    this.toggleSubmissionsGalleryDisplay = this.toggleSubmissionsGalleryDisplay.bind(this);
  }

  toggleGuestbookDisplay(){
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  toggleSketchpadDisplay(){
    this.props.setNoScroll(!this.state.sketchpadOpen);
    this.setState(state => ({
      sketchpadOpen: !state.sketchpadOpen
    }))
  }

  toggleCommentFormDisplay(){
    this.props.setNoScroll(!this.state.commentFormOpen);
    this.setState(state => ({
      commentFormOpen: !state.commentFormOpen
    }))
  }

  toggleSubmissionsGalleryDisplay(){
    this.props.setNoScroll(!this.state.submissionsGalleryOpen);
    this.setState(state => ({
      submissionsGalleryOpen: !state.submissionsGalleryOpen
    }))
  }

  render() {
    return (
      <>
      <div className="guestbook">
        <div className="guestbook__tab" onClick={this.toggleGuestbookDisplay}>
        { this.state.isOpen ? "Close Guestbook ❌" : "Open Guestbook 🖋" }
        </div>
        { this.state.isOpen ? 
          <div className="guestbook__options">
            <p className="guestbook__sketchpad-disclaimer">View this website on a desktop device to leave a drawing.</p>
            <button className="button guestbook__sketchpad-button" onClick={this.toggleSketchpadDisplay}>Leave a drawing</button>
            <button className="button" onClick={this.toggleCommentFormDisplay}>Leave a comment</button>
            
            <div className="guestbook__view-submissions-button button--subtle" onClick={this.toggleSubmissionsGalleryDisplay}>View guestbook <br></br>submissions</div>
          </div> 
          : null
        }
      </div>

      { this.state.sketchpadOpen ?
        <Sketchpad closeSketchpad={this.toggleSketchpadDisplay} artistSelected={this.props.artistSelected} />
        : null
      }

      { this.state.commentFormOpen ?
        <CommentForm closeCommentForm={this.toggleCommentFormDisplay} artistSelected={this.props.artistSelected} />
        : null
      }
      
      { this.state.submissionsGalleryOpen ?
        <SubmissionsGallery closeSubmissionsGallery={this.toggleSubmissionsGalleryDisplay} artistSelected={this.props.artistSelected} />
        : null
      }
      </>
    );
  }
}

export default Guestbook;