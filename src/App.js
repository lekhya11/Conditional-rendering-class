import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  // using an if..else statement (conditional rendering)

  // renderAuthButton = () => {

  // const {isLoggedIn} = this.state

  // if (isLoggedIn === true) {

  // return <button>Logout</button>

  // }

  // return <button>Login</button>

  // }

  render() {
    const {isLoggedIn} = this.state
    /// {this.renderAuthButton()} /// return statement

    // let authButton ///  using Element variables

    //  if (isLoggedIn === true) {

    //    authButton = <button type="button">Logout</button>

    // } else {

    //   authButton = <button type="button">Login</button>

    // }

    /// {authButton} /// return statement

    // using Ternary operators//

    // {isLoggedIn ? (//

    //    <button type="button">Logout</button>

    // ) : (

    //  <button type="button">Login</button>

    // )}

    return (
      <div className="container">
        <Welcome greeting="Welcome" />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Logout</button>}
      </div>
    )
  }
}

export default App
