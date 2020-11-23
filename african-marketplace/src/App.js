

import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';

import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import ItemsList from './components/ItemsList';
import Login from './components/Login';
import {Product}  from './components/EditProduct';
import {Registration} from './components/Registration';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ItemsList/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
      
        <header className="App-header"> 
          {/* <ItemsList/> */}
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/protected/itemsList'>Products</Link>
            <Link to='/register'>Register</Link>
            <Switch>
              <PrivateRoute exact path='/protected/itemsList' component={ItemsList}/>
              <PrivateRoute exact path='/protected/itemsList/:id' component={Product}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Registration}/>
            </Switch>
          </div>

      </header> 
    </div>
  );
}

export default App;
