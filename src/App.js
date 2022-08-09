import './App.css';

import Nav from './Components/Nav/Nav';
import Softvan from './Pages/Softvan/Softvan';
import Accenture from './Pages/Accenture/Accenture';
import Simulmedia from './Pages/Simulmedia/simulmedia';
import Home from './Pages/Home/Home';
import Rutgers from './Pages/Rutgers/Rutgers';
import Footer from './Components/Footer/Footer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
	<BrowserRouter baseline="/">
		<Nav/>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/softvan" component={Softvan} />
			<Route path="/accenture" component={Accenture} />
			<Route path="/simulmedia" component={Simulmedia} />
			<Route path="/rutgers" component={Rutgers} />
		</Switch>
		<Footer/>
    </BrowserRouter>
  )
}

export default App;