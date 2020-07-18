import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import LandingPage from "./pages/LandingPage"
import Footer from './components/Footer'
import Nav from './components/Nav'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: "",
      quotes: []
    }
  }
  

  componentDidMount() {
    this.loadStates();

  }

  loadStates = () => {

    // API.gatherQuotes()
    //   .then(res => {
    //     this.setState({
    //       quotes: res.data
    //     })
    //   }).catch(err => {
    //     console.log("error getting quotes")
    //   })

  }





  render() {
    return (
      <Router>
        <div className="main">
          <Nav />

          <Switch>
            <Route exact path="/">
              <LandingPage
              />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
