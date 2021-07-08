import React from 'react';
import ARTIST_DETAILS from '../artistDetails';

class SubmissionsGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArtist: this.props.artistSelected,
      showComments: true,
      showDrawings: true,
      drawings: null,
      comments: null,
    }

    this.toggleComments = this.toggleComments.bind(this);
    this.toggleDrawings = this.toggleDrawings.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
  }

  componentDidMount(){
    fetch('http://135.125.205.105/mashow/get_comments.php?for=all')
      .then(response => response.json())
      .then(data => {
        this.setState({ comments: data })
      });

    fetch('http://135.125.205.105/mashow/get_doodles.php?for=all')
      .then(response => response.json())
      .then(data => {
        this.setState({ drawings: data })
      });
  }

  toggleComments(){
    this.setState(state => ({
      showComments: !state.showComments
    }))
  }

  toggleDrawings(){
    this.setState(state => ({
      showDrawings: !state.showDrawings
    }))
  }

  selectArtist(event){
    this.setState({
      selectedArtist: event.target.value
    })
  }

  render() {

    let feed = null;

    let selectedArtist = "Everyone";
    if (this.state.selectedArtist !== null){
      selectedArtist = this.state.selectedArtist;
    }

    if (this.state.drawings && this.state.comments) {

      feed = [];

      if (this.state.showComments){

        for (let i = 0; i < this.state.comments.length; i++){

          let recipient = "For: ";
          if (this.state.comments[i].for === "all"){
            recipient += "everyone";
          } else {
            recipient += this.state.comments[i].for;
          }

          if (selectedArtist === "Everyone" || selectedArtist.toLowerCase() === this.state.comments[i].for) {
            feed.push(
              <div className="submissions-gallery__comment" key={i}>
                <div className="submissions-gallery__comment-body">
                  {this.state.comments[i].body}
                </div>
                <div className="submissions-gallery__comment-for">
                  {recipient}
                </div>
                <div className="submissions-gallery__comment-details">
                  <div className="submissions-gallery__comment-author">{"From: " + this.state.comments[i].name.toLowerCase()}</div>
                  <div className="submissions-gallery__comment-time">{this.state.comments[i].timef}</div>
                </div>
              </div>
            );
          }
        }

      }

      if (this.state.showDrawings){

        for (let i = 0; i < this.state.drawings.length; i++){

          let recipient = "For: ";
          if (this.state.drawings[i].for === "all"){
            recipient += "everyone";
          } else {
            recipient += this.state.drawings[i].for;
          }

          if (selectedArtist === "Everyone" || selectedArtist.toLowerCase() === this.state.drawings[i].for) {
            feed.splice(i * 2, 0,
              <div className="submissions-gallery__drawing" key={this.state.comments.length + i}>
                <div className="submissions-gallery__drawing-body">
                  <img alt="" src={"http://135.125.205.105/mashow/doodles/" + this.state.drawings[i].data}/>
                </div>
                <div className="submissions-gallery__drawing-for">
                  {recipient}
                </div>
                <div className="submissions-gallery__drawing-details">
                  <div className="submissions-gallery__drawing-author">{"From: " + this.state.drawings[i].name.toLowerCase()}</div>
                  <div className="submissions-gallery__drawing-time">{this.state.drawings[i].timef}</div>
                </div>
              </div>
            );
          }
        }
      }
    }

    const artistOptions = ARTIST_DETAILS.map((artist) => 
      <option key={artist.name} value={artist.name}>
        {artist.name}
      </option>
    );
    
    return (
      <div className="submissions-gallery">
        <div className="submissions-gallery__feed">
          <h1 className="submissions-gallery__title">
            Guestbook Submissions
          </h1>
          <button className="submissions-gallery__exit-button button--exit" onClick={this.props.closeSubmissionsGallery}>Return to Show ✖</button>

          <div className="submissions-gallery__options">
            <div className="submissions-gallery__checkboxes">
              <div className="submissions-gallery__checkbox">
                <input className="submissions-gallery__checkbox-input" type="checkbox" onChange={this.toggleComments} defaultChecked={this.state.showComments}/>
                <label className="submissions-gallery__checkbox-label">Show Comments</label>
              </div>
              <div className="submissions-gallery__checkbox">
                <input className="submissions-gallery__checkbox-input" type="checkbox" onChange={this.toggleDrawings} defaultChecked={this.state.showDrawings}/>
                <label className="submissions-gallery__checkbox-label">Show Drawings</label>
              </div>
            </div>
            <div className="submissions-gallery__filter">
              <div className="submissions-gallery__filter-label">Filter Submissions:</div>
              <select value={selectedArtist} onChange={this.selectArtist} className="submissions-gallery__filter-select">
                <option key="none" value="Everyone">None</option>
                {artistOptions}
              </select>
            </div>
          </div>
       
          {feed}
        </div>
      </div>
    );
  }
}

export default SubmissionsGallery;