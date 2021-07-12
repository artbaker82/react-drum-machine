import React, { Component } from "react";
import "./style/style.css";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPad: "Drum name displayed here",
      buttonPressed: {
        Q: false,
        W: false,
        E: false,
        A: false,
        S: false,
        D: false,
        Z: false,
        X: false,
        C: false,
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleClick(padId, padName) {
    let pressedProperty = { ...this.state.buttonPressed };
    //console.log(padId);

    //console.log(pressedProperty[padId]);
    pressedProperty[padId] = true;

    this.setState({ drumPad: padName, buttonPressed: { ...pressedProperty } });
    pressedProperty[padId] = false;
    setTimeout(
      () => this.setState({ buttonPressed: { ...pressedProperty } }),
      50
    );

    let sound = document.getElementById(padId);
    sound.currentTime = 0;
    sound.play();
  }

  handleKeyPress(event) {
    switch (event.keyCode) {
      case 81:
        this.handleClick("Q", "kick");
        break;
      case 87:
        this.handleClick("W", "snare");
        break;
      case 69:
        this.handleClick("E", "high-hat");
        break;
      case 65:
        this.handleClick("A", "tom-1");
        break;
      case 83:
        this.handleClick("S", "tom-2");
        break;
      case 68:
        this.handleClick("D", "high-hat-2");
        break;
    }
  }

  render() {
    const myStyle = {
      backgroundColor: "#4C8573",
      fontFamily: "Orbitron, sans-serif",
    };

    const displayStyle = {
      border: "1px solid black",
      borderRadius: "3px",
      color: "black",
    };

    let isPressed = this.state.buttonPressed;
    function getClass(currentButton) {
      let classes = "button";
      classes += isPressed[currentButton] === true ? "-pressed" : "";
      return classes;
    }

    return (
      <Container>
        <div style={myStyle} id="drum-machine" className="align-items-center">
          <Row className="justify-content-md-center">
            <Col md="4" className="m-4">
              <div
                id="display"
                className="text-center p-2"
                style={displayStyle}
              >
                {this.state.drumPad}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div
                onClick={() => this.handleClick("Q", "kick")}
                id="kick"
                className="drum-pad"
              >
                <div className={getClass("Q")}>Q</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/kick-acoustic01.wav?raw=true"
                  className="clip"
                  id="Q"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("W", "snare")}
                id="snare"
                className="drum-pad"
              >
                <div className={getClass("W")}>W</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/snare-acoustic01.wav?raw=true"
                  className="clip"
                  id="W"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("E", "high-hat")}
                id="high-hat"
                className="drum-pad"
              >
                <div className={getClass("E")}>E</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/hihat-acoustic01.wav?raw=true"
                  className="clip"
                  id="E"
                ></audio>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div
                onClick={() => this.handleClick("A", "tom-1")}
                id="tom-1"
                className="drum-pad"
              >
                <div className={getClass("A")}>A</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/tom-acoustic01.wav?raw=true"
                  className="clip"
                  id="A"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("S", "tom-2")}
                id="tom-2"
                className="drum-pad"
              >
                <div className={getClass("S")}>S</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/tom-acoustic02.wav?raw=true"
                  className="clip"
                  id="S"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("D", "high-hat-2")}
                id="high-hat-2"
                className="drum-pad"
              >
                <div className={getClass("D")}>D</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/openhat-acoustic01.wav?raw=true"
                  className="clip"
                  id="D"
                ></audio>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div
                onClick={() => this.handleClick("Z", "chord-1")}
                id="chord-1"
                className="drum-pad"
              >
                <div className={getClass("Z")}>Z</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Keys%2301.wav?raw=true"
                  className="clip"
                  id="Z"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("X", "chord-2")}
                id="chord-2"
                className="drum-pad"
              >
                <div className={getClass("X")}>X</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/openhat-acoustic01.wav?raw=true"
                  className="clip"
                  id="X"
                ></audio>
              </div>
            </Col>
            <Col md="auto">
              <div
                onClick={() => this.handleClick("C", "chord-3")}
                id="chord-3"
                className="drum-pad"
              >
                <div className={getClass("C")}>C</div>
                <audio
                  src="https://github.com/artbaker82/drum-machine/blob/main/Samples/openhat-acoustic01.wav?raw=true"
                  className="clip"
                  id="C"
                ></audio>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
