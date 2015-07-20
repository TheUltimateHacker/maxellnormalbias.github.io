// add JSON for the sprite data, instead of clunky variables
// make bubbles work too

import React from 'react';
import Draggable from 'react-draggable';
import EventEmitter from 'events';

let globalJSON;

class Text{
  setPos(position) {
    this.position = position;
  }

  constructor(text, index, position) {
    this.index = index;
    this.text = text;
    this.position = position;
  }
}

class Image extends EventEmitter{
  /*render() {
    return (
      <Draggable>
        <div style={{...this.state.css, transform: `rotate(${this.state.angle}deg)`}} className="draggy sprite"/>
      </Draggable>
    );*/

  refreshCSS() {
    this.css = {
      ...this.css,
      transform: `rotate(${this.info.angle}deg) scaleX(${(this.info.flipped ? -1 : 1)})`
    };
    this.emit('load', this.css);
  }

  setPos(position) {
    this.position = position;
  }

  rotate(forwards) {
    this.info.angle += (forwards ? 45 : -45);
    this.refreshCSS();
  }

  flip() {
    this.info.flipped = !this.info.flipped;
    this.refreshCSS();
  }

  constructor(src, index, position, info) {
    super();
    this.src = src;
    this.index = index;
    this.position = position;
    this.info = (info != null ? info : {
      angle: 0,
      flipped: false
    });
    let elem = document.createElement('img');
    elem.addEventListener('load', () => {
      // this.setState({
      this.css = {
          width: elem.width,
          height: elem.height,
          backgroundImage: `url("${globalJSON.images[this.src]}")`
      };
      // });
      this.refreshCSS();
    });
    elem.setAttribute('src', globalJSON.images[this.src]);
    /*setInterval(() => {
      if (this.position.top !== parseInt(this.position.top, 10)) {
        console.info(this.position);
        alert();
      }
    }, 10);*/
  }
}

class Sprite extends React.Component {
  render() {
    return (
      <Draggable onDrag={::this.props.onDrag(this.index)} start={(this.position != null ? {x: this.position.left, y: this.position.top} : {x: 0, y: 0})} moveOnStartChange={false}>
        <div>
          <div style={this.state.css} className="sprite"/>
        </div>
      </Draggable>
    );
  }

  state = {
    css: {}
  }

  constructor(props) {
    super(props);
    this.index = props.img.index;
    this.position = props.img.position;
    props.img.on('load', val => {
      this.setState({css: val});
    });
  }
}

class Bubble extends React.Component {
  render() {
    return (
      <Draggable onDrag={::this.props.onDrag(this.props.text.index)} start={(this.props.text.position != null ? {x: this.props.text.position.left, y: this.props.text.position.top} : {x: 0, y: 0})} moveOnStartChange={false}>
        <div style={{maxWidth: `${globalJSON.background.width / 2}px`}} className="bubble">
          {this.props.text.text}
        </div>
      </Draggable>
    );
  }
}

class Scene extends React.Component {
  state = {
    bubbles: [], // <s>don't need this yet</s> yes i do
    sprites: [],
    jsonSet: false,
    sceneWidth: 1,
    sceneHeight: 1
  };

  setJSON(event) {
    let jsonText = JSON.parse(event.target.value);
    globalJSON = {
      background: jsonText.background,
      images: jsonText.images
    };
    this.setState({
      sceneWidth: (jsonText.sceneWidth != null ? jsonText.sceneWidth : 1),
      sceneHeight: (jsonText.sceneHeight != null ? jsonText.sceneHeight : 1),
      sprites: jsonText.sprites.map((img, index) => /*new Image(img.src, index, img.position)*/{
        return new Image(img.src, index, img.position, img.info);
      }),
      bubbles: jsonText.bubbles.map((bubble, index) => new Text(bubble.text, index, bubble.position)),
      jsonSet: true
    });
  }

  saveJSON() {
    prompt('Please copy (Ctrl-C or Command-C) the JSON code below that contains your scene.',
      JSON.stringify({
        background: globalJSON.background,
        images: globalJSON.images,
        sceneWidth: this.state.sceneWidth,
        sceneHeight: this.state.sceneHeight,
        bubbles: this.state.bubbles.map(bubble => {
          return {
            position: bubble.position,
            text: bubble.text
          };
        }),
        sprites: this.state.sprites.map(img => {
          return {
            position: img.position,
            src: img.src,
            info: img.info
          };
        })
      })
    );
  }

  addNewBubble() {
    this.setState({
      bubbles: this.state.bubbles.concat([
        new Text(this.bubbleText, this.state.bubbles.length)
      ])
    });
  }

  bubbleTextField(event) {
    this.bubbleText = event.target.value;
  }

  undoBubble() {
    this.setState({
        bubbles: this.state.bubbles.slice(0, this.state.bubbles.length - 1)
      }
    );
  }

  handleBubbleDrag(index) {
    return (event, ui) => {
      this.state.bubbles[index].setPos(ui.position);
    };
  }

  addNewImage(i) {
    return () => {
      this.setState(
        {
          sprites: this.state.sprites.concat([
            new Image(i, this.state.sprites.length)
          ])
        }
      );
    };
  }

  undoImage() {
    this.setState({
        sprites: this.state.sprites.slice(0, this.state.sprites.length - 1)
      }
    );
  }

  handleImageDrag(index) {
    return (event, ui) => {
      this.state.sprites[index].setPos(ui.position);
    };
  }

  rotateButton(forwards) {
    return () => {
      /*let ar = this.state.sprites.slice();
      ar[ar.length - 1].angle += (forwards ? 45 : -45);
      this.setState({sprites: ar});*/
      /*this.state.sprites[this.state.sprites.length - 1].setState({
        angle: this.state.sprites[this.state.sprites.length - 1].state.angle + (forwards ? 45 : -45)
      });*/
      // DEBUG SHIT //
      // window.testThing = this.state.sprites[this.state.sprites.length - 1];
      // END DEBUG SHIT //
      this.state.sprites[this.state.sprites.length - 1].rotate(forwards);
    };
  }

  flipButton() {
    this.state.sprites[this.state.sprites.length - 1].flip();
  }

  render() {
    if (this.state.jsonSet) {
      return (
        <div>
          <div className="box">
            <button onClick={::this.saveJSON}>Save</button>
          </div>
          <div className="box">
            <strong>SIZE:</strong>
            Horizontal:
            <button onClick={() => { this.setState({sceneWidth: this.state.sceneWidth + 1}); }}>+</button>
            <button onClick={() => { this.setState({sceneWidth: this.state.sceneWidth - 1}); }}>-</button>
            Vertical:
            <button onClick={() => { this.setState({sceneHeight: this.state.sceneHeight + 1}); }}>+</button>
            <button onClick={() => { this.setState({sceneHeight: this.state.sceneHeight - 1}); }}>-</button>
          </div>
          <div className="draggy" style={{
            backgroundImage: `url("${globalJSON.background.image}")`,
            width: (globalJSON.background.width * this.state.sceneWidth) + 'px',
            height: (globalJSON.background.height * this.state.sceneHeight) + 'px'
          }}>
          {this.state.sprites.map(img =>
            <Sprite img={img} onDrag={::this.handleImageDrag}/>
          )}
          {this.state.bubbles.map(bubble =>
            <Bubble text={bubble} onDrag={::this.handleBubbleDrag}/>
          )}
          </div>
          <div className="box">
            {globalJSON.images.map((image, i) =>
              <button onClick={::this.addNewImage(i)}>
                <img src={image}/>
              </button>
            )}
          </div>
          <div className="box">
            <strong>MOST RECENT SPRITE:</strong>
            <button onClick={::this.undoImage}>Undo</button>
            <button onClick={::this.rotateButton(false)}>Rotate -45 Degrees</button>
            <button onClick={::this.rotateButton(true)}>Rotate 45 Degrees</button>
            <button onClick={::this.flipButton}>Flip</button>
          </div>
          <div className="box">
            <strong>TEXT BOX:</strong>
            <input onChange={::this.bubbleTextField}/>
            <button onClick={::this.addNewBubble}>New Text Box</button>
            <button onClick={::this.undoBubble}>Undo</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Paste your JSON here.</p>
          <textarea onChange={::this.setJSON}></textarea>
        </div>
      );
    }
  }
}

let sceneElement = React.createElement(Scene);

window.addEventListener('load', () => {
  React.render(sceneElement, document.getElementById('view'));
});
