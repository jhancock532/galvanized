import React from 'react';
import Canvas from './Canvas';
import ARTIST_DETAILS from '../artistDetails';
import { ColorPicker, toColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

//https://github.com/Wondermarin/react-color-palette

class Sketchpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      brushSize: 20,
      color: toColor("#ffffff"),
    };

    this.toggleGuestbookDisplay = this.toggleGuestbookDisplay.bind(this);
    this.updateColorPicker = this.updateColorPicker.bind(this);
    this.handleBrushSizeChange = this.handleBrushSizeChange.bind(this);
    this.submitSketch = this.submitSketch.bind(this);
  }

  toggleGuestbookDisplay(){
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  updateColorPicker(newColor){
    this.setState({
      color: newColor
    })
  }

  handleBrushSizeChange(event) {
    this.setState({
      brushSize: event.target.value}
    );
  }

  submitSketch(){

    console.log("Starting!");
    const ctx = document.getElementById("sketchpad-canvas").getContext("2d")
    //document.getElementById("image_data").value = ctx.canvas.toDataURL();

    //TODO - Refactor select element to use react state.
    //document.getElementById("respond_to").value = document.getElementById("sketchpad-response-selector").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://135.125.205.105/mashow/save_doodle.php", true);
    xhr.setRequestHeader('Content-Type', '"application/x-www-form-urlencoded"');
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;

      console.log(this.status);
  
      if (this.status === 200) {
          var data = JSON.parse(this.responseText);
          console.log(data);
          // we get the returned data
      }
      // end of state change: it can be after some time (async)
    };

    xhr.send(JSON.stringify({
      image_data: ctx.canvas.toDataURL(),
      respond_to: document.getElementById("sketchpad-response-selector").value,
      name: "James XML Request Test"
    }));

    this.props.closeSketchpad();
  }

  render() {

    const artistOptions = ARTIST_DETAILS.map((artist) => 
      <option key={artist.name} >
        {artist.name}
      </option>
    );

    const brushPreviewStyles = {
      width: (this.state.brushSize * 2) + "px",
      height: (this.state.brushSize * 2) + "px",
      backgroundColor: this.state.color.hex
    }

    return (
      <div className="sketchpad">
        <Canvas className="sketchpad__canvas" 
          brushSize={this.state.brushSize} 
          brushColor={this.state.color}
          width="640" height="480" 
        />
        <div className="sketchpad__brush-slider">
          <p className="sketchpad__brush-slider__label">Brush Size : {this.state.brushSize} Pixel{ (this.state.brushSize < 2) ? "" : "s"}</p>
          <div className="sketchpad__brush-slider__preview" style={brushPreviewStyles}>
          </div>
          <input 
            id="typeinp" 
            type="range" 
            min="1" max="100" 
            value={this.state.brushSize} 
            onChange={this.handleBrushSizeChange}
            step="1"
          />
        </div>
        <ColorPicker 
          className="sketchpad__color-picker"
          width={350} 
          height={150} 
          color={this.state.color} 
          onChange={this.updateColorPicker} 
          hideHEX
        />
        <div className="sketchpad__feedback-target-dropdown">
          <p>This drawing is for...</p>
          <select id="sketchpad-response-selector">
            <option>Everyone</option>
            { artistOptions }
          </select>
        </div>
        <button className="sketchpad__cancel-button button--subtle" onClick={this.props.closeSketchpad}>Cancel</button>
        <button className="sketchpad__submit-button button" onClick={this.submitSketch}>Submit!</button>
      </div>
    );
  }
}

export default Sketchpad;

/*
      <form className="sketchpad__submission-form" name="sketchpad-form" action="http://135.125.205.105/mashow/save_doodle.php" method="POST">
        <input type="hidden" id="respond_to" name="respond_to" value="James"></input>
        <input type="hidden" id="image_data" name="image_data"></input>
        <input type="text" name="name" placeholder="Your name (Optional)" value="JAMES_TESTING"></input>
      </form>
*/