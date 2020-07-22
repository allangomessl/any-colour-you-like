import React from 'react';
import { Link, Breadcrumb, Item, Row, Col, Root, Nav } from 'universe-ui'
import { Link as RouterLink, HashRouter as Router } from 'react-router-dom'
import './Handlers'
// import styled from 'styled-components';
import './App.css'
import { Pages } from './pages';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
Link.initialize(RouterLink)


library.add(fas)

// const Box = styled.div`
//   height: 90px;
//   width: 90px;
//   background: red;
// `

// const Box = () => (<div></div>)


export function App() {

  return (
    <Router>
      <Root>
        <Nav gap='2px'>
          <Nav.Icon circle color='red' size='big' to='/' icon='house-user' />
          <Nav.Icon circle color='green' size='big' to='patients' icon='user-friends' />
        </Nav>
        <Col fill>
          <Row minH='3.4em' gap='0.2em' border='b4'>
            <Breadcrumb>
              <Link to=''>Test</Link>
            </Breadcrumb>
          </Row>
          <Row fill gap={1}>
            <Pages />
          </Row>
        </Col>
      </Root>
    </Router>
  )
}

