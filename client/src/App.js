import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
// import {reducer,initialState} from './reducers/userReducer'
// import UserProfile from './components/screens/UserProfile'
// import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
// import Reset from './components/screens/Reset'
// import NewPassword from './components/screens/Newpassword'

function App(){
  return(
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
    </BrowserRouter>
  );
}
export default App;