import React from 'react'
//Following the below tutorial
//https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76

class Canvas extends React.Component {  

  constructor(props) {
    super(props);

    this.state = {
      mousePressedDown: false,
    }

    this.brushPressedDown = this.brushPressedDown.bind(this);
    this.brushLifted = this.brushLifted.bind(this);
    this.brushMoved = this.brushMoved.bind(this);
  }
  
  componentDidMount() {
    this.ctx = this.props.canvasRef.current.getContext("2d");
    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }  

  paint(event) {
    const boundingRectangle = event.currentTarget.getBoundingClientRect();
    this.ctx.beginPath();
    this.ctx.fillStyle = this.props.brushColor.hex;
    this.ctx.arc(event.clientX - boundingRectangle.x, event.clientY - boundingRectangle.y, this.props.brushSize, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  brushMoved(event){

    if (this.state.mousePressedDown) {
      this.paint(event);
    }

  }

  brushPressedDown(event){
    if (event.nativeEvent.which === 1){
      this.setState({
        mousePressedDown: true,
      })
      this.paint(event);
    }
  }

  brushLifted(){
    this.setState({
      mousePressedDown: false,
    })
  }

  render() {
    return(
      <canvas ref={this.props.canvasRef}
        id="sketchpad-canvas"
        className="sketchpad__canvas" 
        width="640" height="480" 
        onMouseDown={this.brushPressedDown} 
        onMouseUp={this.brushLifted} 
        onMouseOut={this.brushLifted}
        onMouseMove={this.brushMoved}
      />
    )
  }
}

export default Canvas