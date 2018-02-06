import React from 'react';


//Composant Ventilateur
class Bureau extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: null
		};
	}
	render(){
		return(
			<div>
				<div className="valueDIV">
					<p>Valeur actuelle :</p>
					<span>28°</span>
				</div>
				<div className="historyDIV">
					<p>Historique :</p>
					<table>
						<tr>
							<td>18°</td>
						</tr>
						<tr>
							<td>12°</td>
						</tr>
						<tr>
							<td>7°</td>
						</tr>
						<tr>
							<td>5°</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default Bureau;