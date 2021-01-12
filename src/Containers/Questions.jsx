import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './containers.css';
import DocsFile from '../docs.json';

class Questions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      docArray: DocsFile.docs,
      numDocs: DocsFile.numDocs,
      instrRead: true, // instrRead: false,
      qualCheck: true, // qualCheck: false,
      ratingsValues: {},
      qCount: 0
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

  onRating = value => {
    const { qCount, numDocs, ratingsValues } = this.state;
    const { onRatingComplete } = this.props;

    ratingsValues['doc'+(qCount+1)] = value;

    this.setState({
      ratingsValues: ratingsValues,
      qCount: qCount + 1,
    });

    if (this.state.qCount + 1 === numDocs) {
      onRatingComplete(ratingsValues);
    }
  }

  runTask() {
    const { instrRead, qualCheck, docArray, qCount } = this.state;
    const { toolOn } = this.props;

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
              onClick={() => { this.onRating(10); }}
              onMouseDown={e => e.preventDefault()}
            >
              Relevant
            </Button>
            <Button
              value="5"
              onClick={() => { this.onRating(5); }}
              onMouseDown={e => e.preventDefault()}
            >
              Slightly Relevant
            </Button>
            <Button
              value="0"
              onClick={() => { this.onRating(0); }}
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
