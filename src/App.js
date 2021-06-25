import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container flex mx-auto my-8 ">
        <CountriesList countriesList={countries}/>
        <Switch>
          <Route exact path="/:cca3"  
            render={ (routerProps) => 
            <CountryDetails {...routerProps} countriesList={countries} />
            } 
          />
        </Switch>
      </div>
        
    </div>
  );
}

export default App;
