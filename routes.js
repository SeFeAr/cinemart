var controllerpelicula = require('./controllerpelicula.js');
var controllerAdministrador = require('./controlleradministrador.js');

 module.exports = function(app){


 	var clasepelicula = new controllerpelicula();
 	app.post('/api/nuevapelicula', clasepelicula.Guardar);
 	app.post('/api/modificarpelicula', clasepelicula.Modificar);
 	app.post('/api/eliminapelicula', clasepelicula.Eliminar);
 	app.post('/api/seleccionapelicula', clasepelicula.Seleccionartodos);
 	app.post('/api/seleccionarporfecha', clasepelicula.Seleccionarporfecha);
 	app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid);
 	app.post('/api/seleccionarpornombre', clasepelicula.Seleccionarpornombre);




   
     var claseadm = new controllerAdministrador();
    
    app.post('/api/nuevoadm',  claseadm.Guardar);
    
    app.post('/api/loginadm',  claseadm.Login);

 	app.get('*', function(req,res) {//localhost:8080
 	res.sendfile('./login.html'); //Carga única de la vista
 	});
 
 };