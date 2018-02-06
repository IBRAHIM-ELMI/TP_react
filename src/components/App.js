import React from 'react';
import Entete from './Entete';
import Menu from './Menu';
import Porte from './Porte';
import Bureau from './Bureau';
import Ventilateur from './Ventilateur';
import Sensor from '../modele_objet';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';



import './App.css';
//Composant principal
class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		value: 1
    	};
  	}

	render() {
    	return (
    	<Router>
    		<div>
    			
				<div className="App">
        <header className="App-header">
          <img src={require("../images/logo.svg")}  className="App-logo" alt="logo"  />
          <h1 className="App-title">Welcome to React</h1>
      </header>
		</div>
		
		<Link to="/"><img className="App-header" alt="home_icon" title="acueil" src={require("../images/acueil.jpg")} width="150" height="50" className="imgHOME" onClick={()=>{
    				var thetitle = document.getElementById("titreEntete");
    				thetitle.textContent = "TP React";
    				var bouton1 = document.getElementById("btn1");
    				var bouton2 = document.getElementById("btn2");
    				var bouton3 = document.getElementById("btn3");
    				bouton1.style.backgroundColor = "green";
    				bouton2.style.backgroundColor = "green";
    				bouton3.style.backgroundColor = "green";
    			}} /></Link>
				  
		
    
      
      			<div className="entete">
      				<Entete />
      			</div>
      			<div className="tryALIGN">
      				<div className="menu_gauche">
        				<Menu />
      				</div>
      				<div className="affichage_milieu">
        				<Route path="/porte_garage" component={Porte} />
        				<Route path="/ventilateur" component={Ventilateur} />
        				<Route path="/temp_bureau" component={Bureau} />
      				</div>
      			</div>
      		</div>
    	</Router>
    );
  }
}

export default App;