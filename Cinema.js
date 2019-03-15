var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Esquema de mongoose//
//String usa textos//
//Number usa números//
//Date usa fechas//
var pelicula = new Schema({
	NOMBRE: String,
	DURACIONMINUTOS: Number,
	GENERO: String,
	IDIOMAAUDIO: String,
	IDIOMASUB: String,
	SINIPSIS: String,
	CLASIFICASION: String,
	PRECIO: Number,
	HORAINICIO: Number,
	FECHA: Date,
	MINUTOINICIO: Number,
	ASIENTOS:{
		//Grupo A//
		A1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//Grupo B//
		B1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//Grupo C//
		C1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//Grupo D//
		D1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//Grupo E//
		E1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//GRUPO F//
		F1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		F2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		F3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		F4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//GRUPO G//
		G1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		G2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		G3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		G4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		//GRUPO H//
		H1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		H2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		H3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		H4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		}},
		IMAGEN: String,
		ESTADO: Number
});
module.exports = mongoose.model('Pelicula',pelicula);