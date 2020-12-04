import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardHeader, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './containers.css';

class Codebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'rel',
    };
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({ activeTab: tab });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Card>
        <CardHeader>Codebook</CardHeader>
          <CardText>Prioritize answers that focus on getting to sleep. Answers that focus on planes should be considered most relevant, but answers that cover similar situations may also be considered.</CardText>
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === 'rel' })}
                onClick={() => { this.toggle('rel'); }}
              >
                Relevant
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === 'slightly' })}
                onClick={() => { this.toggle('slightly'); }}
              >
                Slightly Relevant
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === 'not' })}
                onClick={() => { this.toggle('not'); }}
              >
                Not Relevant
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="rel">
              <Row>
                <Col sm="12">
                  <p>Mark answers that fully answer the question as relevant.</p>
                  <h6>Example:</h6>
                  <p>"I was unable to nap on planes as well, now I can't stay awake"</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="slightly">
              <Row>
                <Col sm="12">
                  <p>Mark answers that partially answer the question as slightly relevant.</p>
                  <h6>Example:</h6>
                  <p>Some trains are cold, so a warm thin blanket will be much more comfortable"</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="not">
              <Row>
                <Col sm="12">
                  <p>Mark answers that do not answer the question as not relevant.</p>
                  <h6>Example:</h6>
                  <p>""</p>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
      </Card>
    );
  }
}

export default Codebook;

// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
//
// const Example = (props) => {
//   const [activeTab, setActiveTab] = useState('1');
//
//   const toggle = tab => {
//     if(activeTab !== tab) setActiveTab(tab);
//   }
//
//   return (
//     <div>
//       <Nav tabs>
//         <NavItem>
//           <NavLink
//             className={classnames({ active: activeTab === '1' })}
//             onClick={() => { toggle('1'); }}
//           >
//             Tab1
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             className={classnames({ active: activeTab === '2' })}
//             onClick={() => { toggle('2'); }}
//           >
//             More Tabs
//           </NavLink>
//         </NavItem>
//       </Nav>
//       <TabContent activeTab={activeTab}>
//         <TabPane tabId="1">
//           <Row>
//             <Col sm="12">
//               <h4>Tab 1 Contents</h4>
//             </Col>
//           </Row>
//         </TabPane>
//         <TabPane tabId="2">
//           <Row>
//             <Col sm="6">
//               <Card body>
//                 <CardTitle>Special Title Treatment</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Go somewhere</Button>
//               </Card>
//             </Col>
//             <Col sm="6">
//               <Card body>
//                 <CardTitle>Special Title Treatment</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Go somewhere</Button>
//               </Card>
//             </Col>
//           </Row>
//         </TabPane>
//       </TabContent>
//     </div>
//   );
// }
//
// export default Example;
