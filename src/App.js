import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import NotFound from './Components/NotFound/NotFound';
import Coulture from './Components/Culture/Coulture';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/friends">
            <Friends/>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails/>
          </Route>
          <Route path="/post/:postId">
            <PostDetails/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/About/coulture">
            <Coulture/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
