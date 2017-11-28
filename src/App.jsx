import React, { Component } from 'react';
import Rot13 from './Rot13';
import Rot3 from './Rot3';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                               Crypto With React
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1} href="/">Rot13</NavItem>
                            <NavItem eventKey={2} href="/caesarcipher">Caesar Cipher</NavItem>
                        </Nav>
                    </Navbar>

                    <div className="App">
                        <Route exact path="/" component={Rot13} />
                        <Route path="/caesarcipher" component={Rot3} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;