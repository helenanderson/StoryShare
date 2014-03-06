
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var mongoose = require('mongoose'); //requiring mongoose for database

var main = require('./routes/main');
var story = require('./routes/story');
var help = require('./routes/help');
var about = require('./routes/about');
var newstory = require('./routes/add');
var archive = require('./routes/archive');


//setting up the database
var local_database_name = 'storyshare';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', about.view);
// Route for Google Analytics
app.get('/versionB', about.viewVersionB);

app.get('/main', main.view);
app.get('/mainB', main.viewVersionB);


app.get('/story/:id', story.view);//This displays the individual stories after clicking their thumbnail.
app.get('/story/:idB', story.viewVersionB);

app.get('/help', help.view);
app.get('/helpB', help.viewVersionB);

app.get('/archive', archive.view);
app.get('/archiveB', archive.viewVersionB);

app.get('/about', about.view);

app.get('/new', newstory.view); //Where does this get called?
app.get('/newB', newstory.viewVersionB);

app.post('/story', story.add); //This calls the 'add' function in 'story.js' for adding the story to the database
app.post('/story/update/:id', story.update);
// 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
