

import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';

import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import ItemsList from './components/ItemsList';
// import Login from './components/Login';
import Product  from './components/EditProduct';
// import Registration from './components/Registration';
// import SignUp from './components/forms/SignUp';


function App() {
  return (
    // <div className="App">
    <div>
      {/* <Switch>
        <Route exact path="/">
          <ItemsList/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch> */}
      
        {/* <header className="App-header">  */}
          {/* <ItemsList/> */}
          {/* <div> */}
            <Link to='/login'>Login</Link>
            <Link to='/protected/itemsList'>Products</Link>
            {/* <Link to='/register'>Register</Link> */}
            <Link to='/sign-up'>Sign Up</Link>
            <br></br>
            <br></br>
            <br></br>

            <Switch>
              <PrivateRoute exact path='/protected/itemsList' component={ItemsList}/>
              <PrivateRoute exact path='/protected/itemsList/:id' component={Product}/>
              <Route path='/login' component={LogIn}/>
              {/* <Route path='/register' component={Registration}/> */}
              <Route path='/sign-up'component={SignUp}/>
            </Switch>
          {/* </div> */}

      {/* </header>  */}
      
      
    </div>
    
  );
}

export default App;
