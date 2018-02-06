import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sensor from './modele_objet';
import App from './components/App';
import mqtt from 'mqtt';


/*-----------------------------------------------------------Porte d'entrée de notre application react------------------------------------------------------------- */

/***********************************Connexion à un Serveur MQTT*************************************/
//Create a WebSocket connection to the server
const ws = new WebSocket("ws://127.0.0.1:1234");
// We get notified once connected to the server
ws.onopen = (event) => {
  console.log("We are connected.");
};
//Connexion à un serveur MQTT
var monclient  = mqtt.connect('mqtt://127.0.0.1:1234');
//Souscription à tous les messages de ce serveur quand on est connecté au serveur
monclient.on('connect', function(){
  monclient.subscribe('#');  
});
//Tableau dans lequel on va répertorier la liste des capteurs
var listeSensors = [];
//Arrivée des messages sur un topic donné
monclient.on('message', function(topic,message){
  //identifiant du capteur récupéré à partir du topic
  var val = topic.search('/');//indice du séparateur / dans le topic
  var idCapteur = topic.substring(val+1);//on extrait l'id du capteur
  //valeur du capteur et type de données
  var json = JSON.parse(message);
  var valeursCapteur = json.value;
  var typeDonnees = json.type;
  //Compteur et Positionnement dans la liste des capteurs que l'on va créer à partir des données reçues
  var i; var pos = -1;
  //Recherche
  for(i = 0; i < listeSensors.length; i++)  {
    if(listeSensors[i].id === idCapteur) {
      pos = i;
    }
  }
  //Ajout d'un capteur
  if(pos === -1){//Là il s'agit d'un nouveau capteur
      var nouveaucapteur;
      nouveaucapteur = new Sensor(idCapteur,valeursCapteur,typeDonnees);
      listeSensors.push(nouveaucapteur);
      /*var elemMessages = document.getElementById('messages');
      var line = document.createElement('tr');
      //Ajout d'un id à la ligne
      line.id = idCapteur;
      //Creation du contenu de la ligne
      line.innerHTML = nouveaucapteur.toString();
      elemMessages.appendChild(line);  */
  }else {//Là il s'agit d'un ancien capteur que l'on va mettre à jour
    //Mise à jour de la valeur du capteur
    listeSensors[pos].values = valeursCapteur;
    //Mise à jour de la page
    document.getElementById(idCapteur).innerHTML = listeSensors[pos].toString(); 
    
  }
});
/*-------------------------------------------------------------------------------------------------*/


//On accroche notre composant App à l'endroit désiré dans le DOM. (Ici en l'occurence l'élément avec id="root")
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
