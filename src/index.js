const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
	.then( db => console.log('BD MEVN is connected'))
	.catch( err => console.error(err));

//Settings 
app.set('port',  process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks'));
//Static File
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), ()  => {
		console.log('server on port', app.get('port'));
});