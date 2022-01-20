import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/homepage";
import Shoppage from "./pages/ShopPage/Shoppage";
import SignUpSignInPage from "./pages/SignUpSignInPage/SignUpSignInPage";
import {
  auth,
  createUserProfileDocument,
} from "./firebaseUtility/firebaseUtility";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribedFromAuth = null;

  componentDidMount() {
    // Open subscription between Application and Firebase App
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const { setCurrentUser } = this.props;

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot.data());
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser({ currentUser: userAuth });
      }
      // console.log(user);
    });
  }

  componentWillUnmount() {
    // This will unsubscribe the user from the application
    this.unsubscribedFromAuth();
  }

  render() {
    console.log(this.props.currentUser, "Hiiiiii")
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/signin"} render={this.props.currentUser ? () =>  <Redirect to="/" /> : () =>  <SignUpSignInPage />} />
          <Route path={"/shop"} component={Shoppage} />
          <Route path={"/"} component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
