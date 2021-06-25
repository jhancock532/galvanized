import React from 'react';
import Sketchpad from './Sketchpad';
import CommentForm from './CommentForm';

class Guestbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      sketchpadOpen: false,
      commentFormOpen: false,
    };

    this.toggleGuestbookDisplay = this.toggleGuestbookDisplay.bind(this);
    this.openSketchpad = this.openSketchpad.bind(this);
    this.closeSketchpad = this.closeSketchpad.bind(this);
    this.openCommentForm = this.openCommentForm.bind(this);
    this.closeCommentForm = this.closeCommentForm.bind(this);
    this.getSketches = this.getSketches.bind(this);
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
  }

  closeSketchpad(){
    this.setState({
      sketchpadOpen: false,
    })
  }

  openCommentForm(){
    this.setState({
      commentFormOpen: true,
    })
  }

  closeCommentForm(){
    this.setState({
      commentFormOpen: false,
    })
  }

  getSketches(){
    fetch('http://135.125.205.105/mashow/get_doodles.php?for=everyone')
      .then(response => response.json())
      .then(data => console.log(data));
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
            <button className="button guestbook__sketchpad-button" onClick={this.openSketchpad}>Leave a drawing</button>
            <button className="button" onClick={this.openCommentForm}>Leave a comment</button>
            <div className="guestbook__view-submissions-button button--subtle" onClick={this.getSketches}>View guestbook <br></br>submissions</div>
          </div> 
          : <></>
        }
      </div>
      { this.state.sketchpadOpen ?
        <Sketchpad closeSketchpad={this.closeSketchpad} artistSelected={this.props.artistSelected} />
        : <></>
      }
      { this.state.commentFormOpen ?
        <CommentForm closeCommentForm={this.closeCommentForm} artistSelected={this.props.artistSelected} />
        : <></>
      }
      </>
    );
  }
}

export default Guestbook;