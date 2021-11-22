
import './App.css';
import Home from './home';
import Login from './Login'
import {Route,Switch,BrowserRouter,Link} from 'react-router-dom';
import AdicionarCarrinho from './telaDeAdicionar';

function App() {
  return (
    <div className="myApp">
    

       <BrowserRouter>
          <Link to='/'></Link>
          <Link to='/login'></Link>
          <Link to='/adicionarCarrinho'></Link>
          <Switch>
            <Route exact path='/'>
               <Home/>
            </Route>
            <Route  path='/login'>
               <Login/>
            </Route>
            <Route path='/adicionarCarrinho'>
               <AdicionarCarrinho/>
            </Route>
          </Switch>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
