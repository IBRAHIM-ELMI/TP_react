import React from 'react';
import { Link } from 'react-router-dom';

//Composant Menu
class Menu extends React.Component {
  render(){
  	return(
  	 	<div>
    		<div>
    			<Link to="/porte_garage"><button id="btn1" className="btn_menu" onClick={()=>{
    				var thetitle = document.getElementById("titreEntete");
    				var bouton1 = document.getElementById("btn1");
    				var bouton2 = document.getElementById("btn2");
    				var bouton3 = document.getElementById("btn3");
    				thetitle.textContent = "Porte du Garage";
    				bouton1.style.backgroundColor = "green";
    				bouton2.style.backgroundColor = "gray";
    				bouton3.style.backgroundColor = "gray";
    			}}>Porte du Garage</button></Link>
    		</div>
    		<div>
    			<Link to="/temp_bureau"><button id="btn2" className="btn_menu" onClick={()=>{
    				var thetitle = document.getElementById("titreEntete");
    				var bouton1 = document.getElementById("btn1");
    				var bouton2 = document.getElementById("btn2");
    				var bouton3 = document.getElementById("btn3");
    				thetitle.textContent = "Temp bureau";
    				bouton1.style.backgroundColor = "gray";
    				bouton2.style.backgroundColor = "green";
    				bouton3.style.backgroundColor = "gray";
    			}}>Temp bureau</button></Link>
    		</div>
    		<div>
    			<Link to="/ventilateur"><button id="btn3" className="btn_menu" onClick={()=>{
    				var thetitle = document.getElementById("titreEntete");
    				var bouton1 = document.getElementById("btn1");
    				var bouton2 = document.getElementById("btn2");
    				var bouton3 = document.getElementById("btn3");
    				thetitle.textContent = "Ventilateur";
    				bouton1.style.backgroundColor = "gray";
    				bouton2.style.backgroundColor = "gray";
    				bouton3.style.backgroundColor = "green";
    			}}>Ventilateur</button></Link>
    		</div>
  	   </div>
  	);
  }
}

export default Menu;