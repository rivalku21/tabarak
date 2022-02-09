import './App.css';
import { Route, BrowserRouter, Switch} from "react-router-dom"; 
import routes from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
            return (
              <Route
                path={route.path} 
                exact component={route.component} 
                key={route.path}
              />
            )
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
