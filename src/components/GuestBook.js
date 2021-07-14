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

    //Replace these with a simple toggle function?
    this.openSketchpad = this.openSketchpad.bind(this);
    this.closeSketchpad = this.closeSketchpad.bind(this);
    this.openCommentForm = this.openCommentForm.bind(this);
    this.closeCommentForm = this.closeCommentForm.bind(this);
    this.openSubmissionsGallery = this.openSubmissionsGallery.bind(this);
    this.closeSubmissionsGallery = this.closeSubmissionsGallery.bind(this);
  }

  toggleGuestbookDisplay(){
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  openSketchpad(){
    this.setState({
      sketchpadOpen: true,
    })
    this.props.setNoScroll(true);
  }

  closeSketchpad(){
    this.setState({
      sketchpadOpen: false,
    })
    this.props.setNoScroll(false);
  }

  openSubmissionsGallery(){
    this.setState({
      submissionsGalleryOpen: true,
    })
    this.props.setNoScroll(true);
  }

  closeSubmissionsGallery(){
    this.setState({
      submissionsGalleryOpen: false,
    })
    this.props.setNoScroll(false);
  }

  openCommentForm(){
    this.setState({
      commentFormOpen: true,
    })
    this.props.setNoScroll(true);
  }

  closeCommentForm(){
    this.setState({
      commentFormOpen: false,
    })
    this.props.setNoScroll(false);
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
            <button className="button guestbook__sketchpad-button" onClick={this.openSketchpad}>Leave a drawing</button>
            <button className="button" onClick={this.openCommentForm}>Leave a comment</button>
            
            <div className="guestbook__view-submissions-button button--subtle" onClick={this.openSubmissionsGallery}>View guestbook <br></br>submissions</div>
          </div> 
          : null
        }
      </div>
      { this.state.sketchpadOpen ?
        <Sketchpad closeSketchpad={this.closeSketchpad} artistSelected={this.props.artistSelected} />
        : null
      }
      { this.state.commentFormOpen ?
        <CommentForm closeCommentForm={this.closeCommentForm} artistSelected={this.props.artistSelected} />
        : null
      }
      { this.state.submissionsGalleryOpen ?
        <SubmissionsGallery closeSubmissionsGallery={this.closeSubmissionsGallery} artistSelected={this.props.artistSelected} />
        : null
      }
      </>
    );
  }
}

export default Guestbook;