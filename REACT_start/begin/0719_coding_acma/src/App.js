import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import EmptyPage from './component/Emptypage';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Header />
        <Switch>
          <Route exact path = "/">
            <DayList />
          </Route>
          <Route path = "/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;