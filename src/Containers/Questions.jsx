import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './containers.css';



class Questions extends Component {


  constructor(props) {
    super(props);

    let docs = [
      {'text':'I\'ve known some friends of mine to take a Gravol (motion sickness & relaxant pill also known as Dramamine or Dimenhydrinate) and they can fall asleep quite easily on the plane.  This doesn\'t work for me but I\'ve known it to work for others and felt it was worth mentioning.', 'value':''},
      {'text':'doc 2', 'value':''},
      {'text':'doc 3', 'value':''},
      {'text':'doc 4', 'value':''},
      {'text':'doc 5', 'value':''},
      {'text':'doc 6', 'value':''},
      {'text':'doc 7', 'value':''},
      {'text':'doc 8', 'value':''},
      {'text':'doc 9', 'value':''},
      {'text':'doc 10', 'value':''},
    ];

    this.state = {
      docArray: docs,
      instrRead: true,
      qualCheck: true,
      // instrRead: false,
      // qualCheck: false,
    };
  }

  displayInstructions() {
    return(
      <div>
        <p>
          Instruction Text Here
        </p>
        <Button onClick={() => this.setState({instrRead:true})}>Accept</Button>
      </div>
    );
  }

  qualityCheck() {
    return(
      <div>
        <p>Quality Check</p>
        <Button onClick={() => this.setState({qualCheck:true})}>Accept</Button>
      </div>
    );
  }

  runTask() {
    const { instrRead, qualCheck, docArray } = this.state;
    const { toolOn, onRating, qCount } = this.props;

    //Instructions
    if (!instrRead) {
      return this.displayInstructions();
    }

    //Codebook reading test
    if (toolOn === true && !qualCheck) {
      return this.qualityCheck();
    }

    //questions
    if (qCount < 10) {
      return(
        <div>
          <h4>What is the most comfortable way to sleep on a plane?</h4>
          <h6>Instructions: Rate the relevance of the answer below:</h6>
          <p> {docArray[qCount].text} </p>
          <ButtonGroup>
            <Button
              value="10"
              onClick={() => { onRating(10); }}
              onMouseDown={e => e.preventDefault()}
            >
              Relevant
            </Button>
            <Button
              value="5"
              onClick={() => { onRating(5); }}
              onMouseDown={e => e.preventDefault()}
            >
              Slightly Relevant
            </Button>
            <Button
              value="0"
              onClick={() => { onRating(0); }}
              onMouseDown={e => e.preventDefault()}
            >
              Not Relevant
            </Button>
          </ButtonGroup>
        </div>
      );
    } else {
      return (
        <div>
          <p>Questions Complete</p>
        </div>
      );
    }

  }

  render() {
    return (
      <div className="q-container" ref={this.mainRef}>
        { this.runTask() }
      </div>
    );
  }
}

export default Questions;
