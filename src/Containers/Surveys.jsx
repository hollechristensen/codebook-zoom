import React, { Component } from 'react';
import { Form, Table, Container, Row, Col } from 'reactstrap';
import './containers.css';

class Surveys extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tlxComplete: false,
      tlxWeights: false,
      elabComplete: false,
    };
  }

  tlxScales() {
    return(
      <Container className="tlx-div"><Form>
        <Row>
          <Col>
            <h4>Instructions:</h4>
            <p>Evaluate your experience during the relevancy rating task you just completed by clicking at the point that matches your experience for each scale. Consider each scale indivdually. Please read the descriptions below carefully before rating.</p>
            <Table striped>
              <thead>
                <tr>
                  <th style={{width: 10+'%'}}>Title</th>
                  <th style={{width: 30+'%'}}>Description</th>
                  <th>Scale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mental Demand</td>
                  <td>How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc.)? Was the task easy or demanding, simple or complex, exacting or forgiving?</td>
                  <td><TLXscale id="mental-demand" /></td>
                </tr>
                <tr>
                  <td>Physical Demand</td>
                  <td>How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc.)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?</td>
                  <td><TLXscale id="physical-demand" /></td>
                </tr>
                <tr>
                  <td>Temporal Demand</td>
                  <td>How much time pressure did you feel due to the rate or pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?</td>
                  <td><TLXscale id="temporal-demand" /></td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>How successful do you think you were in accomplishing the goals of the task set by the experimenter? How satisfied were you with your performance in accomplishing these goals?</td>
                  <td><TLXscale id="performance" /></td>
                </tr>
                <tr>
                  <td>Effort</td>
                  <td>How hard did you have to work (mentally and physically) to accomplish your level of performance?</td>
                  <td><TLXscale id="effort" /></td>
                </tr>
                <tr>
                  <td>Frustration</td>
                  <td>How insecure, discouraged, irritated, stressed, and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?</td>
                  <td><TLXscale id="frustration" /></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Form></Container>
    );
  }

  runSurveys() {
    const { tlxComplete } = this.state;

    if (!tlxComplete) {
      return this.tlxScales();
    }
  }

  render() {
    return (
      <div className="surveys-body">
        {this.runSurveys()}
      </div>
    );
  }
}

function TLXscale(props) {
  return (
    <div className="tlx-scale">
      <p>{props.id==='performance' ? 'Good' : 'Low'}</p>
      <ul class='likert'>
        {}
      </ul>
      <p>{props.id==='performance' ? 'Bad' : 'High'}</p>
    </div>
  );
}

export default Surveys;
