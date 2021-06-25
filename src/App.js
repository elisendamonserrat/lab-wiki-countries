import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route exact path="/:cca3" component={CountryDetails} />
        </Switch>

    </div>
  );
}

export default App;
