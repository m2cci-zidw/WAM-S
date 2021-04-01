
import { Route, Switch } from 'react-router';
import Errors from './Pages/errors/Errors';
import LandPage from './Pages/landPage/LandPage';
import Profile from './Pages/profile/Profile';

import SignUp from './Pages/signUp/SignUp';

import './App.css';

import Footer from './Components/Footer';

import SignIn from './Pages/signIn/SignIn';
import NavBar from '../src/Components/navbar/NavBar'



function App() {
  return (
    <div className="App">
     
     
       <NavBar/>
     <Switch>
       <Route exact path="/" component={LandPage}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/signup" component={SignUp}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/*" component={Errors}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
