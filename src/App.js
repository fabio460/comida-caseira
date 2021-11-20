
import './App.css';
import Home from './home';
import Login from './Login'
import {Route,Switch,BrowserRouter,Link} from 'react-router-dom';

function App() {
  return (
    <div className="myApp">
    

       <BrowserRouter>
          <Link to='/'></Link>
          <Link to='/login'></Link>
          <Switch>
            <Route exact path='/'>
               <Home/>
            </Route>
            <Route  path='/login'>
               <Login/>
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
