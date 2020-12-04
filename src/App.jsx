import React, { Component } from 'react';
import Modal from 'react-modal';
import { Container, Row, Col, Button } from 'reactstrap';
import './App.css';
import Codebook from './Containers/Codebook';
import Questions from './Containers/Questions';
import Surveys from './Containers/Surveys';

Modal.setAppElement('#root');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      workerID: 0,
      toolOn: true, //True if in codebook on condition, False if in control
      consentSigned: true, //consentSigned: false,
      questionsComplete: true, //questionsComplete: false,    
      surveysComplete: false,
      ratingsValues: [],
      qCount: 0,
      tlxResults: {},
      elabResults:{},
    };
  }

  componentDidMount() {
    //this.runExperiment();
  }

  runExperiment() {
    //Show consent in popup

    //Calc condition

    //render condition and wait until all questions rated

    //open surveys in popup and wait until surveys completed

    //calc complete code and post data to sheets
    //data:
    //workerID
    //condition
    //ratingsArray
    //TLX results
    //SUS results

    //give code to user
  }

  onRating = value => {
    const { qCount, ratingsValues } = this.state;
    ratingsValues[qCount] = value;

    this.setState({
      ratingsValues: ratingsValues,
      qCount: qCount + 1,
    });

    if (ratingsValues.length === 10) {
      this.setState({questionsComplete: true}, () => {
        console.log(this.state.ratingsValues);
      });
    }
  }

  signConsent() {
    this.setState({
      consentSigned: true
    });
  }

  toggleModal() {
    console.log("surveys closed");
  }

  render() {
    const { consentSigned, questionsComplete, surveysComplete } = this.state;

    return (
      <div className="App">
        <Modal
          isOpen={!consentSigned}
          onRequestClose={this.signConsent}
          contentLabel="Consent Form"
          shouldCloseOnOverlayClick={false}
        >
          <div>
          <p>You are being asked to complete a study for research purposes. The study is testing how data collection is affected by the use of additional tooling to assist workers. Completing this study is voluntary and you can stop at any time by closing this window.</p>
          <p>You must be 18 years of age or older to participate in this study.</p>
          <p>There are minimal risks associated with your participation in this study. You will receive $2 for completing this study. In order to receive full compensation for completing the study, you must complete all parts of the study and pass all attention checks, then enter the provided random number code into the MTurk HIT window.</p>
          <p>Please note that because you are participating in this research via MTurk, your participation will be listed on your MTurk profile. However, MTurk will not have access to your responses on the survey. Further, while we will have access to your MTurk ID, we will only use this information to pay you and then your ID will be deleted from our records and will no longer be associated with your responses.</p>
          <p>If you have any questions about the study itself, how it is implemented, or study compensation, please contact J Christensen at jtchrist@ncsu.edu or B Watson at bwatson@ncsu.edu . Please reference study number 16906 when contacting anyone about this project.</p>
          <p>If you have questions about your rights as a participant or are concerned with your treatment throughout the research process, please contact the NC State University IRB Director at IRB-Director@ncsu.edu, 919-515-8754, or fill out this confidential form online.</p>
          <p>If you consent to complete this survey, please click the "Yes I consent" button to continue.</p>
          </div>
          <Button onClick={() => this.signConsent()}>Yes, I consent</Button>
        </Modal>
        {/* <header>
          Header Text
        </header> */}
        <Container className="App-body">
          <Row>
            { this.state.toolOn &&
              <Col className="cb-col">
                <Codebook />
              </Col>
            }
            <Col>
              <Questions
                onRating={this.onRating}
                toolOn={this.state.toolOn}
                qCount={this.state.qCount}
              />
            </Col>
          </Row>
        </Container>
        <Modal
          isOpen={questionsComplete && !surveysComplete}
          onRequestClose={this.toggleModal}
          contentLabel="Surveys"
          shouldCloseOnOverlayClick={false}
        >
          <Surveys />
        </Modal>
      </div>
    );
  }
}

export default App;
