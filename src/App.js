import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/homepage';
import Shoppage from './pages/ShopPage/Shoppage';
import SignUpSignInPage from './pages/SignUpSignInPage/SignUpSignInPage';
import {auth, createUserProfileDocument} from './firebaseUtility/firebaseUtility'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    // Open subscription between Application and Firebase App
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data());
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }
      // console.log(user);

    })
  }

  componentWillUnmount() {
    // This will unsubscribe the user from the application
    this.unsubscribedFromAuth();

  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path={"/signin"} component={SignUpSignInPage} />
          <Route path={"/shop"} component={Shoppage} />
          <Route path={"/"} component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
