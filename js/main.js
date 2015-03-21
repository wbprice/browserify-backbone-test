var app = app || {};

var Backbone = require('Backbone'),
    _ = require('underscore'),
    $ = require('jquery');

app.Todo = require('./models/Todo');
app.TodoList = require('./collections/TodoList');
app.AppView = require('./views/AppView');

Backbone.$ = $;

// Create our global collection of **Todos**.
app.Todos = new app.TodoList();

var ENTER_KEY = 13;

$(function() {


  new app.AppView();

});
